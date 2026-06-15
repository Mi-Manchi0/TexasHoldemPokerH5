# ytt Swagger 接口生成与 useRequest 封装迁移文档

本文档基于当前项目的 `@f_anaan/ytt` Swagger 接口生成脚本、`src/ytt/request` 请求适配层、`src/hooks/useRequest.ts` 组合式请求封装整理，目标是让其他 Vue 3 + TypeScript + Vite 项目可以按清单迁移。

## 1. 整体链路

```text
Swagger/OpenAPI 地址
  -> ytt.config.ts
  -> pnpm ytt
  -> src/services/<module>/<file>.ts 自动生成接口函数和类型
  -> src/ytt/request/<module>.ts 绑定业务 HTTP 实例
  -> src/ytt/request/base.ts 转换 ytt payload 为 axios 请求
  -> src/utils/http 请求实例处理 token、前缀、响应转换、错误提示
  -> 页面通过 useRequest/usePaginationPro 调用接口
```

生成后的接口文件不要手动修改，例如当前项目的 `src/services/basis/basis.ts` 会被 `pnpm ytt` 重建。

## 2. 依赖与基础配置

### 2.1 安装依赖

```bash
pnpm add @f_anaan/ytt axios lodash-es qs vue-request ant-design-vue json-schema
pnpm add -D @types/json-schema @types/qs ts-node
```

如果目标项目不用 Ant Design Vue，需要替换 `src/hooks/useRequest.ts` 里的 `message`、分页类型，以及 `src/utils/http/index.ts` 里的 `message`、`Modal`。

### 2.2 package.json 脚本

```json
{
  "scripts": {
    "ytt": "ytt -c ytt.config.ts"
  }
}
```

### 2.3 路径别名

ytt 生成文件中会导入 `@bfr/ytt`，当前项目将它映射到真实包 `@f_anaan/ytt`。

`tsconfig.app.json`：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@bfr/ytt": ["./node_modules/@f_anaan/ytt"]
    }
  }
}
```

`vite.config.ts`：

```ts
resolve: {
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "@bfr/ytt": "@f_anaan/ytt",
  },
},
```

## 3. ytt.config.ts 生成配置

当前项目核心配置位于 `ytt.config.ts`。

### 3.1 配置入口

```ts
const configs: Config[] = [
  createConfig("basis", "basis", [
    ...genList([
      "api.auth.v1.AuthService",
      "api.dish.v1.DishService",
      "api.order.v1.OrderService",
    ]),
  ]),
];
```

字段含义：

| 字段 | 作用 |
| --- | --- |
| `name` / `entryName` | 业务模块名，会影响输出目录，例如 `src/services/basis` |
| `fileName` | 生成文件名，例如 `basis.ts` |
| `urls` | Swagger/OpenAPI JSON 地址列表 |
| `requestFunctionFilePath` | ytt 生成接口调用时引用的请求函数文件 |
| `outputFilePath` | 生成接口文件输出路径 |

当前 `genList` 规则：

```ts
const genList = (
  itemList: string[],
  extraUrl = "http://10.126.126.1:8000",
) => {
  return itemList.map(i => extraUrl + "/q/service/" + i);
};
```

迁移时把 `extraUrl` 改成目标项目后端 Swagger 服务地址，把服务名列表替换成目标项目的服务名。

### 3.2 生成文件输出

当前项目把多个 Swagger 服务合并写入同一个文件：

```ts
const file = `./src/services/${entryName}/${fileName}.ts`;
```

脚本通过 `fileNameMap` 保证同一个输出文件在一次生成过程中只删除一次，然后追加写入。迁移时如果希望按服务拆文件，可改写 `outputFilePath(interfaceInfo)`。

### 3.3 请求函数命名规则

`getRequestFunctionName` 会把接口方法和路径转成函数名：

```text
GET  /api/auth/v1/devices      -> getApiAuthV1Devices
POST /api/auth/v1/login        -> postApiAuthV1Login
POST /api/auth/v1/devices_delete -> deleteApiAuthV1Devices
POST /api/auth/v1/users_put      -> putApiAuthV1Users
GET  /api/users/{id}           -> getApiUsersById
```

补充规则：

- 路径片段会转为大驼峰后拼接。
- `{id}` 这类路径参数会转成 `ById`，多个路径参数会继续转成 `AndXxx`。
- 路径最后一段带 `_put`、`_delete`、`_get`、`_update`、`_list` 时，会用后缀映射请求前缀，其中 `_update` 映射为 `put`。
- 当前脚本对真实 `PUT`、`DELETE` 方法会打印警告；如果目标项目原生支持这些方法，可以移除该警告。

### 3.4 createSubConfig 关键项

```ts
const createSubConfig = (...) => ({
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  serverUrl,
  typesOnly: false,
  target: "typescript",
  reactHooks: { enabled: false },
  serverType: "swagger",
  comment: { enabled: true },
  prodEnvName: "production",
  requestFunctionFilePath: path.resolve(
    __dirname,
    `./src/ytt/${requestFunctionFilePath}`,
  ),
  projects: [
    {
      token: "",
      categories: [{ id: 0, getRequestFunctionName }],
    },
  ],
});
```

迁移时通常只需要改：

- `serverUrl`：Swagger JSON 地址。
- `outputFilePath`：接口文件生成位置。
- `requestFunctionFilePath`：指向目标模块的 ytt 请求适配文件。
- `queryStringArrayFormat`：后端数组查询参数格式，当前为 `a=1&a=2`。

## 4. ytt 请求适配层

相关文件：

```text
src/ytt/request/base.ts
src/ytt/request/basis.ts
```

### 4.1 base.ts 的职责

ytt 生成的接口函数内部会调用：

```ts
request<ResponseType>(prepare(requestConfig, requestData), ...args)
```

`createRequestClient` 将 ytt 的 `RequestFunctionParams` 转成业务 HTTP 请求：

- `payload.path` -> `url`
- `payload.method` -> `method`
- JSON 请求自动补 `Content-Type: application/json; charset=UTF-8`
- form 请求自动补 `application/x-www-form-urlencoded; charset=UTF-8`
- 文件请求通过 `payload.getFormData()` 生成 `FormData`
- 其他参数透传给底层 HTTP 实例

核心调用：

```ts
return realClient.request(fetchOptions, options) as Result<TR>;
```

因此底层 `client` 只需要实现：

```ts
client.request(config, options): Promise<T>
```

### 4.2 basis.ts 的职责

```ts
import { basisHttp } from "@/utils/http";
import { createRequestClient } from "./base";

export default createRequestClient(basisHttp);
```

一个业务模块对应一个请求实例。迁移时如果有多个后端前缀，可以新增：

```text
src/ytt/request/admin.ts
src/ytt/request/open.ts
src/ytt/request/file.ts
```

并在 `ytt.config.ts` 的 `createConfig(..., requestFile)` 指向对应文件。

### 4.3 直接调用生成接口

```ts
import { postApiAuthV1Login } from "@/services/basis/basis";

const data = await postApiAuthV1Login({
  username: "admin",
  password: "123456",
});
```

透传请求选项：

```ts
await postApiAuthV1Login(
  { username: "admin", password: "123456" },
  {
    errorMessageMode: "none",
    withToken: false,
    headers: {
      "x-device-name": "Web-Admin",
    },
  },
);
```

注意：当前 `base.ts` 声明了 `server?: "prod" | "dev" | "mock"`，但实际没有按该字段切换请求域名。当前项目的域名和前缀由 `basisHttp`、Vite proxy 决定。如果目标项目需要 mock/dev/prod 动态切换，可以在 `createRequestClient` 中根据 `payload.mockUrl/devUrl/prodUrl` 或 `options.server` 扩展。

## 5. HTTP 封装迁移点

相关文件：

```text
src/utils/http/index.ts
src/utils/http/request/*
```

### 5.1 请求路径拼接

当前项目创建 `basisHttp`：

```ts
export const basisHttp = createAxios({
  timeout: 1000 * 60 * 2,
  transform: {
    requestInterceptors,
  },
  requestOptions: {
    urlPrefix: "/basic_api",
  },
});
```

请求最终会拼成：

```text
window.location.origin + /basic_api + payload.path
```

开发环境通过 Vite proxy 转发：

```env
VITE_PROXY = [["/basic_api", "https://api.example.com"]]
```

`build/vite/proxy.ts` 会把 `/basic_api` 前缀移除后转发给目标服务。

### 5.2 requestInterceptors

`src/utils/http/index.ts` 中的 `requestInterceptors` 是当前项目业务逻辑，迁移时通常要重写：

- 从本地缓存读取 token，写入 `Authorization: Bearer <token>`。
- 自动补充租户相关请求头，例如 `x-merchant-id`、`x-store-id`。
- 自动补 `x-device-name`。
- 个别接口按业务规则移除或改写参数。

最小迁移版本可以只保留 token：

```ts
const requestInterceptors = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem("TOKEN_KEY");
  if (token && (config as any).requestOptions?.withToken !== false) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
```

### 5.3 响应转换

响应转换在 `src/utils/http/request/index.ts` 的 `transformResponseHook` 中。

当前项目兼容以下成功条件：

- `status` 为 `success`、`ok`、`200`、`0`
- `code` 为 `0`、`200` 或以 `0` 开头
- `success === true`
- `message` 包含“成功”且存在 `data`
- 没有业务状态字段时，直接认为成功

成功后默认返回响应体里的 `data` 字段：

```ts
const { data: httpData } = data;
return httpData;
```

迁移时必须按目标后端统一响应结构调整这里。例如后端返回：

```ts
{
  code: 200,
  msg: "ok",
  result: {...}
}
```

则需要把 `httpData` 改为 `data.result`，并把 `messageKey` 默认值改为 `msg`。

### 5.4 错误提示与登录过期

`setConfig` 用于接入 UI 提示和登录失效处理：

```ts
setConfig({
  apiUrl: window.location.origin,
  showMessageError(message) {},
  showModalError({ title, content }) {},
  onTokenExpired(code, detail) {},
});
```

当前项目登录过期业务码是 `10001000`。迁移时需要替换成目标项目的业务码，或移除该逻辑。

## 6. useRequest 封装使用

文件：`src/hooks/useRequest.ts`

`useRequest` 适合普通按钮、表单提交、详情查询等非分页请求。

### 6.1 返回值

```ts
const req = useRequest(apiCall);

req.data;     // Ref<T | null>
req.loading;  // Ref<boolean>
req.error;    // Ref<unknown>
req.params;   // Ref<P | null>
req.run;      // (...args: P) => Promise<T>
req.refresh;  // 使用上次 params 再请求一次
```

### 6.2 基础示例

```ts
import { useRequest } from "@/hooks/useRequest";
import { getApiWalletV1Ranking } from "@/services/basis/basis";

const getRankingReq = useRequest(getApiWalletV1Ranking);

const queryRankingList = async () => {
  const data = await getRankingReq.run({
    period: "yearly",
    merchantId: "1",
    limit: 20,
  });
};
```

模板中使用：

```vue
<a-button :loading="getRankingReq.loading.value" @click="queryRankingList">
  刷新
</a-button>
```

在 `<script setup>` 模板里 ref 会自动解包，因此当前项目常写成：

```ts
const loading = getRankingReq.loading;
```

```vue
<a-table :loading="loading" />
```

### 6.3 带类型的表单提交

```ts
import {
  postApiAuthV1Login,
  type PostApiAuthV1LoginRequest,
  type PostApiAuthV1LoginResponse,
} from "@/services/basis/basis";

const loginRequest = useRequest<
  PostApiAuthV1LoginResponse,
  [PostApiAuthV1LoginRequest]
>(postApiAuthV1Login, {
  successMsg: "登录成功",
  errorMsg: "登录失败",
  onSuccess(data) {
    // 保存 token、跳转等
  },
});

await loginRequest.run({
  username: form.username,
  password: form.password,
});
```

### 6.4 immediate 与 refresh

```ts
const detailReq = useRequest(getApiAuthV1Userinfo, {
  immediate: true,
  defaultParams: [{}],
  initialData: {},
});

await detailReq.refresh();
```

注意：

- `immediate: true` 必须配合 `defaultParams`，否则不会自动请求。
- `refresh()` 依赖上一次 `run()` 或 `defaultParams`，没有参数时会抛出 `No request params available`。
- `run()` 捕获错误后会继续 `throw`，调用方需要在表单提交等场景自行 `try/catch`。

## 7. usePaginationPro 分页封装使用

`usePaginationPro` 基于 `vue-request` 的 `usePagination`，额外封装了查询条件监听、Ant Design Vue 分页配置和刷新方法。

### 7.1 全局配置

文件：`src/logics/setVueRequest.ts`

```ts
import { setGlobalOptions } from "vue-request";

const vueRequestOptions = {
  loadingDelay: 100,
  pagination: {
    currentKey: "pageRequest.page",
    pageSizeKey: "pageRequest.pageSize",
    totalKey: "pageReply.total",
    totalPageKey: "total",
  },
};

export const setupVueRequest = () => {
  setGlobalOptions(vueRequestOptions);
};
```

在入口调用：

```ts
import { setupVueRequest } from "./logics/setVueRequest";

setupVueRequest();
```

迁移时把 `currentKey`、`pageSizeKey`、`totalKey` 改成目标后端分页字段。

### 7.2 列表页示例

```ts
import { reactive, computed } from "vue";
import { usePaginationPro } from "@/hooks/useRequest";
import { getApiRefundV1Requests } from "@/services/basis/basis";

const conditions = reactive({
  "pageRequest.page": 1,
  "pageRequest.pageSize": 10,
  merchantId: "",
  storeId: "",
  status: "",
});

const useList = reactive(
  usePaginationPro(getApiRefundV1Requests, {
    dep: conditions,
    debounceInterval: 100,
    loadingKeep: 100,
    pagination: {
      currentKey: "pageRequest.page",
      pageSizeKey: "pageRequest.pageSize",
      totalKey: "pageReply.total",
      totalPageKey: "total",
    },
  }),
);

const dataSource = computed(() => useList.data?.requests || []);
```

模板：

```vue
<a-table
  :dataSource="dataSource"
  :loading="useList.loading"
  :pagination="false"
/>

<a-pagination v-bind="useList.antdPagination" />
```

### 7.3 usePaginationPro 返回值

除 `vue-request` 原始返回值外，额外返回：

| 字段 | 说明 |
| --- | --- |
| `runPro(extra?)` | 合并分页参数、`dep` 查询条件和额外参数后发起请求 |
| `runProSync(extra?)` | `runPro` 的 Promise 版本 |
| `refreshPro()` | ready 通过时刷新当前查询 |
| `antdPagination` | 可直接绑定到 `<a-pagination />` |
| `mutate(data?)` | 修改本地列表数据 |

### 7.4 ready 与 resetWhenNotReady

```ts
const useList = usePaginationPro(api, {
  dep: conditions,
  ready: computed(() => Boolean(conditions.merchantId)),
  resetWhenNotReady: true,
});
```

- `ready` 为 `false` 时不发请求。
- `resetWhenNotReady` 为 `true` 时会清空当前数据。
- `dep` 会被深度监听，变化后自动重新请求。
- `manual: true` 时不会因为 `dep` 初始值立即请求，需要手动调用 `runPro()`。

## 8. 迁移清单

按下面顺序迁移最稳：

1. 安装依赖：`@f_anaan/ytt`、`axios`、`lodash-es`、`qs`、`vue-request`、UI 组件库。
2. 添加 `package.json` 的 `ytt` 脚本。
3. 添加 `@bfr/ytt -> @f_anaan/ytt` 的 Vite 和 TypeScript alias。
4. 复制 `src/ytt/request/base.ts`。
5. 按模块创建 `src/ytt/request/<module>.ts`，绑定目标项目的 HTTP 实例。
6. 复制或改造 `src/utils/http/request/*` 和 `src/utils/http/index.ts`；如果目标项目已有 axios 封装，只要保证它有 `request(config, options)` 方法即可。
7. 重写 `requestInterceptors`，替换 token、租户头、设备头等业务逻辑。
8. 按目标后端响应结构调整 `transformResponseHook`。
9. 复制 `src/hooks/useRequest.ts`，如不用 Ant Design Vue，同步替换 `message` 和分页类型。
10. 复制 `src/logics/setVueRequest.ts`，调整分页字段，并在 `main.ts` 调用 `setupVueRequest()`。
11. 复制并修改 `ytt.config.ts`：Swagger 地址、服务列表、输出目录、请求适配文件。
12. 运行 `pnpm ytt`，检查 `src/services` 是否生成接口类型和函数。
13. 写一个页面或临时脚本验证普通请求、带 token 请求、分页请求、错误提示。

## 9. 常见问题

### 9.1 生成文件提示找不到 @bfr/ytt

检查 `tsconfig.app.json` 和 `vite.config.ts` 是否都配置了：

```ts
"@bfr/ytt": ["./node_modules/@f_anaan/ytt"]
```

```ts
"@bfr/ytt": "@f_anaan/ytt"
```

### 9.2 接口请求到了前端域名但没有转发

检查：

- `basisHttp.requestOptions.urlPrefix` 是否是 `/basic_api`。
- `.env.development` 的 `VITE_PROXY` 是否配置了 `/basic_api`。
- `vite.config.ts` 是否调用了 `createProxy(VITE_PROXY)`。
- 后端实际路径是否需要移除 `/basic_api` 前缀。

### 9.3 页面拿到的是完整响应，不是 data

检查请求是否传了：

```ts
{ isTransformResponse: false }
```

默认 `isTransformResponse: true` 时，当前封装返回响应体的 `data` 字段。目标项目如果返回字段不是 `data`，需要改 `transformResponseHook`。

### 9.4 分页 total 不显示

检查 `setVueRequest.ts` 里的 `totalKey` 是否匹配后端字段。例如当前项目是：

```ts
totalKey: "pageReply.total"
```

如果后端返回：

```ts
{ list: [], total: 100 }
```

则应改为：

```ts
totalKey: "total"
```

### 9.5 请求参数里分页字段不对

`usePaginationPro` 会按 `options.pagination.currentKey/pageSizeKey` 生成分页参数；没有传时回退为 `page`、`pageSize`。如果后端使用 `pageRequest.page` 这类字段，建议在 `usePaginationPro` 里显式传入 `pagination`，并与全局 `setVueRequest` 保持一致。

## 10. 推荐最小目录结构

```text
src
  hooks
    useRequest.ts
  logics
    setVueRequest.ts
  services
    basis
      basis.ts              # ytt 自动生成
  utils
    http
      index.ts
      request
        Axios.ts
        axiosCancel.ts
        axiosTransform.ts
        checkStatus.ts
        config.ts
        enums.ts
        helper.ts
        index.ts
        is.ts
        requestOption.ts
        updateServerTime.ts
        utils.ts
  ytt
    request
      base.ts
      basis.ts
ytt.config.ts
```

如果目标项目已有成熟 HTTP 封装，可以只迁移：

```text
src/hooks/useRequest.ts
src/logics/setVueRequest.ts
src/ytt/request/base.ts
src/ytt/request/<module>.ts
ytt.config.ts
```

然后把 `<module>.ts` 中的 HTTP 实例替换成目标项目自己的请求实例。
