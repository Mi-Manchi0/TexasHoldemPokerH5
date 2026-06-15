# Texas Holdem Poker H5

基于 Vite 构建的 Vue 3 H5 前端项目，已接入 TypeScript 和 Pinia 状态管理。

## 技术栈

- Vue 3
- Vite
- TypeScript
- Pinia
- Axios
- @f_anaan/ytt
- vue-request

## 开发命令

```bash
npm install
npm run dev
npm run build
npm run ytt
```

本地开发服务默认地址：

```bash
http://127.0.0.1:5173/
```

## 接口生成与请求封装

项目已接入 ytt Swagger 接口生成、axios 请求实例、`useRequest` 和
`usePaginationPro`。生成前需要先配置 Swagger 文档地址：

```bash
# 单个 Swagger/OpenAPI JSON 地址
$env:YTT_SWAGGER_URL="https://api.example.com/swagger.json"; npm run ytt

# 多个地址用英文逗号分隔，生成内容会合并到 src/services/basis/basis.ts
$env:YTT_SWAGGER_URLS="https://api.example.com/auth.json,https://api.example.com/game.json"; npm run ytt
```

也可以直接在 `ytt.config.ts` 的 `swaggerServices` 中填写服务名，并通过
`YTT_SWAGGER_SERVER` 指定 Swagger 服务根地址。

开发代理支持在 `.env.development` 中配置：

```bash
VITE_PROXY=[["/basic_api","https://api.example.com"]]
```
