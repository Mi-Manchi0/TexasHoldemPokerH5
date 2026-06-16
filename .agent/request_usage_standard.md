# 请求使用规范

本文档从当前项目的请求封装、接口生成、页面调用方式中提炼出统一规范，用于指导其他 Vue 3 + TypeScript + Vite 项目接入接口请求，保持项目间写法、错误处理、分页、租户透传和接口生成方式一致。

相关现有实现：

- `src/utils/http/index.ts`：业务请求实例与请求拦截器。
- `src/utils/http/request/*`：Axios 基础封装、响应转换、错误处理、重复请求处理。
- `src/ytt/request/base.ts`：ytt 生成接口到业务 HTTP 实例的适配层。
- `src/ytt/request/basis.ts`：当前 `basis` 模块请求客户端。
- `src/services/basis/basis.ts`：ytt 自动生成的接口函数和类型。
- `src/services/*/admin-api.ts`：少量手写业务接口适配。
- `src/hooks/useRequest.ts`：普通请求与分页请求组合式封装。
- `src/logics/setVueRequest.ts`：`vue-request` 全局分页字段配置。
- `ytt.config.ts`：Swagger/OpenAPI 接口生成配置。

## 1. 总体原则

1. 页面不直接拼接完整请求域名，只使用 service 函数。
2. 能由 ytt 生成的接口，优先使用 `src/services/basis/basis.ts` 中的生成函数。
3. 生成文件不手动修改；接口缺失、字段不友好或需要组合逻辑时，在 `src/services/<domain>/admin-api.ts` 写手动适配函数。
4. 页面负责交互状态、表单校验、成功提示和业务提示；service 层只负责请求参数、返回类型和必要的字段适配。
5. 请求默认自动携带 token、商户、门店、设备名等公共上下文，业务代码只在需要覆盖或跳过时显式传入。
6. 响应默认返回后端响应体里的业务 `data`，页面不应默认处理 Axios 原始响应。
7. 列表分页统一使用 `usePaginationPro`；普通详情、创建、更新、删除、按钮触发请求统一使用 `useRequest` 或直接 `await service()`。

## 2. 标准请求链路

```text
页面 / 组件
  -> src/services/<domain>/*
  -> ytt 生成接口 或 手写 service 函数
  -> src/ytt/request/<module>.ts
  -> src/ytt/request/base.ts
  -> basisHttp
  -> src/utils/http/request/*
  -> Axios
  -> Vite proxy / 后端服务
```

标准域名拼接：

```text
window.location.origin + /basic_api + /api/xxx/v1/yyy
```

开发环境由 Vite proxy 转发：

```env
VITE_PROXY = [["/basic_api", "https://api.example.com"], ["/oss", "https://api.example.com/oss"]]
```

`/basic_api` 是前端代理前缀，不应写进后端真实接口路径。

## 3. 目录约定

推荐目录结构：

```text
src
  hooks
    useRequest.ts
  logics
    setVueRequest.ts
  services
    basis
      basis.ts                 # ytt 自动生成，不手改
    order
      admin-api.ts             # 手写业务适配
    file
      upload.ts                # 文件上传适配
  utils
    http
      index.ts                 # 导出业务请求实例
      request
        Axios.ts
        index.ts
        requestOption.ts
        config.ts
        ...
  ytt
    request
      base.ts
      basis.ts
ytt.config.ts
```

职责边界：

| 位置 | 职责 |
| --- | --- |
| `src/utils/http/request/*` | 通用 Axios 能力：请求前处理、响应转换、错误提示、状态码处理、上传、取消重复请求。 |
| `src/utils/http/index.ts` | 当前项目业务拦截器：token、租户头、设备头、登录失效、特殊接口兼容。 |
| `src/ytt/request/base.ts` | 将 ytt 的 `payload` 转为 `basisHttp.request(config, options)`。 |
| `src/services/basis/basis.ts` | ytt 生成接口函数、请求类型、响应类型。 |
| `src/services/<domain>/admin-api.ts` | 对生成接口的补充、聚合、兼容接口、复杂类型适配。 |
| `src/views/**` / `src/components/**` | 调用 service、管理 UI 状态、展示提示、刷新列表。 |

## 4. HTTP 实例规范

所有业务请求默认使用 `basisHttp`：

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

新项目如果有多个后端域，可以按模块增加实例：

```ts
export const adminHttp = createAxios({
  requestOptions: { urlPrefix: "/admin_api" },
});

export const openHttp = createAxios({
  requestOptions: { urlPrefix: "/open_api" },
});
```

每个 HTTP 实例必须明确：

- `timeout`：默认超时时间。
- `urlPrefix`：前端代理前缀。
- `requestInterceptors`：token、租户、设备、特殊头处理。
- `setConfig({ apiUrl })`：默认使用 `window.location.origin`，不要在业务代码里硬编码域名。

## 5. 请求头与租户规范

默认请求头由拦截器统一处理。

### 5.1 Token

默认读取 `AuthStorageKey.Token`，并写入：

```http
Authorization: Bearer <token>
```

无需 token 的接口显式传：

```ts
await postApiAuthV1Login(
  { phone, password },
  { withToken: false },
);
```

### 5.2 商户与门店

默认请求会自动补：

```http
x-merchant-id: <merchantId>
x-store-id: <storeId 或 0>
```

读取优先级：

1. 调用方显式传入的 headers。
2. 请求 `params` / `data` 中的 `merchantId`、`merchant_id`、`storeId`、`store_id`。
3. URL 查询参数。
4. 登录用户信息。
5. localStorage。

门店维度接口应传明确 `storeId`。商户维度接口如需跳过门店作用域，传：

```ts
const merchantScopeHeaders = {
  "x-skip-store-scope": "1",
} as const;

await basisHttp.get({
  url: "/api/store/v1/printProviders",
  headers: merchantScopeHeaders,
});
```

拦截器会消费 `x-skip-store-scope`，最终不把它发送给后端，只用于前端跳过自动补 `x-store-id`。

### 5.3 设备名

默认补：

```http
x-device-name: Web-Admin
```

只有跨端复用或后端明确要求时才覆盖。

## 6. 响应转换规范

默认 `isTransformResponse: true`，调用方拿到的是后端响应体中的业务 `data`。

后端响应建议统一为：

```ts
{
  status: "success",
  message: "操作成功",
  data: T,
  datetime?: number
}
```

当前封装兼容以下成功条件：

- `status` 为 `success`、`ok`、`200`、`0`。
- `code` 为 `0`、`200`，或以 `0` 开头。
- `success === true`。
- `message` 包含 `成功` 且存在 `data`。
- 没有业务状态字段时，按成功处理。

成功后返回：

```ts
return response.data.data;
```

需要完整业务包裹时使用：

```ts
await service(params, { isTransformResponse: false });
```

需要 Axios 原始响应时使用：

```ts
await service(params, { isReturnNativeResponse: true });
```

除下载、读取响应头、兼容历史接口外，不推荐页面使用 `isReturnNativeResponse`。

## 7. 错误处理规范

默认错误提示方式：

```ts
errorMessageMode: "message"
```

可选值：

| 值 | 用途 |
| --- | --- |
| `"message"` | 普通接口错误，用轻提示。 |
| `"modal"` | 关键阻断错误，需要弹窗说明。 |
| `"none"` | 调用方会自行兜底、静默探测接口、并发兼容接口。 |

示例：

```ts
try {
  await saveMerchantPrintReceiptConfig(payload);
  message.success("小票模板已保存");
} finally {
  saving.value = false;
}
```

静默查询示例：

```ts
const detail = await getDishComboConfigDetail(
  { merchantId, storeId, comboDishId },
  { errorMessageMode: "none" },
).catch(() => null);
```

规范要求：

- 不在 service 层弹 `message.success`。
- 页面提交类请求应在成功后给业务成功提示。
- `catch` 后如果不能完整处理错误，继续抛出或让封装提示，不要吞错。
- `finally` 必须恢复按钮、弹窗、加载状态。

登录失效业务码为 `10001000`。开发环境会弹窗并阻止自动跳转，生产环境清理登录态并跳转 `/login`。其他项目需要替换为自身登录失效业务码。

## 8. ytt 接口生成规范

### 8.1 生成命令

```bash
pnpm ytt
```

`package.json` 需要包含：

```json
{
  "scripts": {
    "ytt": "ytt -c ytt.config.ts"
  }
}
```

### 8.2 生成文件规则

当前项目将多个 Swagger 服务合并生成到：

```text
src/services/basis/basis.ts
```

该文件开头有：

```ts
/* 该文件由 @bfr/ytt 自动生成，请勿直接修改！！！ */
```

任何生成文件都不允许手动修改。需要补充逻辑时，在 `src/services/<domain>/admin-api.ts` 增加手写函数。

### 8.3 服务列表

`ytt.config.ts` 中通过：

```ts
createConfig("basis", "basis", [
  ...genList([
    "api.auth.v1.AuthService",
    "api.dish.v1.DishService",
    "api.order.v1.OrderService",
  ]),
]);
```

其他项目迁移时只调整：

- Swagger/OpenAPI 服务地址。
- 服务名列表。
- 输出目录。
- 请求适配文件。

### 8.4 函数命名规则

生成函数按方法和路径命名：

```text
GET  /api/auth/v1/devices          -> getApiAuthV1Devices
POST /api/auth/v1/login            -> postApiAuthV1Login
POST /api/auth/v1/devices_delete   -> deleteApiAuthV1Devices
POST /api/auth/v1/users_put        -> putApiAuthV1Users
GET  /api/users/{id}               -> getApiUsersById
```

约定：

- `GET` 查询以 `get` 开头。
- `POST` 创建或动作以 `post` 开头。
- 后端用 `_put`、`_delete` 表示更新、删除时，前端生成函数使用 `put`、`delete` 前缀。
- 路径参数使用 `ByXxx`、`AndXxx`。

### 8.5 生成接口调用

普通调用：

```ts
import { getApiOrderV1Orders } from "@/services/basis/basis";

const data = await getApiOrderV1Orders({
  merchantId,
  storeId,
  "pageRequest.page": 1,
  "pageRequest.pageSize": 10,
});
```

带请求选项：

```ts
await getApiDishV1Combos(
  { merchantId, storeId },
  { errorMessageMode: "none" },
);
```

## 9. 手写 service 规范

仅在以下场景手写 service：

- Swagger 暂未生成该接口。
- 生成接口名称或类型不适合页面直接使用。
- 一个业务动作需要组合多个接口。
- 需要统一加特殊 header。
- 需要在 service 内做字段单位转换、路径参数编码或兼容旧接口。

文件位置：

```text
src/services/<domain>/admin-api.ts
```

推荐写法：

```ts
import { basisHttp } from "@/utils/http";
import type { GetApiOrderV1OrdersResponse } from "@/services/basis/basis";

export interface GetOrderListParams {
  "pageRequest.page"?: number;
  "pageRequest.pageSize"?: number;
  merchantId?: string;
  storeId?: string;
  status?: string;
}

export function getOrderList(params: GetOrderListParams) {
  return basisHttp.get<GetApiOrderV1OrdersResponse>({
    url: "/api/order/v1/orders",
    params,
  });
}
```

路径参数必须编码：

```ts
export function getPrintStoreDetail(id: string) {
  return basisHttp.get({
    url: `/api/store/v1/stores/${encodeURIComponent(id)}`,
  });
}
```

POST/PUT/DELETE 语义接口使用 `data`：

```ts
export function postOrderComplete(data: { id: string | number }) {
  return basisHttp.post<Record<string, never>>({
    url: "/api/order/v1/orders/complete_put",
    data,
  });
}
```

手写 service 要求：

- 导出请求参数类型和关键响应类型。
- 函数名表达业务动作，不直接暴露模糊名称如 `request1`、`submit`。
- 不在 service 中读取组件状态。
- 不在 service 中弹成功提示。
- 不在 service 中吞掉错误。
- 不把 `merchantId`、`storeId` 写死。
- 不使用完整后端域名。

## 10. 普通请求调用规范

详情、提交、删除、状态切换等普通请求可以使用 `useRequest`。

```ts
import { useRequest } from "@/hooks/useRequest";
import { postApiTableV1Types } from "@/services/basis/basis";

const createTypeRequest = useRequest(postApiTableV1Types);

const submit = async () => {
  await formRef.value?.validate();
  await createTypeRequest.run({
    merchantId,
    storeId,
    name: form.name.trim(),
  });
  message.success("桌台类型已创建");
  await listRequest.refresh();
};
```

`useRequest` 返回：

| 字段 | 说明 |
| --- | --- |
| `data` | `Ref<T | null>`，最近一次成功数据。 |
| `loading` | `Ref<boolean>`，请求中状态。 |
| `error` | `Ref<unknown>`，最近一次错误。 |
| `params` | `Ref<P | null>`，最近一次请求参数。 |
| `run` | 传参发起请求。 |
| `refresh` | 使用上次参数刷新。 |

`immediate` 必须配合 `defaultParams`：

```ts
const detailReq = useRequest(getApiAuthV1Devices, {
  immediate: true,
  defaultParams: [{}],
});
```

注意：

- `run()` 出错后会继续 `throw`，调用方按需 `try/finally`。
- `refresh()` 没有历史参数时会抛错。
- 页面内只做少量一次性请求时，也可以直接 `await service()`，不强制使用 `useRequest`。

## 11. 分页列表规范

列表页统一使用 `usePaginationPro`。

### 11.1 全局分页字段

当前分页字段在 `src/logics/setVueRequest.ts`：

```ts
setGlobalOptions({
  loadingDelay: 100,
  pagination: {
    currentKey: "pageRequest.page",
    pageSizeKey: "pageRequest.pageSize",
    totalKey: "pageReply.total",
    totalPageKey: "total",
  },
});
```

其他项目必须按后端分页结构调整，并在入口调用：

```ts
setupVueRequest();
```

### 11.2 列表页模板

```ts
import { computed, reactive, watch } from "vue";
import { usePaginationPro } from "@/hooks/useRequest";
import { getApiRefundV1Requests } from "@/services/basis/basis";

const conditions = reactive({
  "pageRequest.page": 1,
  "pageRequest.pageSize": 10,
  merchantId: "",
  storeId: "",
  status: "",
});

watch(
  [() => authStore.userInfo?.merchantId, () => authStore.userInfo?.storeId],
  ([merchantId, storeId]) => {
    conditions.merchantId = String(merchantId ?? "").trim();
    conditions.storeId = String(storeId ?? "").trim();
    conditions["pageRequest.page"] = 1;
  },
  { immediate: true },
);

const useList = reactive(
  usePaginationPro(getApiRefundV1Requests, {
    loadingDelay: 0,
    loadingKeep: 100,
    debounceInterval: 100,
    dep: conditions,
  }),
);

const dataSource = computed(() => useList.data?.requests || []);
```

模板：

```vue
<a-table
  :data-source="dataSource"
  :loading="useList.loading"
  :pagination="false"
/>

<a-pagination v-bind="useList.antdPagination" />
```

刷新：

```ts
await useList.refreshPro();
```

筛选项变更时：

- 修改 `conditions`。
- 将 `conditions["pageRequest.page"]` 重置为 `1`。
- 由 `dep` 深度监听自动触发请求。

### 11.3 usePaginationPro 返回值

| 字段 | 说明 |
| --- | --- |
| `runPro(extra?)` | 合并分页、`dep`、额外参数后请求。 |
| `runProSync(extra?)` | `runPro` 的 Promise 版本。 |
| `refreshPro()` | ready 通过时刷新当前查询。 |
| `antdPagination` | 直接绑定 Ant Design Vue 分页组件。 |
| `mutate(data?)` | 修改本地缓存数据。 |

### 11.4 ready

依赖上下文未准备好时，使用 `ready`：

```ts
const useList = reactive(
  usePaginationPro(api, {
    dep: conditions,
    ready: computed(() => Boolean(conditions.merchantId)),
    resetWhenNotReady: true,
  }),
);
```

## 12. 文件上传规范

上传统一封装在 `src/services/file/upload.ts`，底层使用：

```ts
basisHttp.uploadFile(config, {
  file,
  name: "file",
  data,
});
```

规范要求：

- 文件上传使用 `FormData`，不要手动设置 multipart boundary。
- 上传接口必须复用 `basisHttp.uploadFile`，不要在页面直接 new Axios。
- 上传前在页面或上传 service 中做大小、类型、业务类型校验。
- 上传后页面只保存后端返回的文件标识、URL 或业务字段，不保存 UI 组件内部对象。

## 13. 参数规范

### 13.1 GET

查询参数使用 `params`：

```ts
basisHttp.get({
  url: "/api/order/v1/orders",
  params: {
    merchantId,
    storeId,
    status,
  },
});
```

### 13.2 POST / 更新 / 删除

请求体使用 `data`：

```ts
basisHttp.post({
  url: "/api/order/v1/orders/complete_put",
  data: { id },
});
```

### 13.3 分页字段

当前项目分页字段统一为：

```ts
{
  "pageRequest.page": 1,
  "pageRequest.pageSize": 10
}
```

不要在同一个项目混用 `page/pageSize`、`current/size`，除非后端接口本身不一致且 service 已做隔离。

### 13.4 金额字段

当前后端金额字段多以分为单位。页面展示可转元，提交前必须转回分：

```ts
const amountFen = yuanToFen(form.amountDisplay);
```

service 或页面必须明确字段单位，不允许无注释地混用元和分。

## 14. 页面状态规范

推荐模式：

```ts
const submitting = ref(false);

const submit = async () => {
  await formRef.value?.validate();
  submitting.value = true;
  try {
    await saveApi(payload);
    message.success("保存成功");
    await useList.refreshPro();
  } finally {
    submitting.value = false;
  }
};
```

要求：

- 按钮 loading 与请求状态绑定。
- 弹窗提交时使用 `confirm-loading`。
- 列表刷新后保持当前筛选条件。
- 创建、删除、状态变更成功后刷新关联列表或局部更新缓存。
- 不用 `setTimeout` 等方式猜测接口完成。

## 15. 禁止与不推荐写法

禁止：

- 在页面中直接使用 `axios`。
- 在页面中硬编码完整后端域名。
- 手改 `src/services/basis/basis.ts` 等生成文件。
- 在 service 层弹成功提示。
- 在多个页面重复写同一个接口 URL。
- 在请求里写死 `merchantId`、`storeId`。
- 业务错误被 `catch` 后静默吞掉。
- 上传文件时手动拼 multipart body。

不推荐：

- 页面直接使用 `basisHttp`。如接口会复用，应先封装到 `src/services/<domain>/admin-api.ts`。
- 大量使用 `isTransformResponse: false`。优先调整响应转换或 service 适配。
- 在组件里写复杂响应兼容逻辑。兼容逻辑应下沉到 service 或工具函数。
- 多套分页字段混用。

## 16. 新项目落地清单

1. 安装依赖：`axios`、`lodash-es`、`qs`、`vue-request`、`@f_anaan/ytt`、UI 组件库。
2. 配置 `@` 路径别名和 `@bfr/ytt -> @f_anaan/ytt` alias。
3. 复制 `src/utils/http/request/*`。
4. 按目标项目改造 `src/utils/http/index.ts`：token、租户头、登录失效码、`urlPrefix`。
5. 复制 `src/ytt/request/base.ts`。
6. 新增 `src/ytt/request/<module>.ts`，绑定对应 HTTP 实例。
7. 新增或改造 `ytt.config.ts`：Swagger 地址、服务列表、输出目录、请求适配文件。
8. 复制 `src/hooks/useRequest.ts`。
9. 复制 `src/logics/setVueRequest.ts` 并调整分页字段。
10. 配置 `.env.development` 的 `VITE_PROXY`。
11. 执行 `pnpm ytt` 生成 service。
12. 写一个普通请求、一个分页列表、一个提交请求验证完整链路。
13. 将本规范放入项目根目录或团队文档库，作为 code review 对照。

## 17. Code Review 检查点

审查请求相关代码时重点检查：

- 是否通过 service 调用接口。
- 是否修改了生成文件。
- 是否正确使用 `params` / `data`。
- 是否正确传递 `merchantId`、`storeId`。
- 商户级接口是否需要跳过门店作用域。
- 是否在页面处理成功提示和 loading 恢复。
- 是否吞掉错误。
- 分页字段、total 字段是否符合全局配置。
- 金额、时间、枚举字段是否有清晰转换边界。
- 是否有重复接口 URL，可以下沉到 service。

## 18. 推荐最小示例

普通列表：

```ts
const conditions = reactive({
  "pageRequest.page": 1,
  "pageRequest.pageSize": 10,
  merchantId: "",
  storeId: "",
});

const useList = reactive(
  usePaginationPro(getApiOrderV1Orders, {
    dep: conditions,
    debounceInterval: 100,
  }),
);
```

提交表单：

```ts
const submit = async () => {
  await formRef.value?.validate();
  submitting.value = true;
  try {
    await postApiOrderV1OrdersComplete({
      id: currentId.value,
    });
    message.success("操作成功");
    await useList.refreshPro();
  } finally {
    submitting.value = false;
  }
};
```

手写 service：

```ts
export function saveStorePrintConfig(body: {
  id: string | number;
  printEnabled: boolean;
  printPrinters: StorePrintPrinter[];
}) {
  return basisHttp.post<{ store?: StorePrintStore }>({
    url: "/api/store/v1/stores/printConfig_put",
    data: body,
  });
}
```

静默兼容查询：

```ts
const detail = await getApiSomething(
  params,
  { errorMessageMode: "none" },
).catch(() => null);
```

这套规范的核心是：接口来源统一、请求实例统一、响应转换统一、页面调用统一。新项目只替换业务差异项，不重复设计请求链路。
