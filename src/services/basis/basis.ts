/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 @bfr/ytt 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from '@bfr/ytt'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from '@bfr/ytt'
// @ts-ignore
import request from '../../ytt/request/basis'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl = '' as any
const devUrl = '' as any
const prodUrl = '' as any
const dataKey = undefined as any

/**
 * 接口 查询登录设备 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/devices`
 */
export interface GetApiAuthV1DevicesRequest {}

/**
 * 接口 查询登录设备 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/devices`
 */
export interface GetApiAuthV1DevicesResponse {
  /**
   * 设备列表
   */
  devices?: {
    /**
     * 设备记录ID
     */
    id?: string
    /**
     * 设备名称
     */
    deviceName?: string
    /**
     * 登录IP
     */
    ip?: string
    /**
     * User-Agent
     */
    userAgent?: string
    /**
     * 最后活跃时间
     */
    lastActiveAt?: string
    /**
     * 首次登录时间
     */
    createdAt?: string
    /**
     * 登录账号名
     */
    accountName?: string
  }[]
}

/**
 * 接口 查询登录设备 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/devices`
 */
type GetApiAuthV1DevicesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/devices', undefined, string, string, true>
>

/**
 * 接口 查询登录设备 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/devices`
 */
const getApiAuthV1DevicesRequestConfig: GetApiAuthV1DevicesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/devices',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiAuthV1Devices',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询登录设备 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/devices`
 */
export const getApiAuthV1Devices = /*#__PURE__*/ (
  requestData?: GetApiAuthV1DevicesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiAuthV1DevicesResponse>(prepare(getApiAuthV1DevicesRequestConfig, requestData), ...args)
}

getApiAuthV1Devices.requestConfig = getApiAuthV1DevicesRequestConfig

/**
 * 接口 踢出设备 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/devices_delete`
 */
export interface DeleteApiAuthV1DevicesRequest {
  /**
   * 设备记录ID（路径参数）
   */
  id?: string
}

/**
 * 接口 踢出设备 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/devices_delete`
 */
export interface DeleteApiAuthV1DevicesResponse {}

/**
 * 接口 踢出设备 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/devices_delete`
 */
type DeleteApiAuthV1DevicesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/devices_delete', undefined, string, string, false>
>

/**
 * 接口 踢出设备 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/devices_delete`
 */
const deleteApiAuthV1DevicesRequestConfig: DeleteApiAuthV1DevicesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/devices_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiAuthV1Devices',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 踢出设备 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/devices_delete`
 */
export const deleteApiAuthV1Devices = /*#__PURE__*/ (
  requestData: DeleteApiAuthV1DevicesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiAuthV1DevicesResponse>(prepare(deleteApiAuthV1DevicesRequestConfig, requestData), ...args)
}

deleteApiAuthV1Devices.requestConfig = deleteApiAuthV1DevicesRequestConfig

/**
 * 接口 手机号密码登录 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login`
 */
export interface PostApiAuthV1LoginRequest {
  /**
   * 手机号
   */
  phone?: string
  /**
   * 密码
   */
  password?: string
}

/**
 * 接口 手机号密码登录 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login`
 */
export interface PostApiAuthV1LoginResponse {
  /**
   * JWT Token
   */
  token?: string
  /**
   * LoginUserInfo 登录用户信息。
   */
  userInfo?: {
    /**
     * 用户ID
     */
    id?: string
    /**
     * 用户姓名
     */
    name?: string
    /**
     * 手机号
     */
    phone?: string
    /**
     * 角色标识
     */
    role?: string
  }
}

/**
 * 接口 手机号密码登录 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login`
 */
type PostApiAuthV1LoginRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/login', undefined, string, string, false>
>

/**
 * 接口 手机号密码登录 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login`
 */
const postApiAuthV1LoginRequestConfig: PostApiAuthV1LoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiAuthV1Login',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 手机号密码登录 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login`
 */
export const postApiAuthV1Login = /*#__PURE__*/ (
  requestData: PostApiAuthV1LoginRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiAuthV1LoginResponse>(prepare(postApiAuthV1LoginRequestConfig, requestData), ...args)
}

postApiAuthV1Login.requestConfig = postApiAuthV1LoginRequestConfig

/**
 * 接口 微信扫码登录 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login/wechat`
 */
export interface PostApiAuthV1LoginWechatRequest {
  /**
   * 微信授权码
   */
  code?: string
}

/**
 * 接口 微信扫码登录 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login/wechat`
 */
export interface PostApiAuthV1LoginWechatResponse {
  /**
   * JWT Token
   */
  token?: string
  /**
   * LoginUserInfo 登录用户信息。
   */
  userInfo?: {
    /**
     * 用户ID
     */
    id?: string
    /**
     * 用户姓名
     */
    name?: string
    /**
     * 手机号
     */
    phone?: string
    /**
     * 角色标识
     */
    role?: string
  }
}

/**
 * 接口 微信扫码登录 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login/wechat`
 */
type PostApiAuthV1LoginWechatRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/login/wechat', undefined, string, string, false>
>

/**
 * 接口 微信扫码登录 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login/wechat`
 */
const postApiAuthV1LoginWechatRequestConfig: PostApiAuthV1LoginWechatRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/login/wechat',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiAuthV1LoginWechat',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 微信扫码登录 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/login/wechat`
 */
export const postApiAuthV1LoginWechat = /*#__PURE__*/ (
  requestData: PostApiAuthV1LoginWechatRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiAuthV1LoginWechatResponse>(prepare(postApiAuthV1LoginWechatRequestConfig, requestData), ...args)
}

postApiAuthV1LoginWechat.requestConfig = postApiAuthV1LoginWechatRequestConfig

/**
 * 接口 用户退出登录 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/logout`
 */
export interface PostApiAuthV1LogoutRequest {}

/**
 * 接口 用户退出登录 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/logout`
 */
export interface PostApiAuthV1LogoutResponse {}

/**
 * 接口 用户退出登录 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/logout`
 */
type PostApiAuthV1LogoutRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/logout', undefined, string, string, true>
>

/**
 * 接口 用户退出登录 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/logout`
 */
const postApiAuthV1LogoutRequestConfig: PostApiAuthV1LogoutRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/logout',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiAuthV1Logout',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 用户退出登录 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/logout`
 */
export const postApiAuthV1Logout = /*#__PURE__*/ (
  requestData?: PostApiAuthV1LogoutRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiAuthV1LogoutResponse>(prepare(postApiAuthV1LogoutRequestConfig, requestData), ...args)
}

postApiAuthV1Logout.requestConfig = postApiAuthV1LogoutRequestConfig

/**
 * 接口 查询菜单权限树 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/menus`
 */
export interface GetApiAuthV1MenusRequest {}

/**
 * 接口 查询菜单权限树 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/menus`
 */
export interface GetApiAuthV1MenusResponse {
  /**
   * 菜单树
   */
  menus?: {
    /**
     * 菜单ID
     */
    id?: string
    /**
     * 父菜单ID
     */
    parentId?: string
    /**
     * 菜单名称
     */
    name?: string
    /**
     * 菜单图标
     */
    icon?: string
    /**
     * 路由路径
     */
    path?: string
    /**
     * 子菜单
     */
    children?: {}[]
    /**
     * 是否已勾选（用于角色分配场景）
     */
    isChecked?: boolean
  }[]
}

/**
 * 接口 查询菜单权限树 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/menus`
 */
type GetApiAuthV1MenusRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/menus', undefined, string, string, true>
>

/**
 * 接口 查询菜单权限树 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/menus`
 */
const getApiAuthV1MenusRequestConfig: GetApiAuthV1MenusRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/menus',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiAuthV1Menus',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询菜单权限树 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/menus`
 */
export const getApiAuthV1Menus = /*#__PURE__*/ (
  requestData?: GetApiAuthV1MenusRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiAuthV1MenusResponse>(prepare(getApiAuthV1MenusRequestConfig, requestData), ...args)
}

getApiAuthV1Menus.requestConfig = getApiAuthV1MenusRequestConfig

/**
 * 接口 重置用户密码 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password/reset_put`
 */
export interface PutApiAuthV1PasswordResetRequest {
  /**
   * 目标用户ID
   */
  userId?: string
  /**
   * 新密码
   */
  newPassword?: string
}

/**
 * 接口 重置用户密码 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password/reset_put`
 */
export interface PutApiAuthV1PasswordResetResponse {}

/**
 * 接口 重置用户密码 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password/reset_put`
 */
type PutApiAuthV1PasswordResetRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/password/reset_put', undefined, string, string, false>
>

/**
 * 接口 重置用户密码 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password/reset_put`
 */
const putApiAuthV1PasswordResetRequestConfig: PutApiAuthV1PasswordResetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/password/reset_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiAuthV1PasswordReset',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 重置用户密码 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password/reset_put`
 */
export const putApiAuthV1PasswordReset = /*#__PURE__*/ (
  requestData: PutApiAuthV1PasswordResetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiAuthV1PasswordResetResponse>(
    prepare(putApiAuthV1PasswordResetRequestConfig, requestData),
    ...args,
  )
}

putApiAuthV1PasswordReset.requestConfig = putApiAuthV1PasswordResetRequestConfig

/**
 * 接口 修改本人密码 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password_put`
 */
export interface PutApiAuthV1PasswordRequest {
  /**
   * 旧密码
   */
  oldPassword?: string
  /**
   * 新密码
   */
  newPassword?: string
}

/**
 * 接口 修改本人密码 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password_put`
 */
export interface PutApiAuthV1PasswordResponse {}

/**
 * 接口 修改本人密码 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password_put`
 */
type PutApiAuthV1PasswordRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/password_put', undefined, string, string, false>
>

/**
 * 接口 修改本人密码 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password_put`
 */
const putApiAuthV1PasswordRequestConfig: PutApiAuthV1PasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/password_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiAuthV1Password',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 修改本人密码 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/password_put`
 */
export const putApiAuthV1Password = /*#__PURE__*/ (
  requestData: PutApiAuthV1PasswordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiAuthV1PasswordResponse>(prepare(putApiAuthV1PasswordRequestConfig, requestData), ...args)
}

putApiAuthV1Password.requestConfig = putApiAuthV1PasswordRequestConfig

/**
 * 接口 查询角色列表 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles`
 */
export interface GetApiAuthV1RolesRequest {
  /**
   * 商户ID（可选筛选）
   */
  merchantId?: string
}

/**
 * 接口 查询角色列表 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles`
 */
export interface GetApiAuthV1RolesResponse {
  /**
   * 角色列表
   */
  roles?: {
    /**
     * 角色ID
     */
    id?: string
    /**
     * 角色名称
     */
    name?: string
    /**
     * 角色标识码
     */
    code?: string
    /**
     * 角色描述
     */
    description?: string
    /**
     * 所属商户ID
     */
    merchantId?: string
    /**
     * 是否内置角色
     */
    isBuiltin?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }[]
}

/**
 * 接口 查询角色列表 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles`
 */
type GetApiAuthV1RolesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/roles', undefined, string, 'merchantId', false>
>

/**
 * 接口 查询角色列表 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles`
 */
const getApiAuthV1RolesRequestConfig: GetApiAuthV1RolesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/roles',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['merchantId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiAuthV1Roles',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询角色列表 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles`
 */
export const getApiAuthV1Roles = /*#__PURE__*/ (
  requestData: GetApiAuthV1RolesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiAuthV1RolesResponse>(prepare(getApiAuthV1RolesRequestConfig, requestData), ...args)
}

getApiAuthV1Roles.requestConfig = getApiAuthV1RolesRequestConfig

/**
 * 接口 创建角色 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles`
 */
export interface PostApiAuthV1RolesRequest {
  /**
   * 角色名称
   */
  name?: string
  /**
   * 角色描述
   */
  description?: string
  /**
   * 所属商户ID
   */
  merchantId?: string
}

/**
 * 接口 创建角色 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles`
 */
export interface PostApiAuthV1RolesResponse {
  /**
   * 新建角色ID
   */
  id?: string
}

/**
 * 接口 创建角色 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles`
 */
type PostApiAuthV1RolesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/roles', undefined, string, string, false>
>

/**
 * 接口 创建角色 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles`
 */
const postApiAuthV1RolesRequestConfig: PostApiAuthV1RolesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/roles',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiAuthV1Roles',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建角色 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles`
 */
export const postApiAuthV1Roles = /*#__PURE__*/ (
  requestData: PostApiAuthV1RolesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiAuthV1RolesResponse>(prepare(postApiAuthV1RolesRequestConfig, requestData), ...args)
}

postApiAuthV1Roles.requestConfig = postApiAuthV1RolesRequestConfig

/**
 * 接口 分配角色菜单 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles/menus_put`
 */
export interface PutApiAuthV1RolesMenusRequest {
  /**
   * 角色ID（路径参数）
   */
  id?: string
  /**
   * 菜单ID列表
   */
  menuIds?: string[]
}

/**
 * 接口 分配角色菜单 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles/menus_put`
 */
export interface PutApiAuthV1RolesMenusResponse {}

/**
 * 接口 分配角色菜单 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles/menus_put`
 */
type PutApiAuthV1RolesMenusRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/roles/menus_put', undefined, string, string, false>
>

/**
 * 接口 分配角色菜单 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles/menus_put`
 */
const putApiAuthV1RolesMenusRequestConfig: PutApiAuthV1RolesMenusRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/roles/menus_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiAuthV1RolesMenus',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 分配角色菜单 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles/menus_put`
 */
export const putApiAuthV1RolesMenus = /*#__PURE__*/ (
  requestData: PutApiAuthV1RolesMenusRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiAuthV1RolesMenusResponse>(prepare(putApiAuthV1RolesMenusRequestConfig, requestData), ...args)
}

putApiAuthV1RolesMenus.requestConfig = putApiAuthV1RolesMenusRequestConfig

/**
 * 接口 查询角色详情 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles/{id}`
 */
export interface GetApiAuthV1RolesByIdRequest {
  /**
   * 角色ID
   */
  id: string
}

/**
 * 接口 查询角色详情 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles/{id}`
 */
export interface GetApiAuthV1RolesByIdResponse {
  /**
   * 角色ID
   */
  id?: string
  /**
   * 角色名称
   */
  name?: string
  /**
   * 角色标识码
   */
  code?: string
  /**
   * 角色描述
   */
  description?: string
  /**
   * 所属商户ID
   */
  merchantId?: string
  /**
   * 是否内置角色
   */
  isBuiltin?: boolean
  /**
   * 已分配的菜单ID列表
   */
  menuIds?: string[]
  /**
   * 创建时间
   */
  createdAt?: string
  /**
   * 更新时间
   */
  updatedAt?: string
  /**
   * MerchantDisplayInfo 商户通用展示信息。
   */
  merchant?: {
    /**
     * 商户ID
     */
    id?: string
    /**
     * 商户名称
     */
    name?: string
    /**
     * 商户logo URL
     */
    logo?: string
  }
}

/**
 * 接口 查询角色详情 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles/{id}`
 */
type GetApiAuthV1RolesByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/roles/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询角色详情 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles/{id}`
 */
const getApiAuthV1RolesByIdRequestConfig: GetApiAuthV1RolesByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/roles/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiAuthV1RolesById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询角色详情 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/roles/{id}`
 */
export const getApiAuthV1RolesById = /*#__PURE__*/ (
  requestData: GetApiAuthV1RolesByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiAuthV1RolesByIdResponse>(prepare(getApiAuthV1RolesByIdRequestConfig, requestData), ...args)
}

getApiAuthV1RolesById.requestConfig = getApiAuthV1RolesByIdRequestConfig

/**
 * 接口 删除角色 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_delete`
 */
export interface DeleteApiAuthV1RolesRequest {
  /**
   * 角色ID（路径参数）
   */
  id?: string
}

/**
 * 接口 删除角色 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_delete`
 */
export interface DeleteApiAuthV1RolesResponse {}

/**
 * 接口 删除角色 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_delete`
 */
type DeleteApiAuthV1RolesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/roles_delete', undefined, string, string, false>
>

/**
 * 接口 删除角色 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_delete`
 */
const deleteApiAuthV1RolesRequestConfig: DeleteApiAuthV1RolesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/roles_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiAuthV1Roles',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 删除角色 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_delete`
 */
export const deleteApiAuthV1Roles = /*#__PURE__*/ (
  requestData: DeleteApiAuthV1RolesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiAuthV1RolesResponse>(prepare(deleteApiAuthV1RolesRequestConfig, requestData), ...args)
}

deleteApiAuthV1Roles.requestConfig = deleteApiAuthV1RolesRequestConfig

/**
 * 接口 更新角色 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_put`
 */
export interface PutApiAuthV1RolesRequest {
  /**
   * 角色ID（路径参数）
   */
  id?: string
  /**
   * 角色名称
   */
  name?: string
  /**
   * 角色描述
   */
  description?: string
}

/**
 * 接口 更新角色 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_put`
 */
export interface PutApiAuthV1RolesResponse {}

/**
 * 接口 更新角色 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_put`
 */
type PutApiAuthV1RolesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/roles_put', undefined, string, string, false>
>

/**
 * 接口 更新角色 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_put`
 */
const putApiAuthV1RolesRequestConfig: PutApiAuthV1RolesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/roles_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiAuthV1Roles',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新角色 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/roles_put`
 */
export const putApiAuthV1Roles = /*#__PURE__*/ (
  requestData: PutApiAuthV1RolesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiAuthV1RolesResponse>(prepare(putApiAuthV1RolesRequestConfig, requestData), ...args)
}

putApiAuthV1Roles.requestConfig = putApiAuthV1RolesRequestConfig

/**
 * 接口 获取当前用户信息 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/userinfo`
 */
export interface GetApiAuthV1UserinfoRequest {}

/**
 * 接口 获取当前用户信息 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/userinfo`
 */
export interface GetApiAuthV1UserinfoResponse {
  /**
   * 用户ID
   */
  id?: string
  /**
   * 用户姓名
   */
  name?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 头像URL
   */
  avatar?: string
  /**
   * 角色列表
   */
  roles?: {
    /**
     * 角色ID
     */
    id?: string
    /**
     * 角色名称
     */
    name?: string
    /**
     * 角色标识码
     */
    code?: string
  }[]
  /**
   * 菜单权限树
   */
  menus?: {
    /**
     * 菜单ID
     */
    id?: string
    /**
     * 父菜单ID
     */
    parentId?: string
    /**
     * 菜单名称
     */
    name?: string
    /**
     * 菜单图标
     */
    icon?: string
    /**
     * 路由路径
     */
    path?: string
    /**
     * 子菜单
     */
    children?: {}[]
  }[]
}

/**
 * 接口 获取当前用户信息 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/userinfo`
 */
type GetApiAuthV1UserinfoRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/userinfo', undefined, string, string, true>
>

/**
 * 接口 获取当前用户信息 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/userinfo`
 */
const getApiAuthV1UserinfoRequestConfig: GetApiAuthV1UserinfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/userinfo',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiAuthV1Userinfo',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 获取当前用户信息 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/userinfo`
 */
export const getApiAuthV1Userinfo = /*#__PURE__*/ (
  requestData?: GetApiAuthV1UserinfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiAuthV1UserinfoResponse>(prepare(getApiAuthV1UserinfoRequestConfig, requestData), ...args)
}

getApiAuthV1Userinfo.requestConfig = getApiAuthV1UserinfoRequestConfig

/**
 * 接口 查询用户列表 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users`
 */
export interface GetApiAuthV1UsersRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
   */
  status?: number
}

/**
 * 接口 查询用户列表 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users`
 */
export interface GetApiAuthV1UsersResponse {
  /**
   * 用户列表
   */
  users?: {
    /**
     * 用户ID
     */
    id?: string
    /**
     * 用户姓名
     */
    name?: string
    /**
     * 手机号
     */
    phone?: string
    /**
     * 头像URL
     */
    avatar?: string
    /**
     * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
     */
    status?: number
    /**
     * 角色列表
     */
    roles?: {
      /**
       * 角色ID
       */
      id?: string
      /**
       * 角色名称
       */
      name?: string
      /**
       * 角色标识码
       */
      code?: string
    }[]
    /**
     * 创建时间
     */
    createdAt?: string
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询用户列表 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users`
 */
type GetApiAuthV1UsersRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/auth/v1/users',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'status',
    false
  >
>

/**
 * 接口 查询用户列表 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users`
 */
const getApiAuthV1UsersRequestConfig: GetApiAuthV1UsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/users',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiAuthV1Users',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询用户列表 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users`
 */
export const getApiAuthV1Users = /*#__PURE__*/ (
  requestData: GetApiAuthV1UsersRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiAuthV1UsersResponse>(prepare(getApiAuthV1UsersRequestConfig, requestData), ...args)
}

getApiAuthV1Users.requestConfig = getApiAuthV1UsersRequestConfig

/**
 * 接口 创建用户（已废弃加人能力） 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users`
 */
export interface PostApiAuthV1UsersRequest {
  /**
   * 手机号
   */
  phone?: string
  /**
   * 用户姓名
   */
  name?: string
  /**
   * 初始密码
   */
  password?: string
  /**
   * 角色ID列表
   */
  roleIds?: string[]
}

/**
 * 接口 创建用户（已废弃加人能力） 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users`
 */
export interface PostApiAuthV1UsersResponse {
  /**
   * 新建用户ID
   */
  id?: string
}

/**
 * 接口 创建用户（已废弃加人能力） 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users`
 */
type PostApiAuthV1UsersRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/users', undefined, string, string, false>
>

/**
 * 接口 创建用户（已废弃加人能力） 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users`
 */
const postApiAuthV1UsersRequestConfig: PostApiAuthV1UsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/users',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiAuthV1Users',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建用户（已废弃加人能力） 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users`
 */
export const postApiAuthV1Users = /*#__PURE__*/ (
  requestData: PostApiAuthV1UsersRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiAuthV1UsersResponse>(prepare(postApiAuthV1UsersRequestConfig, requestData), ...args)
}

postApiAuthV1Users.requestConfig = postApiAuthV1UsersRequestConfig

/**
 * 接口 查询用户详情 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users/{id}`
 */
export interface GetApiAuthV1UsersByIdRequest {
  /**
   * 用户ID
   */
  id: string
}

/**
 * 接口 查询用户详情 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users/{id}`
 */
export interface GetApiAuthV1UsersByIdResponse {
  /**
   * 用户ID
   */
  id?: string
  /**
   * 用户姓名
   */
  name?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 头像URL
   */
  avatar?: string
  /**
   * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
   */
  status?: number
  /**
   * 角色列表
   */
  roles?: {
    /**
     * 角色ID
     */
    id?: string
    /**
     * 角色名称
     */
    name?: string
    /**
     * 角色标识码
     */
    code?: string
  }[]
  /**
   * 创建时间
   */
  createdAt?: string
  /**
   * 更新时间
   */
  updatedAt?: string
}

/**
 * 接口 查询用户详情 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users/{id}`
 */
type GetApiAuthV1UsersByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/users/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询用户详情 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users/{id}`
 */
const getApiAuthV1UsersByIdRequestConfig: GetApiAuthV1UsersByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/users/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiAuthV1UsersById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询用户详情 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `GET /api/auth/v1/users/{id}`
 */
export const getApiAuthV1UsersById = /*#__PURE__*/ (
  requestData: GetApiAuthV1UsersByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiAuthV1UsersByIdResponse>(prepare(getApiAuthV1UsersByIdRequestConfig, requestData), ...args)
}

getApiAuthV1UsersById.requestConfig = getApiAuthV1UsersByIdRequestConfig

/**
 * 接口 删除用户 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_delete`
 */
export interface DeleteApiAuthV1UsersRequest {
  /**
   * 用户ID（路径参数）
   */
  id?: string
}

/**
 * 接口 删除用户 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_delete`
 */
export interface DeleteApiAuthV1UsersResponse {}

/**
 * 接口 删除用户 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_delete`
 */
type DeleteApiAuthV1UsersRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/users_delete', undefined, string, string, false>
>

/**
 * 接口 删除用户 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_delete`
 */
const deleteApiAuthV1UsersRequestConfig: DeleteApiAuthV1UsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/users_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiAuthV1Users',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 删除用户 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_delete`
 */
export const deleteApiAuthV1Users = /*#__PURE__*/ (
  requestData: DeleteApiAuthV1UsersRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiAuthV1UsersResponse>(prepare(deleteApiAuthV1UsersRequestConfig, requestData), ...args)
}

deleteApiAuthV1Users.requestConfig = deleteApiAuthV1UsersRequestConfig

/**
 * 接口 更新用户信息 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_put`
 */
export interface PutApiAuthV1UsersRequest {
  /**
   * 用户ID（路径参数）
   */
  id?: string
  /**
   * 用户姓名
   */
  name?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 头像URL
   */
  avatar?: string
  /**
   * 角色ID列表
   */
  roleIds?: string[]
}

/**
 * 接口 更新用户信息 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_put`
 */
export interface PutApiAuthV1UsersResponse {}

/**
 * 接口 更新用户信息 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_put`
 */
type PutApiAuthV1UsersRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/users_put', undefined, string, string, false>
>

/**
 * 接口 更新用户信息 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_put`
 */
const putApiAuthV1UsersRequestConfig: PutApiAuthV1UsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/users_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiAuthV1Users',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新用户信息 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/users_put`
 */
export const putApiAuthV1Users = /*#__PURE__*/ (
  requestData: PutApiAuthV1UsersRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiAuthV1UsersResponse>(prepare(putApiAuthV1UsersRequestConfig, requestData), ...args)
}

putApiAuthV1Users.requestConfig = putApiAuthV1UsersRequestConfig

/**
 * 接口 绑定微信 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/bind`
 */
export interface PostApiAuthV1WechatBindRequest {
  /**
   * 微信授权码
   */
  code?: string
}

/**
 * 接口 绑定微信 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/bind`
 */
export interface PostApiAuthV1WechatBindResponse {}

/**
 * 接口 绑定微信 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/bind`
 */
type PostApiAuthV1WechatBindRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/wechat/bind', undefined, string, string, false>
>

/**
 * 接口 绑定微信 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/bind`
 */
const postApiAuthV1WechatBindRequestConfig: PostApiAuthV1WechatBindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/wechat/bind',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiAuthV1WechatBind',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 绑定微信 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/bind`
 */
export const postApiAuthV1WechatBind = /*#__PURE__*/ (
  requestData: PostApiAuthV1WechatBindRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiAuthV1WechatBindResponse>(prepare(postApiAuthV1WechatBindRequestConfig, requestData), ...args)
}

postApiAuthV1WechatBind.requestConfig = postApiAuthV1WechatBindRequestConfig

/**
 * 接口 解绑微信 的 **请求类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/unbind_delete`
 */
export interface DeleteApiAuthV1WechatUnbindRequest {}

/**
 * 接口 解绑微信 的 **返回类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/unbind_delete`
 */
export interface DeleteApiAuthV1WechatUnbindResponse {}

/**
 * 接口 解绑微信 的 **请求配置的类型**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/unbind_delete`
 */
type DeleteApiAuthV1WechatUnbindRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/auth/v1/wechat/unbind_delete', undefined, string, string, true>
>

/**
 * 接口 解绑微信 的 **请求配置**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/unbind_delete`
 */
const deleteApiAuthV1WechatUnbindRequestConfig: DeleteApiAuthV1WechatUnbindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/auth/v1/wechat/unbind_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiAuthV1WechatUnbind',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 解绑微信 的 **请求函数**
 *
 * @分类 AuthService
 * @请求头 `POST /api/auth/v1/wechat/unbind_delete`
 */
export const deleteApiAuthV1WechatUnbind = /*#__PURE__*/ (
  requestData?: DeleteApiAuthV1WechatUnbindRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiAuthV1WechatUnbindResponse>(
    prepare(deleteApiAuthV1WechatUnbindRequestConfig, requestData),
    ...args,
  )
}

deleteApiAuthV1WechatUnbind.requestConfig = deleteApiAuthV1WechatUnbindRequestConfig

/**
 * 接口 查询菜品分类列表 的 **请求类型**
 *
 * @分类 DishCategoryService
 * @请求头 `GET /api/dish/v1/categories`
 */
export interface GetApiDishV1CategoriesRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示仅查询商户统一分类
   */
  storeId?: string
}

/**
 * 接口 查询菜品分类列表 的 **返回类型**
 *
 * @分类 DishCategoryService
 * @请求头 `GET /api/dish/v1/categories`
 */
export interface GetApiDishV1CategoriesResponse {
  /**
   * 分类列表
   */
  categories?: {
    /**
     * 分类ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID，0 表示商户统一分类
     */
    storeId?: string
    source?: 'DISH_SOURCE_UNSPECIFIED' | 'DISH_SOURCE_MERCHANT' | 'DISH_SOURCE_STORE'
    /**
     * 分类名称
     */
    name?: string
    /**
     * 排序值
     */
    sort?: number
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
  }[]
}

/**
 * 接口 查询菜品分类列表 的 **请求配置的类型**
 *
 * @分类 DishCategoryService
 * @请求头 `GET /api/dish/v1/categories`
 */
type GetApiDishV1CategoriesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/categories', undefined, string, 'merchantId' | 'storeId', false>
>

/**
 * 接口 查询菜品分类列表 的 **请求配置**
 *
 * @分类 DishCategoryService
 * @请求头 `GET /api/dish/v1/categories`
 */
const getApiDishV1CategoriesRequestConfig: GetApiDishV1CategoriesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/categories',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['merchantId', 'storeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiDishV1Categories',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询菜品分类列表 的 **请求函数**
 *
 * @分类 DishCategoryService
 * @请求头 `GET /api/dish/v1/categories`
 */
export const getApiDishV1Categories = /*#__PURE__*/ (
  requestData: GetApiDishV1CategoriesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiDishV1CategoriesResponse>(prepare(getApiDishV1CategoriesRequestConfig, requestData), ...args)
}

getApiDishV1Categories.requestConfig = getApiDishV1CategoriesRequestConfig

/**
 * 接口 创建菜品分类 的 **请求类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories`
 */
export interface PostApiDishV1CategoriesRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一分类
   */
  storeId?: string
  /**
   * 分类名称
   */
  name?: string
  /**
   * 排序值
   */
  sort?: number
}

/**
 * 接口 创建菜品分类 的 **返回类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories`
 */
export interface PostApiDishV1CategoriesResponse {
  /**
   * 分类ID
   */
  id?: string
}

/**
 * 接口 创建菜品分类 的 **请求配置的类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories`
 */
type PostApiDishV1CategoriesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/categories', undefined, string, string, false>
>

/**
 * 接口 创建菜品分类 的 **请求配置**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories`
 */
const postApiDishV1CategoriesRequestConfig: PostApiDishV1CategoriesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/categories',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiDishV1Categories',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建菜品分类 的 **请求函数**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories`
 */
export const postApiDishV1Categories = /*#__PURE__*/ (
  requestData: PostApiDishV1CategoriesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiDishV1CategoriesResponse>(prepare(postApiDishV1CategoriesRequestConfig, requestData), ...args)
}

postApiDishV1Categories.requestConfig = postApiDishV1CategoriesRequestConfig

/**
 * 接口 排序菜品分类 的 **请求类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories/sort_put`
 */
export interface PutApiDishV1CategoriesSortRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示排序商户统一分类
   */
  storeId?: string
  /**
   * 排序项列表
   */
  items?: {
    /**
     * 分类ID
     */
    id?: string
    /**
     * 排序值
     */
    sort?: number
  }[]
}

/**
 * 接口 排序菜品分类 的 **返回类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories/sort_put`
 */
export interface PutApiDishV1CategoriesSortResponse {}

/**
 * 接口 排序菜品分类 的 **请求配置的类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories/sort_put`
 */
type PutApiDishV1CategoriesSortRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/categories/sort_put', undefined, string, string, false>
>

/**
 * 接口 排序菜品分类 的 **请求配置**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories/sort_put`
 */
const putApiDishV1CategoriesSortRequestConfig: PutApiDishV1CategoriesSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/categories/sort_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiDishV1CategoriesSort',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 排序菜品分类 的 **请求函数**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories/sort_put`
 */
export const putApiDishV1CategoriesSort = /*#__PURE__*/ (
  requestData: PutApiDishV1CategoriesSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiDishV1CategoriesSortResponse>(
    prepare(putApiDishV1CategoriesSortRequestConfig, requestData),
    ...args,
  )
}

putApiDishV1CategoriesSort.requestConfig = putApiDishV1CategoriesSortRequestConfig

/**
 * 接口 删除菜品分类 的 **请求类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_delete`
 */
export interface DeleteApiDishV1CategoriesRequest {
  /**
   * 分类ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一分类
   */
  storeId?: string
}

/**
 * 接口 删除菜品分类 的 **返回类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_delete`
 */
export interface DeleteApiDishV1CategoriesResponse {}

/**
 * 接口 删除菜品分类 的 **请求配置的类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_delete`
 */
type DeleteApiDishV1CategoriesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/categories_delete', undefined, string, string, false>
>

/**
 * 接口 删除菜品分类 的 **请求配置**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_delete`
 */
const deleteApiDishV1CategoriesRequestConfig: DeleteApiDishV1CategoriesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/categories_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiDishV1Categories',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 删除菜品分类 的 **请求函数**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_delete`
 */
export const deleteApiDishV1Categories = /*#__PURE__*/ (
  requestData: DeleteApiDishV1CategoriesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiDishV1CategoriesResponse>(
    prepare(deleteApiDishV1CategoriesRequestConfig, requestData),
    ...args,
  )
}

deleteApiDishV1Categories.requestConfig = deleteApiDishV1CategoriesRequestConfig

/**
 * 接口 更新菜品分类 的 **请求类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_put`
 */
export interface PutApiDishV1CategoriesRequest {
  /**
   * 分类ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一分类
   */
  storeId?: string
  /**
   * 分类名称
   */
  name?: string
  /**
   * 排序值
   */
  sort?: number
}

/**
 * 接口 更新菜品分类 的 **返回类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_put`
 */
export interface PutApiDishV1CategoriesResponse {}

/**
 * 接口 更新菜品分类 的 **请求配置的类型**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_put`
 */
type PutApiDishV1CategoriesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/categories_put', undefined, string, string, false>
>

/**
 * 接口 更新菜品分类 的 **请求配置**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_put`
 */
const putApiDishV1CategoriesRequestConfig: PutApiDishV1CategoriesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/categories_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiDishV1Categories',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新菜品分类 的 **请求函数**
 *
 * @分类 DishCategoryService
 * @请求头 `POST /api/dish/v1/categories_put`
 */
export const putApiDishV1Categories = /*#__PURE__*/ (
  requestData: PutApiDishV1CategoriesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiDishV1CategoriesResponse>(prepare(putApiDishV1CategoriesRequestConfig, requestData), ...args)
}

putApiDishV1Categories.requestConfig = putApiDishV1CategoriesRequestConfig

/**
 * 接口 查询菜品标签列表 的 **请求类型**
 *
 * @分类 DishTagService
 * @请求头 `GET /api/dish/v1/tags`
 */
export interface GetApiDishV1TagsRequest {
  /**
   * 商户ID
   */
  merchantId?: string
}

/**
 * 接口 查询菜品标签列表 的 **返回类型**
 *
 * @分类 DishTagService
 * @请求头 `GET /api/dish/v1/tags`
 */
export interface GetApiDishV1TagsResponse {
  /**
   * 标签列表
   */
  tags?: {
    /**
     * 标签ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 标签名称
     */
    name?: string
    /**
     * 排序值
     */
    sort?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }[]
}

/**
 * 接口 查询菜品标签列表 的 **请求配置的类型**
 *
 * @分类 DishTagService
 * @请求头 `GET /api/dish/v1/tags`
 */
type GetApiDishV1TagsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/tags', undefined, string, 'merchantId', false>
>

/**
 * 接口 查询菜品标签列表 的 **请求配置**
 *
 * @分类 DishTagService
 * @请求头 `GET /api/dish/v1/tags`
 */
const getApiDishV1TagsRequestConfig: GetApiDishV1TagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/tags',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['merchantId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiDishV1Tags',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询菜品标签列表 的 **请求函数**
 *
 * @分类 DishTagService
 * @请求头 `GET /api/dish/v1/tags`
 */
export const getApiDishV1Tags = /*#__PURE__*/ (requestData: GetApiDishV1TagsRequest, ...args: UserRequestRestArgs) => {
  return request<GetApiDishV1TagsResponse>(prepare(getApiDishV1TagsRequestConfig, requestData), ...args)
}

getApiDishV1Tags.requestConfig = getApiDishV1TagsRequestConfig

/**
 * 接口 创建菜品标签 的 **请求类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags`
 */
export interface PostApiDishV1TagsRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 标签名称
   */
  name?: string
  /**
   * 排序值
   */
  sort?: number
}

/**
 * 接口 创建菜品标签 的 **返回类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags`
 */
export interface PostApiDishV1TagsResponse {
  /**
   * 标签ID
   */
  id?: string
}

/**
 * 接口 创建菜品标签 的 **请求配置的类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags`
 */
type PostApiDishV1TagsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/tags', undefined, string, string, false>
>

/**
 * 接口 创建菜品标签 的 **请求配置**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags`
 */
const postApiDishV1TagsRequestConfig: PostApiDishV1TagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/tags',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiDishV1Tags',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建菜品标签 的 **请求函数**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags`
 */
export const postApiDishV1Tags = /*#__PURE__*/ (
  requestData: PostApiDishV1TagsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiDishV1TagsResponse>(prepare(postApiDishV1TagsRequestConfig, requestData), ...args)
}

postApiDishV1Tags.requestConfig = postApiDishV1TagsRequestConfig

/**
 * 接口 删除菜品标签 的 **请求类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_delete`
 */
export interface DeleteApiDishV1TagsRequest {
  /**
   * 标签ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
}

/**
 * 接口 删除菜品标签 的 **返回类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_delete`
 */
export interface DeleteApiDishV1TagsResponse {}

/**
 * 接口 删除菜品标签 的 **请求配置的类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_delete`
 */
type DeleteApiDishV1TagsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/tags_delete', undefined, string, string, false>
>

/**
 * 接口 删除菜品标签 的 **请求配置**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_delete`
 */
const deleteApiDishV1TagsRequestConfig: DeleteApiDishV1TagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/tags_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiDishV1Tags',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 删除菜品标签 的 **请求函数**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_delete`
 */
export const deleteApiDishV1Tags = /*#__PURE__*/ (
  requestData: DeleteApiDishV1TagsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiDishV1TagsResponse>(prepare(deleteApiDishV1TagsRequestConfig, requestData), ...args)
}

deleteApiDishV1Tags.requestConfig = deleteApiDishV1TagsRequestConfig

/**
 * 接口 更新菜品标签 的 **请求类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_put`
 */
export interface PutApiDishV1TagsRequest {
  /**
   * 标签ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 标签名称
   */
  name?: string
  /**
   * 排序值
   */
  sort?: number
}

/**
 * 接口 更新菜品标签 的 **返回类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_put`
 */
export interface PutApiDishV1TagsResponse {}

/**
 * 接口 更新菜品标签 的 **请求配置的类型**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_put`
 */
type PutApiDishV1TagsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/tags_put', undefined, string, string, false>
>

/**
 * 接口 更新菜品标签 的 **请求配置**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_put`
 */
const putApiDishV1TagsRequestConfig: PutApiDishV1TagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/tags_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiDishV1Tags',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新菜品标签 的 **请求函数**
 *
 * @分类 DishTagService
 * @请求头 `POST /api/dish/v1/tags_put`
 */
export const putApiDishV1Tags = /*#__PURE__*/ (requestData: PutApiDishV1TagsRequest, ...args: UserRequestRestArgs) => {
  return request<PutApiDishV1TagsResponse>(prepare(putApiDishV1TagsRequestConfig, requestData), ...args)
}

putApiDishV1Tags.requestConfig = putApiDishV1TagsRequestConfig

/**
 * 接口 查询菜品列表 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes`
 */
export interface GetApiDishV1DishesRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示查询商户统一菜品
   */
  storeId?: string
  /**
   * 分类ID，0 表示全部
   */
  categoryId?: string
  /**
   * 上下架筛选
   */
  onShelfFilter?: string
  /**
   * 标签ID，0 表示全部
   */
  tagId?: string
}

/**
 * 接口 查询菜品列表 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes`
 */
export interface GetApiDishV1DishesResponse {
  /**
   * 菜品列表
   */
  dishes?: {
    /**
     * 菜品ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID，门店视图下为当前门店ID，商户视图下为 0
     */
    storeId?: string
    source?: 'DISH_SOURCE_UNSPECIFIED' | 'DISH_SOURCE_MERCHANT' | 'DISH_SOURCE_STORE'
    /**
     * 菜品名称
     */
    name?: string
    /**
     * 菜品简介
     */
    intro?: string
    /**
     * 首图 URL
     */
    imageUrl?: string
    /**
     * 基准价格（分）
     */
    basePrice?: string
    /**
     * 当前视图价格（分）
     */
    price?: string
    /**
     * 是否使用门店自定义价格
     */
    useCustomPrice?: boolean
    /**
     * 当前门店是否已引入
     */
    imported?: boolean
    /**
     * 是否允许编辑名称/图片/描述
     */
    editableBasic?: boolean
    /**
     * 当前门店上下架状态
     */
    isOnShelf?: boolean
    /**
     * 销量
     */
    sales?: number
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 所属分类
     */
    categories?: {
      /**
       * 分类ID
       */
      id?: string
      /**
       * 分类名称
       */
      name?: string
    }[]
    /**
     * 已引入门店数，仅商户视图有效
     */
    importedStoreCount?: number
    /**
     * 自定义价格门店数，仅商户视图有效
     */
    customPriceStoreCount?: number
    /**
     * 售卖单位
     */
    unit?: string
    /**
     * 最小起购数量
     */
    minQuantity?: number
    /**
     * 数量递增步长，0 表示不限制步长
     */
    quantityStep?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    productType?: 'DISH_PRODUCT_TYPE_UNSPECIFIED' | 'DISH_PRODUCT_TYPE_NORMAL' | 'DISH_PRODUCT_TYPE_COMBO'
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询菜品列表 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes`
 */
type GetApiDishV1DishesRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/dish/v1/dishes',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'categoryId' | 'onShelfFilter' | 'tagId',
    false
  >
>

/**
 * 接口 查询菜品列表 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes`
 */
const getApiDishV1DishesRequestConfig: GetApiDishV1DishesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [
    'pageRequest.page',
    'pageRequest.pageSize',
    'merchantId',
    'storeId',
    'categoryId',
    'onShelfFilter',
    'tagId',
  ],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiDishV1Dishes',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询菜品列表 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes`
 */
export const getApiDishV1Dishes = /*#__PURE__*/ (
  requestData: GetApiDishV1DishesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiDishV1DishesResponse>(prepare(getApiDishV1DishesRequestConfig, requestData), ...args)
}

getApiDishV1Dishes.requestConfig = getApiDishV1DishesRequestConfig

/**
 * 接口 创建菜品 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes`
 */
export interface PostApiDishV1DishesRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示创建商户统一菜品
   */
  storeId?: string
  /**
   * 菜品名称
   */
  name?: string
  /**
   * 菜品描述
   */
  description?: string
  /**
   * 菜品简介
   */
  intro?: string
  /**
   * 基准价格（分）
   */
  price?: string
  /**
   * 初始上架状态，仅门店自建菜品生效
   */
  isOnShelf?: boolean
  imageUrls?: string[]
  categoryIds?: string[]
  tagIds?: string[]
  /**
   * 售卖单位
   */
  unit?: string
  /**
   * 最小起购数量
   */
  minQuantity?: number
  /**
   * 数量递增步长，0 表示不限制步长
   */
  quantityStep?: number
  productType?: 'DISH_PRODUCT_TYPE_UNSPECIFIED' | 'DISH_PRODUCT_TYPE_NORMAL' | 'DISH_PRODUCT_TYPE_COMBO'
}

/**
 * 接口 创建菜品 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes`
 */
export interface PostApiDishV1DishesResponse {
  /**
   * 菜品ID
   */
  id?: string
}

/**
 * 接口 创建菜品 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes`
 */
type PostApiDishV1DishesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/dishes', undefined, string, string, false>
>

/**
 * 接口 创建菜品 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes`
 */
const postApiDishV1DishesRequestConfig: PostApiDishV1DishesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiDishV1Dishes',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建菜品 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes`
 */
export const postApiDishV1Dishes = /*#__PURE__*/ (
  requestData: PostApiDishV1DishesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiDishV1DishesResponse>(prepare(postApiDishV1DishesRequestConfig, requestData), ...args)
}

postApiDishV1Dishes.requestConfig = postApiDishV1DishesRequestConfig

/**
 * 接口 门店引入商户统一菜品 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/import`
 */
export interface PostApiDishV1DishesImportRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  dishIds?: string[]
}

/**
 * 接口 门店引入商户统一菜品 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/import`
 */
export interface PostApiDishV1DishesImportResponse {}

/**
 * 接口 门店引入商户统一菜品 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/import`
 */
type PostApiDishV1DishesImportRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/dishes/import', undefined, string, string, false>
>

/**
 * 接口 门店引入商户统一菜品 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/import`
 */
const postApiDishV1DishesImportRequestConfig: PostApiDishV1DishesImportRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes/import',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiDishV1DishesImport',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 门店引入商户统一菜品 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/import`
 */
export const postApiDishV1DishesImport = /*#__PURE__*/ (
  requestData: PostApiDishV1DishesImportRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiDishV1DishesImportResponse>(
    prepare(postApiDishV1DishesImportRequestConfig, requestData),
    ...args,
  )
}

postApiDishV1DishesImport.requestConfig = postApiDishV1DishesImportRequestConfig

/**
 * 接口 下架菜品 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/offShelf_put`
 */
export interface PutApiDishV1DishesOffShelfRequest {
  /**
   * 菜品ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 下架菜品 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/offShelf_put`
 */
export interface PutApiDishV1DishesOffShelfResponse {}

/**
 * 接口 下架菜品 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/offShelf_put`
 */
type PutApiDishV1DishesOffShelfRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/dishes/offShelf_put', undefined, string, string, false>
>

/**
 * 接口 下架菜品 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/offShelf_put`
 */
const putApiDishV1DishesOffShelfRequestConfig: PutApiDishV1DishesOffShelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes/offShelf_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiDishV1DishesOffShelf',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 下架菜品 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/offShelf_put`
 */
export const putApiDishV1DishesOffShelf = /*#__PURE__*/ (
  requestData: PutApiDishV1DishesOffShelfRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiDishV1DishesOffShelfResponse>(
    prepare(putApiDishV1DishesOffShelfRequestConfig, requestData),
    ...args,
  )
}

putApiDishV1DishesOffShelf.requestConfig = putApiDishV1DishesOffShelfRequestConfig

/**
 * 接口 上架菜品 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/onShelf_put`
 */
export interface PutApiDishV1DishesOnShelfRequest {
  /**
   * 菜品ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 上架菜品 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/onShelf_put`
 */
export interface PutApiDishV1DishesOnShelfResponse {}

/**
 * 接口 上架菜品 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/onShelf_put`
 */
type PutApiDishV1DishesOnShelfRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/dishes/onShelf_put', undefined, string, string, false>
>

/**
 * 接口 上架菜品 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/onShelf_put`
 */
const putApiDishV1DishesOnShelfRequestConfig: PutApiDishV1DishesOnShelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes/onShelf_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiDishV1DishesOnShelf',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 上架菜品 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/onShelf_put`
 */
export const putApiDishV1DishesOnShelf = /*#__PURE__*/ (
  requestData: PutApiDishV1DishesOnShelfRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiDishV1DishesOnShelfResponse>(
    prepare(putApiDishV1DishesOnShelfRequestConfig, requestData),
    ...args,
  )
}

putApiDishV1DishesOnShelf.requestConfig = putApiDishV1DishesOnShelfRequestConfig

/**
 * 接口 更新门店菜品价格 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/price_put`
 */
export interface PutApiDishV1DishesPriceRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 菜品ID
   */
  dishId?: string
  /**
   * 是否恢复为跟随基准价
   */
  followBasePrice?: boolean
  /**
   * 自定义价格（分），followBasePrice=false 时必须大于 0
   */
  price?: string
}

/**
 * 接口 更新门店菜品价格 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/price_put`
 */
export interface PutApiDishV1DishesPriceResponse {}

/**
 * 接口 更新门店菜品价格 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/price_put`
 */
type PutApiDishV1DishesPriceRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/dishes/price_put', undefined, string, string, false>
>

/**
 * 接口 更新门店菜品价格 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/price_put`
 */
const putApiDishV1DishesPriceRequestConfig: PutApiDishV1DishesPriceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes/price_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiDishV1DishesPrice',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新门店菜品价格 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes/price_put`
 */
export const putApiDishV1DishesPrice = /*#__PURE__*/ (
  requestData: PutApiDishV1DishesPriceRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiDishV1DishesPriceResponse>(prepare(putApiDishV1DishesPriceRequestConfig, requestData), ...args)
}

putApiDishV1DishesPrice.requestConfig = putApiDishV1DishesPriceRequestConfig

/**
 * 接口 查询菜品详情 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes/{id}`
 */
export interface GetApiDishV1DishesByIdRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示查询商户统一菜品详情
   */
  storeId?: string
  /**
   * 菜品ID
   */
  id: string
}

/**
 * 接口 查询菜品详情 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes/{id}`
 */
export interface GetApiDishV1DishesByIdResponse {
  /**
   * 菜品详情。
   */
  dish?: {
    /**
     * 菜品ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID，门店视图下为当前门店ID，商户视图下为 0
     */
    storeId?: string
    source?: 'DISH_SOURCE_UNSPECIFIED' | 'DISH_SOURCE_MERCHANT' | 'DISH_SOURCE_STORE'
    /**
     * 菜品名称
     */
    name?: string
    /**
     * 菜品描述
     */
    description?: string
    /**
     * 菜品简介
     */
    intro?: string
    /**
     * 基准价格（分）
     */
    basePrice?: string
    /**
     * 当前视图价格（分）
     */
    price?: string
    /**
     * 是否使用门店自定义价格
     */
    useCustomPrice?: boolean
    /**
     * 当前门店是否已引入
     */
    imported?: boolean
    /**
     * 是否允许编辑名称/图片/描述
     */
    editableBasic?: boolean
    /**
     * 当前门店上下架状态
     */
    isOnShelf?: boolean
    /**
     * 销量
     */
    sales?: number
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * 图片 URL 列表
     */
    imageUrls?: string[]
    /**
     * 所属分类
     */
    categories?: {
      /**
       * 分类ID
       */
      id?: string
      /**
       * 分类名称
       */
      name?: string
    }[]
    /**
     * 关联标签
     */
    tags?: {
      /**
       * 标签ID
       */
      id?: string
      /**
       * 标签名称
       */
      name?: string
    }[]
    /**
     * 已引入门店数，仅商户视图有效
     */
    importedStoreCount?: number
    /**
     * 自定义价格门店数，仅商户视图有效
     */
    customPriceStoreCount?: number
    /**
     * 售卖单位
     */
    unit?: string
    /**
     * 最小起购数量
     */
    minQuantity?: number
    /**
     * 数量递增步长，0 表示不限制步长
     */
    quantityStep?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    productType?: 'DISH_PRODUCT_TYPE_UNSPECIFIED' | 'DISH_PRODUCT_TYPE_NORMAL' | 'DISH_PRODUCT_TYPE_COMBO'
  }
}

/**
 * 接口 查询菜品详情 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes/{id}`
 */
type GetApiDishV1DishesByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/dishes/{id}', undefined, 'id', 'merchantId' | 'storeId', false>
>

/**
 * 接口 查询菜品详情 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes/{id}`
 */
const getApiDishV1DishesByIdRequestConfig: GetApiDishV1DishesByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: ['merchantId', 'storeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiDishV1DishesById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询菜品详情 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `GET /api/dish/v1/dishes/{id}`
 */
export const getApiDishV1DishesById = /*#__PURE__*/ (
  requestData: GetApiDishV1DishesByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiDishV1DishesByIdResponse>(prepare(getApiDishV1DishesByIdRequestConfig, requestData), ...args)
}

getApiDishV1DishesById.requestConfig = getApiDishV1DishesByIdRequestConfig

/**
 * 接口 删除菜品 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_delete`
 */
export interface DeleteApiDishV1DishesRequest {
  /**
   * 菜品ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一菜品删除
   */
  storeId?: string
}

/**
 * 接口 删除菜品 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_delete`
 */
export interface DeleteApiDishV1DishesResponse {}

/**
 * 接口 删除菜品 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_delete`
 */
type DeleteApiDishV1DishesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/dishes_delete', undefined, string, string, false>
>

/**
 * 接口 删除菜品 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_delete`
 */
const deleteApiDishV1DishesRequestConfig: DeleteApiDishV1DishesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiDishV1Dishes',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 删除菜品 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_delete`
 */
export const deleteApiDishV1Dishes = /*#__PURE__*/ (
  requestData: DeleteApiDishV1DishesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiDishV1DishesResponse>(prepare(deleteApiDishV1DishesRequestConfig, requestData), ...args)
}

deleteApiDishV1Dishes.requestConfig = deleteApiDishV1DishesRequestConfig

/**
 * 接口 更新菜品 的 **请求类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_put`
 */
export interface PutApiDishV1DishesRequest {
  /**
   * 菜品ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一菜品
   */
  storeId?: string
  /**
   * 菜品名称
   */
  name?: string
  /**
   * 菜品描述
   */
  description?: string
  /**
   * 菜品简介
   */
  intro?: string
  /**
   * 基准价格（分），门店自建菜品更新基础信息时可传 0
   */
  price?: string
  imageUrls?: string[]
  categoryIds?: string[]
  tagIds?: string[]
  /**
   * 商户更新基准价时是否同步全部门店为跟随基准价
   */
  syncStorePrices?: boolean
  /**
   * 售卖单位
   */
  unit?: string
  /**
   * 最小起购数量
   */
  minQuantity?: number
  /**
   * 数量递增步长，0 表示不限制步长
   */
  quantityStep?: number
  productType?: 'DISH_PRODUCT_TYPE_UNSPECIFIED' | 'DISH_PRODUCT_TYPE_NORMAL' | 'DISH_PRODUCT_TYPE_COMBO'
}

/**
 * 接口 更新菜品 的 **返回类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_put`
 */
export interface PutApiDishV1DishesResponse {}

/**
 * 接口 更新菜品 的 **请求配置的类型**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_put`
 */
type PutApiDishV1DishesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/dishes_put', undefined, string, string, false>
>

/**
 * 接口 更新菜品 的 **请求配置**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_put`
 */
const putApiDishV1DishesRequestConfig: PutApiDishV1DishesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/dishes_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiDishV1Dishes',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新菜品 的 **请求函数**
 *
 * @分类 DishService
 * @请求头 `POST /api/dish/v1/dishes_put`
 */
export const putApiDishV1Dishes = /*#__PURE__*/ (
  requestData: PutApiDishV1DishesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiDishV1DishesResponse>(prepare(putApiDishV1DishesRequestConfig, requestData), ...args)
}

putApiDishV1Dishes.requestConfig = putApiDishV1DishesRequestConfig

/**
 * 接口 查询套餐配置列表 的 **请求类型**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos`
 */
export interface GetApiDishV1CombosRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一套餐
   */
  storeId?: string
}

/**
 * 接口 查询套餐配置列表 的 **返回类型**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos`
 */
export interface GetApiDishV1CombosResponse {
  /**
   * 套餐配置列表
   */
  combos?: {
    /**
     * 套餐菜品ID
     */
    comboDishId?: string
    /**
     * 分组数量
     */
    groupCount?: number
    /**
     * 状态：enabled=启用，disabled=禁用
     */
    status?: string
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询套餐配置列表 的 **请求配置的类型**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos`
 */
type GetApiDishV1CombosRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/dish/v1/combos',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId',
    false
  >
>

/**
 * 接口 查询套餐配置列表 的 **请求配置**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos`
 */
const getApiDishV1CombosRequestConfig: GetApiDishV1CombosRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/combos',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiDishV1Combos',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询套餐配置列表 的 **请求函数**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos`
 */
export const getApiDishV1Combos = /*#__PURE__*/ (
  requestData: GetApiDishV1CombosRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiDishV1CombosResponse>(prepare(getApiDishV1CombosRequestConfig, requestData), ...args)
}

getApiDishV1Combos.requestConfig = getApiDishV1CombosRequestConfig

/**
 * 接口 创建套餐配置 的 **请求类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos`
 */
export interface PostApiDishV1CombosRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一套餐
   */
  storeId?: string
  /**
   * 套餐菜品ID
   */
  comboDishId?: string
  /**
   * 分组配置
   */
  groups?: {
    /**
     * 分组名称
     */
    name?: string
    /**
     * 是否必选
     */
    required?: boolean
    /**
     * 最小选择数量
     */
    minSelect?: number
    /**
     * 最大选择数量
     */
    maxSelect?: number
    /**
     * 排序值
     */
    sort?: number
    /**
     * 选项列表
     */
    items?: {
      /**
       * 选项菜品ID
       */
      dishId?: string
      /**
       * 选项消耗数量
       */
      quantity?: number
      /**
       * 加价金额（分）
       */
      extraPrice?: string
      /**
       * 是否默认选项
       */
      default?: boolean
      /**
       * 排序值
       */
      sort?: number
    }[]
  }[]
}

/**
 * 接口 创建套餐配置 的 **返回类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos`
 */
export interface PostApiDishV1CombosResponse {}

/**
 * 接口 创建套餐配置 的 **请求配置的类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos`
 */
type PostApiDishV1CombosRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/combos', undefined, string, string, false>
>

/**
 * 接口 创建套餐配置 的 **请求配置**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos`
 */
const postApiDishV1CombosRequestConfig: PostApiDishV1CombosRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/combos',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiDishV1Combos',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建套餐配置 的 **请求函数**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos`
 */
export const postApiDishV1Combos = /*#__PURE__*/ (
  requestData: PostApiDishV1CombosRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiDishV1CombosResponse>(prepare(postApiDishV1CombosRequestConfig, requestData), ...args)
}

postApiDishV1Combos.requestConfig = postApiDishV1CombosRequestConfig

/**
 * 接口 禁用套餐配置 的 **请求类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/disable`
 */
export interface PostApiDishV1CombosDisableRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一套餐
   */
  storeId?: string
  /**
   * 套餐菜品ID
   */
  comboDishId?: string
}

/**
 * 接口 禁用套餐配置 的 **返回类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/disable`
 */
export interface PostApiDishV1CombosDisableResponse {}

/**
 * 接口 禁用套餐配置 的 **请求配置的类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/disable`
 */
type PostApiDishV1CombosDisableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/combos/disable', undefined, string, string, false>
>

/**
 * 接口 禁用套餐配置 的 **请求配置**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/disable`
 */
const postApiDishV1CombosDisableRequestConfig: PostApiDishV1CombosDisableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/combos/disable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiDishV1CombosDisable',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 禁用套餐配置 的 **请求函数**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/disable`
 */
export const postApiDishV1CombosDisable = /*#__PURE__*/ (
  requestData: PostApiDishV1CombosDisableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiDishV1CombosDisableResponse>(
    prepare(postApiDishV1CombosDisableRequestConfig, requestData),
    ...args,
  )
}

postApiDishV1CombosDisable.requestConfig = postApiDishV1CombosDisableRequestConfig

/**
 * 接口 启用套餐配置 的 **请求类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/enable`
 */
export interface PostApiDishV1CombosEnableRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一套餐
   */
  storeId?: string
  /**
   * 套餐菜品ID
   */
  comboDishId?: string
}

/**
 * 接口 启用套餐配置 的 **返回类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/enable`
 */
export interface PostApiDishV1CombosEnableResponse {}

/**
 * 接口 启用套餐配置 的 **请求配置的类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/enable`
 */
type PostApiDishV1CombosEnableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/combos/enable', undefined, string, string, false>
>

/**
 * 接口 启用套餐配置 的 **请求配置**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/enable`
 */
const postApiDishV1CombosEnableRequestConfig: PostApiDishV1CombosEnableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/combos/enable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiDishV1CombosEnable',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 启用套餐配置 的 **请求函数**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos/enable`
 */
export const postApiDishV1CombosEnable = /*#__PURE__*/ (
  requestData: PostApiDishV1CombosEnableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiDishV1CombosEnableResponse>(
    prepare(postApiDishV1CombosEnableRequestConfig, requestData),
    ...args,
  )
}

postApiDishV1CombosEnable.requestConfig = postApiDishV1CombosEnableRequestConfig

/**
 * 接口 查询套餐配置详情 的 **请求类型**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos/{comboDishId}`
 */
export interface GetApiDishV1CombosByComboDishIdRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一套餐
   */
  storeId?: string
  /**
   * 套餐菜品ID
   */
  comboDishId: string
}

/**
 * 接口 查询套餐配置详情 的 **返回类型**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos/{comboDishId}`
 */
export interface GetApiDishV1CombosByComboDishIdResponse {
  /**
   * 套餐菜品ID
   */
  comboDishId?: string
  /**
   * 分组列表
   */
  groups?: {
    /**
     * 分组ID
     */
    id?: string
    /**
     * 分组名称
     */
    name?: string
    /**
     * 是否必选
     */
    required?: boolean
    /**
     * 最小选择数量
     */
    minSelect?: number
    /**
     * 最大选择数量
     */
    maxSelect?: number
    /**
     * 排序值
     */
    sort?: number
    /**
     * 状态：enabled=启用，disabled=禁用
     */
    status?: string
    /**
     * 选项列表
     */
    items?: {
      /**
       * 选项ID
       */
      id?: string
      /**
       * 选项菜品ID
       */
      dishId?: string
      /**
       * 选项消耗数量
       */
      quantity?: number
      /**
       * 加价金额（分）
       */
      extraPrice?: string
      /**
       * 是否默认选项
       */
      default?: boolean
      /**
       * 排序值
       */
      sort?: number
      /**
       * 状态：enabled=启用，disabled=禁用
       */
      status?: string
    }[]
  }[]
}

/**
 * 接口 查询套餐配置详情 的 **请求配置的类型**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos/{comboDishId}`
 */
type GetApiDishV1CombosByComboDishIdRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/dish/v1/combos/{comboDishId}',
    undefined,
    'comboDishId',
    'merchantId' | 'storeId',
    false
  >
>

/**
 * 接口 查询套餐配置详情 的 **请求配置**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos/{comboDishId}`
 */
const getApiDishV1CombosByComboDishIdRequestConfig: GetApiDishV1CombosByComboDishIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/combos/{comboDishId}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['comboDishId'],
  queryNames: ['merchantId', 'storeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiDishV1CombosByComboDishId',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询套餐配置详情 的 **请求函数**
 *
 * @分类 DishComboService
 * @请求头 `GET /api/dish/v1/combos/{comboDishId}`
 */
export const getApiDishV1CombosByComboDishId = /*#__PURE__*/ (
  requestData: GetApiDishV1CombosByComboDishIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiDishV1CombosByComboDishIdResponse>(
    prepare(getApiDishV1CombosByComboDishIdRequestConfig, requestData),
    ...args,
  )
}

getApiDishV1CombosByComboDishId.requestConfig = getApiDishV1CombosByComboDishIdRequestConfig

/**
 * 接口 更新套餐配置 的 **请求类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos_put`
 */
export interface PutApiDishV1CombosRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0 表示商户统一套餐
   */
  storeId?: string
  /**
   * 套餐菜品ID
   */
  comboDishId?: string
  /**
   * 分组配置
   */
  groups?: {
    /**
     * 分组名称
     */
    name?: string
    /**
     * 是否必选
     */
    required?: boolean
    /**
     * 最小选择数量
     */
    minSelect?: number
    /**
     * 最大选择数量
     */
    maxSelect?: number
    /**
     * 排序值
     */
    sort?: number
    /**
     * 选项列表
     */
    items?: {
      /**
       * 选项菜品ID
       */
      dishId?: string
      /**
       * 选项消耗数量
       */
      quantity?: number
      /**
       * 加价金额（分）
       */
      extraPrice?: string
      /**
       * 是否默认选项
       */
      default?: boolean
      /**
       * 排序值
       */
      sort?: number
    }[]
  }[]
}

/**
 * 接口 更新套餐配置 的 **返回类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos_put`
 */
export interface PutApiDishV1CombosResponse {}

/**
 * 接口 更新套餐配置 的 **请求配置的类型**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos_put`
 */
type PutApiDishV1CombosRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/dish/v1/combos_put', undefined, string, string, false>
>

/**
 * 接口 更新套餐配置 的 **请求配置**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos_put`
 */
const putApiDishV1CombosRequestConfig: PutApiDishV1CombosRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/dish/v1/combos_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiDishV1Combos',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新套餐配置 的 **请求函数**
 *
 * @分类 DishComboService
 * @请求头 `POST /api/dish/v1/combos_put`
 */
export const putApiDishV1Combos = /*#__PURE__*/ (
  requestData: PutApiDishV1CombosRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiDishV1CombosResponse>(prepare(putApiDishV1CombosRequestConfig, requestData), ...args)
}

putApiDishV1Combos.requestConfig = putApiDishV1CombosRequestConfig

/**
 * 接口 查询订单列表 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders`
 */
export interface GetApiOrderV1OrdersRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID（可选筛选）
   */
  merchantId?: string
  /**
   * 门店ID（可选筛选）
   */
  storeId?: string
  /**
   * 订单状态筛选（可选）：pending=待支付，paid=已支付，completed=已完成，cancelled=已取消
   */
  status?: string
  /**
   * 订单类型筛选（可选）：consume=消费订单，recharge=充值订单；不传返回全部类型
   */
  orderType?: string
}

/**
 * 接口 查询订单列表 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders`
 */
export interface GetApiOrderV1OrdersResponse {
  /**
   * 订单列表
   */
  orders?: {
    /**
     * 订单ID
     */
    id?: string
    /**
     * 订单号
     */
    orderNo?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 订单总金额（分）
     */
    totalAmount?: string
    /**
     * 订单状态：pending=待支付，paid=已支付，completed=已完成，cancelled=已取消。
     */
    status?: string
    /**
     * 支付时间
     */
    paidAt?: string
    /**
     * 完成时间
     */
    completedAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 退款状态：none=无退款，pending=退款中，approved=已同意，rejected=已驳回，completed=已完成，failed=退款失败。
     */
    refundStatus?: string
    /**
     * 退款金额（分，预留字段）
     */
    refundAmount?: string
    /**
     * 支付方式：wechat=微信支付，gold=钱包金币支付。
     */
    paymentMethod?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业流水号
     */
    dailySeq?: string
    /**
     * 订单原价金额（分）
     */
    originalAmount?: string
    /**
     * 订单优惠金额（分）
     */
    discountAmount?: string
    /**
     * 订单应付金额（分）
     */
    payableAmount?: string
    /**
     * 订单使用的会员券ID
     */
    memberCouponId?: string
    /**
     * 订单促销摘要列表
     */
    promotions?: {
      /**
       * 促销类型：coupon=优惠券，discount=自动折扣。
       */
      promotionType?: string
      /**
       * 促销ID
       */
      promotionId?: string
      /**
       * 会员券ID
       */
      memberCouponId?: string
      /**
       * 促销名称
       */
      name?: string
      /**
       * 优惠金额（分）
       */
      discountAmount?: string
      /**
       * 状态：locked=已锁定，used=已核销，released=已释放，voided=已作废。
       */
      status?: string
    }[]
    /**
     * 订单类型：consume=消费订单，recharge=充值订单。
     */
    orderType?: string
    /**
     * OrderRechargeSummary 充值订单摘要；仅充值订单返回，消费订单为空。
     */
    rechargeSummary?: {
      /**
       * 充值金额（分）
       */
      rechargeAmount?: string
      /**
       * 到账金币数量
       */
      goldAmount?: string
      /**
       * 营销规则ID，0 表示未命中
       */
      marketingRuleId?: string
      /**
       * 营销规则是否执行成功
       */
      marketingSuccess?: boolean
      /**
       * 执行成功的充值奖励规则摘要列表
       */
      rewardRules?: {
        /**
         * 充值奖励配置ID
         */
        id?: string
        /**
         * 内部营销规则ID
         */
        ruleId?: string
        /**
         * 奖励规则名称
         */
        name?: string
        /**
         * 奖励规则说明
         */
        description?: string
        /**
         * 首充限制范围：none=不限制，lifetime=终身首充，monthly=每月首充
         */
        firstChargeScope?: string
        /**
         * 奖励阶梯摘要
         */
        tiers?: {
          /**
           * 阶梯ID
           */
          id?: string
          /**
           * 最低充值金额，单位分
           */
          minAmount?: string
          /**
           * 最高充值金额，单位分，0 表示不限制
           */
          maxAmount?: string
          /**
           * 积分倍数，前端可直接展示，如 1、1.5、2
           */
          pointsMultiplier?: string
          /**
           * 固定赠送积分
           */
          fixedPoints?: string
          /**
           * 奖励优惠券模板ID，0 表示不发券
           */
          couponTemplateId?: string
          /**
           * 发券数量
           */
          couponQuantity?: number
          /**
           * 优先级
           */
          priority?: number
          /**
           * 多种优惠券奖励列表
           */
          couponRewards?: {
            /**
             * 奖励优惠券模板ID
             */
            couponTemplateId?: string
            /**
             * 发券数量
             */
            quantity?: number
          }[]
        }[]
      }[]
    }
    /**
     * 订单菜品明细；消费订单返回，充值订单为空
     */
    items?: {
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称（冗余）
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * 原价小计（分）
       */
      originalSubtotal?: string
      /**
       * 优惠金额（分）
       */
      discountAmount?: string
      /**
       * 应付小计（分）
       */
      payableSubtotal?: string
      /**
       * 套餐选择快照，仅套餐商品行返回
       */
      comboSnapshots?: {
        /**
         * 套餐菜品ID
         */
        comboDishId?: string
        /**
         * 套餐分组ID
         */
        groupId?: string
        /**
         * 分组名称快照
         */
        groupName?: string
        /**
         * 分组是否必选
         */
        groupRequired?: boolean
        /**
         * 分组最少选择数量
         */
        minSelect?: number
        /**
         * 分组最多选择数量
         */
        maxSelect?: number
        /**
         * 套餐选项ID
         */
        optionId?: string
        /**
         * 选项菜品ID
         */
        dishId?: string
        /**
         * 选项菜品名称快照
         */
        dishName?: string
        /**
         * 选项数量快照
         */
        quantity?: number
        /**
         * 选项加价（分）
         */
        extraPrice?: string
        /**
         * 是否默认选项
         */
        default?: boolean
      }[]
    }[]
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询订单列表 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders`
 */
type GetApiOrderV1OrdersRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/order/v1/orders',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'status' | 'orderType',
    false
  >
>

/**
 * 接口 查询订单列表 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders`
 */
const getApiOrderV1OrdersRequestConfig: GetApiOrderV1OrdersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/orders',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId', 'status', 'orderType'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiOrderV1Orders',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询订单列表 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders`
 */
export const getApiOrderV1Orders = /*#__PURE__*/ (
  requestData: GetApiOrderV1OrdersRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiOrderV1OrdersResponse>(prepare(getApiOrderV1OrdersRequestConfig, requestData), ...args)
}

getApiOrderV1Orders.requestConfig = getApiOrderV1OrdersRequestConfig

/**
 * 接口 批量完成订单 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/batchComplete_put`
 */
export interface PutApiOrderV1OrdersBatchCompleteRequest {
  /**
   * 订单ID列表
   */
  ids?: string[]
}

/**
 * 接口 批量完成订单 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/batchComplete_put`
 */
export interface PutApiOrderV1OrdersBatchCompleteResponse {
  /**
   * 本次成功完成的订单数量
   */
  successCount?: number
  /**
   * 本次成功完成的订单ID列表
   */
  completedIds?: string[]
}

/**
 * 接口 批量完成订单 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/batchComplete_put`
 */
type PutApiOrderV1OrdersBatchCompleteRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/orders/batchComplete_put', undefined, string, string, false>
>

/**
 * 接口 批量完成订单 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/batchComplete_put`
 */
const putApiOrderV1OrdersBatchCompleteRequestConfig: PutApiOrderV1OrdersBatchCompleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/orders/batchComplete_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiOrderV1OrdersBatchComplete',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 批量完成订单 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/batchComplete_put`
 */
export const putApiOrderV1OrdersBatchComplete = /*#__PURE__*/ (
  requestData: PutApiOrderV1OrdersBatchCompleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiOrderV1OrdersBatchCompleteResponse>(
    prepare(putApiOrderV1OrdersBatchCompleteRequestConfig, requestData),
    ...args,
  )
}

putApiOrderV1OrdersBatchComplete.requestConfig = putApiOrderV1OrdersBatchCompleteRequestConfig

/**
 * 接口 完成订单 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/complete_put`
 */
export interface PutApiOrderV1OrdersCompleteRequest {
  /**
   * 订单ID（路径参数）
   */
  id?: string
}

/**
 * 接口 完成订单 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/complete_put`
 */
export interface PutApiOrderV1OrdersCompleteResponse {}

/**
 * 接口 完成订单 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/complete_put`
 */
type PutApiOrderV1OrdersCompleteRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/orders/complete_put', undefined, string, string, false>
>

/**
 * 接口 完成订单 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/complete_put`
 */
const putApiOrderV1OrdersCompleteRequestConfig: PutApiOrderV1OrdersCompleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/orders/complete_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiOrderV1OrdersComplete',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 完成订单 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/complete_put`
 */
export const putApiOrderV1OrdersComplete = /*#__PURE__*/ (
  requestData: PutApiOrderV1OrdersCompleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiOrderV1OrdersCompleteResponse>(
    prepare(putApiOrderV1OrdersCompleteRequestConfig, requestData),
    ...args,
  )
}

putApiOrderV1OrdersComplete.requestConfig = putApiOrderV1OrdersCompleteRequestConfig

/**
 * 接口 手动打印订单小票 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/print`
 */
export interface PostApiOrderV1OrdersPrintRequest {
  /**
   * 订单ID
   */
  id?: string
  /**
   * 小票类型列表：front_order=前台小票，kitchen_order=后厨小票；不传则打印订单可配置的全部小票类型
   */
  receiptTypes?: string[]
}

/**
 * 接口 手动打印订单小票 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/print`
 */
export interface PostApiOrderV1OrdersPrintResponse {
  /**
   * 本次成功提交打印的小票数量
   */
  printedCount?: number
}

/**
 * 接口 手动打印订单小票 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/print`
 */
type PostApiOrderV1OrdersPrintRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/orders/print', undefined, string, string, false>
>

/**
 * 接口 手动打印订单小票 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/print`
 */
const postApiOrderV1OrdersPrintRequestConfig: PostApiOrderV1OrdersPrintRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/orders/print',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiOrderV1OrdersPrint',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 手动打印订单小票 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/print`
 */
export const postApiOrderV1OrdersPrint = /*#__PURE__*/ (
  requestData: PostApiOrderV1OrdersPrintRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiOrderV1OrdersPrintResponse>(
    prepare(postApiOrderV1OrdersPrintRequestConfig, requestData),
    ...args,
  )
}

postApiOrderV1OrdersPrint.requestConfig = postApiOrderV1OrdersPrintRequestConfig

/**
 * 接口 订单退款 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/refund`
 */
export interface PostApiOrderV1OrdersRefundRequest {
  /**
   * 订单ID
   */
  id?: string
  /**
   * 退款原因
   */
  reason?: string
  /**
   * 审核备注
   */
  reviewRemark?: string
}

/**
 * 接口 订单退款 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/refund`
 */
export interface PostApiOrderV1OrdersRefundResponse {
  /**
   * RefundRequestInfo 退款申请数据。
   */
  request?: {
    /**
     * 退款申请ID
     */
    id?: string
    /**
     * 退款单号
     */
    refundNo?: string
    /**
     * 订单ID
     */
    orderId?: string
    /**
     * 订单号
     */
    orderNo?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 支付方式：wechat=微信支付，gold=钱包金币支付。
     */
    paymentMethod?: string
    /**
     * 退款金额（分）
     */
    refundAmount?: string
    /**
     * 退回金币数量，保留 refund_points 历史字段名
     */
    refundPoints?: string
    /**
     * 退款原因
     */
    reason?: string
    /**
     * 退款状态：pending=待审核，approved=已同意，rejected=已驳回，completed=已完成，failed=退款失败。
     */
    status?: string
    /**
     * 审核人ID
     */
    reviewerId?: string
    /**
     * 审核时间
     */
    reviewedAt?: string
    /**
     * 审核备注
     */
    reviewRemark?: string
    /**
     * 完成时间
     */
    completedAt?: string
    /**
     * 微信退款单号
     */
    wechatRefundId?: string
    /**
     * 失败原因
     */
    failReason?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    reviewer?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
  }
}

/**
 * 接口 订单退款 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/refund`
 */
type PostApiOrderV1OrdersRefundRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/orders/refund', undefined, string, string, false>
>

/**
 * 接口 订单退款 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/refund`
 */
const postApiOrderV1OrdersRefundRequestConfig: PostApiOrderV1OrdersRefundRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/orders/refund',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiOrderV1OrdersRefund',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 订单退款 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/orders/refund`
 */
export const postApiOrderV1OrdersRefund = /*#__PURE__*/ (
  requestData: PostApiOrderV1OrdersRefundRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiOrderV1OrdersRefundResponse>(
    prepare(postApiOrderV1OrdersRefundRequestConfig, requestData),
    ...args,
  )
}

postApiOrderV1OrdersRefund.requestConfig = postApiOrderV1OrdersRefundRequestConfig

/**
 * 接口 查询订单详情 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders/{id}`
 */
export interface GetApiOrderV1OrdersByIdRequest {
  /**
   * 订单ID
   */
  id: string
}

/**
 * 接口 查询订单详情 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders/{id}`
 */
export interface GetApiOrderV1OrdersByIdResponse {
  /**
   * 订单详情（含明细）。
   */
  order?: {
    /**
     * 订单ID
     */
    id?: string
    /**
     * 订单号
     */
    orderNo?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 订单总金额（分）
     */
    totalAmount?: string
    /**
     * 订单状态：pending=待支付，paid=已支付，completed=已完成，cancelled=已取消。
     */
    status?: string
    /**
     * 支付时间
     */
    paidAt?: string
    /**
     * 完成时间
     */
    completedAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 退款状态：none=无退款，pending=退款中，approved=已同意，rejected=已驳回，completed=已完成，failed=退款失败。
     */
    refundStatus?: string
    /**
     * 退款金额（分，预留字段）
     */
    refundAmount?: string
    /**
     * 支付方式：wechat=微信支付，gold=钱包金币支付。
     */
    paymentMethod?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业流水号
     */
    dailySeq?: string
    /**
     * 订单原价金额（分）
     */
    originalAmount?: string
    /**
     * 订单优惠金额（分）
     */
    discountAmount?: string
    /**
     * 订单应付金额（分）
     */
    payableAmount?: string
    /**
     * 订单使用的会员券ID
     */
    memberCouponId?: string
    /**
     * 订单促销摘要列表
     */
    promotions?: {
      /**
       * 促销类型：coupon=优惠券，discount=自动折扣。
       */
      promotionType?: string
      /**
       * 促销ID
       */
      promotionId?: string
      /**
       * 会员券ID
       */
      memberCouponId?: string
      /**
       * 促销名称
       */
      name?: string
      /**
       * 优惠金额（分）
       */
      discountAmount?: string
      /**
       * 状态：locked=已锁定，used=已核销，released=已释放，voided=已作废。
       */
      status?: string
    }[]
    /**
     * 订单类型：consume=消费订单，recharge=充值订单。
     */
    orderType?: string
    /**
     * OrderRechargeSummary 充值订单摘要；仅充值订单返回，消费订单为空。
     */
    rechargeSummary?: {
      /**
       * 充值金额（分）
       */
      rechargeAmount?: string
      /**
       * 到账金币数量
       */
      goldAmount?: string
      /**
       * 营销规则ID，0 表示未命中
       */
      marketingRuleId?: string
      /**
       * 营销规则是否执行成功
       */
      marketingSuccess?: boolean
      /**
       * 执行成功的充值奖励规则摘要列表
       */
      rewardRules?: {
        /**
         * 充值奖励配置ID
         */
        id?: string
        /**
         * 内部营销规则ID
         */
        ruleId?: string
        /**
         * 奖励规则名称
         */
        name?: string
        /**
         * 奖励规则说明
         */
        description?: string
        /**
         * 首充限制范围：none=不限制，lifetime=终身首充，monthly=每月首充
         */
        firstChargeScope?: string
        /**
         * 奖励阶梯摘要
         */
        tiers?: {
          /**
           * 阶梯ID
           */
          id?: string
          /**
           * 最低充值金额，单位分
           */
          minAmount?: string
          /**
           * 最高充值金额，单位分，0 表示不限制
           */
          maxAmount?: string
          /**
           * 积分倍数，前端可直接展示，如 1、1.5、2
           */
          pointsMultiplier?: string
          /**
           * 固定赠送积分
           */
          fixedPoints?: string
          /**
           * 奖励优惠券模板ID，0 表示不发券
           */
          couponTemplateId?: string
          /**
           * 发券数量
           */
          couponQuantity?: number
          /**
           * 优先级
           */
          priority?: number
          /**
           * 多种优惠券奖励列表
           */
          couponRewards?: {
            /**
             * 奖励优惠券模板ID
             */
            couponTemplateId?: string
            /**
             * 发券数量
             */
            quantity?: number
          }[]
        }[]
      }[]
    }
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * 订单明细
     */
    items?: {
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称（冗余）
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * 原价小计（分）
       */
      originalSubtotal?: string
      /**
       * 优惠金额（分）
       */
      discountAmount?: string
      /**
       * 应付小计（分）
       */
      payableSubtotal?: string
      /**
       * 套餐选择快照，仅套餐商品行返回
       */
      comboSnapshots?: {
        /**
         * 套餐菜品ID
         */
        comboDishId?: string
        /**
         * 套餐分组ID
         */
        groupId?: string
        /**
         * 分组名称快照
         */
        groupName?: string
        /**
         * 分组是否必选
         */
        groupRequired?: boolean
        /**
         * 分组最少选择数量
         */
        minSelect?: number
        /**
         * 分组最多选择数量
         */
        maxSelect?: number
        /**
         * 套餐选项ID
         */
        optionId?: string
        /**
         * 选项菜品ID
         */
        dishId?: string
        /**
         * 选项菜品名称快照
         */
        dishName?: string
        /**
         * 选项数量快照
         */
        quantity?: number
        /**
         * 选项加价（分）
         */
        extraPrice?: string
        /**
         * 是否默认选项
         */
        default?: boolean
      }[]
    }[]
  }
}

/**
 * 接口 查询订单详情 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders/{id}`
 */
type GetApiOrderV1OrdersByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/orders/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询订单详情 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders/{id}`
 */
const getApiOrderV1OrdersByIdRequestConfig: GetApiOrderV1OrdersByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/orders/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiOrderV1OrdersById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询订单详情 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/orders/{id}`
 */
export const getApiOrderV1OrdersById = /*#__PURE__*/ (
  requestData: GetApiOrderV1OrdersByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiOrderV1OrdersByIdResponse>(prepare(getApiOrderV1OrdersByIdRequestConfig, requestData), ...args)
}

getApiOrderV1OrdersById.requestConfig = getApiOrderV1OrdersByIdRequestConfig

/**
 * 接口 查询后台桌位会话列表 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions`
 */
export interface GetApiOrderV1TableSessionsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌位ID
   */
  tableId?: string
  /**
   * 状态筛选：open=开台中，settled=已结算，cancelled=已取消
   */
  status?: string
}

/**
 * 接口 查询后台桌位会话列表 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions`
 */
export interface GetApiOrderV1TableSessionsResponse {
  /**
   * 桌位会话列表
   */
  sessions?: {
    /**
     * 会话ID
     */
    id?: string
    /**
     * 会话编号
     */
    sessionNo?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 就餐人数
     */
    guestCount?: number
    /**
     * 状态：open=开台中，settled=已结算，cancelled=已取消
     */
    status?: string
    /**
     * 开台账号ID
     */
    openedByAccountId?: string
    /**
     * 结算账号ID
     */
    settledByAccountId?: string
    /**
     * 结算订单ID
     */
    orderId?: string
    /**
     * 开台时间
     */
    openedAt?: string
    /**
     * 结算时间
     */
    settledAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 有效挂账总额（分）
     */
    totalAmount?: string
    /**
     * 有效挂账明细数量
     */
    activeItemCount?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    openedByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    settledByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
    /**
     * 挂账明细
     */
    items?: {
      /**
       * 明细ID
       */
      id?: string
      /**
       * 桌位会话ID
       */
      tableSessionId?: string
      /**
       * 加菜批次号
       */
      batchNo?: string
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称快照
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * 状态：active=有效，cancelled=已退菜
       */
      status?: string
      /**
       * 备注
       */
      remark?: string
      /**
       * 加菜小票打印时间
       */
      printedAt?: string
      /**
       * 加菜账号ID
       */
      createdByAccountId?: string
      /**
       * 退菜账号ID
       */
      cancelledByAccountId?: string
      /**
       * 退菜原因
       */
      cancelReason?: string
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      createdByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      cancelledByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
    }[]
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询后台桌位会话列表 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions`
 */
type GetApiOrderV1TableSessionsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/order/v1/tableSessions',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'tableId' | 'status',
    false
  >
>

/**
 * 接口 查询后台桌位会话列表 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions`
 */
const getApiOrderV1TableSessionsRequestConfig: GetApiOrderV1TableSessionsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/tableSessions',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId', 'tableId', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiOrderV1TableSessions',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询后台桌位会话列表 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions`
 */
export const getApiOrderV1TableSessions = /*#__PURE__*/ (
  requestData: GetApiOrderV1TableSessionsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiOrderV1TableSessionsResponse>(
    prepare(getApiOrderV1TableSessionsRequestConfig, requestData),
    ...args,
  )
}

getApiOrderV1TableSessions.requestConfig = getApiOrderV1TableSessionsRequestConfig

/**
 * 接口 后台桌位空台取消 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/cancel`
 */
export interface PostApiOrderV1TableSessionsCancelRequest {
  /**
   * 桌位会话ID
   */
  tableSessionId?: string
  /**
   * 取消原因
   */
  cancelReason?: string
}

/**
 * 接口 后台桌位空台取消 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/cancel`
 */
export interface PostApiOrderV1TableSessionsCancelResponse {
  /**
   * 后台桌位会话。
   */
  session?: {
    /**
     * 会话ID
     */
    id?: string
    /**
     * 会话编号
     */
    sessionNo?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 就餐人数
     */
    guestCount?: number
    /**
     * 状态：open=开台中，settled=已结算，cancelled=已取消
     */
    status?: string
    /**
     * 开台账号ID
     */
    openedByAccountId?: string
    /**
     * 结算账号ID
     */
    settledByAccountId?: string
    /**
     * 结算订单ID
     */
    orderId?: string
    /**
     * 开台时间
     */
    openedAt?: string
    /**
     * 结算时间
     */
    settledAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 有效挂账总额（分）
     */
    totalAmount?: string
    /**
     * 有效挂账明细数量
     */
    activeItemCount?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    openedByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    settledByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
    /**
     * 挂账明细
     */
    items?: {
      /**
       * 明细ID
       */
      id?: string
      /**
       * 桌位会话ID
       */
      tableSessionId?: string
      /**
       * 加菜批次号
       */
      batchNo?: string
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称快照
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * 状态：active=有效，cancelled=已退菜
       */
      status?: string
      /**
       * 备注
       */
      remark?: string
      /**
       * 加菜小票打印时间
       */
      printedAt?: string
      /**
       * 加菜账号ID
       */
      createdByAccountId?: string
      /**
       * 退菜账号ID
       */
      cancelledByAccountId?: string
      /**
       * 退菜原因
       */
      cancelReason?: string
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      createdByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      cancelledByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
    }[]
  }
}

/**
 * 接口 后台桌位空台取消 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/cancel`
 */
type PostApiOrderV1TableSessionsCancelRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/tableSessions/cancel', undefined, string, string, false>
>

/**
 * 接口 后台桌位空台取消 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/cancel`
 */
const postApiOrderV1TableSessionsCancelRequestConfig: PostApiOrderV1TableSessionsCancelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/tableSessions/cancel',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiOrderV1TableSessionsCancel',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 后台桌位空台取消 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/cancel`
 */
export const postApiOrderV1TableSessionsCancel = /*#__PURE__*/ (
  requestData: PostApiOrderV1TableSessionsCancelRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiOrderV1TableSessionsCancelResponse>(
    prepare(postApiOrderV1TableSessionsCancelRequestConfig, requestData),
    ...args,
  )
}

postApiOrderV1TableSessionsCancel.requestConfig = postApiOrderV1TableSessionsCancelRequestConfig

/**
 * 接口 后台桌位离店结算 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkout`
 */
export interface PostApiOrderV1TableSessionsCheckoutRequest {
  /**
   * 桌位会话ID
   */
  tableSessionId?: string
  /**
   * 支付方式：cash=现金，wechat=微信，gold=金币，free=免支付；不传默认 cash
   */
  paymentMethod?: string
  /**
   * 结算备注
   */
  remark?: string
}

/**
 * 接口 后台桌位离店结算 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkout`
 */
export interface PostApiOrderV1TableSessionsCheckoutResponse {
  /**
   * 后台桌位会话。
   */
  session?: {
    /**
     * 会话ID
     */
    id?: string
    /**
     * 会话编号
     */
    sessionNo?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 就餐人数
     */
    guestCount?: number
    /**
     * 状态：open=开台中，settled=已结算，cancelled=已取消
     */
    status?: string
    /**
     * 开台账号ID
     */
    openedByAccountId?: string
    /**
     * 结算账号ID
     */
    settledByAccountId?: string
    /**
     * 结算订单ID
     */
    orderId?: string
    /**
     * 开台时间
     */
    openedAt?: string
    /**
     * 结算时间
     */
    settledAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 有效挂账总额（分）
     */
    totalAmount?: string
    /**
     * 有效挂账明细数量
     */
    activeItemCount?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    openedByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    settledByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
    /**
     * 挂账明细
     */
    items?: {
      /**
       * 明细ID
       */
      id?: string
      /**
       * 桌位会话ID
       */
      tableSessionId?: string
      /**
       * 加菜批次号
       */
      batchNo?: string
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称快照
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * 状态：active=有效，cancelled=已退菜
       */
      status?: string
      /**
       * 备注
       */
      remark?: string
      /**
       * 加菜小票打印时间
       */
      printedAt?: string
      /**
       * 加菜账号ID
       */
      createdByAccountId?: string
      /**
       * 退菜账号ID
       */
      cancelledByAccountId?: string
      /**
       * 退菜原因
       */
      cancelReason?: string
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      createdByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      cancelledByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
    }[]
  }
  /**
   * 订单详情（含明细）。
   */
  order?: {
    /**
     * 订单ID
     */
    id?: string
    /**
     * 订单号
     */
    orderNo?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 订单总金额（分）
     */
    totalAmount?: string
    /**
     * 订单状态：pending=待支付，paid=已支付，completed=已完成，cancelled=已取消。
     */
    status?: string
    /**
     * 支付时间
     */
    paidAt?: string
    /**
     * 完成时间
     */
    completedAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 退款状态：none=无退款，pending=退款中，approved=已同意，rejected=已驳回，completed=已完成，failed=退款失败。
     */
    refundStatus?: string
    /**
     * 退款金额（分，预留字段）
     */
    refundAmount?: string
    /**
     * 支付方式：wechat=微信支付，gold=钱包金币支付。
     */
    paymentMethod?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业流水号
     */
    dailySeq?: string
    /**
     * 订单原价金额（分）
     */
    originalAmount?: string
    /**
     * 订单优惠金额（分）
     */
    discountAmount?: string
    /**
     * 订单应付金额（分）
     */
    payableAmount?: string
    /**
     * 订单使用的会员券ID
     */
    memberCouponId?: string
    /**
     * 订单促销摘要列表
     */
    promotions?: {
      /**
       * 促销类型：coupon=优惠券，discount=自动折扣。
       */
      promotionType?: string
      /**
       * 促销ID
       */
      promotionId?: string
      /**
       * 会员券ID
       */
      memberCouponId?: string
      /**
       * 促销名称
       */
      name?: string
      /**
       * 优惠金额（分）
       */
      discountAmount?: string
      /**
       * 状态：locked=已锁定，used=已核销，released=已释放，voided=已作废。
       */
      status?: string
    }[]
    /**
     * 订单类型：consume=消费订单，recharge=充值订单。
     */
    orderType?: string
    /**
     * OrderRechargeSummary 充值订单摘要；仅充值订单返回，消费订单为空。
     */
    rechargeSummary?: {
      /**
       * 充值金额（分）
       */
      rechargeAmount?: string
      /**
       * 到账金币数量
       */
      goldAmount?: string
      /**
       * 营销规则ID，0 表示未命中
       */
      marketingRuleId?: string
      /**
       * 营销规则是否执行成功
       */
      marketingSuccess?: boolean
      /**
       * 执行成功的充值奖励规则摘要列表
       */
      rewardRules?: {
        /**
         * 充值奖励配置ID
         */
        id?: string
        /**
         * 内部营销规则ID
         */
        ruleId?: string
        /**
         * 奖励规则名称
         */
        name?: string
        /**
         * 奖励规则说明
         */
        description?: string
        /**
         * 首充限制范围：none=不限制，lifetime=终身首充，monthly=每月首充
         */
        firstChargeScope?: string
        /**
         * 奖励阶梯摘要
         */
        tiers?: {
          /**
           * 阶梯ID
           */
          id?: string
          /**
           * 最低充值金额，单位分
           */
          minAmount?: string
          /**
           * 最高充值金额，单位分，0 表示不限制
           */
          maxAmount?: string
          /**
           * 积分倍数，前端可直接展示，如 1、1.5、2
           */
          pointsMultiplier?: string
          /**
           * 固定赠送积分
           */
          fixedPoints?: string
          /**
           * 奖励优惠券模板ID，0 表示不发券
           */
          couponTemplateId?: string
          /**
           * 发券数量
           */
          couponQuantity?: number
          /**
           * 优先级
           */
          priority?: number
          /**
           * 多种优惠券奖励列表
           */
          couponRewards?: {
            /**
             * 奖励优惠券模板ID
             */
            couponTemplateId?: string
            /**
             * 发券数量
             */
            quantity?: number
          }[]
        }[]
      }[]
    }
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * 订单明细
     */
    items?: {
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称（冗余）
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * 原价小计（分）
       */
      originalSubtotal?: string
      /**
       * 优惠金额（分）
       */
      discountAmount?: string
      /**
       * 应付小计（分）
       */
      payableSubtotal?: string
      /**
       * 套餐选择快照，仅套餐商品行返回
       */
      comboSnapshots?: {
        /**
         * 套餐菜品ID
         */
        comboDishId?: string
        /**
         * 套餐分组ID
         */
        groupId?: string
        /**
         * 分组名称快照
         */
        groupName?: string
        /**
         * 分组是否必选
         */
        groupRequired?: boolean
        /**
         * 分组最少选择数量
         */
        minSelect?: number
        /**
         * 分组最多选择数量
         */
        maxSelect?: number
        /**
         * 套餐选项ID
         */
        optionId?: string
        /**
         * 选项菜品ID
         */
        dishId?: string
        /**
         * 选项菜品名称快照
         */
        dishName?: string
        /**
         * 选项数量快照
         */
        quantity?: number
        /**
         * 选项加价（分）
         */
        extraPrice?: string
        /**
         * 是否默认选项
         */
        default?: boolean
      }[]
    }[]
  }
}

/**
 * 接口 后台桌位离店结算 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkout`
 */
type PostApiOrderV1TableSessionsCheckoutRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/tableSessions/checkout', undefined, string, string, false>
>

/**
 * 接口 后台桌位离店结算 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkout`
 */
const postApiOrderV1TableSessionsCheckoutRequestConfig: PostApiOrderV1TableSessionsCheckoutRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/order/v1/tableSessions/checkout',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiOrderV1TableSessionsCheckout',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 后台桌位离店结算 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkout`
 */
export const postApiOrderV1TableSessionsCheckout = /*#__PURE__*/ (
  requestData: PostApiOrderV1TableSessionsCheckoutRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiOrderV1TableSessionsCheckoutResponse>(
    prepare(postApiOrderV1TableSessionsCheckoutRequestConfig, requestData),
    ...args,
  )
}

postApiOrderV1TableSessionsCheckout.requestConfig = postApiOrderV1TableSessionsCheckoutRequestConfig

/**
 * 接口 后台桌位结算预览 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkoutPreview`
 */
export interface PostApiOrderV1TableSessionsCheckoutPreviewRequest {
  /**
   * 桌位会话ID
   */
  tableSessionId?: string
}

/**
 * 接口 后台桌位结算预览 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkoutPreview`
 */
export interface PostApiOrderV1TableSessionsCheckoutPreviewResponse {
  /**
   * 后台桌位会话。
   */
  session?: {
    /**
     * 会话ID
     */
    id?: string
    /**
     * 会话编号
     */
    sessionNo?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 就餐人数
     */
    guestCount?: number
    /**
     * 状态：open=开台中，settled=已结算，cancelled=已取消
     */
    status?: string
    /**
     * 开台账号ID
     */
    openedByAccountId?: string
    /**
     * 结算账号ID
     */
    settledByAccountId?: string
    /**
     * 结算订单ID
     */
    orderId?: string
    /**
     * 开台时间
     */
    openedAt?: string
    /**
     * 结算时间
     */
    settledAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 有效挂账总额（分）
     */
    totalAmount?: string
    /**
     * 有效挂账明细数量
     */
    activeItemCount?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    openedByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    settledByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
    /**
     * 挂账明细
     */
    items?: {
      /**
       * 明细ID
       */
      id?: string
      /**
       * 桌位会话ID
       */
      tableSessionId?: string
      /**
       * 加菜批次号
       */
      batchNo?: string
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称快照
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * 状态：active=有效，cancelled=已退菜
       */
      status?: string
      /**
       * 备注
       */
      remark?: string
      /**
       * 加菜小票打印时间
       */
      printedAt?: string
      /**
       * 加菜账号ID
       */
      createdByAccountId?: string
      /**
       * 退菜账号ID
       */
      cancelledByAccountId?: string
      /**
       * 退菜原因
       */
      cancelReason?: string
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      createdByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      cancelledByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
    }[]
  }
  /**
   * 待收金额（分）
   */
  payableAmount?: string
}

/**
 * 接口 后台桌位结算预览 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkoutPreview`
 */
type PostApiOrderV1TableSessionsCheckoutPreviewRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/tableSessions/checkoutPreview', undefined, string, string, false>
>

/**
 * 接口 后台桌位结算预览 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkoutPreview`
 */
const postApiOrderV1TableSessionsCheckoutPreviewRequestConfig: PostApiOrderV1TableSessionsCheckoutPreviewRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/order/v1/tableSessions/checkoutPreview',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiOrderV1TableSessionsCheckoutPreview',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 后台桌位结算预览 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/checkoutPreview`
 */
export const postApiOrderV1TableSessionsCheckoutPreview = /*#__PURE__*/ (
  requestData: PostApiOrderV1TableSessionsCheckoutPreviewRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiOrderV1TableSessionsCheckoutPreviewResponse>(
    prepare(postApiOrderV1TableSessionsCheckoutPreviewRequestConfig, requestData),
    ...args,
  )
}

postApiOrderV1TableSessionsCheckoutPreview.requestConfig = postApiOrderV1TableSessionsCheckoutPreviewRequestConfig

/**
 * 接口 后台桌位加菜 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items`
 */
export interface PostApiOrderV1TableSessionsItemsRequest {
  /**
   * 桌位会话ID
   */
  tableSessionId?: string
  /**
   * 加菜明细
   */
  items?: {
    /**
     * 菜品ID
     */
    dishId?: string
    /**
     * 数量
     */
    quantity?: number
    /**
     * 备注
     */
    remark?: string
  }[]
}

/**
 * 接口 后台桌位加菜 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items`
 */
export interface PostApiOrderV1TableSessionsItemsResponse {
  /**
   * 后台桌位会话。
   */
  session?: {
    /**
     * 会话ID
     */
    id?: string
    /**
     * 会话编号
     */
    sessionNo?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 就餐人数
     */
    guestCount?: number
    /**
     * 状态：open=开台中，settled=已结算，cancelled=已取消
     */
    status?: string
    /**
     * 开台账号ID
     */
    openedByAccountId?: string
    /**
     * 结算账号ID
     */
    settledByAccountId?: string
    /**
     * 结算订单ID
     */
    orderId?: string
    /**
     * 开台时间
     */
    openedAt?: string
    /**
     * 结算时间
     */
    settledAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 有效挂账总额（分）
     */
    totalAmount?: string
    /**
     * 有效挂账明细数量
     */
    activeItemCount?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    openedByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    settledByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
    /**
     * 挂账明细
     */
    items?: {
      /**
       * 明细ID
       */
      id?: string
      /**
       * 桌位会话ID
       */
      tableSessionId?: string
      /**
       * 加菜批次号
       */
      batchNo?: string
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称快照
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * 状态：active=有效，cancelled=已退菜
       */
      status?: string
      /**
       * 备注
       */
      remark?: string
      /**
       * 加菜小票打印时间
       */
      printedAt?: string
      /**
       * 加菜账号ID
       */
      createdByAccountId?: string
      /**
       * 退菜账号ID
       */
      cancelledByAccountId?: string
      /**
       * 退菜原因
       */
      cancelReason?: string
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      createdByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      cancelledByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
    }[]
  }
  /**
   * 本次加菜批次号
   */
  batchNo?: string
}

/**
 * 接口 后台桌位加菜 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items`
 */
type PostApiOrderV1TableSessionsItemsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/tableSessions/items', undefined, string, string, false>
>

/**
 * 接口 后台桌位加菜 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items`
 */
const postApiOrderV1TableSessionsItemsRequestConfig: PostApiOrderV1TableSessionsItemsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/tableSessions/items',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiOrderV1TableSessionsItems',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 后台桌位加菜 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items`
 */
export const postApiOrderV1TableSessionsItems = /*#__PURE__*/ (
  requestData: PostApiOrderV1TableSessionsItemsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiOrderV1TableSessionsItemsResponse>(
    prepare(postApiOrderV1TableSessionsItemsRequestConfig, requestData),
    ...args,
  )
}

postApiOrderV1TableSessionsItems.requestConfig = postApiOrderV1TableSessionsItemsRequestConfig

/**
 * 接口 后台桌位退菜 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items_delete`
 */
export interface DeleteApiOrderV1TableSessionsItemsRequest {
  /**
   * 桌位会话ID
   */
  tableSessionId?: string
  /**
   * 挂账明细ID
   */
  itemId?: string
  /**
   * 退菜原因
   */
  cancelReason?: string
}

/**
 * 接口 后台桌位退菜 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items_delete`
 */
export interface DeleteApiOrderV1TableSessionsItemsResponse {
  /**
   * 后台桌位会话。
   */
  session?: {
    /**
     * 会话ID
     */
    id?: string
    /**
     * 会话编号
     */
    sessionNo?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 就餐人数
     */
    guestCount?: number
    /**
     * 状态：open=开台中，settled=已结算，cancelled=已取消
     */
    status?: string
    /**
     * 开台账号ID
     */
    openedByAccountId?: string
    /**
     * 结算账号ID
     */
    settledByAccountId?: string
    /**
     * 结算订单ID
     */
    orderId?: string
    /**
     * 开台时间
     */
    openedAt?: string
    /**
     * 结算时间
     */
    settledAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 有效挂账总额（分）
     */
    totalAmount?: string
    /**
     * 有效挂账明细数量
     */
    activeItemCount?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    openedByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    settledByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
    /**
     * 挂账明细
     */
    items?: {
      /**
       * 明细ID
       */
      id?: string
      /**
       * 桌位会话ID
       */
      tableSessionId?: string
      /**
       * 加菜批次号
       */
      batchNo?: string
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称快照
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * 状态：active=有效，cancelled=已退菜
       */
      status?: string
      /**
       * 备注
       */
      remark?: string
      /**
       * 加菜小票打印时间
       */
      printedAt?: string
      /**
       * 加菜账号ID
       */
      createdByAccountId?: string
      /**
       * 退菜账号ID
       */
      cancelledByAccountId?: string
      /**
       * 退菜原因
       */
      cancelReason?: string
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      createdByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      cancelledByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
    }[]
  }
}

/**
 * 接口 后台桌位退菜 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items_delete`
 */
type DeleteApiOrderV1TableSessionsItemsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/tableSessions/items_delete', undefined, string, string, false>
>

/**
 * 接口 后台桌位退菜 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items_delete`
 */
const deleteApiOrderV1TableSessionsItemsRequestConfig: DeleteApiOrderV1TableSessionsItemsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/tableSessions/items_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiOrderV1TableSessionsItems',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 后台桌位退菜 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/items_delete`
 */
export const deleteApiOrderV1TableSessionsItems = /*#__PURE__*/ (
  requestData: DeleteApiOrderV1TableSessionsItemsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiOrderV1TableSessionsItemsResponse>(
    prepare(deleteApiOrderV1TableSessionsItemsRequestConfig, requestData),
    ...args,
  )
}

deleteApiOrderV1TableSessionsItems.requestConfig = deleteApiOrderV1TableSessionsItemsRequestConfig

/**
 * 接口 后台桌位开台 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/open`
 */
export interface PostApiOrderV1TableSessionsOpenRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 具体桌位ID
   */
  tableId?: string
  /**
   * 就餐人数
   */
  guestCount?: number
  /**
   * 备注
   */
  remark?: string
}

/**
 * 接口 后台桌位开台 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/open`
 */
export interface PostApiOrderV1TableSessionsOpenResponse {
  /**
   * 后台桌位会话。
   */
  session?: {
    /**
     * 会话ID
     */
    id?: string
    /**
     * 会话编号
     */
    sessionNo?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 就餐人数
     */
    guestCount?: number
    /**
     * 状态：open=开台中，settled=已结算，cancelled=已取消
     */
    status?: string
    /**
     * 开台账号ID
     */
    openedByAccountId?: string
    /**
     * 结算账号ID
     */
    settledByAccountId?: string
    /**
     * 结算订单ID
     */
    orderId?: string
    /**
     * 开台时间
     */
    openedAt?: string
    /**
     * 结算时间
     */
    settledAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 有效挂账总额（分）
     */
    totalAmount?: string
    /**
     * 有效挂账明细数量
     */
    activeItemCount?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    openedByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    settledByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
    /**
     * 挂账明细
     */
    items?: {
      /**
       * 明细ID
       */
      id?: string
      /**
       * 桌位会话ID
       */
      tableSessionId?: string
      /**
       * 加菜批次号
       */
      batchNo?: string
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称快照
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * 状态：active=有效，cancelled=已退菜
       */
      status?: string
      /**
       * 备注
       */
      remark?: string
      /**
       * 加菜小票打印时间
       */
      printedAt?: string
      /**
       * 加菜账号ID
       */
      createdByAccountId?: string
      /**
       * 退菜账号ID
       */
      cancelledByAccountId?: string
      /**
       * 退菜原因
       */
      cancelReason?: string
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      createdByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      cancelledByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
    }[]
  }
}

/**
 * 接口 后台桌位开台 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/open`
 */
type PostApiOrderV1TableSessionsOpenRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/tableSessions/open', undefined, string, string, false>
>

/**
 * 接口 后台桌位开台 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/open`
 */
const postApiOrderV1TableSessionsOpenRequestConfig: PostApiOrderV1TableSessionsOpenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/tableSessions/open',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiOrderV1TableSessionsOpen',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 后台桌位开台 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `POST /api/order/v1/tableSessions/open`
 */
export const postApiOrderV1TableSessionsOpen = /*#__PURE__*/ (
  requestData: PostApiOrderV1TableSessionsOpenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiOrderV1TableSessionsOpenResponse>(
    prepare(postApiOrderV1TableSessionsOpenRequestConfig, requestData),
    ...args,
  )
}

postApiOrderV1TableSessionsOpen.requestConfig = postApiOrderV1TableSessionsOpenRequestConfig

/**
 * 接口 查询后台桌位会话详情 的 **请求类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions/{id}`
 */
export interface GetApiOrderV1TableSessionsByIdRequest {
  /**
   * 桌位会话ID
   */
  id: string
}

/**
 * 接口 查询后台桌位会话详情 的 **返回类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions/{id}`
 */
export interface GetApiOrderV1TableSessionsByIdResponse {
  /**
   * 后台桌位会话。
   */
  session?: {
    /**
     * 会话ID
     */
    id?: string
    /**
     * 会话编号
     */
    sessionNo?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 营业记录ID
     */
    businessId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 就餐人数
     */
    guestCount?: number
    /**
     * 状态：open=开台中，settled=已结算，cancelled=已取消
     */
    status?: string
    /**
     * 开台账号ID
     */
    openedByAccountId?: string
    /**
     * 结算账号ID
     */
    settledByAccountId?: string
    /**
     * 结算订单ID
     */
    orderId?: string
    /**
     * 开台时间
     */
    openedAt?: string
    /**
     * 结算时间
     */
    settledAt?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 有效挂账总额（分）
     */
    totalAmount?: string
    /**
     * 有效挂账明细数量
     */
    activeItemCount?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    business?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    openedByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    settledByAccount?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * OrderDisplayInfo 订单通用展示信息。
     */
    order?: {
      /**
       * 订单ID
       */
      id?: string
      /**
       * 订单号
       */
      orderNo?: string
      /**
       * 订单状态
       */
      status?: string
      /**
       * 订单总金额（分）
       */
      totalAmount?: string
    }
    /**
     * 挂账明细
     */
    items?: {
      /**
       * 明细ID
       */
      id?: string
      /**
       * 桌位会话ID
       */
      tableSessionId?: string
      /**
       * 加菜批次号
       */
      batchNo?: string
      /**
       * 菜品ID
       */
      dishId?: string
      /**
       * 菜品名称快照
       */
      dishName?: string
      /**
       * 单价快照（分）
       */
      price?: string
      /**
       * 数量
       */
      quantity?: number
      /**
       * 小计（分）
       */
      subtotal?: string
      /**
       * 状态：active=有效，cancelled=已退菜
       */
      status?: string
      /**
       * 备注
       */
      remark?: string
      /**
       * 加菜小票打印时间
       */
      printedAt?: string
      /**
       * 加菜账号ID
       */
      createdByAccountId?: string
      /**
       * 退菜账号ID
       */
      cancelledByAccountId?: string
      /**
       * 退菜原因
       */
      cancelReason?: string
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * DishDisplayInfo 菜品通用展示信息。
       */
      dish?: {
        /**
         * 菜品ID
         */
        id?: string
        /**
         * 菜品名称
         */
        name?: string
        /**
         * 菜品首图URL
         */
        imageUrl?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      createdByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
      /**
       * AccountDisplayInfo 账号通用展示信息。
       */
      cancelledByAccount?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }
    }[]
  }
}

/**
 * 接口 查询后台桌位会话详情 的 **请求配置的类型**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions/{id}`
 */
type GetApiOrderV1TableSessionsByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/order/v1/tableSessions/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询后台桌位会话详情 的 **请求配置**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions/{id}`
 */
const getApiOrderV1TableSessionsByIdRequestConfig: GetApiOrderV1TableSessionsByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/order/v1/tableSessions/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiOrderV1TableSessionsById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询后台桌位会话详情 的 **请求函数**
 *
 * @分类 OrderService
 * @请求头 `GET /api/order/v1/tableSessions/{id}`
 */
export const getApiOrderV1TableSessionsById = /*#__PURE__*/ (
  requestData: GetApiOrderV1TableSessionsByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiOrderV1TableSessionsByIdResponse>(
    prepare(getApiOrderV1TableSessionsByIdRequestConfig, requestData),
    ...args,
  )
}

getApiOrderV1TableSessionsById.requestConfig = getApiOrderV1TableSessionsByIdRequestConfig

/**
 * 接口 查询已启用打印 provider 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printProviders`
 */
export interface GetApiStoreV1PrintProvidersRequest {}

/**
 * 接口 查询已启用打印 provider 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printProviders`
 */
export interface GetApiStoreV1PrintProvidersResponse {
  /**
   * 已启用打印 provider 列表
   */
  providers?: {
    /**
     * provider 展示名称
     */
    name?: string
    /**
     * provider 厂家代码，门店打印机配置 provider 使用该值
     */
    code?: string
    /**
     * provider 固定打印纸宽毫米
     */
    paperWidth?: number
  }[]
}

/**
 * 接口 查询已启用打印 provider 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printProviders`
 */
type GetApiStoreV1PrintProvidersRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/printProviders', undefined, string, string, true>
>

/**
 * 接口 查询已启用打印 provider 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printProviders`
 */
const getApiStoreV1PrintProvidersRequestConfig: GetApiStoreV1PrintProvidersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/printProviders',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiStoreV1PrintProviders',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询已启用打印 provider 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printProviders`
 */
export const getApiStoreV1PrintProviders = /*#__PURE__*/ (
  requestData?: GetApiStoreV1PrintProvidersRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiStoreV1PrintProvidersResponse>(
    prepare(getApiStoreV1PrintProvidersRequestConfig, requestData),
    ...args,
  )
}

getApiStoreV1PrintProviders.requestConfig = getApiStoreV1PrintProvidersRequestConfig

/**
 * 接口 查询可配置小票类型 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printReceiptTypes`
 */
export interface GetApiStoreV1PrintReceiptTypesRequest {
  /**
   * 商户ID
   */
  merchantId?: string
}

/**
 * 接口 查询可配置小票类型 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printReceiptTypes`
 */
export interface GetApiStoreV1PrintReceiptTypesResponse {
  /**
   * 可配置小票类型列表
   */
  receiptTypes?: {
    /**
     * 小票类型展示名称
     */
    name?: string
    /**
     * 小票类型代码，门店打印机配置 receipt_types 使用该值
     */
    code?: string
    /**
     * 小票类型说明
     */
    description?: string
  }[]
}

/**
 * 接口 查询可配置小票类型 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printReceiptTypes`
 */
type GetApiStoreV1PrintReceiptTypesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/printReceiptTypes', undefined, string, 'merchantId', false>
>

/**
 * 接口 查询可配置小票类型 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printReceiptTypes`
 */
const getApiStoreV1PrintReceiptTypesRequestConfig: GetApiStoreV1PrintReceiptTypesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/printReceiptTypes',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['merchantId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiStoreV1PrintReceiptTypes',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询可配置小票类型 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/printReceiptTypes`
 */
export const getApiStoreV1PrintReceiptTypes = /*#__PURE__*/ (
  requestData: GetApiStoreV1PrintReceiptTypesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiStoreV1PrintReceiptTypesResponse>(
    prepare(getApiStoreV1PrintReceiptTypesRequestConfig, requestData),
    ...args,
  )
}

getApiStoreV1PrintReceiptTypes.requestConfig = getApiStoreV1PrintReceiptTypesRequestConfig

/**
 * 接口 查询门店列表 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores`
 */
export interface GetApiStoreV1StoresRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
}

/**
 * 接口 查询门店列表 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores`
 */
export interface GetApiStoreV1StoresResponse {
  /**
   * 门店列表
   */
  stores?: {
    /**
     * 门店ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 名称
     */
    name?: string
    /**
     * 地址
     */
    address?: string
    /**
     * 电话
     */
    phone?: string
    /**
     * 营业开始时间
     */
    businessHoursStart?: string
    /**
     * 营业结束时间
     */
    businessHoursEnd?: string
    /**
     * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
     */
    status?: number
    /**
     * 封面图URL
     */
    coverUrl?: string
    /**
     * 经度
     */
    longitude?: string
    /**
     * 纬度
     */
    latitude?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 是否启用订单自动打印
     */
    printEnabled?: boolean
    /**
     * 门店打印机配置列表，每台打印机可配置多个小票类型
     */
    printPrinters?: {
      /**
       * 打印机展示名称
       */
      name?: string
      /**
       * 是否启用该打印机
       */
      enabled?: boolean
      /**
       * 打印 provider 厂家代码，对应平台已启用 provider code，如 hprt
       */
      provider?: string
      /**
       * 厂家侧打印机编号
       */
      printerNo?: string
      /**
       * 小票类型列表：front_order=前台小票，kitchen_order=后厨小票，kitchen_add_items=后厨加菜小票，table_open=后台开台小票，recharge_order=充值订单小票，points_deposit_ticket=积分存入工单小票，points_withdraw_ticket=积分提取工单小票，wine_deposit_ticket=会员存酒工单小票，wine_withdraw_ticket=会员取酒工单小票；同一打印机可同时配置多个小票类型
       */
      receiptTypes?: string[]
    }[]
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询门店列表 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores`
 */
type GetApiStoreV1StoresRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/store/v1/stores',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId',
    false
  >
>

/**
 * 接口 查询门店列表 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores`
 */
const getApiStoreV1StoresRequestConfig: GetApiStoreV1StoresRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/stores',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiStoreV1Stores',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询门店列表 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores`
 */
export const getApiStoreV1Stores = /*#__PURE__*/ (
  requestData: GetApiStoreV1StoresRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiStoreV1StoresResponse>(prepare(getApiStoreV1StoresRequestConfig, requestData), ...args)
}

getApiStoreV1Stores.requestConfig = getApiStoreV1StoresRequestConfig

/**
 * 接口 创建门店 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores`
 */
export interface PostApiStoreV1StoresRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 地址
   */
  address?: string
  /**
   * 电话
   */
  phone?: string
  /**
   * 营业开始时间
   */
  businessHoursStart?: string
  /**
   * 营业结束时间
   */
  businessHoursEnd?: string
  /**
   * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
   */
  status?: number
  /**
   * 封面图URL
   */
  coverUrl?: string
  /**
   * 经度
   */
  longitude?: string
  /**
   * 纬度
   */
  latitude?: string
}

/**
 * 接口 创建门店 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores`
 */
export interface PostApiStoreV1StoresResponse {
  /**
   * 新建门店ID
   */
  id?: string
}

/**
 * 接口 创建门店 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores`
 */
type PostApiStoreV1StoresRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/stores', undefined, string, string, false>
>

/**
 * 接口 创建门店 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores`
 */
const postApiStoreV1StoresRequestConfig: PostApiStoreV1StoresRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/stores',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStoreV1Stores',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建门店 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores`
 */
export const postApiStoreV1Stores = /*#__PURE__*/ (
  requestData: PostApiStoreV1StoresRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStoreV1StoresResponse>(prepare(postApiStoreV1StoresRequestConfig, requestData), ...args)
}

postApiStoreV1Stores.requestConfig = postApiStoreV1StoresRequestConfig

/**
 * 接口 禁用门店 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/disable`
 */
export interface PostApiStoreV1StoresDisableRequest {
  /**
   * 门店ID（路径参数）
   */
  id?: string
}

/**
 * 接口 禁用门店 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/disable`
 */
export interface PostApiStoreV1StoresDisableResponse {}

/**
 * 接口 禁用门店 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/disable`
 */
type PostApiStoreV1StoresDisableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/stores/disable', undefined, string, string, false>
>

/**
 * 接口 禁用门店 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/disable`
 */
const postApiStoreV1StoresDisableRequestConfig: PostApiStoreV1StoresDisableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/stores/disable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStoreV1StoresDisable',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 禁用门店 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/disable`
 */
export const postApiStoreV1StoresDisable = /*#__PURE__*/ (
  requestData: PostApiStoreV1StoresDisableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStoreV1StoresDisableResponse>(
    prepare(postApiStoreV1StoresDisableRequestConfig, requestData),
    ...args,
  )
}

postApiStoreV1StoresDisable.requestConfig = postApiStoreV1StoresDisableRequestConfig

/**
 * 接口 启用门店 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/enable`
 */
export interface PostApiStoreV1StoresEnableRequest {
  /**
   * 门店ID（路径参数）
   */
  id?: string
}

/**
 * 接口 启用门店 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/enable`
 */
export interface PostApiStoreV1StoresEnableResponse {}

/**
 * 接口 启用门店 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/enable`
 */
type PostApiStoreV1StoresEnableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/stores/enable', undefined, string, string, false>
>

/**
 * 接口 启用门店 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/enable`
 */
const postApiStoreV1StoresEnableRequestConfig: PostApiStoreV1StoresEnableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/stores/enable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStoreV1StoresEnable',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 启用门店 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/enable`
 */
export const postApiStoreV1StoresEnable = /*#__PURE__*/ (
  requestData: PostApiStoreV1StoresEnableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStoreV1StoresEnableResponse>(
    prepare(postApiStoreV1StoresEnableRequestConfig, requestData),
    ...args,
  )
}

postApiStoreV1StoresEnable.requestConfig = postApiStoreV1StoresEnableRequestConfig

/**
 * 接口 更新门店打印配置 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/printConfig_put`
 */
export interface PutApiStoreV1StoresPrintConfigRequest {
  /**
   * 门店ID
   */
  id?: string
  /**
   * 是否启用订单自动打印
   */
  printEnabled?: boolean
  /**
   * 门店打印机配置列表，每台打印机可配置多个小票类型
   */
  printPrinters?: {
    /**
     * 打印机展示名称
     */
    name?: string
    /**
     * 是否启用该打印机
     */
    enabled?: boolean
    /**
     * 打印 provider 厂家代码，对应平台已启用 provider code，如 hprt
     */
    provider?: string
    /**
     * 厂家侧打印机编号
     */
    printerNo?: string
    /**
     * 小票类型列表：front_order=前台小票，kitchen_order=后厨小票，kitchen_add_items=后厨加菜小票，table_open=后台开台小票，recharge_order=充值订单小票，points_deposit_ticket=积分存入工单小票，points_withdraw_ticket=积分提取工单小票，wine_deposit_ticket=会员存酒工单小票，wine_withdraw_ticket=会员取酒工单小票；同一打印机可同时配置多个小票类型
     */
    receiptTypes?: string[]
  }[]
}

/**
 * 接口 更新门店打印配置 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/printConfig_put`
 */
export interface PutApiStoreV1StoresPrintConfigResponse {
  /**
   * Store 门店信息。
   */
  store?: {
    /**
     * 门店ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 名称
     */
    name?: string
    /**
     * 地址
     */
    address?: string
    /**
     * 电话
     */
    phone?: string
    /**
     * 营业开始时间
     */
    businessHoursStart?: string
    /**
     * 营业结束时间
     */
    businessHoursEnd?: string
    /**
     * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
     */
    status?: number
    /**
     * 封面图URL
     */
    coverUrl?: string
    /**
     * 经度
     */
    longitude?: string
    /**
     * 纬度
     */
    latitude?: string
    /**
     * 当前营业记录ID
     */
    currentBusinessId?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    currentBusiness?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * 是否启用订单自动打印
     */
    printEnabled?: boolean
    /**
     * 门店打印机配置列表，每台打印机可配置多个小票类型
     */
    printPrinters?: {
      /**
       * 打印机展示名称
       */
      name?: string
      /**
       * 是否启用该打印机
       */
      enabled?: boolean
      /**
       * 打印 provider 厂家代码，对应平台已启用 provider code，如 hprt
       */
      provider?: string
      /**
       * 厂家侧打印机编号
       */
      printerNo?: string
      /**
       * 小票类型列表：front_order=前台小票，kitchen_order=后厨小票，kitchen_add_items=后厨加菜小票，table_open=后台开台小票，recharge_order=充值订单小票，points_deposit_ticket=积分存入工单小票，points_withdraw_ticket=积分提取工单小票，wine_deposit_ticket=会员存酒工单小票，wine_withdraw_ticket=会员取酒工单小票；同一打印机可同时配置多个小票类型
       */
      receiptTypes?: string[]
    }[]
  }
}

/**
 * 接口 更新门店打印配置 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/printConfig_put`
 */
type PutApiStoreV1StoresPrintConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/stores/printConfig_put', undefined, string, string, false>
>

/**
 * 接口 更新门店打印配置 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/printConfig_put`
 */
const putApiStoreV1StoresPrintConfigRequestConfig: PutApiStoreV1StoresPrintConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/stores/printConfig_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiStoreV1StoresPrintConfig',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新门店打印配置 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores/printConfig_put`
 */
export const putApiStoreV1StoresPrintConfig = /*#__PURE__*/ (
  requestData: PutApiStoreV1StoresPrintConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiStoreV1StoresPrintConfigResponse>(
    prepare(putApiStoreV1StoresPrintConfigRequestConfig, requestData),
    ...args,
  )
}

putApiStoreV1StoresPrintConfig.requestConfig = putApiStoreV1StoresPrintConfigRequestConfig

/**
 * 接口 查询门店详情 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores/{id}`
 */
export interface GetApiStoreV1StoresByIdRequest {
  /**
   * 门店ID
   */
  id: string
}

/**
 * 接口 查询门店详情 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores/{id}`
 */
export interface GetApiStoreV1StoresByIdResponse {
  /**
   * Store 门店信息。
   */
  store?: {
    /**
     * 门店ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 名称
     */
    name?: string
    /**
     * 地址
     */
    address?: string
    /**
     * 电话
     */
    phone?: string
    /**
     * 营业开始时间
     */
    businessHoursStart?: string
    /**
     * 营业结束时间
     */
    businessHoursEnd?: string
    /**
     * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
     */
    status?: number
    /**
     * 封面图URL
     */
    coverUrl?: string
    /**
     * 经度
     */
    longitude?: string
    /**
     * 纬度
     */
    latitude?: string
    /**
     * 当前营业记录ID
     */
    currentBusinessId?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * BusinessDisplayInfo 营业记录通用展示信息。
     */
    currentBusiness?: {
      /**
       * 营业记录ID
       */
      id?: string
      /**
       * 营业日期
       */
      businessDate?: string
      /**
       * 营业状态：open/closed
       */
      status?: string
    }
    /**
     * 是否启用订单自动打印
     */
    printEnabled?: boolean
    /**
     * 门店打印机配置列表，每台打印机可配置多个小票类型
     */
    printPrinters?: {
      /**
       * 打印机展示名称
       */
      name?: string
      /**
       * 是否启用该打印机
       */
      enabled?: boolean
      /**
       * 打印 provider 厂家代码，对应平台已启用 provider code，如 hprt
       */
      provider?: string
      /**
       * 厂家侧打印机编号
       */
      printerNo?: string
      /**
       * 小票类型列表：front_order=前台小票，kitchen_order=后厨小票，kitchen_add_items=后厨加菜小票，table_open=后台开台小票，recharge_order=充值订单小票，points_deposit_ticket=积分存入工单小票，points_withdraw_ticket=积分提取工单小票，wine_deposit_ticket=会员存酒工单小票，wine_withdraw_ticket=会员取酒工单小票；同一打印机可同时配置多个小票类型
       */
      receiptTypes?: string[]
    }[]
  }
}

/**
 * 接口 查询门店详情 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores/{id}`
 */
type GetApiStoreV1StoresByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/stores/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询门店详情 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores/{id}`
 */
const getApiStoreV1StoresByIdRequestConfig: GetApiStoreV1StoresByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/stores/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiStoreV1StoresById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询门店详情 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `GET /api/store/v1/stores/{id}`
 */
export const getApiStoreV1StoresById = /*#__PURE__*/ (
  requestData: GetApiStoreV1StoresByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiStoreV1StoresByIdResponse>(prepare(getApiStoreV1StoresByIdRequestConfig, requestData), ...args)
}

getApiStoreV1StoresById.requestConfig = getApiStoreV1StoresByIdRequestConfig

/**
 * 接口 更新门店 的 **请求类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores_put`
 */
export interface PutApiStoreV1StoresRequest {
  /**
   * 门店ID（路径参数）
   */
  id?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 地址
   */
  address?: string
  /**
   * 电话
   */
  phone?: string
  /**
   * 营业开始时间
   */
  businessHoursStart?: string
  /**
   * 营业结束时间
   */
  businessHoursEnd?: string
  /**
   * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
   */
  status?: number
  /**
   * 封面图URL
   */
  coverUrl?: string
  /**
   * 经度
   */
  longitude?: string
  /**
   * 纬度
   */
  latitude?: string
}

/**
 * 接口 更新门店 的 **返回类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores_put`
 */
export interface PutApiStoreV1StoresResponse {}

/**
 * 接口 更新门店 的 **请求配置的类型**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores_put`
 */
type PutApiStoreV1StoresRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/stores_put', undefined, string, string, false>
>

/**
 * 接口 更新门店 的 **请求配置**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores_put`
 */
const putApiStoreV1StoresRequestConfig: PutApiStoreV1StoresRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/stores_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiStoreV1Stores',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新门店 的 **请求函数**
 *
 * @分类 StoreService
 * @请求头 `POST /api/store/v1/stores_put`
 */
export const putApiStoreV1Stores = /*#__PURE__*/ (
  requestData: PutApiStoreV1StoresRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiStoreV1StoresResponse>(prepare(putApiStoreV1StoresRequestConfig, requestData), ...args)
}

putApiStoreV1Stores.requestConfig = putApiStoreV1StoresRequestConfig

/**
 * 接口 查询商户列表 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants`
 */
export interface GetApiMerchantV1MerchantsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  name?: string
  status?: number
}

/**
 * 接口 查询商户列表 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants`
 */
export interface GetApiMerchantV1MerchantsResponse {
  /**
   * 商户列表
   */
  merchants?: {
    /**
     * 商户ID
     */
    id?: string
    /**
     * 商户名称
     */
    name?: string
    /**
     * 联系人
     */
    contactPerson?: string
    /**
     * 联系电话
     */
    phone?: string
    /**
     * 营业执照URL
     */
    licenseUrl?: string
    /**
     * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
     */
    status?: number
    /**
     * 备注
     */
    remark?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 商户logo URL
     */
    logo?: string
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询商户列表 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants`
 */
type GetApiMerchantV1MerchantsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/merchant/v1/merchants',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'name' | 'status',
    false
  >
>

/**
 * 接口 查询商户列表 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants`
 */
const getApiMerchantV1MerchantsRequestConfig: GetApiMerchantV1MerchantsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/merchant/v1/merchants',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'name', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiMerchantV1Merchants',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询商户列表 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants`
 */
export const getApiMerchantV1Merchants = /*#__PURE__*/ (
  requestData: GetApiMerchantV1MerchantsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1MerchantsResponse>(
    prepare(getApiMerchantV1MerchantsRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1Merchants.requestConfig = getApiMerchantV1MerchantsRequestConfig

/**
 * 接口 创建商户 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants`
 */
export interface PostApiMerchantV1MerchantsRequest {
  /**
   * 商户名称
   */
  name?: string
  /**
   * 联系人
   */
  contactPerson?: string
  /**
   * 联系电话
   */
  phone?: string
  /**
   * 营业执照URL
   */
  licenseUrl?: string
  /**
   * 状态：1=启用，2=禁用
   */
  status?: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 商户logo URL
   */
  logo?: string
}

/**
 * 接口 创建商户 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants`
 */
export interface PostApiMerchantV1MerchantsResponse {
  /**
   * 新建商户ID
   */
  id?: string
}

/**
 * 接口 创建商户 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants`
 */
type PostApiMerchantV1MerchantsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants', undefined, string, string, false>
>

/**
 * 接口 创建商户 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants`
 */
const postApiMerchantV1MerchantsRequestConfig: PostApiMerchantV1MerchantsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/merchant/v1/merchants',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiMerchantV1Merchants',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建商户 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants`
 */
export const postApiMerchantV1Merchants = /*#__PURE__*/ (
  requestData: PostApiMerchantV1MerchantsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMerchantV1MerchantsResponse>(
    prepare(postApiMerchantV1MerchantsRequestConfig, requestData),
    ...args,
  )
}

postApiMerchantV1Merchants.requestConfig = postApiMerchantV1MerchantsRequestConfig

/**
 * 接口 禁用商户 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/disable`
 */
export interface PostApiMerchantV1MerchantsDisableRequest {
  /**
   * 商户ID（路径参数）
   */
  id?: string
}

/**
 * 接口 禁用商户 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/disable`
 */
export interface PostApiMerchantV1MerchantsDisableResponse {}

/**
 * 接口 禁用商户 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/disable`
 */
type PostApiMerchantV1MerchantsDisableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/disable', undefined, string, string, false>
>

/**
 * 接口 禁用商户 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/disable`
 */
const postApiMerchantV1MerchantsDisableRequestConfig: PostApiMerchantV1MerchantsDisableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/merchant/v1/merchants/disable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiMerchantV1MerchantsDisable',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 禁用商户 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/disable`
 */
export const postApiMerchantV1MerchantsDisable = /*#__PURE__*/ (
  requestData: PostApiMerchantV1MerchantsDisableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMerchantV1MerchantsDisableResponse>(
    prepare(postApiMerchantV1MerchantsDisableRequestConfig, requestData),
    ...args,
  )
}

postApiMerchantV1MerchantsDisable.requestConfig = postApiMerchantV1MerchantsDisableRequestConfig

/**
 * 接口 启用商户 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/enable`
 */
export interface PostApiMerchantV1MerchantsEnableRequest {
  /**
   * 商户ID（路径参数）
   */
  id?: string
}

/**
 * 接口 启用商户 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/enable`
 */
export interface PostApiMerchantV1MerchantsEnableResponse {}

/**
 * 接口 启用商户 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/enable`
 */
type PostApiMerchantV1MerchantsEnableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/enable', undefined, string, string, false>
>

/**
 * 接口 启用商户 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/enable`
 */
const postApiMerchantV1MerchantsEnableRequestConfig: PostApiMerchantV1MerchantsEnableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/merchant/v1/merchants/enable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiMerchantV1MerchantsEnable',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 启用商户 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/enable`
 */
export const postApiMerchantV1MerchantsEnable = /*#__PURE__*/ (
  requestData: PostApiMerchantV1MerchantsEnableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMerchantV1MerchantsEnableResponse>(
    prepare(postApiMerchantV1MerchantsEnableRequestConfig, requestData),
    ...args,
  )
}

postApiMerchantV1MerchantsEnable.requestConfig = postApiMerchantV1MerchantsEnableRequestConfig

/**
 * 接口 更新邀请配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/inviteConfig_put`
 */
export interface PutApiMerchantV1MerchantsInviteConfigRequest {
  /**
   * 商户ID
   */
  id?: string
  /**
   * 是否启用会员邀请功能
   */
  inviteEnabled?: boolean
  /**
   * 邀请达成条件：register=注册即达成，first_completed_order=首笔完成消费订单达成
   */
  qualificationCondition?: string
  /**
   * 配置名称
   */
  name?: string
  /**
   * 配置说明
   */
  description?: string
}

/**
 * 接口 更新邀请配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/inviteConfig_put`
 */
export interface PutApiMerchantV1MerchantsInviteConfigResponse {
  /**
   * MerchantInviteConfig 数据结构。
   */
  inviteConfig?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 是否启用会员邀请功能
     */
    inviteEnabled?: boolean
    /**
     * 邀请达成条件：register=注册即达成，first_completed_order=首笔完成消费订单达成
     */
    qualificationCondition?: string
    /**
     * 配置名称
     */
    name?: string
    /**
     * 配置说明
     */
    description?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 更新邀请配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/inviteConfig_put`
 */
type PutApiMerchantV1MerchantsInviteConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/inviteConfig_put', undefined, string, string, false>
>

/**
 * 接口 更新邀请配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/inviteConfig_put`
 */
const putApiMerchantV1MerchantsInviteConfigRequestConfig: PutApiMerchantV1MerchantsInviteConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/inviteConfig_put',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'putApiMerchantV1MerchantsInviteConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 更新邀请配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/inviteConfig_put`
 */
export const putApiMerchantV1MerchantsInviteConfig = /*#__PURE__*/ (
  requestData: PutApiMerchantV1MerchantsInviteConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiMerchantV1MerchantsInviteConfigResponse>(
    prepare(putApiMerchantV1MerchantsInviteConfigRequestConfig, requestData),
    ...args,
  )
}

putApiMerchantV1MerchantsInviteConfig.requestConfig = putApiMerchantV1MerchantsInviteConfigRequestConfig

/**
 * 接口 更新支付配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/payConfig_put`
 */
export interface PutApiMerchantV1MerchantsPayConfigRequest {
  /**
   * 商户ID（路径参数）
   */
  id?: string
  /**
   * 微信商户号
   */
  mchId?: string
  /**
   * APIv3密钥
   */
  apiV3Key?: string
  /**
   * 私钥
   */
  privateKey?: string
  /**
   * 证书序列号
   */
  serialNo?: string
  /**
   * 支付开关
   */
  payEnabled?: boolean
}

/**
 * 接口 更新支付配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/payConfig_put`
 */
export interface PutApiMerchantV1MerchantsPayConfigResponse {}

/**
 * 接口 更新支付配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/payConfig_put`
 */
type PutApiMerchantV1MerchantsPayConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/payConfig_put', undefined, string, string, false>
>

/**
 * 接口 更新支付配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/payConfig_put`
 */
const putApiMerchantV1MerchantsPayConfigRequestConfig: PutApiMerchantV1MerchantsPayConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/merchant/v1/merchants/payConfig_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiMerchantV1MerchantsPayConfig',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新支付配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/payConfig_put`
 */
export const putApiMerchantV1MerchantsPayConfig = /*#__PURE__*/ (
  requestData: PutApiMerchantV1MerchantsPayConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiMerchantV1MerchantsPayConfigResponse>(
    prepare(putApiMerchantV1MerchantsPayConfigRequestConfig, requestData),
    ...args,
  )
}

putApiMerchantV1MerchantsPayConfig.requestConfig = putApiMerchantV1MerchantsPayConfigRequestConfig

/**
 * 接口 更新积分配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/pointsConfig_put`
 */
export interface PutApiMerchantV1MerchantsPointsConfigRequest {
  /**
   * 商户ID（路径参数）
   */
  id?: string
  /**
   * 是否启用积分
   */
  enabled?: boolean
  /**
   * 积分累计倍率，例如 0.1 表示消费 1 元获得 0.1 积分
   */
  earnRate?: number
  /**
   * 积分抵扣比例，例如 100 表示 100 积分抵扣 1 元
   */
  redeemRatio?: number
  /**
   * 积分有效期天数
   */
  expireDays?: number
  /**
   * 最低使用积分门槛
   */
  minUsePoints?: number
  /**
   * 积分存入梯度列表；第一档 minPoints 表示最小可提交积分，各档区间连续；最后一档可用 maxPoints=0 表示无上限
   */
  depositExchangeTiers?: {
    /**
     * 积分区间起点，包含该值，第一档必须为 0
     */
    minPoints?: string
    /**
     * 积分区间终点，不包含该值；0 表示无上限，仅最后一档允许为 0
     */
    maxPoints?: string
    /**
     * 该档多少原始积分折算 1 个实际存入积分，向下取整；1 表示 1:1 存入
     */
    depositExchangePoints?: string
    /**
     * 该档多少原始积分折算 1 次抽奖次数，向下取整；0 表示该档不兑换抽奖次数
     */
    drawExchangePoints?: string
  }[]
}

/**
 * 接口 更新积分配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/pointsConfig_put`
 */
export interface PutApiMerchantV1MerchantsPointsConfigResponse {}

/**
 * 接口 更新积分配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/pointsConfig_put`
 */
type PutApiMerchantV1MerchantsPointsConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/pointsConfig_put', undefined, string, string, false>
>

/**
 * 接口 更新积分配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/pointsConfig_put`
 */
const putApiMerchantV1MerchantsPointsConfigRequestConfig: PutApiMerchantV1MerchantsPointsConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/pointsConfig_put',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'putApiMerchantV1MerchantsPointsConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 更新积分配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/pointsConfig_put`
 */
export const putApiMerchantV1MerchantsPointsConfig = /*#__PURE__*/ (
  requestData: PutApiMerchantV1MerchantsPointsConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiMerchantV1MerchantsPointsConfigResponse>(
    prepare(putApiMerchantV1MerchantsPointsConfigRequestConfig, requestData),
    ...args,
  )
}

putApiMerchantV1MerchantsPointsConfig.requestConfig = putApiMerchantV1MerchantsPointsConfigRequestConfig

/**
 * 接口 更新商户小票配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptConfig_put`
 */
export interface PutApiMerchantV1MerchantsPrintReceiptConfigRequest {
  /**
   * 商户ID
   */
  id?: string
  /**
   * 小票模板列表
   */
  templates?: {
    /**
     * 小票类型：front_order=前台小票，kitchen_order=后厨小票
     */
    receiptType?: string
    /**
     * 是否启用该小票类型，门店打印机只能打印已启用的小票类型
     */
    enabled?: boolean
    /**
     * 模板区块列表
     */
    blocks?: {
      /**
       * 区块类型：text=固定文本，divider=分割线，field=字段，items=菜品列表
       */
      type?: string
      /**
       * 固定文本内容，type=text 时使用
       */
      text?: string
      /**
       * 字段代码，type=field 时使用
       */
      field?: string
      /**
       * 字段标签，type=field 时使用
       */
      label?: string
      /**
       * 菜品行字段列表，type=items 时使用
       */
      itemFields?: string[]
      /**
       * 对齐方式：left=居左，center=居中，right=居右
       */
      align?: string
      /**
       * 是否加粗
       */
      bold?: boolean
      /**
       * 字体大小：normal=正常，large=大号，xlarge=特大号；不传按 normal 处理
       */
      fontSize?: string
    }[]
  }[]
}

/**
 * 接口 更新商户小票配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptConfig_put`
 */
export interface PutApiMerchantV1MerchantsPrintReceiptConfigResponse {
  /**
   * MerchantPrintReceiptConfig 商户小票配置。
   */
  printReceiptConfig?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 小票模板列表
     */
    templates?: {
      /**
       * 小票类型：front_order=前台小票，kitchen_order=后厨小票
       */
      receiptType?: string
      /**
       * 是否启用该小票类型，门店打印机只能打印已启用的小票类型
       */
      enabled?: boolean
      /**
       * 模板区块列表
       */
      blocks?: {
        /**
         * 区块类型：text=固定文本，divider=分割线，field=字段，items=菜品列表
         */
        type?: string
        /**
         * 固定文本内容，type=text 时使用
         */
        text?: string
        /**
         * 字段代码，type=field 时使用
         */
        field?: string
        /**
         * 字段标签，type=field 时使用
         */
        label?: string
        /**
         * 菜品行字段列表，type=items 时使用
         */
        itemFields?: string[]
        /**
         * 对齐方式：left=居左，center=居中，right=居右
         */
        align?: string
        /**
         * 是否加粗
         */
        bold?: boolean
        /**
         * 字体大小：normal=正常，large=大号，xlarge=特大号；不传按 normal 处理
         */
        fontSize?: string
      }[]
    }[]
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 更新商户小票配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptConfig_put`
 */
type PutApiMerchantV1MerchantsPrintReceiptConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/printReceiptConfig_put', undefined, string, string, false>
>

/**
 * 接口 更新商户小票配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptConfig_put`
 */
const putApiMerchantV1MerchantsPrintReceiptConfigRequestConfig: PutApiMerchantV1MerchantsPrintReceiptConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/printReceiptConfig_put',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'putApiMerchantV1MerchantsPrintReceiptConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 更新商户小票配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptConfig_put`
 */
export const putApiMerchantV1MerchantsPrintReceiptConfig = /*#__PURE__*/ (
  requestData: PutApiMerchantV1MerchantsPrintReceiptConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiMerchantV1MerchantsPrintReceiptConfigResponse>(
    prepare(putApiMerchantV1MerchantsPrintReceiptConfigRequestConfig, requestData),
    ...args,
  )
}

putApiMerchantV1MerchantsPrintReceiptConfig.requestConfig = putApiMerchantV1MerchantsPrintReceiptConfigRequestConfig

/**
 * 接口 预览商户小票模板 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptPreview`
 */
export interface PostApiMerchantV1MerchantsPrintReceiptPreviewRequest {
  /**
   * 商户ID
   */
  id?: string
  /**
   * PrintReceiptTemplate 小票模板配置。
   */
  template?: {
    /**
     * 小票类型：front_order=前台小票，kitchen_order=后厨小票
     */
    receiptType?: string
    /**
     * 是否启用该小票类型，门店打印机只能打印已启用的小票类型
     */
    enabled?: boolean
    /**
     * 模板区块列表
     */
    blocks?: {
      /**
       * 区块类型：text=固定文本，divider=分割线，field=字段，items=菜品列表
       */
      type?: string
      /**
       * 固定文本内容，type=text 时使用
       */
      text?: string
      /**
       * 字段代码，type=field 时使用
       */
      field?: string
      /**
       * 字段标签，type=field 时使用
       */
      label?: string
      /**
       * 菜品行字段列表，type=items 时使用
       */
      itemFields?: string[]
      /**
       * 对齐方式：left=居左，center=居中，right=居右
       */
      align?: string
      /**
       * 是否加粗
       */
      bold?: boolean
      /**
       * 字体大小：normal=正常，large=大号，xlarge=特大号；不传按 normal 处理
       */
      fontSize?: string
    }[]
  }
}

/**
 * 接口 预览商户小票模板 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptPreview`
 */
export interface PostApiMerchantV1MerchantsPrintReceiptPreviewResponse {
  /**
   * 文本预览内容
   */
  content?: string
}

/**
 * 接口 预览商户小票模板 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptPreview`
 */
type PostApiMerchantV1MerchantsPrintReceiptPreviewRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/printReceiptPreview', undefined, string, string, false>
>

/**
 * 接口 预览商户小票模板 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptPreview`
 */
const postApiMerchantV1MerchantsPrintReceiptPreviewRequestConfig: PostApiMerchantV1MerchantsPrintReceiptPreviewRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/printReceiptPreview',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiMerchantV1MerchantsPrintReceiptPreview',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 预览商户小票模板 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/printReceiptPreview`
 */
export const postApiMerchantV1MerchantsPrintReceiptPreview = /*#__PURE__*/ (
  requestData: PostApiMerchantV1MerchantsPrintReceiptPreviewRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMerchantV1MerchantsPrintReceiptPreviewResponse>(
    prepare(postApiMerchantV1MerchantsPrintReceiptPreviewRequestConfig, requestData),
    ...args,
  )
}

postApiMerchantV1MerchantsPrintReceiptPreview.requestConfig = postApiMerchantV1MerchantsPrintReceiptPreviewRequestConfig

/**
 * 接口 更新积分存入配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/rechargeConfig_put`
 */
export interface PutApiMerchantV1MerchantsRechargeConfigRequest {
  /**
   * 商户ID（路径参数）
   */
  id?: string
  /**
   * 最低完成订单金额
   */
  minCompletedOrderAmount?: string
  /**
   * 积分存入审核通过后固定奖励积分，0 表示不奖励
   */
  rewardPoints?: string
}

/**
 * 接口 更新积分存入配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/rechargeConfig_put`
 */
export interface PutApiMerchantV1MerchantsRechargeConfigResponse {}

/**
 * 接口 更新积分存入配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/rechargeConfig_put`
 */
type PutApiMerchantV1MerchantsRechargeConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/rechargeConfig_put', undefined, string, string, false>
>

/**
 * 接口 更新积分存入配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/rechargeConfig_put`
 */
const putApiMerchantV1MerchantsRechargeConfigRequestConfig: PutApiMerchantV1MerchantsRechargeConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/rechargeConfig_put',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'putApiMerchantV1MerchantsRechargeConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 更新积分存入配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/rechargeConfig_put`
 */
export const putApiMerchantV1MerchantsRechargeConfig = /*#__PURE__*/ (
  requestData: PutApiMerchantV1MerchantsRechargeConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiMerchantV1MerchantsRechargeConfigResponse>(
    prepare(putApiMerchantV1MerchantsRechargeConfigRequestConfig, requestData),
    ...args,
  )
}

putApiMerchantV1MerchantsRechargeConfig.requestConfig = putApiMerchantV1MerchantsRechargeConfigRequestConfig

/**
 * 接口 更新存酒配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/wineStorageConfig_put`
 */
export interface PutApiMerchantV1MerchantsWineStorageConfigRequest {
  /**
   * 商户ID
   */
  id?: string
  /**
   * 存酒有效天数
   */
  expireDays?: number
}

/**
 * 接口 更新存酒配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/wineStorageConfig_put`
 */
export interface PutApiMerchantV1MerchantsWineStorageConfigResponse {}

/**
 * 接口 更新存酒配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/wineStorageConfig_put`
 */
type PutApiMerchantV1MerchantsWineStorageConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/wineStorageConfig_put', undefined, string, string, false>
>

/**
 * 接口 更新存酒配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/wineStorageConfig_put`
 */
const putApiMerchantV1MerchantsWineStorageConfigRequestConfig: PutApiMerchantV1MerchantsWineStorageConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/wineStorageConfig_put',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'putApiMerchantV1MerchantsWineStorageConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 更新存酒配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/wineStorageConfig_put`
 */
export const putApiMerchantV1MerchantsWineStorageConfig = /*#__PURE__*/ (
  requestData: PutApiMerchantV1MerchantsWineStorageConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiMerchantV1MerchantsWineStorageConfigResponse>(
    prepare(putApiMerchantV1MerchantsWineStorageConfigRequestConfig, requestData),
    ...args,
  )
}

putApiMerchantV1MerchantsWineStorageConfig.requestConfig = putApiMerchantV1MerchantsWineStorageConfigRequestConfig

/**
 * 接口 创建商户并初始化负责人 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/withOwner`
 */
export interface PostApiMerchantV1MerchantsWithOwnerRequest {
  /**
   * 商户名称
   */
  name?: string
  /**
   * 联系人
   */
  contactPerson?: string
  /**
   * 联系电话
   */
  phone?: string
  /**
   * 营业执照URL
   */
  licenseUrl?: string
  /**
   * 状态：1=启用，2=禁用
   */
  status?: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 负责人姓名
   */
  ownerName?: string
  /**
   * 负责人手机号
   */
  ownerPhone?: string
  /**
   * 商户logo URL
   */
  logo?: string
}

/**
 * 接口 创建商户并初始化负责人 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/withOwner`
 */
export interface PostApiMerchantV1MerchantsWithOwnerResponse {
  /**
   * 新建商户ID
   */
  merchantId?: string
  /**
   * 默认总店ID
   */
  defaultStoreId?: string
  /**
   * 负责人待确认人员ID
   */
  ownerStaffId?: string
  /**
   * 商户管理员任职ID
   */
  merchantAdminAssignmentId?: string
  /**
   * 总店店长任职ID
   */
  storeManagerAssignmentId?: string
  /**
   * 负责人邀请ID
   */
  inviteId?: string
  /**
   * 负责人邀请明文token，仅本次返回
   */
  inviteToken?: string
  /**
   * 邀请过期时间
   */
  inviteExpiresAt?: string
}

/**
 * 接口 创建商户并初始化负责人 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/withOwner`
 */
type PostApiMerchantV1MerchantsWithOwnerRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/withOwner', undefined, string, string, false>
>

/**
 * 接口 创建商户并初始化负责人 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/withOwner`
 */
const postApiMerchantV1MerchantsWithOwnerRequestConfig: PostApiMerchantV1MerchantsWithOwnerRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/withOwner',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiMerchantV1MerchantsWithOwner',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 创建商户并初始化负责人 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants/withOwner`
 */
export const postApiMerchantV1MerchantsWithOwner = /*#__PURE__*/ (
  requestData: PostApiMerchantV1MerchantsWithOwnerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMerchantV1MerchantsWithOwnerResponse>(
    prepare(postApiMerchantV1MerchantsWithOwnerRequestConfig, requestData),
    ...args,
  )
}

postApiMerchantV1MerchantsWithOwner.requestConfig = postApiMerchantV1MerchantsWithOwnerRequestConfig

/**
 * 接口 查询商户详情 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}`
 */
export interface GetApiMerchantV1MerchantsByIdRequest {
  /**
   * 商户ID
   */
  id: string
}

/**
 * 接口 查询商户详情 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}`
 */
export interface GetApiMerchantV1MerchantsByIdResponse {
  /**
   * 商户ID
   */
  id?: string
  /**
   * 商户名称
   */
  name?: string
  /**
   * 联系人
   */
  contactPerson?: string
  /**
   * 联系电话
   */
  phone?: string
  /**
   * 营业执照URL
   */
  licenseUrl?: string
  /**
   * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
   */
  status?: number
  /**
   * 备注
   */
  remark?: string
  /**
   * 创建时间
   */
  createdAt?: string
  /**
   * 更新时间
   */
  updatedAt?: string
  /**
   * 会员昵称前缀
   */
  memberNicknamePrefix?: string
  /**
   * 会员序号
   */
  memberSeq?: string
  /**
   * 商户logo URL
   */
  logo?: string
}

/**
 * 接口 查询商户详情 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}`
 */
type GetApiMerchantV1MerchantsByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询商户详情 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}`
 */
const getApiMerchantV1MerchantsByIdRequestConfig: GetApiMerchantV1MerchantsByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/merchant/v1/merchants/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiMerchantV1MerchantsById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询商户详情 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}`
 */
export const getApiMerchantV1MerchantsById = /*#__PURE__*/ (
  requestData: GetApiMerchantV1MerchantsByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1MerchantsByIdResponse>(
    prepare(getApiMerchantV1MerchantsByIdRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1MerchantsById.requestConfig = getApiMerchantV1MerchantsByIdRequestConfig

/**
 * 接口 查询邀请配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/inviteConfig`
 */
export interface GetApiMerchantV1MerchantsByIdInviteConfigRequest {
  /**
   * 商户ID
   */
  id: string
}

/**
 * 接口 查询邀请配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/inviteConfig`
 */
export interface GetApiMerchantV1MerchantsByIdInviteConfigResponse {
  /**
   * MerchantInviteConfig 数据结构。
   */
  inviteConfig?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 是否启用会员邀请功能
     */
    inviteEnabled?: boolean
    /**
     * 邀请达成条件：register=注册即达成，first_completed_order=首笔完成消费订单达成
     */
    qualificationCondition?: string
    /**
     * 配置名称
     */
    name?: string
    /**
     * 配置说明
     */
    description?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 查询邀请配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/inviteConfig`
 */
type GetApiMerchantV1MerchantsByIdInviteConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/{id}/inviteConfig', undefined, 'id', string, false>
>

/**
 * 接口 查询邀请配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/inviteConfig`
 */
const getApiMerchantV1MerchantsByIdInviteConfigRequestConfig: GetApiMerchantV1MerchantsByIdInviteConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/{id}/inviteConfig',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMerchantV1MerchantsByIdInviteConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询邀请配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/inviteConfig`
 */
export const getApiMerchantV1MerchantsByIdInviteConfig = /*#__PURE__*/ (
  requestData: GetApiMerchantV1MerchantsByIdInviteConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1MerchantsByIdInviteConfigResponse>(
    prepare(getApiMerchantV1MerchantsByIdInviteConfigRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1MerchantsByIdInviteConfig.requestConfig = getApiMerchantV1MerchantsByIdInviteConfigRequestConfig

/**
 * 接口 查询支付配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/payConfig`
 */
export interface GetApiMerchantV1MerchantsByIdPayConfigRequest {
  /**
   * 商户ID（路径参数）
   */
  id: string
}

/**
 * 接口 查询支付配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/payConfig`
 */
export interface GetApiMerchantV1MerchantsByIdPayConfigResponse {
  /**
   * MerchantPayConfig 数据结构。
   */
  payConfig?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 微信商户号
     */
    mchId?: string
    /**
     * APIv3密钥
     */
    apiV3Key?: string
    /**
     * 私钥
     */
    privateKey?: string
    /**
     * 证书序列号
     */
    serialNo?: string
    /**
     * 支付开关
     */
    payEnabled?: boolean
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 查询支付配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/payConfig`
 */
type GetApiMerchantV1MerchantsByIdPayConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/{id}/payConfig', undefined, 'id', string, false>
>

/**
 * 接口 查询支付配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/payConfig`
 */
const getApiMerchantV1MerchantsByIdPayConfigRequestConfig: GetApiMerchantV1MerchantsByIdPayConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/{id}/payConfig',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMerchantV1MerchantsByIdPayConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询支付配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/payConfig`
 */
export const getApiMerchantV1MerchantsByIdPayConfig = /*#__PURE__*/ (
  requestData: GetApiMerchantV1MerchantsByIdPayConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1MerchantsByIdPayConfigResponse>(
    prepare(getApiMerchantV1MerchantsByIdPayConfigRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1MerchantsByIdPayConfig.requestConfig = getApiMerchantV1MerchantsByIdPayConfigRequestConfig

/**
 * 接口 查询积分配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/pointsConfig`
 */
export interface GetApiMerchantV1MerchantsByIdPointsConfigRequest {
  /**
   * 商户ID（路径参数）
   */
  id: string
}

/**
 * 接口 查询积分配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/pointsConfig`
 */
export interface GetApiMerchantV1MerchantsByIdPointsConfigResponse {
  /**
   * MerchantPointsConfig 数据结构。
   */
  pointsConfig?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 是否启用积分
     */
    enabled?: boolean
    /**
     * 积分累计倍率，例如 0.1 表示消费 1 元获得 0.1 积分
     */
    earnRate?: number
    /**
     * 积分抵扣比例，例如 100 表示 100 积分抵扣 1 元
     */
    redeemRatio?: number
    /**
     * 积分有效期天数，0 表示不过期
     */
    expireDays?: number
    /**
     * 最低使用积分门槛
     */
    minUsePoints?: number
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 积分存入梯度列表；按本次提交积分总量分段计算实际存入积分和抽奖次数
     */
    depositExchangeTiers?: {
      /**
       * 积分区间起点，包含该值，第一档必须为 0
       */
      minPoints?: string
      /**
       * 积分区间终点，不包含该值；0 表示无上限，仅最后一档允许为 0
       */
      maxPoints?: string
      /**
       * 该档多少原始积分折算 1 个实际存入积分，向下取整；1 表示 1:1 存入
       */
      depositExchangePoints?: string
      /**
       * 该档多少原始积分折算 1 次抽奖次数，向下取整；0 表示该档不兑换抽奖次数
       */
      drawExchangePoints?: string
    }[]
  }
}

/**
 * 接口 查询积分配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/pointsConfig`
 */
type GetApiMerchantV1MerchantsByIdPointsConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/{id}/pointsConfig', undefined, 'id', string, false>
>

/**
 * 接口 查询积分配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/pointsConfig`
 */
const getApiMerchantV1MerchantsByIdPointsConfigRequestConfig: GetApiMerchantV1MerchantsByIdPointsConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/{id}/pointsConfig',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMerchantV1MerchantsByIdPointsConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询积分配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/pointsConfig`
 */
export const getApiMerchantV1MerchantsByIdPointsConfig = /*#__PURE__*/ (
  requestData: GetApiMerchantV1MerchantsByIdPointsConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1MerchantsByIdPointsConfigResponse>(
    prepare(getApiMerchantV1MerchantsByIdPointsConfigRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1MerchantsByIdPointsConfig.requestConfig = getApiMerchantV1MerchantsByIdPointsConfigRequestConfig

/**
 * 接口 查询商户小票配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/printReceiptConfig`
 */
export interface GetApiMerchantV1MerchantsByIdPrintReceiptConfigRequest {
  /**
   * 商户ID
   */
  id: string
}

/**
 * 接口 查询商户小票配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/printReceiptConfig`
 */
export interface GetApiMerchantV1MerchantsByIdPrintReceiptConfigResponse {
  /**
   * MerchantPrintReceiptConfig 商户小票配置。
   */
  printReceiptConfig?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 小票模板列表
     */
    templates?: {
      /**
       * 小票类型：front_order=前台小票，kitchen_order=后厨小票
       */
      receiptType?: string
      /**
       * 是否启用该小票类型，门店打印机只能打印已启用的小票类型
       */
      enabled?: boolean
      /**
       * 模板区块列表
       */
      blocks?: {
        /**
         * 区块类型：text=固定文本，divider=分割线，field=字段，items=菜品列表
         */
        type?: string
        /**
         * 固定文本内容，type=text 时使用
         */
        text?: string
        /**
         * 字段代码，type=field 时使用
         */
        field?: string
        /**
         * 字段标签，type=field 时使用
         */
        label?: string
        /**
         * 菜品行字段列表，type=items 时使用
         */
        itemFields?: string[]
        /**
         * 对齐方式：left=居左，center=居中，right=居右
         */
        align?: string
        /**
         * 是否加粗
         */
        bold?: boolean
        /**
         * 字体大小：normal=正常，large=大号，xlarge=特大号；不传按 normal 处理
         */
        fontSize?: string
      }[]
    }[]
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 查询商户小票配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/printReceiptConfig`
 */
type GetApiMerchantV1MerchantsByIdPrintReceiptConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/{id}/printReceiptConfig', undefined, 'id', string, false>
>

/**
 * 接口 查询商户小票配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/printReceiptConfig`
 */
const getApiMerchantV1MerchantsByIdPrintReceiptConfigRequestConfig: GetApiMerchantV1MerchantsByIdPrintReceiptConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/{id}/printReceiptConfig',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMerchantV1MerchantsByIdPrintReceiptConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询商户小票配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/printReceiptConfig`
 */
export const getApiMerchantV1MerchantsByIdPrintReceiptConfig = /*#__PURE__*/ (
  requestData: GetApiMerchantV1MerchantsByIdPrintReceiptConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1MerchantsByIdPrintReceiptConfigResponse>(
    prepare(getApiMerchantV1MerchantsByIdPrintReceiptConfigRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1MerchantsByIdPrintReceiptConfig.requestConfig =
  getApiMerchantV1MerchantsByIdPrintReceiptConfigRequestConfig

/**
 * 接口 查询积分存入配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/rechargeConfig`
 */
export interface GetApiMerchantV1MerchantsByIdRechargeConfigRequest {
  /**
   * 商户ID（路径参数）
   */
  id: string
}

/**
 * 接口 查询积分存入配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/rechargeConfig`
 */
export interface GetApiMerchantV1MerchantsByIdRechargeConfigResponse {
  /**
   * MerchantRechargeConfig 数据结构。
   */
  rechargeConfig?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 积分存入审核通过后固定奖励积分，0 表示不奖励
     */
    rewardPoints?: string
    /**
     * 最低完成订单金额
     */
    minCompletedOrderAmount?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 查询积分存入配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/rechargeConfig`
 */
type GetApiMerchantV1MerchantsByIdRechargeConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/{id}/rechargeConfig', undefined, 'id', string, false>
>

/**
 * 接口 查询积分存入配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/rechargeConfig`
 */
const getApiMerchantV1MerchantsByIdRechargeConfigRequestConfig: GetApiMerchantV1MerchantsByIdRechargeConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/{id}/rechargeConfig',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMerchantV1MerchantsByIdRechargeConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询积分存入配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/rechargeConfig`
 */
export const getApiMerchantV1MerchantsByIdRechargeConfig = /*#__PURE__*/ (
  requestData: GetApiMerchantV1MerchantsByIdRechargeConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1MerchantsByIdRechargeConfigResponse>(
    prepare(getApiMerchantV1MerchantsByIdRechargeConfigRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1MerchantsByIdRechargeConfig.requestConfig = getApiMerchantV1MerchantsByIdRechargeConfigRequestConfig

/**
 * 接口 查询存酒配置 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/wineStorageConfig`
 */
export interface GetApiMerchantV1MerchantsByIdWineStorageConfigRequest {
  /**
   * 商户ID
   */
  id: string
}

/**
 * 接口 查询存酒配置 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/wineStorageConfig`
 */
export interface GetApiMerchantV1MerchantsByIdWineStorageConfigResponse {
  /**
   * MerchantWineStorageConfig 数据结构。
   */
  wineStorageConfig?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 存酒有效天数，0 表示不过期
     */
    expireDays?: number
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 查询存酒配置 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/wineStorageConfig`
 */
type GetApiMerchantV1MerchantsByIdWineStorageConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants/{id}/wineStorageConfig', undefined, 'id', string, false>
>

/**
 * 接口 查询存酒配置 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/wineStorageConfig`
 */
const getApiMerchantV1MerchantsByIdWineStorageConfigRequestConfig: GetApiMerchantV1MerchantsByIdWineStorageConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/merchants/{id}/wineStorageConfig',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMerchantV1MerchantsByIdWineStorageConfig',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询存酒配置 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/merchants/{id}/wineStorageConfig`
 */
export const getApiMerchantV1MerchantsByIdWineStorageConfig = /*#__PURE__*/ (
  requestData: GetApiMerchantV1MerchantsByIdWineStorageConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1MerchantsByIdWineStorageConfigResponse>(
    prepare(getApiMerchantV1MerchantsByIdWineStorageConfigRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1MerchantsByIdWineStorageConfig.requestConfig =
  getApiMerchantV1MerchantsByIdWineStorageConfigRequestConfig

/**
 * 接口 更新商户信息 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants_put`
 */
export interface PutApiMerchantV1MerchantsRequest {
  /**
   * 商户ID（路径参数）
   */
  id?: string
  name?: string
  contactPerson?: string
  phone?: string
  licenseUrl?: string
  status?: number
  remark?: string
  memberNicknamePrefix?: string
  /**
   * 商户logo URL
   */
  logo?: string
}

/**
 * 接口 更新商户信息 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants_put`
 */
export interface PutApiMerchantV1MerchantsResponse {}

/**
 * 接口 更新商户信息 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants_put`
 */
type PutApiMerchantV1MerchantsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/merchants_put', undefined, string, string, false>
>

/**
 * 接口 更新商户信息 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants_put`
 */
const putApiMerchantV1MerchantsRequestConfig: PutApiMerchantV1MerchantsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/merchant/v1/merchants_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiMerchantV1Merchants',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新商户信息 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `POST /api/merchant/v1/merchants_put`
 */
export const putApiMerchantV1Merchants = /*#__PURE__*/ (
  requestData: PutApiMerchantV1MerchantsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiMerchantV1MerchantsResponse>(
    prepare(putApiMerchantV1MerchantsRequestConfig, requestData),
    ...args,
  )
}

putApiMerchantV1Merchants.requestConfig = putApiMerchantV1MerchantsRequestConfig

/**
 * 接口 查询小票模板可用字段 的 **请求类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/printReceiptTemplateFields`
 */
export interface GetApiMerchantV1PrintReceiptTemplateFieldsRequest {
  /**
   * 小票类型：front_order=前台小票，kitchen_order=后厨小票，kitchen_add_items=后厨加菜小票，table_open=后台开台小票，recharge_order=充值订单小票，points_deposit_ticket=积分存入工单小票，points_withdraw_ticket=积分提取工单小票，wine_deposit_ticket=会员存酒工单小票，wine_withdraw_ticket=会员取酒工单小票
   */
  receiptType?: string
}

/**
 * 接口 查询小票模板可用字段 的 **返回类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/printReceiptTemplateFields`
 */
export interface GetApiMerchantV1PrintReceiptTemplateFieldsResponse {
  /**
   * 可用字段列表
   */
  fields?: {
    /**
     * 字段代码
     */
    code?: string
    /**
     * 字段展示名称
     */
    name?: string
    /**
     * 字段作用域：receipt=小票主体，item=菜品行
     */
    scope?: string
    /**
     * 字段说明
     */
    description?: string
    /**
     * 适用小票类型列表
     */
    receiptTypes?: string[]
  }[]
  /**
   * 可用区块类型列表
   */
  blockTypes?: {
    /**
     * 区块类型代码：text=固定文本，divider=分割线，field=字段，items=菜品列表
     */
    code?: string
    /**
     * 区块类型展示名称
     */
    name?: string
    /**
     * 区块类型说明
     */
    description?: string
  }[]
}

/**
 * 接口 查询小票模板可用字段 的 **请求配置的类型**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/printReceiptTemplateFields`
 */
type GetApiMerchantV1PrintReceiptTemplateFieldsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/merchant/v1/printReceiptTemplateFields', undefined, string, 'receiptType', false>
>

/**
 * 接口 查询小票模板可用字段 的 **请求配置**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/printReceiptTemplateFields`
 */
const getApiMerchantV1PrintReceiptTemplateFieldsRequestConfig: GetApiMerchantV1PrintReceiptTemplateFieldsRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/merchant/v1/printReceiptTemplateFields',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: ['receiptType'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMerchantV1PrintReceiptTemplateFields',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询小票模板可用字段 的 **请求函数**
 *
 * @分类 MerchantService
 * @请求头 `GET /api/merchant/v1/printReceiptTemplateFields`
 */
export const getApiMerchantV1PrintReceiptTemplateFields = /*#__PURE__*/ (
  requestData: GetApiMerchantV1PrintReceiptTemplateFieldsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMerchantV1PrintReceiptTemplateFieldsResponse>(
    prepare(getApiMerchantV1PrintReceiptTemplateFieldsRequestConfig, requestData),
    ...args,
  )
}

getApiMerchantV1PrintReceiptTemplateFields.requestConfig = getApiMerchantV1PrintReceiptTemplateFieldsRequestConfig

/**
 * 接口 创建人员邀请 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites`
 */
export interface PostApiStaffV1InvitesRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 姓名
   */
  name?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 任职输入列表
   */
  assignments?: {
    /**
     * 门店ID，0表示商户级岗位
     */
    storeId?: string
    /**
     * 商户级岗位可查看门店ID列表，空表示全门店，仅 store_id=0 时允许传入
     */
    storeIds?: string[]
    /**
     * 岗位角色ID
     */
    roleId?: string
  }[]
}

/**
 * 接口 创建人员邀请 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites`
 */
export interface PostApiStaffV1InvitesResponse {
  /**
   * 人员ID
   */
  staffId?: string
  /**
   * 邀请ID
   */
  inviteId?: string
  /**
   * 邀请明文 token，仅创建时返回
   */
  token?: string
  /**
   * 过期时间
   */
  expiresAt?: string
}

/**
 * 接口 创建人员邀请 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites`
 */
type PostApiStaffV1InvitesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/invites', undefined, string, string, false>
>

/**
 * 接口 创建人员邀请 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites`
 */
const postApiStaffV1InvitesRequestConfig: PostApiStaffV1InvitesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/invites',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStaffV1Invites',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建人员邀请 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites`
 */
export const postApiStaffV1Invites = /*#__PURE__*/ (
  requestData: PostApiStaffV1InvitesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStaffV1InvitesResponse>(prepare(postApiStaffV1InvitesRequestConfig, requestData), ...args)
}

postApiStaffV1Invites.requestConfig = postApiStaffV1InvitesRequestConfig

/**
 * 接口 确认人员邀请 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/accept`
 */
export interface PostApiStaffV1InvitesAcceptRequest {
  /**
   * 邀请 token
   */
  token?: string
  /**
   * 手机号
   */
  phone?: string
}

/**
 * 接口 确认人员邀请 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/accept`
 */
export interface PostApiStaffV1InvitesAcceptResponse {}

/**
 * 接口 确认人员邀请 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/accept`
 */
type PostApiStaffV1InvitesAcceptRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/invites/accept', undefined, string, string, false>
>

/**
 * 接口 确认人员邀请 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/accept`
 */
const postApiStaffV1InvitesAcceptRequestConfig: PostApiStaffV1InvitesAcceptRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/invites/accept',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStaffV1InvitesAccept',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 确认人员邀请 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/accept`
 */
export const postApiStaffV1InvitesAccept = /*#__PURE__*/ (
  requestData: PostApiStaffV1InvitesAcceptRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStaffV1InvitesAcceptResponse>(
    prepare(postApiStaffV1InvitesAcceptRequestConfig, requestData),
    ...args,
  )
}

postApiStaffV1InvitesAccept.requestConfig = postApiStaffV1InvitesAcceptRequestConfig

/**
 * 接口 查询人员邀请 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/get`
 */
export interface PostApiStaffV1InvitesGetRequest {
  /**
   * 邀请 token
   */
  token?: string
  /**
   * 手机号
   */
  phone?: string
}

/**
 * 接口 查询人员邀请 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/get`
 */
export interface PostApiStaffV1InvitesGetResponse {
  /**
   * 邀请ID
   */
  inviteId?: string
  /**
   * 人员ID
   */
  staffId?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 姓名
   */
  name?: string
  /**
   * 邀请手机号
   */
  phone?: string
  /**
   * 过期时间
   */
  expiresAt?: string
  /**
   * 待确认任职列表
   */
  assignments?: {
    /**
     * 任职ID
     */
    id?: string
    /**
     * 人员ID
     */
    staffId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID，0表示商户级岗位
     */
    storeId?: string
    /**
     * 商户级岗位可查看门店ID列表，空表示全门店
     */
    storeIds?: string[]
    /**
     * 岗位角色ID
     */
    roleId?: string
    /**
     * 状态：pending=待确认，active=有效，disabled=停用，left=离职
     */
    status?: string
    /**
     * 任职开始时间
     */
    joinedAt?: string
    /**
     * 任职结束时间
     */
    leftAt?: string
  }[]
}

/**
 * 接口 查询人员邀请 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/get`
 */
type PostApiStaffV1InvitesGetRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/invites/get', undefined, string, string, false>
>

/**
 * 接口 查询人员邀请 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/get`
 */
const postApiStaffV1InvitesGetRequestConfig: PostApiStaffV1InvitesGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/invites/get',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStaffV1InvitesGet',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询人员邀请 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/get`
 */
export const postApiStaffV1InvitesGet = /*#__PURE__*/ (
  requestData: PostApiStaffV1InvitesGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStaffV1InvitesGetResponse>(prepare(postApiStaffV1InvitesGetRequestConfig, requestData), ...args)
}

postApiStaffV1InvitesGet.requestConfig = postApiStaffV1InvitesGetRequestConfig

/**
 * 接口 拒绝人员邀请 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/reject`
 */
export interface PostApiStaffV1InvitesRejectRequest {
  /**
   * 邀请 token
   */
  token?: string
  /**
   * 手机号
   */
  phone?: string
}

/**
 * 接口 拒绝人员邀请 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/reject`
 */
export interface PostApiStaffV1InvitesRejectResponse {}

/**
 * 接口 拒绝人员邀请 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/reject`
 */
type PostApiStaffV1InvitesRejectRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/invites/reject', undefined, string, string, false>
>

/**
 * 接口 拒绝人员邀请 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/reject`
 */
const postApiStaffV1InvitesRejectRequestConfig: PostApiStaffV1InvitesRejectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/invites/reject',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStaffV1InvitesReject',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 拒绝人员邀请 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/invites/reject`
 */
export const postApiStaffV1InvitesReject = /*#__PURE__*/ (
  requestData: PostApiStaffV1InvitesRejectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStaffV1InvitesRejectResponse>(
    prepare(postApiStaffV1InvitesRejectRequestConfig, requestData),
    ...args,
  )
}

postApiStaffV1InvitesReject.requestConfig = postApiStaffV1InvitesRejectRequestConfig

/**
 * 接口 查询我的人员范围 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/myScopes`
 */
export interface GetApiStaffV1MyScopesRequest {}

/**
 * 接口 查询我的人员范围 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/myScopes`
 */
export interface GetApiStaffV1MyScopesResponse {
  /**
   * 按商户聚合的可进入门店树
   */
  scopes?: {
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 可进入门店列表
     */
    stores?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }[]
  }[]
}

/**
 * 接口 查询我的人员范围 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/myScopes`
 */
type GetApiStaffV1MyScopesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/myScopes', undefined, string, string, true>
>

/**
 * 接口 查询我的人员范围 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/myScopes`
 */
const getApiStaffV1MyScopesRequestConfig: GetApiStaffV1MyScopesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/myScopes',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiStaffV1MyScopes',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询我的人员范围 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/myScopes`
 */
export const getApiStaffV1MyScopes = /*#__PURE__*/ (
  requestData?: GetApiStaffV1MyScopesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiStaffV1MyScopesResponse>(prepare(getApiStaffV1MyScopesRequestConfig, requestData), ...args)
}

getApiStaffV1MyScopes.requestConfig = getApiStaffV1MyScopesRequestConfig

/**
 * 接口 查询人员列表 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff`
 */
export interface GetApiStaffV1StaffRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID，0表示商户级岗位
   */
  storeId?: string
  /**
   * 状态：pending=待确认，active=有效，disabled=停用，left=离开
   */
  status?: string
}

/**
 * 接口 查询人员列表 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff`
 */
export interface GetApiStaffV1StaffResponse {
  /**
   * 人员列表
   */
  staff?: {
    /**
     * 人员ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 绑定账号ID，未绑定为0
     */
    accountId?: string
    /**
     * 姓名
     */
    name?: string
    /**
     * 手机号
     */
    phone?: string
    /**
     * 状态：pending=待确认，active=有效，disabled=停用，left=离开
     */
    status?: string
    /**
     * 加入时间
     */
    joinedAt?: string
    /**
     * 离开时间
     */
    leftAt?: string
    /**
     * 任职列表
     */
    assignments?: {
      /**
       * 任职ID
       */
      id?: string
      /**
       * 人员ID
       */
      staffId?: string
      /**
       * 商户ID
       */
      merchantId?: string
      /**
       * 门店ID，0表示商户级岗位
       */
      storeId?: string
      /**
       * 商户级岗位可查看门店ID列表，空表示全门店
       */
      storeIds?: string[]
      /**
       * 岗位角色ID
       */
      roleId?: string
      /**
       * 状态：pending=待确认，active=有效，disabled=停用，left=离职
       */
      status?: string
      /**
       * 任职开始时间
       */
      joinedAt?: string
      /**
       * 任职结束时间
       */
      leftAt?: string
    }[]
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询人员列表 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff`
 */
type GetApiStaffV1StaffRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/staff/v1/staff',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'status',
    false
  >
>

/**
 * 接口 查询人员列表 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff`
 */
const getApiStaffV1StaffRequestConfig: GetApiStaffV1StaffRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/staff',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiStaffV1Staff',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询人员列表 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff`
 */
export const getApiStaffV1Staff = /*#__PURE__*/ (
  requestData: GetApiStaffV1StaffRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiStaffV1StaffResponse>(prepare(getApiStaffV1StaffRequestConfig, requestData), ...args)
}

getApiStaffV1Staff.requestConfig = getApiStaffV1StaffRequestConfig

/**
 * 接口 增加人员任职 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments`
 */
export interface PostApiStaffV1StaffAssignmentsRequest {
  /**
   * 人员ID
   */
  staffId?: string
  /**
   * AssignmentInput 任职输入。
   */
  assignment?: {
    /**
     * 门店ID，0表示商户级岗位
     */
    storeId?: string
    /**
     * 商户级岗位可查看门店ID列表，空表示全门店，仅 store_id=0 时允许传入
     */
    storeIds?: string[]
    /**
     * 岗位角色ID
     */
    roleId?: string
  }
}

/**
 * 接口 增加人员任职 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments`
 */
export interface PostApiStaffV1StaffAssignmentsResponse {
  /**
   * 任职ID
   */
  id?: string
}

/**
 * 接口 增加人员任职 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments`
 */
type PostApiStaffV1StaffAssignmentsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/staff/assignments', undefined, string, string, false>
>

/**
 * 接口 增加人员任职 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments`
 */
const postApiStaffV1StaffAssignmentsRequestConfig: PostApiStaffV1StaffAssignmentsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/staff/assignments',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStaffV1StaffAssignments',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 增加人员任职 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments`
 */
export const postApiStaffV1StaffAssignments = /*#__PURE__*/ (
  requestData: PostApiStaffV1StaffAssignmentsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStaffV1StaffAssignmentsResponse>(
    prepare(postApiStaffV1StaffAssignmentsRequestConfig, requestData),
    ...args,
  )
}

postApiStaffV1StaffAssignments.requestConfig = postApiStaffV1StaffAssignmentsRequestConfig

/**
 * 接口 停用人员任职 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments/disable`
 */
export interface PostApiStaffV1StaffAssignmentsDisableRequest {
  /**
   * 任职ID
   */
  id?: string
}

/**
 * 接口 停用人员任职 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments/disable`
 */
export interface PostApiStaffV1StaffAssignmentsDisableResponse {}

/**
 * 接口 停用人员任职 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments/disable`
 */
type PostApiStaffV1StaffAssignmentsDisableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/staff/assignments/disable', undefined, string, string, false>
>

/**
 * 接口 停用人员任职 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments/disable`
 */
const postApiStaffV1StaffAssignmentsDisableRequestConfig: PostApiStaffV1StaffAssignmentsDisableRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/staff/v1/staff/assignments/disable',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiStaffV1StaffAssignmentsDisable',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 停用人员任职 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/assignments/disable`
 */
export const postApiStaffV1StaffAssignmentsDisable = /*#__PURE__*/ (
  requestData: PostApiStaffV1StaffAssignmentsDisableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStaffV1StaffAssignmentsDisableResponse>(
    prepare(postApiStaffV1StaffAssignmentsDisableRequestConfig, requestData),
    ...args,
  )
}

postApiStaffV1StaffAssignmentsDisable.requestConfig = postApiStaffV1StaffAssignmentsDisableRequestConfig

/**
 * 接口 人员离开商户 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/leave`
 */
export interface PostApiStaffV1StaffLeaveRequest {
  /**
   * 人员ID
   */
  id?: string
}

/**
 * 接口 人员离开商户 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/leave`
 */
export interface PostApiStaffV1StaffLeaveResponse {}

/**
 * 接口 人员离开商户 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/leave`
 */
type PostApiStaffV1StaffLeaveRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/staff/leave', undefined, string, string, false>
>

/**
 * 接口 人员离开商户 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/leave`
 */
const postApiStaffV1StaffLeaveRequestConfig: PostApiStaffV1StaffLeaveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/staff/leave',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStaffV1StaffLeave',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 人员离开商户 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/leave`
 */
export const postApiStaffV1StaffLeave = /*#__PURE__*/ (
  requestData: PostApiStaffV1StaffLeaveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStaffV1StaffLeaveResponse>(prepare(postApiStaffV1StaffLeaveRequestConfig, requestData), ...args)
}

postApiStaffV1StaffLeave.requestConfig = postApiStaffV1StaffLeaveRequestConfig

/**
 * 接口 更新人员资料 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/profile_put`
 */
export interface PutApiStaffV1StaffProfileRequest {
  /**
   * 人员ID
   */
  id?: string
  /**
   * 姓名
   */
  name?: string
  /**
   * 手机号
   */
  phone?: string
}

/**
 * 接口 更新人员资料 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/profile_put`
 */
export interface PutApiStaffV1StaffProfileResponse {}

/**
 * 接口 更新人员资料 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/profile_put`
 */
type PutApiStaffV1StaffProfileRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/staff/profile_put', undefined, string, string, false>
>

/**
 * 接口 更新人员资料 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/profile_put`
 */
const putApiStaffV1StaffProfileRequestConfig: PutApiStaffV1StaffProfileRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/staff/profile_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiStaffV1StaffProfile',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新人员资料 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `POST /api/staff/v1/staff/profile_put`
 */
export const putApiStaffV1StaffProfile = /*#__PURE__*/ (
  requestData: PutApiStaffV1StaffProfileRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiStaffV1StaffProfileResponse>(
    prepare(putApiStaffV1StaffProfileRequestConfig, requestData),
    ...args,
  )
}

putApiStaffV1StaffProfile.requestConfig = putApiStaffV1StaffProfileRequestConfig

/**
 * 接口 查询人员详情 的 **请求类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff/{id}`
 */
export interface GetApiStaffV1StaffByIdRequest {
  /**
   * 人员ID
   */
  id: string
}

/**
 * 接口 查询人员详情 的 **返回类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff/{id}`
 */
export interface GetApiStaffV1StaffByIdResponse {
  /**
   * StaffItem 人员信息。
   */
  staff?: {
    /**
     * 人员ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 绑定账号ID，未绑定为0
     */
    accountId?: string
    /**
     * 姓名
     */
    name?: string
    /**
     * 手机号
     */
    phone?: string
    /**
     * 状态：pending=待确认，active=有效，disabled=停用，left=离开
     */
    status?: string
    /**
     * 加入时间
     */
    joinedAt?: string
    /**
     * 离开时间
     */
    leftAt?: string
    /**
     * 任职列表
     */
    assignments?: {
      /**
       * 任职ID
       */
      id?: string
      /**
       * 人员ID
       */
      staffId?: string
      /**
       * 商户ID
       */
      merchantId?: string
      /**
       * 门店ID，0表示商户级岗位
       */
      storeId?: string
      /**
       * 商户级岗位可查看门店ID列表，空表示全门店
       */
      storeIds?: string[]
      /**
       * 岗位角色ID
       */
      roleId?: string
      /**
       * 状态：pending=待确认，active=有效，disabled=停用，left=离职
       */
      status?: string
      /**
       * 任职开始时间
       */
      joinedAt?: string
      /**
       * 任职结束时间
       */
      leftAt?: string
    }[]
  }
}

/**
 * 接口 查询人员详情 的 **请求配置的类型**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff/{id}`
 */
type GetApiStaffV1StaffByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/staff/v1/staff/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询人员详情 的 **请求配置**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff/{id}`
 */
const getApiStaffV1StaffByIdRequestConfig: GetApiStaffV1StaffByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/staff/v1/staff/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiStaffV1StaffById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询人员详情 的 **请求函数**
 *
 * @分类 StaffService
 * @请求头 `GET /api/staff/v1/staff/{id}`
 */
export const getApiStaffV1StaffById = /*#__PURE__*/ (
  requestData: GetApiStaffV1StaffByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiStaffV1StaffByIdResponse>(prepare(getApiStaffV1StaffByIdRequestConfig, requestData), ...args)
}

getApiStaffV1StaffById.requestConfig = getApiStaffV1StaffByIdRequestConfig

/**
 * 接口 查询桌子类型列表 的 **请求类型**
 *
 * @分类 TableTypeService
 * @请求头 `GET /api/table/v1/types`
 */
export interface GetApiTableV1TypesRequest {
  /**
   * 商户ID
   */
  merchantId?: string
}

/**
 * 接口 查询桌子类型列表 的 **返回类型**
 *
 * @分类 TableTypeService
 * @请求头 `GET /api/table/v1/types`
 */
export interface GetApiTableV1TypesResponse {
  /**
   * 桌子类型列表
   */
  tableTypes?: {
    /**
     * 桌子类型ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 桌子类型名称
     */
    name?: string
    /**
     * 桌子类型描述
     */
    description?: string
    /**
     * 排序值
     */
    sort?: number
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }[]
}

/**
 * 接口 查询桌子类型列表 的 **请求配置的类型**
 *
 * @分类 TableTypeService
 * @请求头 `GET /api/table/v1/types`
 */
type GetApiTableV1TypesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/types', undefined, string, 'merchantId', false>
>

/**
 * 接口 查询桌子类型列表 的 **请求配置**
 *
 * @分类 TableTypeService
 * @请求头 `GET /api/table/v1/types`
 */
const getApiTableV1TypesRequestConfig: GetApiTableV1TypesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/types',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['merchantId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1Types',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询桌子类型列表 的 **请求函数**
 *
 * @分类 TableTypeService
 * @请求头 `GET /api/table/v1/types`
 */
export const getApiTableV1Types = /*#__PURE__*/ (
  requestData: GetApiTableV1TypesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1TypesResponse>(prepare(getApiTableV1TypesRequestConfig, requestData), ...args)
}

getApiTableV1Types.requestConfig = getApiTableV1TypesRequestConfig

/**
 * 接口 创建桌子类型 的 **请求类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types`
 */
export interface PostApiTableV1TypesRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 桌子类型名称
   */
  name?: string
  /**
   * 桌子类型描述
   */
  description?: string
  /**
   * 排序值
   */
  sort?: number
}

/**
 * 接口 创建桌子类型 的 **返回类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types`
 */
export interface PostApiTableV1TypesResponse {
  /**
   * 桌子类型ID
   */
  id?: string
}

/**
 * 接口 创建桌子类型 的 **请求配置的类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types`
 */
type PostApiTableV1TypesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/types', undefined, string, string, false>
>

/**
 * 接口 创建桌子类型 的 **请求配置**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types`
 */
const postApiTableV1TypesRequestConfig: PostApiTableV1TypesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/types',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTableV1Types',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建桌子类型 的 **请求函数**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types`
 */
export const postApiTableV1Types = /*#__PURE__*/ (
  requestData: PostApiTableV1TypesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTableV1TypesResponse>(prepare(postApiTableV1TypesRequestConfig, requestData), ...args)
}

postApiTableV1Types.requestConfig = postApiTableV1TypesRequestConfig

/**
 * 接口 删除桌子类型 的 **请求类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_delete`
 */
export interface DeleteApiTableV1TypesRequest {
  /**
   * 桌子类型ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
}

/**
 * 接口 删除桌子类型 的 **返回类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_delete`
 */
export interface DeleteApiTableV1TypesResponse {}

/**
 * 接口 删除桌子类型 的 **请求配置的类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_delete`
 */
type DeleteApiTableV1TypesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/types_delete', undefined, string, string, false>
>

/**
 * 接口 删除桌子类型 的 **请求配置**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_delete`
 */
const deleteApiTableV1TypesRequestConfig: DeleteApiTableV1TypesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/types_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiTableV1Types',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 删除桌子类型 的 **请求函数**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_delete`
 */
export const deleteApiTableV1Types = /*#__PURE__*/ (
  requestData: DeleteApiTableV1TypesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiTableV1TypesResponse>(prepare(deleteApiTableV1TypesRequestConfig, requestData), ...args)
}

deleteApiTableV1Types.requestConfig = deleteApiTableV1TypesRequestConfig

/**
 * 接口 更新桌子类型 的 **请求类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_put`
 */
export interface PutApiTableV1TypesRequest {
  /**
   * 桌子类型ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 桌子类型名称
   */
  name?: string
  /**
   * 桌子类型描述
   */
  description?: string
  /**
   * 排序值
   */
  sort?: number
}

/**
 * 接口 更新桌子类型 的 **返回类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_put`
 */
export interface PutApiTableV1TypesResponse {}

/**
 * 接口 更新桌子类型 的 **请求配置的类型**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_put`
 */
type PutApiTableV1TypesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/types_put', undefined, string, string, false>
>

/**
 * 接口 更新桌子类型 的 **请求配置**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_put`
 */
const putApiTableV1TypesRequestConfig: PutApiTableV1TypesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/types_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiTableV1Types',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新桌子类型 的 **请求函数**
 *
 * @分类 TableTypeService
 * @请求头 `POST /api/table/v1/types_put`
 */
export const putApiTableV1Types = /*#__PURE__*/ (
  requestData: PutApiTableV1TypesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiTableV1TypesResponse>(prepare(putApiTableV1TypesRequestConfig, requestData), ...args)
}

putApiTableV1Types.requestConfig = putApiTableV1TypesRequestConfig

/**
 * 接口 查询桌子列表 的 **请求类型**
 *
 * @分类 TableGroupService
 * @请求头 `GET /api/table/v1/groups`
 */
export interface GetApiTableV1GroupsRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 查询桌子列表 的 **返回类型**
 *
 * @分类 TableGroupService
 * @请求头 `GET /api/table/v1/groups`
 */
export interface GetApiTableV1GroupsResponse {
  /**
   * 桌子列表
   */
  tableGroups?: {
    /**
     * 桌子ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌子类型ID
     */
    typeId?: string
    /**
     * 桌子名称
     */
    name?: string
    /**
     * 桌子描述
     */
    description?: string
    /**
     * 排序值
     */
    sort?: number
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * 桌子类型摘要。
     */
    type?: {
      /**
       * 桌子类型ID
       */
      id?: string
      /**
       * 桌子类型名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
  }[]
}

/**
 * 接口 查询桌子列表 的 **请求配置的类型**
 *
 * @分类 TableGroupService
 * @请求头 `GET /api/table/v1/groups`
 */
type GetApiTableV1GroupsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/groups', undefined, string, 'merchantId' | 'storeId', false>
>

/**
 * 接口 查询桌子列表 的 **请求配置**
 *
 * @分类 TableGroupService
 * @请求头 `GET /api/table/v1/groups`
 */
const getApiTableV1GroupsRequestConfig: GetApiTableV1GroupsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/groups',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['merchantId', 'storeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1Groups',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询桌子列表 的 **请求函数**
 *
 * @分类 TableGroupService
 * @请求头 `GET /api/table/v1/groups`
 */
export const getApiTableV1Groups = /*#__PURE__*/ (
  requestData: GetApiTableV1GroupsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1GroupsResponse>(prepare(getApiTableV1GroupsRequestConfig, requestData), ...args)
}

getApiTableV1Groups.requestConfig = getApiTableV1GroupsRequestConfig

/**
 * 接口 创建桌子 的 **请求类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups`
 */
export interface PostApiTableV1GroupsRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌子类型ID
   */
  typeId?: string
  /**
   * 桌子名称
   */
  name?: string
  /**
   * 桌子描述
   */
  description?: string
  /**
   * 排序值
   */
  sort?: number
}

/**
 * 接口 创建桌子 的 **返回类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups`
 */
export interface PostApiTableV1GroupsResponse {
  /**
   * 桌子ID
   */
  id?: string
  /**
   * 默认创建的桌位ID
   */
  defaultTableId?: string
}

/**
 * 接口 创建桌子 的 **请求配置的类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups`
 */
type PostApiTableV1GroupsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/groups', undefined, string, string, false>
>

/**
 * 接口 创建桌子 的 **请求配置**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups`
 */
const postApiTableV1GroupsRequestConfig: PostApiTableV1GroupsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/groups',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTableV1Groups',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建桌子 的 **请求函数**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups`
 */
export const postApiTableV1Groups = /*#__PURE__*/ (
  requestData: PostApiTableV1GroupsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTableV1GroupsResponse>(prepare(postApiTableV1GroupsRequestConfig, requestData), ...args)
}

postApiTableV1Groups.requestConfig = postApiTableV1GroupsRequestConfig

/**
 * 接口 删除桌子 的 **请求类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_delete`
 */
export interface DeleteApiTableV1GroupsRequest {
  /**
   * 桌子ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 删除桌子 的 **返回类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_delete`
 */
export interface DeleteApiTableV1GroupsResponse {}

/**
 * 接口 删除桌子 的 **请求配置的类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_delete`
 */
type DeleteApiTableV1GroupsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/groups_delete', undefined, string, string, false>
>

/**
 * 接口 删除桌子 的 **请求配置**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_delete`
 */
const deleteApiTableV1GroupsRequestConfig: DeleteApiTableV1GroupsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/groups_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiTableV1Groups',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 删除桌子 的 **请求函数**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_delete`
 */
export const deleteApiTableV1Groups = /*#__PURE__*/ (
  requestData: DeleteApiTableV1GroupsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiTableV1GroupsResponse>(prepare(deleteApiTableV1GroupsRequestConfig, requestData), ...args)
}

deleteApiTableV1Groups.requestConfig = deleteApiTableV1GroupsRequestConfig

/**
 * 接口 更新桌子 的 **请求类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_put`
 */
export interface PutApiTableV1GroupsRequest {
  /**
   * 桌子ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌子类型ID
   */
  typeId?: string
  /**
   * 桌子名称
   */
  name?: string
  /**
   * 桌子描述
   */
  description?: string
  /**
   * 排序值
   */
  sort?: number
}

/**
 * 接口 更新桌子 的 **返回类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_put`
 */
export interface PutApiTableV1GroupsResponse {}

/**
 * 接口 更新桌子 的 **请求配置的类型**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_put`
 */
type PutApiTableV1GroupsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/groups_put', undefined, string, string, false>
>

/**
 * 接口 更新桌子 的 **请求配置**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_put`
 */
const putApiTableV1GroupsRequestConfig: PutApiTableV1GroupsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/groups_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiTableV1Groups',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新桌子 的 **请求函数**
 *
 * @分类 TableGroupService
 * @请求头 `POST /api/table/v1/groups_put`
 */
export const putApiTableV1Groups = /*#__PURE__*/ (
  requestData: PutApiTableV1GroupsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiTableV1GroupsResponse>(prepare(putApiTableV1GroupsRequestConfig, requestData), ...args)
}

putApiTableV1Groups.requestConfig = putApiTableV1GroupsRequestConfig

/**
 * 接口 查询桌位列表 的 **请求类型**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables`
 */
export interface GetApiTableV1TablesRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌子类型ID，0 表示全部
   */
  typeId?: string
  /**
   * 桌子ID，0 表示全部
   */
  groupId?: string
  /**
   * 状态：1=启用，2=禁用；预约状态：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期。
   */
  status?: number
}

/**
 * 接口 查询桌位列表 的 **返回类型**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables`
 */
export interface GetApiTableV1TablesResponse {
  /**
   * 桌位列表
   */
  tables?: {
    /**
     * 桌位ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌子类型摘要。
     */
    type?: {
      /**
       * 桌子类型ID
       */
      id?: string
      /**
       * 桌子类型名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 桌子摘要。
     */
    group?: {
      /**
       * 桌子ID
       */
      id?: string
      /**
       * 桌子名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 桌位名称
     */
    name?: string
    /**
     * 桌位描述
     */
    description?: string
    /**
     * 图片URL列表
     */
    imageUrls?: string[]
    /**
     * 是否可预约
     */
    isReservable?: boolean
    /**
     * 状态：1=启用，2=禁用；预约状态：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期。
     */
    status?: number
    /**
     * 运行态：idle=空闲，occupied=占用。
     */
    occupancyStatus?: string
    /**
     * 是否支持后台开单
     */
    billingEnabled?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询桌位列表 的 **请求配置的类型**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables`
 */
type GetApiTableV1TablesRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/table/v1/tables',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'typeId' | 'groupId' | 'status',
    false
  >
>

/**
 * 接口 查询桌位列表 的 **请求配置**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables`
 */
const getApiTableV1TablesRequestConfig: GetApiTableV1TablesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/tables',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId', 'typeId', 'groupId', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1Tables',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询桌位列表 的 **请求函数**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables`
 */
export const getApiTableV1Tables = /*#__PURE__*/ (
  requestData: GetApiTableV1TablesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1TablesResponse>(prepare(getApiTableV1TablesRequestConfig, requestData), ...args)
}

getApiTableV1Tables.requestConfig = getApiTableV1TablesRequestConfig

/**
 * 接口 创建桌位 的 **请求类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables`
 */
export interface PostApiTableV1TablesRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌子ID
   */
  groupId?: string
  /**
   * 桌位名称
   */
  name?: string
  /**
   * 桌位描述
   */
  description?: string
  imageUrls?: string[]
  /**
   * 是否可预约
   */
  isReservable?: boolean
  /**
   * 是否支持后台开单
   */
  billingEnabled?: boolean
  /**
   * 状态：1=启用，2=禁用；预约状态：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期。
   */
  status?: number
}

/**
 * 接口 创建桌位 的 **返回类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables`
 */
export interface PostApiTableV1TablesResponse {
  /**
   * 桌位ID
   */
  id?: string
}

/**
 * 接口 创建桌位 的 **请求配置的类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables`
 */
type PostApiTableV1TablesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/tables', undefined, string, string, false>
>

/**
 * 接口 创建桌位 的 **请求配置**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables`
 */
const postApiTableV1TablesRequestConfig: PostApiTableV1TablesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/tables',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTableV1Tables',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建桌位 的 **请求函数**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables`
 */
export const postApiTableV1Tables = /*#__PURE__*/ (
  requestData: PostApiTableV1TablesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTableV1TablesResponse>(prepare(postApiTableV1TablesRequestConfig, requestData), ...args)
}

postApiTableV1Tables.requestConfig = postApiTableV1TablesRequestConfig

/**
 * 接口 批量创建桌位 的 **请求类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables/batch`
 */
export interface PostApiTableV1TablesBatchRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌子ID
   */
  groupId?: string
  /**
   * 批量创建数量
   */
  count?: number
  /**
   * 桌位描述
   */
  description?: string
  imageUrls?: string[]
  /**
   * 是否可预约
   */
  isReservable?: boolean
  /**
   * 是否支持后台开单
   */
  billingEnabled?: boolean
  /**
   * 状态：1=启用，2=禁用；预约状态：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期。
   */
  status?: number
}

/**
 * 接口 批量创建桌位 的 **返回类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables/batch`
 */
export interface PostApiTableV1TablesBatchResponse {
  /**
   * 新建桌位ID列表
   */
  ids?: string[]
}

/**
 * 接口 批量创建桌位 的 **请求配置的类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables/batch`
 */
type PostApiTableV1TablesBatchRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/tables/batch', undefined, string, string, false>
>

/**
 * 接口 批量创建桌位 的 **请求配置**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables/batch`
 */
const postApiTableV1TablesBatchRequestConfig: PostApiTableV1TablesBatchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/tables/batch',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTableV1TablesBatch',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 批量创建桌位 的 **请求函数**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables/batch`
 */
export const postApiTableV1TablesBatch = /*#__PURE__*/ (
  requestData: PostApiTableV1TablesBatchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTableV1TablesBatchResponse>(
    prepare(postApiTableV1TablesBatchRequestConfig, requestData),
    ...args,
  )
}

postApiTableV1TablesBatch.requestConfig = postApiTableV1TablesBatchRequestConfig

/**
 * 接口 查询桌位详情 的 **请求类型**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables/{id}`
 */
export interface GetApiTableV1TablesByIdRequest {
  /**
   * 桌位ID
   */
  id: string
}

/**
 * 接口 查询桌位详情 的 **返回类型**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables/{id}`
 */
export interface GetApiTableV1TablesByIdResponse {
  /**
   * 桌位信息。
   */
  table?: {
    /**
     * 桌位ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌子类型摘要。
     */
    type?: {
      /**
       * 桌子类型ID
       */
      id?: string
      /**
       * 桌子类型名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 桌子摘要。
     */
    group?: {
      /**
       * 桌子ID
       */
      id?: string
      /**
       * 桌子名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 桌位名称
     */
    name?: string
    /**
     * 桌位描述
     */
    description?: string
    /**
     * 图片URL列表
     */
    imageUrls?: string[]
    /**
     * 是否可预约
     */
    isReservable?: boolean
    /**
     * 状态：1=启用，2=禁用；预约状态：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期。
     */
    status?: number
    /**
     * 运行态：idle=空闲，occupied=占用。
     */
    occupancyStatus?: string
    /**
     * 是否支持后台开单
     */
    billingEnabled?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
  }
}

/**
 * 接口 查询桌位详情 的 **请求配置的类型**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables/{id}`
 */
type GetApiTableV1TablesByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/tables/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询桌位详情 的 **请求配置**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables/{id}`
 */
const getApiTableV1TablesByIdRequestConfig: GetApiTableV1TablesByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/tables/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1TablesById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询桌位详情 的 **请求函数**
 *
 * @分类 TableService
 * @请求头 `GET /api/table/v1/tables/{id}`
 */
export const getApiTableV1TablesById = /*#__PURE__*/ (
  requestData: GetApiTableV1TablesByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1TablesByIdResponse>(prepare(getApiTableV1TablesByIdRequestConfig, requestData), ...args)
}

getApiTableV1TablesById.requestConfig = getApiTableV1TablesByIdRequestConfig

/**
 * 接口 删除桌位 的 **请求类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_delete`
 */
export interface DeleteApiTableV1TablesRequest {
  /**
   * 桌位ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 删除桌位 的 **返回类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_delete`
 */
export interface DeleteApiTableV1TablesResponse {}

/**
 * 接口 删除桌位 的 **请求配置的类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_delete`
 */
type DeleteApiTableV1TablesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/tables_delete', undefined, string, string, false>
>

/**
 * 接口 删除桌位 的 **请求配置**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_delete`
 */
const deleteApiTableV1TablesRequestConfig: DeleteApiTableV1TablesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/tables_delete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteApiTableV1Tables',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 删除桌位 的 **请求函数**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_delete`
 */
export const deleteApiTableV1Tables = /*#__PURE__*/ (
  requestData: DeleteApiTableV1TablesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteApiTableV1TablesResponse>(prepare(deleteApiTableV1TablesRequestConfig, requestData), ...args)
}

deleteApiTableV1Tables.requestConfig = deleteApiTableV1TablesRequestConfig

/**
 * 接口 更新桌位 的 **请求类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_put`
 */
export interface PutApiTableV1TablesRequest {
  /**
   * 桌位ID
   */
  id?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌子ID
   */
  groupId?: string
  /**
   * 桌位名称
   */
  name?: string
  /**
   * 桌位描述
   */
  description?: string
  imageUrls?: string[]
  /**
   * 是否可预约
   */
  isReservable?: boolean
  /**
   * 是否支持后台开单
   */
  billingEnabled?: boolean
  /**
   * 状态：1=启用，2=禁用；预约状态：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期。
   */
  status?: number
}

/**
 * 接口 更新桌位 的 **返回类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_put`
 */
export interface PutApiTableV1TablesResponse {}

/**
 * 接口 更新桌位 的 **请求配置的类型**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_put`
 */
type PutApiTableV1TablesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/tables_put', undefined, string, string, false>
>

/**
 * 接口 更新桌位 的 **请求配置**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_put`
 */
const putApiTableV1TablesRequestConfig: PutApiTableV1TablesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/tables_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiTableV1Tables',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新桌位 的 **请求函数**
 *
 * @分类 TableService
 * @请求头 `POST /api/table/v1/tables_put`
 */
export const putApiTableV1Tables = /*#__PURE__*/ (
  requestData: PutApiTableV1TablesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiTableV1TablesResponse>(prepare(putApiTableV1TablesRequestConfig, requestData), ...args)
}

putApiTableV1Tables.requestConfig = putApiTableV1TablesRequestConfig

/**
 * 接口 查询预约准入规则 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/accessRule`
 */
export interface GetApiTableV1ReservationAccessRuleRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌子类型ID
   */
  typeId?: string
}

/**
 * 接口 查询预约准入规则 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/accessRule`
 */
export interface GetApiTableV1ReservationAccessRuleResponse {
  /**
   * 桌子类型预约准入规则。
   */
  rule?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌子类型ID
     */
    typeId?: string
    /**
     * 预约所需积分，0 表示不扣积分
     */
    requiredPoints?: string
    /**
     * 允许预约的会员等级ID列表，空表示不限制
     */
    allowedLevelIds?: string[]
    /**
     * 是否启用规则，true=启用，false=停用
     */
    enabled?: boolean
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * 桌子类型摘要。
     */
    type?: {
      /**
       * 桌子类型ID
       */
      id?: string
      /**
       * 桌子类型名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 限定适用的桌子ID列表，空表示该类型下全部桌子生效
     */
    groupIds?: string[]
    /**
     * 已选择的桌子展示列表，空表示该类型下全部桌子生效
     */
    groups?: {
      /**
       * 桌子ID
       */
      id?: string
      /**
       * 桌子名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }[]
  }
}

/**
 * 接口 查询预约准入规则 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/accessRule`
 */
type GetApiTableV1ReservationAccessRuleRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/table/v1/reservation/accessRule',
    undefined,
    string,
    'merchantId' | 'storeId' | 'typeId',
    false
  >
>

/**
 * 接口 查询预约准入规则 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/accessRule`
 */
const getApiTableV1ReservationAccessRuleRequestConfig: GetApiTableV1ReservationAccessRuleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservation/accessRule',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['merchantId', 'storeId', 'typeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1ReservationAccessRule',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询预约准入规则 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/accessRule`
 */
export const getApiTableV1ReservationAccessRule = /*#__PURE__*/ (
  requestData: GetApiTableV1ReservationAccessRuleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1ReservationAccessRuleResponse>(
    prepare(getApiTableV1ReservationAccessRuleRequestConfig, requestData),
    ...args,
  )
}

getApiTableV1ReservationAccessRule.requestConfig = getApiTableV1ReservationAccessRuleRequestConfig

/**
 * 接口 更新预约准入规则 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/accessRule_put`
 */
export interface PutApiTableV1ReservationAccessRuleRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 桌子类型ID
   */
  typeId?: string
  /**
   * 预约所需积分，0 表示不扣积分
   */
  requiredPoints?: string
  /**
   * 允许预约的会员等级ID列表，空表示不限制
   */
  allowedLevelIds?: string[]
  /**
   * 是否启用规则，true=启用，false=停用
   */
  enabled?: boolean
  /**
   * 限定适用的桌子ID列表，空表示该类型下全部桌子生效
   */
  groupIds?: string[]
}

/**
 * 接口 更新预约准入规则 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/accessRule_put`
 */
export interface PutApiTableV1ReservationAccessRuleResponse {
  /**
   * 桌子类型预约准入规则。
   */
  rule?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌子类型ID
     */
    typeId?: string
    /**
     * 预约所需积分，0 表示不扣积分
     */
    requiredPoints?: string
    /**
     * 允许预约的会员等级ID列表，空表示不限制
     */
    allowedLevelIds?: string[]
    /**
     * 是否启用规则，true=启用，false=停用
     */
    enabled?: boolean
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * 桌子类型摘要。
     */
    type?: {
      /**
       * 桌子类型ID
       */
      id?: string
      /**
       * 桌子类型名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 限定适用的桌子ID列表，空表示该类型下全部桌子生效
     */
    groupIds?: string[]
    /**
     * 已选择的桌子展示列表，空表示该类型下全部桌子生效
     */
    groups?: {
      /**
       * 桌子ID
       */
      id?: string
      /**
       * 桌子名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }[]
  }
}

/**
 * 接口 更新预约准入规则 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/accessRule_put`
 */
type PutApiTableV1ReservationAccessRuleRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/reservation/accessRule_put', undefined, string, string, false>
>

/**
 * 接口 更新预约准入规则 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/accessRule_put`
 */
const putApiTableV1ReservationAccessRuleRequestConfig: PutApiTableV1ReservationAccessRuleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservation/accessRule_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiTableV1ReservationAccessRule',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新预约准入规则 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/accessRule_put`
 */
export const putApiTableV1ReservationAccessRule = /*#__PURE__*/ (
  requestData: PutApiTableV1ReservationAccessRuleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiTableV1ReservationAccessRuleResponse>(
    prepare(putApiTableV1ReservationAccessRuleRequestConfig, requestData),
    ...args,
  )
}

putApiTableV1ReservationAccessRule.requestConfig = putApiTableV1ReservationAccessRuleRequestConfig

/**
 * 接口 查询预约配置 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/config`
 */
export interface GetApiTableV1ReservationConfigRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 查询预约配置 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/config`
 */
export interface GetApiTableV1ReservationConfigResponse {
  /**
   * 门店预约配置。
   */
  config?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 到店后保留分钟数
     */
    retainMinutes?: number
    /**
     * 当天开放预约开始分钟，从 0 点起算
     */
    windowStartMinute?: number
    /**
     * 当天停止预约分钟，从 0 点起算；小于开始表示跨日开放窗口
     */
    windowEndMinute?: number
    /**
     * 是否开启预约，true=开启，false=关闭
     */
    reservationEnabled?: boolean
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
  }
}

/**
 * 接口 查询预约配置 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/config`
 */
type GetApiTableV1ReservationConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/reservation/config', undefined, string, 'merchantId' | 'storeId', false>
>

/**
 * 接口 查询预约配置 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/config`
 */
const getApiTableV1ReservationConfigRequestConfig: GetApiTableV1ReservationConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservation/config',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['merchantId', 'storeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1ReservationConfig',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询预约配置 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservation/config`
 */
export const getApiTableV1ReservationConfig = /*#__PURE__*/ (
  requestData: GetApiTableV1ReservationConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1ReservationConfigResponse>(
    prepare(getApiTableV1ReservationConfigRequestConfig, requestData),
    ...args,
  )
}

getApiTableV1ReservationConfig.requestConfig = getApiTableV1ReservationConfigRequestConfig

/**
 * 接口 更新预约配置 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/config_put`
 */
export interface PutApiTableV1ReservationConfigRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 到店后保留分钟数
   */
  retainMinutes?: number
  /**
   * 当天开放预约开始分钟，从 0 点起算
   */
  windowStartMinute?: number
  /**
   * 当天停止预约分钟，从 0 点起算；小于开始表示跨日开放窗口
   */
  windowEndMinute?: number
  /**
   * 是否开启预约，true=开启，false=关闭
   */
  reservationEnabled?: boolean
}

/**
 * 接口 更新预约配置 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/config_put`
 */
export interface PutApiTableV1ReservationConfigResponse {
  /**
   * 门店预约配置。
   */
  config?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 到店后保留分钟数
     */
    retainMinutes?: number
    /**
     * 当天开放预约开始分钟，从 0 点起算
     */
    windowStartMinute?: number
    /**
     * 当天停止预约分钟，从 0 点起算；小于开始表示跨日开放窗口
     */
    windowEndMinute?: number
    /**
     * 是否开启预约，true=开启，false=关闭
     */
    reservationEnabled?: boolean
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
  }
}

/**
 * 接口 更新预约配置 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/config_put`
 */
type PutApiTableV1ReservationConfigRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/reservation/config_put', undefined, string, string, false>
>

/**
 * 接口 更新预约配置 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/config_put`
 */
const putApiTableV1ReservationConfigRequestConfig: PutApiTableV1ReservationConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservation/config_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiTableV1ReservationConfig',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新预约配置 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservation/config_put`
 */
export const putApiTableV1ReservationConfig = /*#__PURE__*/ (
  requestData: PutApiTableV1ReservationConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiTableV1ReservationConfigResponse>(
    prepare(putApiTableV1ReservationConfigRequestConfig, requestData),
    ...args,
  )
}

putApiTableV1ReservationConfig.requestConfig = putApiTableV1ReservationConfigRequestConfig

/**
 * 接口 查询预约等待队列 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservationWaitlists`
 */
export interface GetApiTableV1ReservationWaitlistsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 等待单状态筛选：waiting=等待中，assigned=已排入，cancelled=已取消
   */
  status?: string
}

/**
 * 接口 查询预约等待队列 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservationWaitlists`
 */
export interface GetApiTableV1ReservationWaitlistsResponse {
  /**
   * 等待单列表
   */
  waitlists?: {
    /**
     * 等待单ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 目标桌位ID
     */
    targetTableId?: string
    /**
     * 目标桌子ID
     */
    targetGroupId?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 排队号
     */
    queueNo?: string
    /**
     * 状态：waiting=等待中，assigned=已排入，cancelled=已取消
     */
    status?: string
    /**
     * 排入时间
     */
    assignedAt?: string
    /**
     * 排入后的预约ID
     */
    reservationId?: string
    /**
     * 取消原因
     */
    cancelReason?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询预约等待队列 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservationWaitlists`
 */
type GetApiTableV1ReservationWaitlistsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/table/v1/reservationWaitlists',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'status',
    false
  >
>

/**
 * 接口 查询预约等待队列 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservationWaitlists`
 */
const getApiTableV1ReservationWaitlistsRequestConfig: GetApiTableV1ReservationWaitlistsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservationWaitlists',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1ReservationWaitlists',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询预约等待队列 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservationWaitlists`
 */
export const getApiTableV1ReservationWaitlists = /*#__PURE__*/ (
  requestData: GetApiTableV1ReservationWaitlistsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1ReservationWaitlistsResponse>(
    prepare(getApiTableV1ReservationWaitlistsRequestConfig, requestData),
    ...args,
  )
}

getApiTableV1ReservationWaitlists.requestConfig = getApiTableV1ReservationWaitlistsRequestConfig

/**
 * 接口 查询预约列表 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations`
 */
export interface GetApiTableV1ReservationsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 查询日期，建议格式 YYYY-MM-DD
   */
  reservationDate?: string
  /**
   * 预约状态筛选：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期
   */
  status?: string
}

/**
 * 接口 查询预约列表 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations`
 */
export interface GetApiTableV1ReservationsResponse {
  /**
   * 预约列表
   */
  reservations?: {
    /**
     * 预约ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 桌位名称
     */
    tableName?: string
    /**
     * 桌子类型摘要。
     */
    tableType?: {
      /**
       * 桌子类型ID
       */
      id?: string
      /**
       * 桌子类型名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 桌子摘要。
     */
    tableGroup?: {
      /**
       * 桌子ID
       */
      id?: string
      /**
       * 桌子名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 到店时间
     */
    arriveAt?: string
    /**
     * 保留分钟数
     */
    retainMinutes?: number
    /**
     * 过期时间
     */
    expireAt?: string
    /**
     * 状态：1=启用，2=禁用；预约状态：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期。
     */
    status?: string
    /**
     * 取消原因
     */
    cancelReason?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询预约列表 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations`
 */
type GetApiTableV1ReservationsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/table/v1/reservations',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'reservationDate' | 'status',
    false
  >
>

/**
 * 接口 查询预约列表 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations`
 */
const getApiTableV1ReservationsRequestConfig: GetApiTableV1ReservationsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservations',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId', 'reservationDate', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1Reservations',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询预约列表 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations`
 */
export const getApiTableV1Reservations = /*#__PURE__*/ (
  requestData: GetApiTableV1ReservationsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1ReservationsResponse>(
    prepare(getApiTableV1ReservationsRequestConfig, requestData),
    ...args,
  )
}

getApiTableV1Reservations.requestConfig = getApiTableV1ReservationsRequestConfig

/**
 * 接口 确认预约到店 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/arrive`
 */
export interface PostApiTableV1ReservationsArriveRequest {
  /**
   * 预约ID
   */
  id?: string
}

/**
 * 接口 确认预约到店 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/arrive`
 */
export interface PostApiTableV1ReservationsArriveResponse {}

/**
 * 接口 确认预约到店 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/arrive`
 */
type PostApiTableV1ReservationsArriveRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/reservations/arrive', undefined, string, string, false>
>

/**
 * 接口 确认预约到店 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/arrive`
 */
const postApiTableV1ReservationsArriveRequestConfig: PostApiTableV1ReservationsArriveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservations/arrive',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTableV1ReservationsArrive',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 确认预约到店 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/arrive`
 */
export const postApiTableV1ReservationsArrive = /*#__PURE__*/ (
  requestData: PostApiTableV1ReservationsArriveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTableV1ReservationsArriveResponse>(
    prepare(postApiTableV1ReservationsArriveRequestConfig, requestData),
    ...args,
  )
}

postApiTableV1ReservationsArrive.requestConfig = postApiTableV1ReservationsArriveRequestConfig

/**
 * 接口 取消预约 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/cancel`
 */
export interface PostApiTableV1ReservationsCancelRequest {
  /**
   * 预约ID
   */
  id?: string
  /**
   * 取消原因
   */
  cancelReason?: string
}

/**
 * 接口 取消预约 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/cancel`
 */
export interface PostApiTableV1ReservationsCancelResponse {}

/**
 * 接口 取消预约 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/cancel`
 */
type PostApiTableV1ReservationsCancelRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/reservations/cancel', undefined, string, string, false>
>

/**
 * 接口 取消预约 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/cancel`
 */
const postApiTableV1ReservationsCancelRequestConfig: PostApiTableV1ReservationsCancelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservations/cancel',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTableV1ReservationsCancel',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 取消预约 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/cancel`
 */
export const postApiTableV1ReservationsCancel = /*#__PURE__*/ (
  requestData: PostApiTableV1ReservationsCancelRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTableV1ReservationsCancelResponse>(
    prepare(postApiTableV1ReservationsCancelRequestConfig, requestData),
    ...args,
  )
}

postApiTableV1ReservationsCancel.requestConfig = postApiTableV1ReservationsCancelRequestConfig

/**
 * 接口 完成预约离店 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/complete`
 */
export interface PostApiTableV1ReservationsCompleteRequest {
  /**
   * 预约ID
   */
  id?: string
}

/**
 * 接口 完成预约离店 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/complete`
 */
export interface PostApiTableV1ReservationsCompleteResponse {}

/**
 * 接口 完成预约离店 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/complete`
 */
type PostApiTableV1ReservationsCompleteRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/reservations/complete', undefined, string, string, false>
>

/**
 * 接口 完成预约离店 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/complete`
 */
const postApiTableV1ReservationsCompleteRequestConfig: PostApiTableV1ReservationsCompleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservations/complete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTableV1ReservationsComplete',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 完成预约离店 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `POST /api/table/v1/reservations/complete`
 */
export const postApiTableV1ReservationsComplete = /*#__PURE__*/ (
  requestData: PostApiTableV1ReservationsCompleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTableV1ReservationsCompleteResponse>(
    prepare(postApiTableV1ReservationsCompleteRequestConfig, requestData),
    ...args,
  )
}

postApiTableV1ReservationsComplete.requestConfig = postApiTableV1ReservationsCompleteRequestConfig

/**
 * 接口 查询预约详情 的 **请求类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations/{id}`
 */
export interface GetApiTableV1ReservationsByIdRequest {
  /**
   * 预约ID
   */
  id: string
}

/**
 * 接口 查询预约详情 的 **返回类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations/{id}`
 */
export interface GetApiTableV1ReservationsByIdResponse {
  /**
   * 桌位预约信息。
   */
  reservation?: {
    /**
     * 预约ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 桌位ID
     */
    tableId?: string
    /**
     * 桌位名称
     */
    tableName?: string
    /**
     * 桌子类型摘要。
     */
    tableType?: {
      /**
       * 桌子类型ID
       */
      id?: string
      /**
       * 桌子类型名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 桌子摘要。
     */
    tableGroup?: {
      /**
       * 桌子ID
       */
      id?: string
      /**
       * 桌子名称
       */
      name?: string
      /**
       * 排序值
       */
      sort?: number
    }
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 到店时间
     */
    arriveAt?: string
    /**
     * 保留分钟数
     */
    retainMinutes?: number
    /**
     * 过期时间
     */
    expireAt?: string
    /**
     * 状态：1=启用，2=禁用；预约状态：pending=待到店，arrived=已到店，completed=已完成，cancelled=已取消，expired=已过期。
     */
    status?: string
    /**
     * 取消原因
     */
    cancelReason?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * TableDisplayInfo 桌位通用展示信息。
     */
    table?: {
      /**
       * 桌位ID
       */
      id?: string
      /**
       * 桌位名称
       */
      name?: string
      /**
       * 占用状态：idle=空闲，occupied=占用
       */
      occupancyStatus?: string
    }
  }
}

/**
 * 接口 查询预约详情 的 **请求配置的类型**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations/{id}`
 */
type GetApiTableV1ReservationsByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/table/v1/reservations/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询预约详情 的 **请求配置**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations/{id}`
 */
const getApiTableV1ReservationsByIdRequestConfig: GetApiTableV1ReservationsByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/table/v1/reservations/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTableV1ReservationsById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询预约详情 的 **请求函数**
 *
 * @分类 ReservationAdminService
 * @请求头 `GET /api/table/v1/reservations/{id}`
 */
export const getApiTableV1ReservationsById = /*#__PURE__*/ (
  requestData: GetApiTableV1ReservationsByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTableV1ReservationsByIdResponse>(
    prepare(getApiTableV1ReservationsByIdRequestConfig, requestData),
    ...args,
  )
}

getApiTableV1ReservationsById.requestConfig = getApiTableV1ReservationsByIdRequestConfig

/**
 * 接口 打烊 的 **请求类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/close`
 */
export interface PostApiStoreV1BusinessCloseRequest {
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 打烊 的 **返回类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/close`
 */
export interface PostApiStoreV1BusinessCloseResponse {}

/**
 * 接口 打烊 的 **请求配置的类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/close`
 */
type PostApiStoreV1BusinessCloseRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/business/close', undefined, string, string, false>
>

/**
 * 接口 打烊 的 **请求配置**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/close`
 */
const postApiStoreV1BusinessCloseRequestConfig: PostApiStoreV1BusinessCloseRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/business/close',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStoreV1BusinessClose',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 打烊 的 **请求函数**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/close`
 */
export const postApiStoreV1BusinessClose = /*#__PURE__*/ (
  requestData: PostApiStoreV1BusinessCloseRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStoreV1BusinessCloseResponse>(
    prepare(postApiStoreV1BusinessCloseRequestConfig, requestData),
    ...args,
  )
}

postApiStoreV1BusinessClose.requestConfig = postApiStoreV1BusinessCloseRequestConfig

/**
 * 接口 查询当前营业记录 的 **请求类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/current`
 */
export interface PostApiStoreV1BusinessCurrentRequest {
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 查询当前营业记录 的 **返回类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/current`
 */
export interface PostApiStoreV1BusinessCurrentResponse {
  /**
   * BusinessInfo 营业记录信息。
   */
  business?: {
    /**
     * 营业记录ID
     */
    id?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
     */
    status?: string
    /**
     * 开市时间
     */
    openedAt?: string
    /**
     * 打烊时间
     */
    closedAt?: string
    /**
     * 当前流水号
     */
    dailySeq?: string
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 查询当前营业记录 的 **请求配置的类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/current`
 */
type PostApiStoreV1BusinessCurrentRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/business/current', undefined, string, string, false>
>

/**
 * 接口 查询当前营业记录 的 **请求配置**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/current`
 */
const postApiStoreV1BusinessCurrentRequestConfig: PostApiStoreV1BusinessCurrentRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/business/current',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStoreV1BusinessCurrent',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询当前营业记录 的 **请求函数**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/current`
 */
export const postApiStoreV1BusinessCurrent = /*#__PURE__*/ (
  requestData: PostApiStoreV1BusinessCurrentRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStoreV1BusinessCurrentResponse>(
    prepare(postApiStoreV1BusinessCurrentRequestConfig, requestData),
    ...args,
  )
}

postApiStoreV1BusinessCurrent.requestConfig = postApiStoreV1BusinessCurrentRequestConfig

/**
 * 接口 开市 的 **请求类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/open`
 */
export interface PostApiStoreV1BusinessOpenRequest {
  /**
   * 门店ID
   */
  storeId?: string
}

/**
 * 接口 开市 的 **返回类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/open`
 */
export interface PostApiStoreV1BusinessOpenResponse {
  /**
   * BusinessInfo 营业记录信息。
   */
  business?: {
    /**
     * 营业记录ID
     */
    id?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 状态：1=启用，2=禁用；0=默认或全部（按接口语义）。
     */
    status?: string
    /**
     * 开市时间
     */
    openedAt?: string
    /**
     * 打烊时间
     */
    closedAt?: string
    /**
     * 当前流水号
     */
    dailySeq?: string
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
  }
}

/**
 * 接口 开市 的 **请求配置的类型**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/open`
 */
type PostApiStoreV1BusinessOpenRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/store/v1/business/open', undefined, string, string, false>
>

/**
 * 接口 开市 的 **请求配置**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/open`
 */
const postApiStoreV1BusinessOpenRequestConfig: PostApiStoreV1BusinessOpenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/store/v1/business/open',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiStoreV1BusinessOpen',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 开市 的 **请求函数**
 *
 * @分类 BusinessService
 * @请求头 `POST /api/store/v1/business/open`
 */
export const postApiStoreV1BusinessOpen = /*#__PURE__*/ (
  requestData: PostApiStoreV1BusinessOpenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiStoreV1BusinessOpenResponse>(
    prepare(postApiStoreV1BusinessOpenRequestConfig, requestData),
    ...args,
  )
}

postApiStoreV1BusinessOpen.requestConfig = postApiStoreV1BusinessOpenRequestConfig

/**
 * 接口 查询邀请关系 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/relations`
 */
export interface GetApiMemberV1InviteRelationsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID，可为空并由后台登录范围注入
   */
  merchantId?: string
  /**
   * 邀请人会员ID筛选
   */
  inviterMemberId?: string
  /**
   * 被邀请人会员ID筛选
   */
  inviteeMemberId?: string
  /**
   * 关系状态筛选：registered=已注册，pending_qualification=待达成消费，qualified=已达成，invalid=无效
   */
  status?: string
}

/**
 * 接口 查询邀请关系 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/relations`
 */
export interface GetApiMemberV1InviteRelationsResponse {
  /**
   * 邀请关系列表
   */
  relations?: {
    /**
     * 邀请关系ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 邀请人会员ID
     */
    inviterMemberId?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    inviterMember?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * 被邀请人会员ID
     */
    inviteeMemberId?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    inviteeMember?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * 被邀请会员当前状态：1=启用，2=禁用
     */
    inviteeMemberStatus?: number
    /**
     * 绑定时使用的邀请码
     */
    inviteCode?: string
    /**
     * 关系状态：registered=已注册，pending_qualification=待达成消费，qualified=已达成，invalid=无效
     */
    status?: string
    /**
     * 达成条件快照：register=注册即达成，first_completed_order=首笔完成消费订单达成
     */
    qualificationCondition?: string
    /**
     * 达成订单号
     */
    qualifiedOrderNo?: string
    /**
     * 达成订单金额，单位分
     */
    qualifiedAmount?: string
    /**
     * 达成时间
     */
    qualifiedAt?: string
    /**
     * 邀请人奖励状态
     */
    inviterRewardStatus?: string
    /**
     * 被邀请人奖励状态
     */
    inviteeRewardStatus?: string
    /**
     * 绑定时间
     */
    createdAt?: string
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询邀请关系 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/relations`
 */
type GetApiMemberV1InviteRelationsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/member/v1/invite/relations',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'inviterMemberId' | 'inviteeMemberId' | 'status',
    false
  >
>

/**
 * 接口 查询邀请关系 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/relations`
 */
const getApiMemberV1InviteRelationsRequestConfig: GetApiMemberV1InviteRelationsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/invite/relations',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [
    'pageRequest.page',
    'pageRequest.pageSize',
    'merchantId',
    'inviterMemberId',
    'inviteeMemberId',
    'status',
  ],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiMemberV1InviteRelations',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询邀请关系 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/relations`
 */
export const getApiMemberV1InviteRelations = /*#__PURE__*/ (
  requestData: GetApiMemberV1InviteRelationsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMemberV1InviteRelationsResponse>(
    prepare(getApiMemberV1InviteRelationsRequestConfig, requestData),
    ...args,
  )
}

getApiMemberV1InviteRelations.requestConfig = getApiMemberV1InviteRelationsRequestConfig

/**
 * 接口 查询邀请奖励配置列表 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs`
 */
export interface GetApiMemberV1InviteRewardConfigsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID，可为空并由后台登录范围注入
   */
  merchantId?: string
  /**
   * 奖励接收方筛选：inviter=邀请人，invitee=被邀请人
   */
  receiverRole?: string
  /**
   * 奖励阶段筛选：base=基础奖励，tier=梯度奖励
   */
  rewardStage?: string
  /**
   * 状态筛选：enabled=启用，disabled=禁用
   */
  status?: string
}

/**
 * 接口 查询邀请奖励配置列表 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs`
 */
export interface GetApiMemberV1InviteRewardConfigsResponse {
  /**
   * 邀请奖励配置列表
   */
  configs?: {
    /**
     * 配置ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 内部营销规则ID
     */
    ruleId?: string
    /**
     * 奖励配置名称
     */
    name?: string
    /**
     * 奖励配置说明
     */
    description?: string
    /**
     * 奖励接收方：inviter=邀请人，invitee=被邀请人
     */
    receiverRole?: string
    /**
     * 奖励阶段：base=基础奖励，tier=梯度奖励
     */
    rewardStage?: string
    /**
     * 状态：enabled=启用，disabled=禁用
     */
    status?: string
    /**
     * 最小达成订单金额，单位分
     */
    minQualifiedOrderAmount?: string
    /**
     * 达成邀请人数
     */
    qualifiedInviteCount?: string
    /**
     * 固定发放积分
     */
    fixedPoints?: string
    /**
     * 优惠券模板ID
     */
    couponTemplateId?: string
    /**
     * 发券数量
     */
    couponQuantity?: number
    /**
     * 通知场景
     */
    notificationScene?: string
    /**
     * 内部规则优先级
     */
    priority?: number
    /**
     * 叠加策略：stackable=可叠加，exclusive=命中后排他
     */
    stackPolicy?: string
    /**
     * 排序值
     */
    sort?: number
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询邀请奖励配置列表 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs`
 */
type GetApiMemberV1InviteRewardConfigsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/member/v1/invite/rewardConfigs',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'receiverRole' | 'rewardStage' | 'status',
    false
  >
>

/**
 * 接口 查询邀请奖励配置列表 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs`
 */
const getApiMemberV1InviteRewardConfigsRequestConfig: GetApiMemberV1InviteRewardConfigsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/invite/rewardConfigs',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'receiverRole', 'rewardStage', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiMemberV1InviteRewardConfigs',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询邀请奖励配置列表 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs`
 */
export const getApiMemberV1InviteRewardConfigs = /*#__PURE__*/ (
  requestData: GetApiMemberV1InviteRewardConfigsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMemberV1InviteRewardConfigsResponse>(
    prepare(getApiMemberV1InviteRewardConfigsRequestConfig, requestData),
    ...args,
  )
}

getApiMemberV1InviteRewardConfigs.requestConfig = getApiMemberV1InviteRewardConfigsRequestConfig

/**
 * 接口 创建邀请奖励配置 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs`
 */
export interface PostApiMemberV1InviteRewardConfigsRequest {
  /**
   * InviteRewardConfigInput 请求参数。
   */
  config?: {
    /**
     * 商户ID，可为空并由后台登录范围注入
     */
    merchantId?: string
    /**
     * 奖励配置名称
     */
    name?: string
    /**
     * 奖励配置说明
     */
    description?: string
    /**
     * 奖励接收方：inviter=邀请人，invitee=被邀请人
     */
    receiverRole?: string
    /**
     * 奖励阶段：base=基础奖励，tier=梯度奖励
     */
    rewardStage?: string
    /**
     * 最小达成订单金额，单位分；0 表示不限制
     */
    minQualifiedOrderAmount?: string
    /**
     * 达成邀请人数；梯度奖励用于配置第N个达成邀请
     */
    qualifiedInviteCount?: string
    /**
     * 固定发放积分；0 表示不发积分
     */
    fixedPoints?: string
    /**
     * 优惠券模板ID；0 表示不发券
     */
    couponTemplateId?: string
    /**
     * 发券数量；0 表示不发券
     */
    couponQuantity?: number
    /**
     * 通知场景；为空表示不发送通知
     */
    notificationScene?: string
    /**
     * 内部规则优先级
     */
    priority?: number
    /**
     * 叠加策略：stackable=可叠加，exclusive=命中后排他
     */
    stackPolicy?: string
    /**
     * 排序值，越小越靠前
     */
    sort?: number
  }
}

/**
 * 接口 创建邀请奖励配置 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs`
 */
export interface PostApiMemberV1InviteRewardConfigsResponse {
  /**
   * 配置ID
   */
  id?: string
}

/**
 * 接口 创建邀请奖励配置 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs`
 */
type PostApiMemberV1InviteRewardConfigsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/member/v1/invite/rewardConfigs', undefined, string, string, false>
>

/**
 * 接口 创建邀请奖励配置 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs`
 */
const postApiMemberV1InviteRewardConfigsRequestConfig: PostApiMemberV1InviteRewardConfigsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/invite/rewardConfigs',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiMemberV1InviteRewardConfigs',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建邀请奖励配置 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs`
 */
export const postApiMemberV1InviteRewardConfigs = /*#__PURE__*/ (
  requestData: PostApiMemberV1InviteRewardConfigsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMemberV1InviteRewardConfigsResponse>(
    prepare(postApiMemberV1InviteRewardConfigsRequestConfig, requestData),
    ...args,
  )
}

postApiMemberV1InviteRewardConfigs.requestConfig = postApiMemberV1InviteRewardConfigsRequestConfig

/**
 * 接口 禁用邀请奖励配置 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/disable`
 */
export interface PostApiMemberV1InviteRewardConfigsDisableRequest {
  /**
   * 配置ID
   */
  id?: string
  /**
   * 商户ID，可为空并由后台登录范围注入
   */
  merchantId?: string
}

/**
 * 接口 禁用邀请奖励配置 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/disable`
 */
export interface PostApiMemberV1InviteRewardConfigsDisableResponse {}

/**
 * 接口 禁用邀请奖励配置 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/disable`
 */
type PostApiMemberV1InviteRewardConfigsDisableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/member/v1/invite/rewardConfigs/disable', undefined, string, string, false>
>

/**
 * 接口 禁用邀请奖励配置 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/disable`
 */
const postApiMemberV1InviteRewardConfigsDisableRequestConfig: PostApiMemberV1InviteRewardConfigsDisableRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/member/v1/invite/rewardConfigs/disable',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiMemberV1InviteRewardConfigsDisable',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 禁用邀请奖励配置 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/disable`
 */
export const postApiMemberV1InviteRewardConfigsDisable = /*#__PURE__*/ (
  requestData: PostApiMemberV1InviteRewardConfigsDisableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMemberV1InviteRewardConfigsDisableResponse>(
    prepare(postApiMemberV1InviteRewardConfigsDisableRequestConfig, requestData),
    ...args,
  )
}

postApiMemberV1InviteRewardConfigsDisable.requestConfig = postApiMemberV1InviteRewardConfigsDisableRequestConfig

/**
 * 接口 启用邀请奖励配置 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/enable`
 */
export interface PostApiMemberV1InviteRewardConfigsEnableRequest {
  /**
   * 配置ID
   */
  id?: string
  /**
   * 商户ID，可为空并由后台登录范围注入
   */
  merchantId?: string
}

/**
 * 接口 启用邀请奖励配置 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/enable`
 */
export interface PostApiMemberV1InviteRewardConfigsEnableResponse {}

/**
 * 接口 启用邀请奖励配置 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/enable`
 */
type PostApiMemberV1InviteRewardConfigsEnableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/member/v1/invite/rewardConfigs/enable', undefined, string, string, false>
>

/**
 * 接口 启用邀请奖励配置 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/enable`
 */
const postApiMemberV1InviteRewardConfigsEnableRequestConfig: PostApiMemberV1InviteRewardConfigsEnableRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/member/v1/invite/rewardConfigs/enable',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiMemberV1InviteRewardConfigsEnable',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 启用邀请奖励配置 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs/enable`
 */
export const postApiMemberV1InviteRewardConfigsEnable = /*#__PURE__*/ (
  requestData: PostApiMemberV1InviteRewardConfigsEnableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMemberV1InviteRewardConfigsEnableResponse>(
    prepare(postApiMemberV1InviteRewardConfigsEnableRequestConfig, requestData),
    ...args,
  )
}

postApiMemberV1InviteRewardConfigsEnable.requestConfig = postApiMemberV1InviteRewardConfigsEnableRequestConfig

/**
 * 接口 查询邀请奖励配置详情 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs/{id}`
 */
export interface GetApiMemberV1InviteRewardConfigsByIdRequest {
  /**
   * 商户ID，可为空并由后台登录范围注入
   */
  merchantId?: string
  /**
   * 配置ID
   */
  id: string
}

/**
 * 接口 查询邀请奖励配置详情 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs/{id}`
 */
export interface GetApiMemberV1InviteRewardConfigsByIdResponse {
  /**
   * InviteRewardConfig 响应数据。
   */
  config?: {
    /**
     * 配置ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 内部营销规则ID
     */
    ruleId?: string
    /**
     * 奖励配置名称
     */
    name?: string
    /**
     * 奖励配置说明
     */
    description?: string
    /**
     * 奖励接收方：inviter=邀请人，invitee=被邀请人
     */
    receiverRole?: string
    /**
     * 奖励阶段：base=基础奖励，tier=梯度奖励
     */
    rewardStage?: string
    /**
     * 状态：enabled=启用，disabled=禁用
     */
    status?: string
    /**
     * 最小达成订单金额，单位分
     */
    minQualifiedOrderAmount?: string
    /**
     * 达成邀请人数
     */
    qualifiedInviteCount?: string
    /**
     * 固定发放积分
     */
    fixedPoints?: string
    /**
     * 优惠券模板ID
     */
    couponTemplateId?: string
    /**
     * 发券数量
     */
    couponQuantity?: number
    /**
     * 通知场景
     */
    notificationScene?: string
    /**
     * 内部规则优先级
     */
    priority?: number
    /**
     * 叠加策略：stackable=可叠加，exclusive=命中后排他
     */
    stackPolicy?: string
    /**
     * 排序值
     */
    sort?: number
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
  }
}

/**
 * 接口 查询邀请奖励配置详情 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs/{id}`
 */
type GetApiMemberV1InviteRewardConfigsByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/member/v1/invite/rewardConfigs/{id}', undefined, 'id', 'merchantId', false>
>

/**
 * 接口 查询邀请奖励配置详情 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs/{id}`
 */
const getApiMemberV1InviteRewardConfigsByIdRequestConfig: GetApiMemberV1InviteRewardConfigsByIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/member/v1/invite/rewardConfigs/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['id'],
    queryNames: ['merchantId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMemberV1InviteRewardConfigsById',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询邀请奖励配置详情 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardConfigs/{id}`
 */
export const getApiMemberV1InviteRewardConfigsById = /*#__PURE__*/ (
  requestData: GetApiMemberV1InviteRewardConfigsByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMemberV1InviteRewardConfigsByIdResponse>(
    prepare(getApiMemberV1InviteRewardConfigsByIdRequestConfig, requestData),
    ...args,
  )
}

getApiMemberV1InviteRewardConfigsById.requestConfig = getApiMemberV1InviteRewardConfigsByIdRequestConfig

/**
 * 接口 更新邀请奖励配置 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs_put`
 */
export interface PutApiMemberV1InviteRewardConfigsRequest {
  /**
   * 配置ID
   */
  id?: string
  /**
   * InviteRewardConfigInput 请求参数。
   */
  config?: {
    /**
     * 商户ID，可为空并由后台登录范围注入
     */
    merchantId?: string
    /**
     * 奖励配置名称
     */
    name?: string
    /**
     * 奖励配置说明
     */
    description?: string
    /**
     * 奖励接收方：inviter=邀请人，invitee=被邀请人
     */
    receiverRole?: string
    /**
     * 奖励阶段：base=基础奖励，tier=梯度奖励
     */
    rewardStage?: string
    /**
     * 最小达成订单金额，单位分；0 表示不限制
     */
    minQualifiedOrderAmount?: string
    /**
     * 达成邀请人数；梯度奖励用于配置第N个达成邀请
     */
    qualifiedInviteCount?: string
    /**
     * 固定发放积分；0 表示不发积分
     */
    fixedPoints?: string
    /**
     * 优惠券模板ID；0 表示不发券
     */
    couponTemplateId?: string
    /**
     * 发券数量；0 表示不发券
     */
    couponQuantity?: number
    /**
     * 通知场景；为空表示不发送通知
     */
    notificationScene?: string
    /**
     * 内部规则优先级
     */
    priority?: number
    /**
     * 叠加策略：stackable=可叠加，exclusive=命中后排他
     */
    stackPolicy?: string
    /**
     * 排序值，越小越靠前
     */
    sort?: number
  }
}

/**
 * 接口 更新邀请奖励配置 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs_put`
 */
export interface PutApiMemberV1InviteRewardConfigsResponse {
  /**
   * InviteRewardConfig 响应数据。
   */
  config?: {
    /**
     * 配置ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 内部营销规则ID
     */
    ruleId?: string
    /**
     * 奖励配置名称
     */
    name?: string
    /**
     * 奖励配置说明
     */
    description?: string
    /**
     * 奖励接收方：inviter=邀请人，invitee=被邀请人
     */
    receiverRole?: string
    /**
     * 奖励阶段：base=基础奖励，tier=梯度奖励
     */
    rewardStage?: string
    /**
     * 状态：enabled=启用，disabled=禁用
     */
    status?: string
    /**
     * 最小达成订单金额，单位分
     */
    minQualifiedOrderAmount?: string
    /**
     * 达成邀请人数
     */
    qualifiedInviteCount?: string
    /**
     * 固定发放积分
     */
    fixedPoints?: string
    /**
     * 优惠券模板ID
     */
    couponTemplateId?: string
    /**
     * 发券数量
     */
    couponQuantity?: number
    /**
     * 通知场景
     */
    notificationScene?: string
    /**
     * 内部规则优先级
     */
    priority?: number
    /**
     * 叠加策略：stackable=可叠加，exclusive=命中后排他
     */
    stackPolicy?: string
    /**
     * 排序值
     */
    sort?: number
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
  }
}

/**
 * 接口 更新邀请奖励配置 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs_put`
 */
type PutApiMemberV1InviteRewardConfigsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/member/v1/invite/rewardConfigs_put', undefined, string, string, false>
>

/**
 * 接口 更新邀请奖励配置 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs_put`
 */
const putApiMemberV1InviteRewardConfigsRequestConfig: PutApiMemberV1InviteRewardConfigsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/invite/rewardConfigs_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiMemberV1InviteRewardConfigs',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新邀请奖励配置 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/invite/rewardConfigs_put`
 */
export const putApiMemberV1InviteRewardConfigs = /*#__PURE__*/ (
  requestData: PutApiMemberV1InviteRewardConfigsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiMemberV1InviteRewardConfigsResponse>(
    prepare(putApiMemberV1InviteRewardConfigsRequestConfig, requestData),
    ...args,
  )
}

putApiMemberV1InviteRewardConfigs.requestConfig = putApiMemberV1InviteRewardConfigsRequestConfig

/**
 * 接口 查询邀请奖励执行记录 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardExecutions`
 */
export interface GetApiMemberV1InviteRewardExecutionsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID，可为空并由后台登录范围注入
   */
  merchantId?: string
  /**
   * 内部规则ID筛选
   */
  ruleId?: string
  /**
   * 邀请关系ID筛选
   */
  relationId?: string
  /**
   * 奖励接收会员ID筛选
   */
  memberId?: string
  /**
   * 执行状态筛选：pending=发放中，succeeded=已发放，failed=失败，skipped=未命中规则
   */
  status?: string
}

/**
 * 接口 查询邀请奖励执行记录 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardExecutions`
 */
export interface GetApiMemberV1InviteRewardExecutionsResponse {
  /**
   * 执行记录列表
   */
  items?: {
    /**
     * 执行记录ID
     */
    id?: string
    /**
     * 内部规则ID
     */
    ruleId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 业务编码
     */
    businessCode?: string
    /**
     * 业务对象ID
     */
    bizId?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 幂等键
     */
    idempotencyKey?: string
    /**
     * 执行状态
     */
    status?: string
    /**
     * 上下文快照 JSON
     */
    contextSnapshot?: string
    /**
     * 结果快照 JSON
     */
    resultSnapshot?: string
    /**
     * 错误信息
     */
    errorMessage?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 动作记录
     */
    actions?: {
      /**
       * 动作记录ID
       */
      id?: string
      /**
       * 执行记录ID
       */
      executionId?: string
      /**
       * 内部规则ID
       */
      ruleId?: string
      /**
       * 动作类型
       */
      actionType?: string
      /**
       * 动作产物类型
       */
      targetType?: string
      /**
       * 动作产物ID
       */
      targetId?: string
      /**
       * 动作关联数值
       */
      amount?: string
      /**
       * 动作状态
       */
      status?: string
      /**
       * 请求 JSON
       */
      requestJson?: string
      /**
       * 响应 JSON
       */
      responseJson?: string
      /**
       * 错误信息
       */
      errorMessage?: string
      /**
       * 创建时间
       */
      createdAt?: string
    }[]
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询邀请奖励执行记录 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardExecutions`
 */
type GetApiMemberV1InviteRewardExecutionsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/member/v1/invite/rewardExecutions',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'ruleId' | 'relationId' | 'memberId' | 'status',
    false
  >
>

/**
 * 接口 查询邀请奖励执行记录 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardExecutions`
 */
const getApiMemberV1InviteRewardExecutionsRequestConfig: GetApiMemberV1InviteRewardExecutionsRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/member/v1/invite/rewardExecutions',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [
      'pageRequest.page',
      'pageRequest.pageSize',
      'merchantId',
      'ruleId',
      'relationId',
      'memberId',
      'status',
    ],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiMemberV1InviteRewardExecutions',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询邀请奖励执行记录 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/invite/rewardExecutions`
 */
export const getApiMemberV1InviteRewardExecutions = /*#__PURE__*/ (
  requestData: GetApiMemberV1InviteRewardExecutionsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMemberV1InviteRewardExecutionsResponse>(
    prepare(getApiMemberV1InviteRewardExecutionsRequestConfig, requestData),
    ...args,
  )
}

getApiMemberV1InviteRewardExecutions.requestConfig = getApiMemberV1InviteRewardExecutionsRequestConfig

/**
 * 接口 查询会员列表 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members`
 */
export interface GetApiMemberV1MembersRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 会员状态筛选：0=不过滤，1=启用，2=禁用
   */
  status?: number
  /**
   * 手机号搜索关键字，可输入完整手机号或部分手机号
   */
  phone?: string
}

/**
 * 接口 查询会员列表 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members`
 */
export interface GetApiMemberV1MembersResponse {
  /**
   * 会员列表
   */
  members?: {
    /**
     * 会员ID
     */
    id?: string
    /**
     * OpenID
     */
    openid?: string
    /**
     * UnionID（可选，可能为空）
     */
    unionid?: string
    /**
     * 昵称
     */
    nickname?: string
    /**
     * 头像URL
     */
    avatarUrl?: string
    /**
     * 手机号
     */
    phone?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 状态：active=可取，finished=已取完，expired=已过期，cancelled=已取消，pending=待审核，approved=已通过，rejected=已驳回，completed=已完成。
     */
    status?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 会员创建时间
     */
    createdAt?: string
    /**
     * 当前可用积分
     */
    currentPoints?: string
    /**
     * 累计成长值
     */
    totalGrowth?: string
    /**
     * 会员等级ID，无匹配等级时为0
     */
    levelId?: string
    /**
     * LevelConfig 等级配置数据。
     */
    level?: {
      /**
       * 等级ID
       */
      id?: string
      /**
       * 商户ID
       */
      merchantId?: string
      /**
       * 等级名称
       */
      levelName?: string
      /**
       * 成长值门槛
       */
      growthThreshold?: string
      /**
       * 排序值
       */
      sort?: number
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * MerchantDisplayInfo 商户通用展示信息。
       */
      merchant?: {
        /**
         * 商户ID
         */
        id?: string
        /**
         * 商户名称
         */
        name?: string
        /**
         * 商户logo URL
         */
        logo?: string
      }
    }
    /**
     * 邀请人会员ID；没有邀请人时为0
     */
    inviterMemberId?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    inviterMember?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * 被邀请关系状态：registered=已注册，pending_qualification=待达成消费，qualified=已达成，invalid=无效
     */
    inviteRelationStatus?: string
    /**
     * 被邀请人奖励状态：not_triggered=未触发，pending=发放中，succeeded=已发放，failed=发放失败，partial_failed=部分失败，skipped=未命中规则
     */
    inviteeRewardStatus?: string
    /**
     * 该会员邀请的新会员总数
     */
    invitedCount?: string
    /**
     * 该会员邀请且已达成条件的人数
     */
    qualifiedInvitedCount?: string
    /**
     * 该会员获得邀请奖励次数
     */
    inviteRewardCount?: string
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询会员列表 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members`
 */
type GetApiMemberV1MembersRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/member/v1/members',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'status' | 'phone',
    false
  >
>

/**
 * 接口 查询会员列表 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members`
 */
const getApiMemberV1MembersRequestConfig: GetApiMemberV1MembersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/members',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'status', 'phone'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiMemberV1Members',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询会员列表 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members`
 */
export const getApiMemberV1Members = /*#__PURE__*/ (
  requestData: GetApiMemberV1MembersRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMemberV1MembersResponse>(prepare(getApiMemberV1MembersRequestConfig, requestData), ...args)
}

getApiMemberV1Members.requestConfig = getApiMemberV1MembersRequestConfig

/**
 * 接口 禁用会员 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/disable`
 */
export interface PostApiMemberV1MembersDisableRequest {
  /**
   * 会员ID（路径参数）
   */
  id?: string
}

/**
 * 接口 禁用会员 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/disable`
 */
export interface PostApiMemberV1MembersDisableResponse {}

/**
 * 接口 禁用会员 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/disable`
 */
type PostApiMemberV1MembersDisableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/member/v1/members/disable', undefined, string, string, false>
>

/**
 * 接口 禁用会员 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/disable`
 */
const postApiMemberV1MembersDisableRequestConfig: PostApiMemberV1MembersDisableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/members/disable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiMemberV1MembersDisable',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 禁用会员 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/disable`
 */
export const postApiMemberV1MembersDisable = /*#__PURE__*/ (
  requestData: PostApiMemberV1MembersDisableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMemberV1MembersDisableResponse>(
    prepare(postApiMemberV1MembersDisableRequestConfig, requestData),
    ...args,
  )
}

postApiMemberV1MembersDisable.requestConfig = postApiMemberV1MembersDisableRequestConfig

/**
 * 接口 启用会员 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/enable`
 */
export interface PostApiMemberV1MembersEnableRequest {
  /**
   * 会员ID（路径参数）
   */
  id?: string
}

/**
 * 接口 启用会员 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/enable`
 */
export interface PostApiMemberV1MembersEnableResponse {}

/**
 * 接口 启用会员 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/enable`
 */
type PostApiMemberV1MembersEnableRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/member/v1/members/enable', undefined, string, string, false>
>

/**
 * 接口 启用会员 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/enable`
 */
const postApiMemberV1MembersEnableRequestConfig: PostApiMemberV1MembersEnableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/members/enable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiMemberV1MembersEnable',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 启用会员 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `POST /api/member/v1/members/enable`
 */
export const postApiMemberV1MembersEnable = /*#__PURE__*/ (
  requestData: PostApiMemberV1MembersEnableRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiMemberV1MembersEnableResponse>(
    prepare(postApiMemberV1MembersEnableRequestConfig, requestData),
    ...args,
  )
}

postApiMemberV1MembersEnable.requestConfig = postApiMemberV1MembersEnableRequestConfig

/**
 * 接口 查询会员详情 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members/{id}`
 */
export interface GetApiMemberV1MembersByIdRequest {
  /**
   * 会员ID
   */
  id: string
}

/**
 * 接口 查询会员详情 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members/{id}`
 */
export interface GetApiMemberV1MembersByIdResponse {
  member?: {
    /**
     * 会员ID
     */
    id?: string
    /**
     * OpenID
     */
    openid?: string
    /**
     * UnionID（可选，可能为空）
     */
    unionid?: string
    /**
     * 昵称
     */
    nickname?: string
    /**
     * 头像URL
     */
    avatarUrl?: string
    /**
     * 手机号
     */
    phone?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 状态：active=可取，finished=已取完，expired=已过期，cancelled=已取消，pending=待审核，approved=已通过，rejected=已驳回，completed=已完成。
     */
    status?: number
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 会员创建时间
     */
    createdAt?: string
    /**
     * 当前可用积分
     */
    currentPoints?: string
    /**
     * 累计成长值
     */
    totalGrowth?: string
    /**
     * 会员等级ID，无匹配等级时为0
     */
    levelId?: string
    /**
     * LevelConfig 等级配置数据。
     */
    level?: {
      /**
       * 等级ID
       */
      id?: string
      /**
       * 商户ID
       */
      merchantId?: string
      /**
       * 等级名称
       */
      levelName?: string
      /**
       * 成长值门槛
       */
      growthThreshold?: string
      /**
       * 排序值
       */
      sort?: number
      /**
       * 创建时间
       */
      createdAt?: string
      /**
       * 更新时间
       */
      updatedAt?: string
      /**
       * MerchantDisplayInfo 商户通用展示信息。
       */
      merchant?: {
        /**
         * 商户ID
         */
        id?: string
        /**
         * 商户名称
         */
        name?: string
        /**
         * 商户logo URL
         */
        logo?: string
      }
    }
    /**
     * 邀请人会员ID；没有邀请人时为0
     */
    inviterMemberId?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    inviterMember?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * 被邀请关系状态：registered=已注册，pending_qualification=待达成消费，qualified=已达成，invalid=无效
     */
    inviteRelationStatus?: string
    /**
     * 被邀请人奖励状态：not_triggered=未触发，pending=发放中，succeeded=已发放，failed=发放失败，partial_failed=部分失败，skipped=未命中规则
     */
    inviteeRewardStatus?: string
    /**
     * 该会员邀请的新会员总数
     */
    invitedCount?: string
    /**
     * 该会员邀请且已达成条件的人数
     */
    qualifiedInvitedCount?: string
    /**
     * 该会员获得邀请奖励次数
     */
    inviteRewardCount?: string
  }
}

/**
 * 接口 查询会员详情 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members/{id}`
 */
type GetApiMemberV1MembersByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/member/v1/members/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询会员详情 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members/{id}`
 */
const getApiMemberV1MembersByIdRequestConfig: GetApiMemberV1MembersByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/members/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiMemberV1MembersById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询会员详情 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/members/{id}`
 */
export const getApiMemberV1MembersById = /*#__PURE__*/ (
  requestData: GetApiMemberV1MembersByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMemberV1MembersByIdResponse>(
    prepare(getApiMemberV1MembersByIdRequestConfig, requestData),
    ...args,
  )
}

getApiMemberV1MembersById.requestConfig = getApiMemberV1MembersByIdRequestConfig

/**
 * 接口 查询会员存酒流水 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storageFlows`
 */
export interface GetApiMemberV1StorageFlowsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 会员ID
   */
  memberId?: string
  /**
   * 菜品ID
   */
  dishId?: string
  /**
   * 存酒流水类型：deposit=存酒申请，withdraw=取酒。
   */
  type?: string
  /**
   * 状态：active=可取，finished=已取完，expired=已过期，cancelled=已取消，pending=待审核，approved=已通过，rejected=已驳回，completed=已完成。
   */
  status?: string
}

/**
 * 接口 查询会员存酒流水 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storageFlows`
 */
export interface GetApiMemberV1StorageFlowsResponse {
  /**
   * 流水列表
   */
  flows?: {
    /**
     * 流水ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 业务发生门店ID
     */
    storeId?: string
    /**
     * 业务发生门店名称
     */
    storeName?: string
    /**
     * 原存酒门店ID
     */
    storageStoreId?: string
    /**
     * 原存酒门店名称
     */
    storageStoreName?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 会员名称
     */
    memberName?: string
    /**
     * 菜品ID
     */
    dishId?: string
    /**
     * 菜品名称
     */
    dishName?: string
    /**
     * 菜品图片URL
     */
    dishImageUrl?: string
    /**
     * 存酒记录ID
     */
    storageRecordId?: string
    /**
     * 工单ID
     */
    ticketId?: string
    /**
     * 存酒流水类型：deposit=存酒申请，withdraw=取酒。
     */
    type?: string
    /**
     * 数量
     */
    quantity?: number
    /**
     * 状态：active=可取，finished=已取完，expired=已过期，cancelled=已取消，pending=待审核，approved=已通过，rejected=已驳回，completed=已完成。
     */
    status?: string
    /**
     * 操作后剩余数量
     */
    balanceAfter?: number
    /**
     * 备注
     */
    remark?: string
    /**
     * 审核人ID
     */
    reviewerId?: string
    /**
     * 审核备注
     */
    reviewRemark?: string
    /**
     * 审核时间
     */
    reviewedAt?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    storageStore?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * DishDisplayInfo 菜品通用展示信息。
     */
    dish?: {
      /**
       * 菜品ID
       */
      id?: string
      /**
       * 菜品名称
       */
      name?: string
      /**
       * 菜品首图URL
       */
      imageUrl?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    reviewer?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * StorageRecordDisplayInfo 存酒记录通用展示信息。
     */
    storageRecord?: {
      /**
       * 存酒记录ID
       */
      id?: string
      /**
       * 存酒记录状态
       */
      status?: string
      /**
       * 剩余可取数量
       */
      remainingQuantity?: number
    }
    /**
     * TicketDisplayInfo 工单通用展示信息。
     */
    ticket?: {
      /**
       * 工单ID
       */
      id?: string
      /**
       * 工单类型
       */
      type?: string
      /**
       * 工单状态
       */
      status?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询会员存酒流水 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storageFlows`
 */
type GetApiMemberV1StorageFlowsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/member/v1/storageFlows',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'memberId' | 'dishId' | 'type' | 'status',
    false
  >
>

/**
 * 接口 查询会员存酒流水 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storageFlows`
 */
const getApiMemberV1StorageFlowsRequestConfig: GetApiMemberV1StorageFlowsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/storageFlows',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [
    'pageRequest.page',
    'pageRequest.pageSize',
    'merchantId',
    'storeId',
    'memberId',
    'dishId',
    'type',
    'status',
  ],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiMemberV1StorageFlows',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询会员存酒流水 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storageFlows`
 */
export const getApiMemberV1StorageFlows = /*#__PURE__*/ (
  requestData: GetApiMemberV1StorageFlowsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMemberV1StorageFlowsResponse>(
    prepare(getApiMemberV1StorageFlowsRequestConfig, requestData),
    ...args,
  )
}

getApiMemberV1StorageFlows.requestConfig = getApiMemberV1StorageFlowsRequestConfig

/**
 * 接口 查询会员存酒记录 的 **请求类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storedWines`
 */
export interface GetApiMemberV1StoredWinesRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 当前门店ID
   */
  storeId?: string
  /**
   * 原存酒门店ID
   */
  storageStoreId?: string
  /**
   * 会员ID
   */
  memberId?: string
  /**
   * 菜品ID
   */
  dishId?: string
  /**
   * 状态：active=可取，finished=已取完，expired=已过期，cancelled=已取消，pending=待审核，approved=已通过，rejected=已驳回，completed=已完成。
   */
  status?: string
}

/**
 * 接口 查询会员存酒记录 的 **返回类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storedWines`
 */
export interface GetApiMemberV1StoredWinesResponse {
  /**
   * 存酒记录
   */
  wines?: {
    /**
     * 存酒记录ID
     */
    id?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 原存酒门店ID
     */
    storeId?: string
    /**
     * 原存酒门店名称
     */
    storeName?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 会员名称
     */
    memberName?: string
    /**
     * 菜品ID
     */
    dishId?: string
    /**
     * 菜品名称
     */
    dishName?: string
    /**
     * 菜品图片URL
     */
    dishImageUrl?: string
    /**
     * 存入总数量
     */
    totalQuantity?: number
    /**
     * 剩余可取数量
     */
    remainingQuantity?: number
    /**
     * 过期时间，空表示不过期
     */
    expireAt?: string
    /**
     * 状态：active=可取，finished=已取完，expired=已过期，cancelled=已取消，pending=待审核，approved=已通过，rejected=已驳回，completed=已完成。
     */
    status?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * DishDisplayInfo 菜品通用展示信息。
     */
    dish?: {
      /**
       * 菜品ID
       */
      id?: string
      /**
       * 菜品名称
       */
      name?: string
      /**
       * 菜品首图URL
       */
      imageUrl?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询会员存酒记录 的 **请求配置的类型**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storedWines`
 */
type GetApiMemberV1StoredWinesRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/member/v1/storedWines',
    undefined,
    string,
    | 'pageRequest.page'
    | 'pageRequest.pageSize'
    | 'merchantId'
    | 'storeId'
    | 'storageStoreId'
    | 'memberId'
    | 'dishId'
    | 'status',
    false
  >
>

/**
 * 接口 查询会员存酒记录 的 **请求配置**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storedWines`
 */
const getApiMemberV1StoredWinesRequestConfig: GetApiMemberV1StoredWinesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/member/v1/storedWines',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [
    'pageRequest.page',
    'pageRequest.pageSize',
    'merchantId',
    'storeId',
    'storageStoreId',
    'memberId',
    'dishId',
    'status',
  ],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiMemberV1StoredWines',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询会员存酒记录 的 **请求函数**
 *
 * @分类 MemberService
 * @请求头 `GET /api/member/v1/storedWines`
 */
export const getApiMemberV1StoredWines = /*#__PURE__*/ (
  requestData: GetApiMemberV1StoredWinesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiMemberV1StoredWinesResponse>(
    prepare(getApiMemberV1StoredWinesRequestConfig, requestData),
    ...args,
  )
}

getApiMemberV1StoredWines.requestConfig = getApiMemberV1StoredWinesRequestConfig

/**
 * 接口 查询工单列表 的 **请求类型**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets`
 */
export interface GetApiTicketV1TicketsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 工单状态筛选：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已取消
   */
  status?: string
  /**
   * 工单类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
   */
  type?: string
}

/**
 * 接口 查询工单列表 的 **返回类型**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets`
 */
export interface GetApiTicketV1TicketsResponse {
  /**
   * 工单列表
   */
  tickets?: {
    /**
     * 工单ID
     */
    id?: string
    /**
     * 工单类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    type?: string
    /**
     * 工单状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已取消。
     */
    status?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 申请人ID
     */
    applicantId?: string
    /**
     * 关联业务实体ID
     */
    targetId?: string
    /**
     * 关联实体类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    targetType?: string
    /**
     * 工单创建载荷JSON
     */
    payload?: string
    /**
     * 关联业务实体数据JSON
     */
    entityJson?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    applicant?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * TicketTargetDisplayInfo 工单目标通用展示信息。
     */
    target?: {
      /**
       * 目标实体ID
       */
      id?: string
      /**
       * 目标实体类型
       */
      type?: string
      /**
       * 目标展示名称
       */
      name?: string
      /**
       * 目标状态
       */
      status?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询工单列表 的 **请求配置的类型**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets`
 */
type GetApiTicketV1TicketsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/ticket/v1/tickets',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'status' | 'type',
    false
  >
>

/**
 * 接口 查询工单列表 的 **请求配置**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets`
 */
const getApiTicketV1TicketsRequestConfig: GetApiTicketV1TicketsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/ticket/v1/tickets',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId', 'status', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTicketV1Tickets',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询工单列表 的 **请求函数**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets`
 */
export const getApiTicketV1Tickets = /*#__PURE__*/ (
  requestData: GetApiTicketV1TicketsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTicketV1TicketsResponse>(prepare(getApiTicketV1TicketsRequestConfig, requestData), ...args)
}

getApiTicketV1Tickets.requestConfig = getApiTicketV1TicketsRequestConfig

/**
 * 接口 创建工单 的 **请求类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets`
 */
export interface PostApiTicketV1TicketsRequest {
  /**
   * 工单类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
   */
  type?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 申请人ID
   */
  applicantId?: string
  /**
   * 工单载荷JSON
   */
  payload?: string
}

/**
 * 接口 创建工单 的 **返回类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets`
 */
export interface PostApiTicketV1TicketsResponse {
  /**
   * TicketInfo 工单数据。
   */
  ticket?: {
    /**
     * 工单ID
     */
    id?: string
    /**
     * 工单类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    type?: string
    /**
     * 工单状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已取消。
     */
    status?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 申请人ID
     */
    applicantId?: string
    /**
     * 关联业务实体ID
     */
    targetId?: string
    /**
     * 关联实体类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    targetType?: string
    /**
     * 工单创建载荷JSON
     */
    payload?: string
    /**
     * 关联业务实体数据JSON
     */
    entityJson?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    applicant?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * TicketTargetDisplayInfo 工单目标通用展示信息。
     */
    target?: {
      /**
       * 目标实体ID
       */
      id?: string
      /**
       * 目标实体类型
       */
      type?: string
      /**
       * 目标展示名称
       */
      name?: string
      /**
       * 目标状态
       */
      status?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
  }
}

/**
 * 接口 创建工单 的 **请求配置的类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets`
 */
type PostApiTicketV1TicketsRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/ticket/v1/tickets', undefined, string, string, false>
>

/**
 * 接口 创建工单 的 **请求配置**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets`
 */
const postApiTicketV1TicketsRequestConfig: PostApiTicketV1TicketsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/ticket/v1/tickets',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTicketV1Tickets',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 创建工单 的 **请求函数**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets`
 */
export const postApiTicketV1Tickets = /*#__PURE__*/ (
  requestData: PostApiTicketV1TicketsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTicketV1TicketsResponse>(prepare(postApiTicketV1TicketsRequestConfig, requestData), ...args)
}

postApiTicketV1Tickets.requestConfig = postApiTicketV1TicketsRequestConfig

/**
 * 接口 审核通过工单 的 **请求类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/approve_put`
 */
export interface PutApiTicketV1TicketsApproveRequest {
  /**
   * 工单ID
   */
  id?: string
  /**
   * 审核备注
   */
  reviewRemark?: string
}

/**
 * 接口 审核通过工单 的 **返回类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/approve_put`
 */
export interface PutApiTicketV1TicketsApproveResponse {
  /**
   * TicketInfo 工单数据。
   */
  ticket?: {
    /**
     * 工单ID
     */
    id?: string
    /**
     * 工单类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    type?: string
    /**
     * 工单状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已取消。
     */
    status?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 申请人ID
     */
    applicantId?: string
    /**
     * 关联业务实体ID
     */
    targetId?: string
    /**
     * 关联实体类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    targetType?: string
    /**
     * 工单创建载荷JSON
     */
    payload?: string
    /**
     * 关联业务实体数据JSON
     */
    entityJson?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    applicant?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * TicketTargetDisplayInfo 工单目标通用展示信息。
     */
    target?: {
      /**
       * 目标实体ID
       */
      id?: string
      /**
       * 目标实体类型
       */
      type?: string
      /**
       * 目标展示名称
       */
      name?: string
      /**
       * 目标状态
       */
      status?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
  }
}

/**
 * 接口 审核通过工单 的 **请求配置的类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/approve_put`
 */
type PutApiTicketV1TicketsApproveRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/ticket/v1/tickets/approve_put', undefined, string, string, false>
>

/**
 * 接口 审核通过工单 的 **请求配置**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/approve_put`
 */
const putApiTicketV1TicketsApproveRequestConfig: PutApiTicketV1TicketsApproveRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/ticket/v1/tickets/approve_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiTicketV1TicketsApprove',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 审核通过工单 的 **请求函数**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/approve_put`
 */
export const putApiTicketV1TicketsApprove = /*#__PURE__*/ (
  requestData: PutApiTicketV1TicketsApproveRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiTicketV1TicketsApproveResponse>(
    prepare(putApiTicketV1TicketsApproveRequestConfig, requestData),
    ...args,
  )
}

putApiTicketV1TicketsApprove.requestConfig = putApiTicketV1TicketsApproveRequestConfig

/**
 * 接口 批量完成工单 的 **请求类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/batchComplete_put`
 */
export interface PutApiTicketV1TicketsBatchCompleteRequest {
  /**
   * 工单ID列表
   */
  ids?: string[]
  /**
   * 批量完成备注
   */
  reviewRemark?: string
}

/**
 * 接口 批量完成工单 的 **返回类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/batchComplete_put`
 */
export interface PutApiTicketV1TicketsBatchCompleteResponse {
  /**
   * 本次成功完成的工单数量
   */
  successCount?: number
  /**
   * 本次成功完成的工单ID列表
   */
  completedIds?: string[]
}

/**
 * 接口 批量完成工单 的 **请求配置的类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/batchComplete_put`
 */
type PutApiTicketV1TicketsBatchCompleteRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/ticket/v1/tickets/batchComplete_put', undefined, string, string, false>
>

/**
 * 接口 批量完成工单 的 **请求配置**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/batchComplete_put`
 */
const putApiTicketV1TicketsBatchCompleteRequestConfig: PutApiTicketV1TicketsBatchCompleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/ticket/v1/tickets/batchComplete_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiTicketV1TicketsBatchComplete',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 批量完成工单 的 **请求函数**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/batchComplete_put`
 */
export const putApiTicketV1TicketsBatchComplete = /*#__PURE__*/ (
  requestData: PutApiTicketV1TicketsBatchCompleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiTicketV1TicketsBatchCompleteResponse>(
    prepare(putApiTicketV1TicketsBatchCompleteRequestConfig, requestData),
    ...args,
  )
}

putApiTicketV1TicketsBatchComplete.requestConfig = putApiTicketV1TicketsBatchCompleteRequestConfig

/**
 * 接口 手动打印工单小票 的 **请求类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/print`
 */
export interface PostApiTicketV1TicketsPrintRequest {
  /**
   * 工单ID
   */
  id?: string
  /**
   * 小票类型列表：points_deposit_ticket=积分存入工单小票，points_withdraw_ticket=积分提取工单小票，wine_deposit_ticket=会员存酒工单小票，wine_withdraw_ticket=会员取酒工单小票；不传则打印该工单可配置的小票类型
   */
  receiptTypes?: string[]
}

/**
 * 接口 手动打印工单小票 的 **返回类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/print`
 */
export interface PostApiTicketV1TicketsPrintResponse {
  /**
   * 成功提交打印的小票数量
   */
  printedCount?: number
}

/**
 * 接口 手动打印工单小票 的 **请求配置的类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/print`
 */
type PostApiTicketV1TicketsPrintRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/ticket/v1/tickets/print', undefined, string, string, false>
>

/**
 * 接口 手动打印工单小票 的 **请求配置**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/print`
 */
const postApiTicketV1TicketsPrintRequestConfig: PostApiTicketV1TicketsPrintRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/ticket/v1/tickets/print',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiTicketV1TicketsPrint',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 手动打印工单小票 的 **请求函数**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/print`
 */
export const postApiTicketV1TicketsPrint = /*#__PURE__*/ (
  requestData: PostApiTicketV1TicketsPrintRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiTicketV1TicketsPrintResponse>(
    prepare(postApiTicketV1TicketsPrintRequestConfig, requestData),
    ...args,
  )
}

postApiTicketV1TicketsPrint.requestConfig = postApiTicketV1TicketsPrintRequestConfig

/**
 * 接口 审核驳回工单 的 **请求类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/reject_put`
 */
export interface PutApiTicketV1TicketsRejectRequest {
  /**
   * 工单ID
   */
  id?: string
  /**
   * 驳回原因
   */
  reviewRemark?: string
}

/**
 * 接口 审核驳回工单 的 **返回类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/reject_put`
 */
export interface PutApiTicketV1TicketsRejectResponse {
  /**
   * TicketInfo 工单数据。
   */
  ticket?: {
    /**
     * 工单ID
     */
    id?: string
    /**
     * 工单类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    type?: string
    /**
     * 工单状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已取消。
     */
    status?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 申请人ID
     */
    applicantId?: string
    /**
     * 关联业务实体ID
     */
    targetId?: string
    /**
     * 关联实体类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    targetType?: string
    /**
     * 工单创建载荷JSON
     */
    payload?: string
    /**
     * 关联业务实体数据JSON
     */
    entityJson?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    applicant?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * TicketTargetDisplayInfo 工单目标通用展示信息。
     */
    target?: {
      /**
       * 目标实体ID
       */
      id?: string
      /**
       * 目标实体类型
       */
      type?: string
      /**
       * 目标展示名称
       */
      name?: string
      /**
       * 目标状态
       */
      status?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
  }
}

/**
 * 接口 审核驳回工单 的 **请求配置的类型**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/reject_put`
 */
type PutApiTicketV1TicketsRejectRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/ticket/v1/tickets/reject_put', undefined, string, string, false>
>

/**
 * 接口 审核驳回工单 的 **请求配置**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/reject_put`
 */
const putApiTicketV1TicketsRejectRequestConfig: PutApiTicketV1TicketsRejectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/ticket/v1/tickets/reject_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiTicketV1TicketsReject',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 审核驳回工单 的 **请求函数**
 *
 * @分类 TicketService
 * @请求头 `POST /api/ticket/v1/tickets/reject_put`
 */
export const putApiTicketV1TicketsReject = /*#__PURE__*/ (
  requestData: PutApiTicketV1TicketsRejectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiTicketV1TicketsRejectResponse>(
    prepare(putApiTicketV1TicketsRejectRequestConfig, requestData),
    ...args,
  )
}

putApiTicketV1TicketsReject.requestConfig = putApiTicketV1TicketsRejectRequestConfig

/**
 * 接口 查询工单详情 的 **请求类型**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets/{id}`
 */
export interface GetApiTicketV1TicketsByIdRequest {
  /**
   * 工单ID
   */
  id: string
}

/**
 * 接口 查询工单详情 的 **返回类型**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets/{id}`
 */
export interface GetApiTicketV1TicketsByIdResponse {
  /**
   * TicketInfo 工单数据。
   */
  ticket?: {
    /**
     * 工单ID
     */
    id?: string
    /**
     * 工单类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    type?: string
    /**
     * 工单状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已取消。
     */
    status?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 申请人ID
     */
    applicantId?: string
    /**
     * 关联业务实体ID
     */
    targetId?: string
    /**
     * 关联实体类型：points_deposit=积分存入申请，points_withdraw=积分提取申请，member_wine_deposit=会员存酒申请，member_wine_withdraw=会员取酒申请。
     */
    targetType?: string
    /**
     * 工单创建载荷JSON
     */
    payload?: string
    /**
     * 关联业务实体数据JSON
     */
    entityJson?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    applicant?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * TicketTargetDisplayInfo 工单目标通用展示信息。
     */
    target?: {
      /**
       * 目标实体ID
       */
      id?: string
      /**
       * 目标实体类型
       */
      type?: string
      /**
       * 目标展示名称
       */
      name?: string
      /**
       * 目标状态
       */
      status?: string
    }
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
  }
}

/**
 * 接口 查询工单详情 的 **请求配置的类型**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets/{id}`
 */
type GetApiTicketV1TicketsByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/ticket/v1/tickets/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询工单详情 的 **请求配置**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets/{id}`
 */
const getApiTicketV1TicketsByIdRequestConfig: GetApiTicketV1TicketsByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/ticket/v1/tickets/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiTicketV1TicketsById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询工单详情 的 **请求函数**
 *
 * @分类 TicketService
 * @请求头 `GET /api/ticket/v1/tickets/{id}`
 */
export const getApiTicketV1TicketsById = /*#__PURE__*/ (
  requestData: GetApiTicketV1TicketsByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiTicketV1TicketsByIdResponse>(
    prepare(getApiTicketV1TicketsByIdRequestConfig, requestData),
    ...args,
  )
}

getApiTicketV1TicketsById.requestConfig = getApiTicketV1TicketsByIdRequestConfig

/**
 * 接口 查询会员钱包列表 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts`
 */
export interface GetApiWalletV1AccountsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 会员ID（可选）
   */
  memberId?: string
}

/**
 * 接口 查询会员钱包列表 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts`
 */
export interface GetApiWalletV1AccountsResponse {
  /**
   * 钱包列表
   */
  wallets?: {
    /**
     * 账户ID
     */
    id?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 可用积分余额
     */
    pointsBalance?: string
    /**
     * 冻结积分
     */
    pointsFrozen?: string
    /**
     * 累计获得积分
     */
    pointsTotalEarned?: string
    /**
     * 累计使用积分
     */
    pointsTotalUsed?: string
    /**
     * 最近过期时间
     */
    pointsLastExpiredAt?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 可用金币余额
     */
    goldBalance?: string
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询会员钱包列表 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts`
 */
type GetApiWalletV1AccountsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/wallet/v1/accounts',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'memberId',
    false
  >
>

/**
 * 接口 查询会员钱包列表 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts`
 */
const getApiWalletV1AccountsRequestConfig: GetApiWalletV1AccountsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/wallet/v1/accounts',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'memberId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiWalletV1Accounts',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询会员钱包列表 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts`
 */
export const getApiWalletV1Accounts = /*#__PURE__*/ (
  requestData: GetApiWalletV1AccountsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiWalletV1AccountsResponse>(prepare(getApiWalletV1AccountsRequestConfig, requestData), ...args)
}

getApiWalletV1Accounts.requestConfig = getApiWalletV1AccountsRequestConfig

/**
 * 接口 后台提交积分存入申请 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit`
 */
export interface PostApiWalletV1AccountsDepositRequest {
  /**
   * 会员ID
   */
  memberId?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 申请存入积分数量
   */
  points?: string
}

/**
 * 接口 后台提交积分存入申请 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit`
 */
export interface PostApiWalletV1AccountsDepositResponse {
  /**
   * DepositRequestInfo 积分存入申请数据；points 为历史字段名，表示实际可存入积分数量。
   */
  request?: {
    /**
     * 申请ID
     */
    id?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 申请存入积分数量，保留 points 历史字段名
     */
    points?: string
    /**
     * 申请状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已撤回。
     */
    status?: string
    /**
     * 审核人ID
     */
    reviewerId?: string
    /**
     * 审核备注
     */
    reviewRemark?: string
    /**
     * 审核时间
     */
    reviewedAt?: string
    /**
     * 撤回时间
     */
    cancelledAt?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    reviewer?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * 原始提交积分数量
     */
    originalPoints?: string
    /**
     * 实际可存入积分数量，与 points 一致
     */
    depositPoints?: string
    /**
     * 未进入积分钱包的积分数量，计算方式为 originalPoints - depositPoints
     */
    undepositedPoints?: string
    /**
     * 按梯度预计兑换的抽奖次数，审核通过后到账
     */
    drawChanceCount?: string
    /**
     * 参与兑换抽奖次数的原始积分数量
     */
    drawSourcePoints?: string
    /**
     * 没有被任何存入梯度覆盖、无法转换的积分数量
     */
    unconvertedPoints?: string
    /**
     * 积分存入梯度拆分明细
     */
    exchangeSegments?: {
      /**
       * 积分区间起点，包含该值
       */
      minPoints?: string
      /**
       * 积分区间终点，不包含该值；0 表示无上限
       */
      maxPoints?: string
      /**
       * 本段参与计算的原始积分数量
       */
      sourcePoints?: string
      /**
       * 本段多少原始积分折算 1 个实际存入积分
       */
      depositExchangePoints?: string
      /**
       * 本段实际可存入积分数量
       */
      depositPoints?: string
      /**
       * 本段按存入折算后不足 1 个存入积分的余数
       */
      depositRemainderPoints?: string
      /**
       * 本段多少原始积分折算 1 次抽奖次数；0 表示不兑换
       */
      drawExchangePoints?: string
      /**
       * 本段兑换的抽奖次数
       */
      drawChanceCount?: string
      /**
       * 本段参与兑换抽奖次数的原始积分数量
       */
      drawSourcePoints?: string
      /**
       * 本段按抽奖折算后不足 1 次抽奖的余数
       */
      drawRemainderPoints?: string
    }[]
  }
  /**
   * WalletLedgerItem 钱包流水数据。
   */
  ledger?: {
    /**
     * 流水ID
     */
    id?: string
    /**
     * 账户ID
     */
    accountId?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 流水类型：earn=消费获得积分，payment=订单扣减金币，refund=退款返还金币，order_refund=订单退款扣回积分，recharge=充值获得金币，reward=规则奖励获得积分，expire=积分过期扣减，adjust=人工调整积分，deposit=会员申请存入积分，withdraw=会员提取积分，checkin=签到获得积分。
     */
    type?: string
    /**
     * 资产类型：points=积分，gold=金币。
     */
    assetType?: string
    /**
     * 变动数量。earn/order_refund/deposit/withdraw 表示积分变动值，payment/refund 表示金币变动值，扣减时可为负数。
     */
    amount?: string
    /**
     * 变动后余额。按 asset_type 表示积分或金币余额。
     */
    balanceAfter?: string
    /**
     * 关联订单号
     */
    orderNo?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 过期时间
     */
    expireAt?: string
    /**
     * 是否已过期
     */
    expired?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 关联存入申请ID
     */
    requestId?: string
    /**
     * 申请状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已撤回。
     */
    status?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * WalletRequestDisplayInfo 积分存入申请通用展示信息；points 为存入申请历史字段名，表示申请存入积分数量。
     */
    request?: {
      /**
       * 积分存入申请ID
       */
      id?: string
      /**
       * 申请状态
       */
      status?: string
      /**
       * 申请存入积分数量，保留 points 历史字段名
       */
      points?: string
    }
    /**
     * WalletDisplayInfo 钱包通用展示信息；points_balance 为积分余额，gold_balance 为金币余额。
     */
    account?: {
      /**
       * 钱包ID
       */
      id?: string
      /**
       * 可用积分余额
       */
      pointsBalance?: string
      /**
       * 冻结积分
       */
      pointsFrozen?: string
      /**
       * 可用金币余额
       */
      goldBalance?: string
    }
  }
  /**
   * TicketDisplayInfo 工单通用展示信息。
   */
  ticket?: {
    /**
     * 工单ID
     */
    id?: string
    /**
     * 工单类型
     */
    type?: string
    /**
     * 工单状态
     */
    status?: string
  }
}

/**
 * 接口 后台提交积分存入申请 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit`
 */
type PostApiWalletV1AccountsDepositRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/wallet/v1/accounts/deposit', undefined, string, string, false>
>

/**
 * 接口 后台提交积分存入申请 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit`
 */
const postApiWalletV1AccountsDepositRequestConfig: PostApiWalletV1AccountsDepositRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/wallet/v1/accounts/deposit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiWalletV1AccountsDeposit',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 后台提交积分存入申请 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit`
 */
export const postApiWalletV1AccountsDeposit = /*#__PURE__*/ (
  requestData: PostApiWalletV1AccountsDepositRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiWalletV1AccountsDepositResponse>(
    prepare(postApiWalletV1AccountsDepositRequestConfig, requestData),
    ...args,
  )
}

postApiWalletV1AccountsDeposit.requestConfig = postApiWalletV1AccountsDepositRequestConfig

/**
 * 接口 预览后台积分存入申请 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit/preview`
 */
export interface PostApiWalletV1AccountsDepositPreviewRequest {
  /**
   * 会员ID
   */
  memberId?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 拟提交存入的原始积分数量
   */
  points?: string
}

/**
 * 接口 预览后台积分存入申请 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit/preview`
 */
export interface PostApiWalletV1AccountsDepositPreviewResponse {
  /**
   * 原始提交积分数量
   */
  originalPoints?: string
  /**
   * 预计实际可存入积分数量
   */
  depositPoints?: string
  /**
   * 预计未进入积分钱包的积分数量，计算方式为 originalPoints - depositPoints
   */
  undepositedPoints?: string
  /**
   * 预计兑换抽奖次数
   */
  drawChanceCount?: string
  /**
   * 预计参与兑换抽奖次数的原始积分数量
   */
  drawSourcePoints?: string
  /**
   * 没有被任何存入梯度覆盖、无法转换的积分数量
   */
  unconvertedPoints?: string
  /**
   * 是否可以继续正式提交；必须在梯度范围内且有可存入积分或抽奖次数
   */
  canSubmit?: boolean
  /**
   * 积分存入梯度拆分明细
   */
  exchangeSegments?: {
    /**
     * 积分区间起点，包含该值
     */
    minPoints?: string
    /**
     * 积分区间终点，不包含该值；0 表示无上限
     */
    maxPoints?: string
    /**
     * 本段参与计算的原始积分数量
     */
    sourcePoints?: string
    /**
     * 本段多少原始积分折算 1 个实际存入积分
     */
    depositExchangePoints?: string
    /**
     * 本段实际可存入积分数量
     */
    depositPoints?: string
    /**
     * 本段按存入折算后不足 1 个存入积分的余数
     */
    depositRemainderPoints?: string
    /**
     * 本段多少原始积分折算 1 次抽奖次数；0 表示不兑换
     */
    drawExchangePoints?: string
    /**
     * 本段兑换的抽奖次数
     */
    drawChanceCount?: string
    /**
     * 本段参与兑换抽奖次数的原始积分数量
     */
    drawSourcePoints?: string
    /**
     * 本段按抽奖折算后不足 1 次抽奖的余数
     */
    drawRemainderPoints?: string
  }[]
}

/**
 * 接口 预览后台积分存入申请 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit/preview`
 */
type PostApiWalletV1AccountsDepositPreviewRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/wallet/v1/accounts/deposit/preview', undefined, string, string, false>
>

/**
 * 接口 预览后台积分存入申请 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit/preview`
 */
const postApiWalletV1AccountsDepositPreviewRequestConfig: PostApiWalletV1AccountsDepositPreviewRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/wallet/v1/accounts/deposit/preview',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiWalletV1AccountsDepositPreview',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 预览后台积分存入申请 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/deposit/preview`
 */
export const postApiWalletV1AccountsDepositPreview = /*#__PURE__*/ (
  requestData: PostApiWalletV1AccountsDepositPreviewRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiWalletV1AccountsDepositPreviewResponse>(
    prepare(postApiWalletV1AccountsDepositPreviewRequestConfig, requestData),
    ...args,
  )
}

postApiWalletV1AccountsDepositPreview.requestConfig = postApiWalletV1AccountsDepositPreviewRequestConfig

/**
 * 接口 后台划账扣减金豆 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/transfer`
 */
export interface PostApiWalletV1AccountsTransferRequest {
  /**
   * 会员ID
   */
  memberId?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID
   */
  storeId?: string
  /**
   * 扣减金豆数量
   */
  gold?: string
  /**
   * 划账说明
   */
  description?: string
}

/**
 * 接口 后台划账扣减金豆 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/transfer`
 */
export interface PostApiWalletV1AccountsTransferResponse {
  /**
   * WalletLedgerItem 钱包流水数据。
   */
  ledger?: {
    /**
     * 流水ID
     */
    id?: string
    /**
     * 账户ID
     */
    accountId?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 流水类型：earn=消费获得积分，payment=订单扣减金币，refund=退款返还金币，order_refund=订单退款扣回积分，recharge=充值获得金币，reward=规则奖励获得积分，expire=积分过期扣减，adjust=人工调整积分，deposit=会员申请存入积分，withdraw=会员提取积分，checkin=签到获得积分。
     */
    type?: string
    /**
     * 资产类型：points=积分，gold=金币。
     */
    assetType?: string
    /**
     * 变动数量。earn/order_refund/deposit/withdraw 表示积分变动值，payment/refund 表示金币变动值，扣减时可为负数。
     */
    amount?: string
    /**
     * 变动后余额。按 asset_type 表示积分或金币余额。
     */
    balanceAfter?: string
    /**
     * 关联订单号
     */
    orderNo?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 过期时间
     */
    expireAt?: string
    /**
     * 是否已过期
     */
    expired?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 关联存入申请ID
     */
    requestId?: string
    /**
     * 申请状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已撤回。
     */
    status?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * WalletRequestDisplayInfo 积分存入申请通用展示信息；points 为存入申请历史字段名，表示申请存入积分数量。
     */
    request?: {
      /**
       * 积分存入申请ID
       */
      id?: string
      /**
       * 申请状态
       */
      status?: string
      /**
       * 申请存入积分数量，保留 points 历史字段名
       */
      points?: string
    }
    /**
     * WalletDisplayInfo 钱包通用展示信息；points_balance 为积分余额，gold_balance 为金币余额。
     */
    account?: {
      /**
       * 钱包ID
       */
      id?: string
      /**
       * 可用积分余额
       */
      pointsBalance?: string
      /**
       * 冻结积分
       */
      pointsFrozen?: string
      /**
       * 可用金币余额
       */
      goldBalance?: string
    }
  }
}

/**
 * 接口 后台划账扣减金豆 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/transfer`
 */
type PostApiWalletV1AccountsTransferRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/wallet/v1/accounts/transfer', undefined, string, string, false>
>

/**
 * 接口 后台划账扣减金豆 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/transfer`
 */
const postApiWalletV1AccountsTransferRequestConfig: PostApiWalletV1AccountsTransferRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/wallet/v1/accounts/transfer',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postApiWalletV1AccountsTransfer',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 后台划账扣减金豆 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/transfer`
 */
export const postApiWalletV1AccountsTransfer = /*#__PURE__*/ (
  requestData: PostApiWalletV1AccountsTransferRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiWalletV1AccountsTransferResponse>(
    prepare(postApiWalletV1AccountsTransferRequestConfig, requestData),
    ...args,
  )
}

postApiWalletV1AccountsTransfer.requestConfig = postApiWalletV1AccountsTransferRequestConfig

/**
 * 接口 查询会员钱包 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts/{memberId}`
 */
export interface GetApiWalletV1AccountsByMemberIdRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 会员ID
   */
  memberId: string
}

/**
 * 接口 查询会员钱包 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts/{memberId}`
 */
export interface GetApiWalletV1AccountsByMemberIdResponse {
  /**
   * Wallet 会员账户数据；points_balance 为积分余额，gold_balance 为金币余额。
   */
  wallet?: {
    /**
     * 账户ID
     */
    id?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 可用积分余额
     */
    pointsBalance?: string
    /**
     * 冻结积分
     */
    pointsFrozen?: string
    /**
     * 累计获得积分
     */
    pointsTotalEarned?: string
    /**
     * 累计使用积分
     */
    pointsTotalUsed?: string
    /**
     * 最近过期时间
     */
    pointsLastExpiredAt?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 可用金币余额
     */
    goldBalance?: string
  }
}

/**
 * 接口 查询会员钱包 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts/{memberId}`
 */
type GetApiWalletV1AccountsByMemberIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/wallet/v1/accounts/{memberId}', undefined, 'memberId', 'merchantId', false>
>

/**
 * 接口 查询会员钱包 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts/{memberId}`
 */
const getApiWalletV1AccountsByMemberIdRequestConfig: GetApiWalletV1AccountsByMemberIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/wallet/v1/accounts/{memberId}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['memberId'],
  queryNames: ['merchantId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiWalletV1AccountsByMemberId',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询会员钱包 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/accounts/{memberId}`
 */
export const getApiWalletV1AccountsByMemberId = /*#__PURE__*/ (
  requestData: GetApiWalletV1AccountsByMemberIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiWalletV1AccountsByMemberIdResponse>(
    prepare(getApiWalletV1AccountsByMemberIdRequestConfig, requestData),
    ...args,
  )
}

getApiWalletV1AccountsByMemberId.requestConfig = getApiWalletV1AccountsByMemberIdRequestConfig

/**
 * 接口 手工调整积分 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/{memberId}/adjust`
 */
export interface PostApiWalletV1AccountsByMemberIdAdjustRequest {
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 调整积分，支持正负值
   */
  changePoints?: string
  /**
   * 调整说明
   */
  description?: string
  /**
   * 会员ID
   */
  memberId: string
}

/**
 * 接口 手工调整积分 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/{memberId}/adjust`
 */
export interface PostApiWalletV1AccountsByMemberIdAdjustResponse {
  /**
   * WalletLedgerItem 钱包流水数据。
   */
  ledger?: {
    /**
     * 流水ID
     */
    id?: string
    /**
     * 账户ID
     */
    accountId?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 流水类型：earn=消费获得积分，payment=订单扣减金币，refund=退款返还金币，order_refund=订单退款扣回积分，recharge=充值获得金币，reward=规则奖励获得积分，expire=积分过期扣减，adjust=人工调整积分，deposit=会员申请存入积分，withdraw=会员提取积分，checkin=签到获得积分。
     */
    type?: string
    /**
     * 资产类型：points=积分，gold=金币。
     */
    assetType?: string
    /**
     * 变动数量。earn/order_refund/deposit/withdraw 表示积分变动值，payment/refund 表示金币变动值，扣减时可为负数。
     */
    amount?: string
    /**
     * 变动后余额。按 asset_type 表示积分或金币余额。
     */
    balanceAfter?: string
    /**
     * 关联订单号
     */
    orderNo?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 过期时间
     */
    expireAt?: string
    /**
     * 是否已过期
     */
    expired?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 关联存入申请ID
     */
    requestId?: string
    /**
     * 申请状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已撤回。
     */
    status?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * WalletRequestDisplayInfo 积分存入申请通用展示信息；points 为存入申请历史字段名，表示申请存入积分数量。
     */
    request?: {
      /**
       * 积分存入申请ID
       */
      id?: string
      /**
       * 申请状态
       */
      status?: string
      /**
       * 申请存入积分数量，保留 points 历史字段名
       */
      points?: string
    }
    /**
     * WalletDisplayInfo 钱包通用展示信息；points_balance 为积分余额，gold_balance 为金币余额。
     */
    account?: {
      /**
       * 钱包ID
       */
      id?: string
      /**
       * 可用积分余额
       */
      pointsBalance?: string
      /**
       * 冻结积分
       */
      pointsFrozen?: string
      /**
       * 可用金币余额
       */
      goldBalance?: string
    }
  }
}

/**
 * 接口 手工调整积分 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/{memberId}/adjust`
 */
type PostApiWalletV1AccountsByMemberIdAdjustRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/wallet/v1/accounts/{memberId}/adjust', undefined, 'memberId', string, false>
>

/**
 * 接口 手工调整积分 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/{memberId}/adjust`
 */
const postApiWalletV1AccountsByMemberIdAdjustRequestConfig: PostApiWalletV1AccountsByMemberIdAdjustRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/wallet/v1/accounts/{memberId}/adjust',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['memberId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiWalletV1AccountsByMemberIdAdjust',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 手工调整积分 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `POST /api/wallet/v1/accounts/{memberId}/adjust`
 */
export const postApiWalletV1AccountsByMemberIdAdjust = /*#__PURE__*/ (
  requestData: PostApiWalletV1AccountsByMemberIdAdjustRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiWalletV1AccountsByMemberIdAdjustResponse>(
    prepare(postApiWalletV1AccountsByMemberIdAdjustRequestConfig, requestData),
    ...args,
  )
}

postApiWalletV1AccountsByMemberIdAdjust.requestConfig = postApiWalletV1AccountsByMemberIdAdjustRequestConfig

/**
 * 接口 查询存入申请列表 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests`
 */
export interface GetApiWalletV1DepositRequestsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID（可选）
   */
  merchantId?: string
  /**
   * 门店ID（可选）
   */
  storeId?: string
  /**
   * 会员ID（可选）
   */
  memberId?: string
  /**
   * 申请状态筛选：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已撤回
   */
  status?: string
}

/**
 * 接口 查询存入申请列表 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests`
 */
export interface GetApiWalletV1DepositRequestsResponse {
  /**
   * 存入申请列表
   */
  requests?: {
    /**
     * 申请ID
     */
    id?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 申请存入积分数量，保留 points 历史字段名
     */
    points?: string
    /**
     * 申请状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已撤回。
     */
    status?: string
    /**
     * 审核人ID
     */
    reviewerId?: string
    /**
     * 审核备注
     */
    reviewRemark?: string
    /**
     * 审核时间
     */
    reviewedAt?: string
    /**
     * 撤回时间
     */
    cancelledAt?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    reviewer?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * 原始提交积分数量
     */
    originalPoints?: string
    /**
     * 实际可存入积分数量，与 points 一致
     */
    depositPoints?: string
    /**
     * 未进入积分钱包的积分数量，计算方式为 originalPoints - depositPoints
     */
    undepositedPoints?: string
    /**
     * 按梯度预计兑换的抽奖次数，审核通过后到账
     */
    drawChanceCount?: string
    /**
     * 参与兑换抽奖次数的原始积分数量
     */
    drawSourcePoints?: string
    /**
     * 没有被任何存入梯度覆盖、无法转换的积分数量
     */
    unconvertedPoints?: string
    /**
     * 积分存入梯度拆分明细
     */
    exchangeSegments?: {
      /**
       * 积分区间起点，包含该值
       */
      minPoints?: string
      /**
       * 积分区间终点，不包含该值；0 表示无上限
       */
      maxPoints?: string
      /**
       * 本段参与计算的原始积分数量
       */
      sourcePoints?: string
      /**
       * 本段多少原始积分折算 1 个实际存入积分
       */
      depositExchangePoints?: string
      /**
       * 本段实际可存入积分数量
       */
      depositPoints?: string
      /**
       * 本段按存入折算后不足 1 个存入积分的余数
       */
      depositRemainderPoints?: string
      /**
       * 本段多少原始积分折算 1 次抽奖次数；0 表示不兑换
       */
      drawExchangePoints?: string
      /**
       * 本段兑换的抽奖次数
       */
      drawChanceCount?: string
      /**
       * 本段参与兑换抽奖次数的原始积分数量
       */
      drawSourcePoints?: string
      /**
       * 本段按抽奖折算后不足 1 次抽奖的余数
       */
      drawRemainderPoints?: string
    }[]
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询存入申请列表 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests`
 */
type GetApiWalletV1DepositRequestsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/wallet/v1/depositRequests',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'storeId' | 'memberId' | 'status',
    false
  >
>

/**
 * 接口 查询存入申请列表 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests`
 */
const getApiWalletV1DepositRequestsRequestConfig: GetApiWalletV1DepositRequestsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/wallet/v1/depositRequests',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'storeId', 'memberId', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiWalletV1DepositRequests',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询存入申请列表 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests`
 */
export const getApiWalletV1DepositRequests = /*#__PURE__*/ (
  requestData: GetApiWalletV1DepositRequestsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiWalletV1DepositRequestsResponse>(
    prepare(getApiWalletV1DepositRequestsRequestConfig, requestData),
    ...args,
  )
}

getApiWalletV1DepositRequests.requestConfig = getApiWalletV1DepositRequestsRequestConfig

/**
 * 接口 查询存入申请详情 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests/{id}`
 */
export interface GetApiWalletV1DepositRequestsByIdRequest {
  /**
   * 存入申请ID
   */
  id: string
}

/**
 * 接口 查询存入申请详情 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests/{id}`
 */
export interface GetApiWalletV1DepositRequestsByIdResponse {
  /**
   * DepositRequestInfo 积分存入申请数据；points 为历史字段名，表示实际可存入积分数量。
   */
  request?: {
    /**
     * 申请ID
     */
    id?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 申请存入积分数量，保留 points 历史字段名
     */
    points?: string
    /**
     * 申请状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已撤回。
     */
    status?: string
    /**
     * 审核人ID
     */
    reviewerId?: string
    /**
     * 审核备注
     */
    reviewRemark?: string
    /**
     * 审核时间
     */
    reviewedAt?: string
    /**
     * 撤回时间
     */
    cancelledAt?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 更新时间
     */
    updatedAt?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * AccountDisplayInfo 账号通用展示信息。
     */
    reviewer?: {
      /**
       * 账号ID
       */
      id?: string
      /**
       * 账号展示名称
       */
      name?: string
      /**
       * 账号头像URL
       */
      avatarUrl?: string
      /**
       * 账号状态：1=启用，2=禁用
       */
      status?: number
      /**
       * 账号手机号
       */
      phone?: string
    }
    /**
     * 原始提交积分数量
     */
    originalPoints?: string
    /**
     * 实际可存入积分数量，与 points 一致
     */
    depositPoints?: string
    /**
     * 未进入积分钱包的积分数量，计算方式为 originalPoints - depositPoints
     */
    undepositedPoints?: string
    /**
     * 按梯度预计兑换的抽奖次数，审核通过后到账
     */
    drawChanceCount?: string
    /**
     * 参与兑换抽奖次数的原始积分数量
     */
    drawSourcePoints?: string
    /**
     * 没有被任何存入梯度覆盖、无法转换的积分数量
     */
    unconvertedPoints?: string
    /**
     * 积分存入梯度拆分明细
     */
    exchangeSegments?: {
      /**
       * 积分区间起点，包含该值
       */
      minPoints?: string
      /**
       * 积分区间终点，不包含该值；0 表示无上限
       */
      maxPoints?: string
      /**
       * 本段参与计算的原始积分数量
       */
      sourcePoints?: string
      /**
       * 本段多少原始积分折算 1 个实际存入积分
       */
      depositExchangePoints?: string
      /**
       * 本段实际可存入积分数量
       */
      depositPoints?: string
      /**
       * 本段按存入折算后不足 1 个存入积分的余数
       */
      depositRemainderPoints?: string
      /**
       * 本段多少原始积分折算 1 次抽奖次数；0 表示不兑换
       */
      drawExchangePoints?: string
      /**
       * 本段兑换的抽奖次数
       */
      drawChanceCount?: string
      /**
       * 本段参与兑换抽奖次数的原始积分数量
       */
      drawSourcePoints?: string
      /**
       * 本段按抽奖折算后不足 1 次抽奖的余数
       */
      drawRemainderPoints?: string
    }[]
  }
}

/**
 * 接口 查询存入申请详情 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests/{id}`
 */
type GetApiWalletV1DepositRequestsByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/wallet/v1/depositRequests/{id}', undefined, 'id', string, false>
>

/**
 * 接口 查询存入申请详情 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests/{id}`
 */
const getApiWalletV1DepositRequestsByIdRequestConfig: GetApiWalletV1DepositRequestsByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/wallet/v1/depositRequests/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiWalletV1DepositRequestsById',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询存入申请详情 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/depositRequests/{id}`
 */
export const getApiWalletV1DepositRequestsById = /*#__PURE__*/ (
  requestData: GetApiWalletV1DepositRequestsByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiWalletV1DepositRequestsByIdResponse>(
    prepare(getApiWalletV1DepositRequestsByIdRequestConfig, requestData),
    ...args,
  )
}

getApiWalletV1DepositRequestsById.requestConfig = getApiWalletV1DepositRequestsByIdRequestConfig

/**
 * 接口 查询钱包流水 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ledger`
 */
export interface GetApiWalletV1LedgerRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 会员ID（可选）
   */
  memberId?: string
  /**
   * 流水类型筛选：earn=获得积分，payment=扣减金币，refund=返还金币，order_refund=订单退款扣回积分，recharge=充值获得金币，reward=规则奖励积分，expire=过期积分，adjust=手工调整积分，deposit=申请存入积分，withdraw=提取积分，checkin=签到积分
   */
  type?: string
}

/**
 * 接口 查询钱包流水 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ledger`
 */
export interface GetApiWalletV1LedgerResponse {
  /**
   * 流水列表
   */
  ledger?: {
    /**
     * 流水ID
     */
    id?: string
    /**
     * 账户ID
     */
    accountId?: string
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 流水类型：earn=消费获得积分，payment=订单扣减金币，refund=退款返还金币，order_refund=订单退款扣回积分，recharge=充值获得金币，reward=规则奖励获得积分，expire=积分过期扣减，adjust=人工调整积分，deposit=会员申请存入积分，withdraw=会员提取积分，checkin=签到获得积分。
     */
    type?: string
    /**
     * 资产类型：points=积分，gold=金币。
     */
    assetType?: string
    /**
     * 变动数量。earn/order_refund/deposit/withdraw 表示积分变动值，payment/refund 表示金币变动值，扣减时可为负数。
     */
    amount?: string
    /**
     * 变动后余额。按 asset_type 表示积分或金币余额。
     */
    balanceAfter?: string
    /**
     * 关联订单号
     */
    orderNo?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 过期时间
     */
    expireAt?: string
    /**
     * 是否已过期
     */
    expired?: boolean
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 门店ID
     */
    storeId?: string
    /**
     * 关联存入申请ID
     */
    requestId?: string
    /**
     * 申请状态：pending=待审核，approved=已通过，rejected=已驳回，cancelled=已撤回。
     */
    status?: string
    /**
     * 营业日期
     */
    businessDate?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
    /**
     * WalletRequestDisplayInfo 积分存入申请通用展示信息；points 为存入申请历史字段名，表示申请存入积分数量。
     */
    request?: {
      /**
       * 积分存入申请ID
       */
      id?: string
      /**
       * 申请状态
       */
      status?: string
      /**
       * 申请存入积分数量，保留 points 历史字段名
       */
      points?: string
    }
    /**
     * WalletDisplayInfo 钱包通用展示信息；points_balance 为积分余额，gold_balance 为金币余额。
     */
    account?: {
      /**
       * 钱包ID
       */
      id?: string
      /**
       * 可用积分余额
       */
      pointsBalance?: string
      /**
       * 冻结积分
       */
      pointsFrozen?: string
      /**
       * 可用金币余额
       */
      goldBalance?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询钱包流水 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ledger`
 */
type GetApiWalletV1LedgerRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/wallet/v1/ledger',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'merchantId' | 'memberId' | 'type',
    false
  >
>

/**
 * 接口 查询钱包流水 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ledger`
 */
const getApiWalletV1LedgerRequestConfig: GetApiWalletV1LedgerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/wallet/v1/ledger',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'merchantId', 'memberId', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiWalletV1Ledger',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询钱包流水 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ledger`
 */
export const getApiWalletV1Ledger = /*#__PURE__*/ (
  requestData: GetApiWalletV1LedgerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiWalletV1LedgerResponse>(prepare(getApiWalletV1LedgerRequestConfig, requestData), ...args)
}

getApiWalletV1Ledger.requestConfig = getApiWalletV1LedgerRequestConfig

/**
 * 接口 查询积分排行榜 的 **请求类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ranking`
 */
export interface GetApiWalletV1RankingRequest {
  /**
   * 周期：daily=日榜，weekly=周榜，monthly=月榜，yearly=年榜
   */
  period?: string
  /**
   * 商户ID
   */
  merchantId?: string
  /**
   * 门店ID；大于0时查询门店榜，不传时查询商户榜
   */
  storeId?: string
  /**
   * 返回数量，默认20，最大100
   */
  limit?: number
  /**
   * 历史期数；daily 使用 YYYY-MM-DD，weekly 使用 YYYY-Www 如 2026-W25，monthly 使用 YYYY-MM，yearly 使用 YYYY；为空时默认当前期
   */
  periodNo?: string
}

/**
 * 接口 查询积分排行榜 的 **返回类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ranking`
 */
export interface GetApiWalletV1RankingResponse {
  /**
   * 排行榜列表
   */
  items?: {
    /**
     * 排名，从 1 开始
     */
    rank?: number
    /**
     * 会员ID
     */
    memberId?: string
    /**
     * 会员昵称
     */
    nickname?: string
    /**
     * 会员头像URL
     */
    avatarUrl?: string
    /**
     * 周期内积分增长值
     */
    points?: string
    /**
     * 周期内计入排行榜的流水笔数
     */
    transactionCount?: string
    /**
     * 周期：daily=日榜，weekly=周榜，monthly=月榜，yearly=年榜。
     */
    period?: string
    /**
     * 范围：merchant/store
     */
    scope?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * 门店ID，商户榜为 0
     */
    storeId?: string
    /**
     * 统计开始日期，格式 YYYY-MM-DD
     */
    startDate?: string
    /**
     * 统计结束日期，格式 YYYY-MM-DD
     */
    endDate?: string
    /**
     * MemberDisplayInfo 会员通用展示信息。
     */
    member?: {
      /**
       * 会员ID
       */
      id?: string
      /**
       * 会员展示名称
       */
      name?: string
      /**
       * 会员头像URL
       */
      avatarUrl?: string
      /**
       * 会员手机号
       */
      phone?: string
    }
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * StoreDisplayInfo 门店通用展示信息。
     */
    store?: {
      /**
       * 门店ID
       */
      id?: string
      /**
       * 门店名称
       */
      name?: string
    }
  }[]
}

/**
 * 接口 查询积分排行榜 的 **请求配置的类型**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ranking`
 */
type GetApiWalletV1RankingRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/wallet/v1/ranking',
    undefined,
    string,
    'period' | 'merchantId' | 'storeId' | 'limit' | 'periodNo',
    false
  >
>

/**
 * 接口 查询积分排行榜 的 **请求配置**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ranking`
 */
const getApiWalletV1RankingRequestConfig: GetApiWalletV1RankingRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/wallet/v1/ranking',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['period', 'merchantId', 'storeId', 'limit', 'periodNo'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiWalletV1Ranking',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询积分排行榜 的 **请求函数**
 *
 * @分类 WalletService
 * @请求头 `GET /api/wallet/v1/ranking`
 */
export const getApiWalletV1Ranking = /*#__PURE__*/ (
  requestData: GetApiWalletV1RankingRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiWalletV1RankingResponse>(prepare(getApiWalletV1RankingRequestConfig, requestData), ...args)
}

getApiWalletV1Ranking.requestConfig = getApiWalletV1RankingRequestConfig

/**
 * 接口 查询站内信列表 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications`
 */
export interface GetApiNotificationV1NotificationsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
}

/**
 * 接口 查询站内信列表 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications`
 */
export interface GetApiNotificationV1NotificationsResponse {
  /**
   * 站内信列表
   */
  items?: {
    /**
     * 通知事件ID
     */
    id?: string
    /**
     * 通知场景编码
     */
    sceneCode?: string
    /**
     * 通知场景名称，前端用于展示
     */
    sceneName?: string
    /**
     * 业务类型，如 reservation、points_deposit
     */
    bizType?: string
    /**
     * 业务ID
     */
    bizId?: string
    /**
     * 事件状态：pending=待处理，processing=处理中，completed=已完成，failed=失败
     */
    status?: string
    /**
     * 当前接收人可读渠道的已读状态：none=无可读渠道，unread=存在未读，read=全部已读
     */
    readStatus?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 站内信渠道，固定为 inbox
     */
    channel?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 通知内容
     */
    content?: string
    /**
     * 站内信投递状态
     */
    deliveryStatus?: string
    /**
     * 已读时间
     */
    readAt?: string
    /**
     * 是否支持已读
     */
    supportsRead?: boolean
    /**
     * 接收人类型：account=后台账号
     */
    receiverType?: string
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询站内信列表 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications`
 */
type GetApiNotificationV1NotificationsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/notification/v1/notifications',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize',
    false
  >
>

/**
 * 接口 查询站内信列表 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications`
 */
const getApiNotificationV1NotificationsRequestConfig: GetApiNotificationV1NotificationsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/notification/v1/notifications',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiNotificationV1Notifications',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询站内信列表 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications`
 */
export const getApiNotificationV1Notifications = /*#__PURE__*/ (
  requestData: GetApiNotificationV1NotificationsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiNotificationV1NotificationsResponse>(
    prepare(getApiNotificationV1NotificationsRequestConfig, requestData),
    ...args,
  )
}

getApiNotificationV1Notifications.requestConfig = getApiNotificationV1NotificationsRequestConfig

/**
 * 接口 标记站内信已读 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/notifications/read`
 */
export interface PostApiNotificationV1NotificationsReadRequest {
  /**
   * 通知事件ID
   */
  id?: string
}

/**
 * 接口 标记站内信已读 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/notifications/read`
 */
export interface PostApiNotificationV1NotificationsReadResponse {}

/**
 * 接口 标记站内信已读 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/notifications/read`
 */
type PostApiNotificationV1NotificationsReadRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/notification/v1/notifications/read', undefined, string, string, false>
>

/**
 * 接口 标记站内信已读 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/notifications/read`
 */
const postApiNotificationV1NotificationsReadRequestConfig: PostApiNotificationV1NotificationsReadRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/notification/v1/notifications/read',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postApiNotificationV1NotificationsRead',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 标记站内信已读 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/notifications/read`
 */
export const postApiNotificationV1NotificationsRead = /*#__PURE__*/ (
  requestData: PostApiNotificationV1NotificationsReadRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiNotificationV1NotificationsReadResponse>(
    prepare(postApiNotificationV1NotificationsReadRequestConfig, requestData),
    ...args,
  )
}

postApiNotificationV1NotificationsRead.requestConfig = postApiNotificationV1NotificationsReadRequestConfig

/**
 * 接口 查询未读数量 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/unread/count`
 */
export interface GetApiNotificationV1NotificationsUnreadCountRequest {}

/**
 * 接口 查询未读数量 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/unread/count`
 */
export interface GetApiNotificationV1NotificationsUnreadCountResponse {
  /**
   * 未读数量
   */
  count?: string
}

/**
 * 接口 查询未读数量 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/unread/count`
 */
type GetApiNotificationV1NotificationsUnreadCountRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/notification/v1/notifications/unread/count', undefined, string, string, true>
>

/**
 * 接口 查询未读数量 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/unread/count`
 */
const getApiNotificationV1NotificationsUnreadCountRequestConfig: GetApiNotificationV1NotificationsUnreadCountRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/notification/v1/notifications/unread/count',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiNotificationV1NotificationsUnreadCount',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询未读数量 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/unread/count`
 */
export const getApiNotificationV1NotificationsUnreadCount = /*#__PURE__*/ (
  requestData?: GetApiNotificationV1NotificationsUnreadCountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiNotificationV1NotificationsUnreadCountResponse>(
    prepare(getApiNotificationV1NotificationsUnreadCountRequestConfig, requestData),
    ...args,
  )
}

getApiNotificationV1NotificationsUnreadCount.requestConfig = getApiNotificationV1NotificationsUnreadCountRequestConfig

/**
 * 接口 获取站内信详情 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/{id}`
 */
export interface GetApiNotificationV1NotificationsByIdRequest {
  /**
   * 通知事件ID
   */
  id: string
}

/**
 * 接口 获取站内信详情 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/{id}`
 */
export interface GetApiNotificationV1NotificationsByIdResponse {
  /**
   * 后台站内信展示项。
   */
  item?: {
    /**
     * 通知事件ID
     */
    id?: string
    /**
     * 通知场景编码
     */
    sceneCode?: string
    /**
     * 通知场景名称，前端用于展示
     */
    sceneName?: string
    /**
     * 业务类型，如 reservation、points_deposit
     */
    bizType?: string
    /**
     * 业务ID
     */
    bizId?: string
    /**
     * 事件状态：pending=待处理，processing=处理中，completed=已完成，failed=失败
     */
    status?: string
    /**
     * 当前接收人可读渠道的已读状态：none=无可读渠道，unread=存在未读，read=全部已读
     */
    readStatus?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 站内信渠道，固定为 inbox
     */
    channel?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 通知内容
     */
    content?: string
    /**
     * 站内信投递状态
     */
    deliveryStatus?: string
    /**
     * 已读时间
     */
    readAt?: string
    /**
     * 是否支持已读
     */
    supportsRead?: boolean
    /**
     * 接收人类型：account=后台账号
     */
    receiverType?: string
  }
}

/**
 * 接口 获取站内信详情 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/{id}`
 */
type GetApiNotificationV1NotificationsByIdRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/notification/v1/notifications/{id}', undefined, 'id', string, false>
>

/**
 * 接口 获取站内信详情 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/{id}`
 */
const getApiNotificationV1NotificationsByIdRequestConfig: GetApiNotificationV1NotificationsByIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/notification/v1/notifications/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiNotificationV1NotificationsById',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 获取站内信详情 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/notifications/{id}`
 */
export const getApiNotificationV1NotificationsById = /*#__PURE__*/ (
  requestData: GetApiNotificationV1NotificationsByIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiNotificationV1NotificationsByIdResponse>(
    prepare(getApiNotificationV1NotificationsByIdRequestConfig, requestData),
    ...args,
  )
}

getApiNotificationV1NotificationsById.requestConfig = getApiNotificationV1NotificationsByIdRequestConfig

/**
 * 接口 查询通知配置 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences`
 */
export interface GetApiNotificationV1PreferencesRequest {}

/**
 * 接口 查询通知配置 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences`
 */
export interface GetApiNotificationV1PreferencesResponse {
  /**
   * 通知配置列表
   */
  items?: {
    /**
     * 配置ID
     */
    id?: string
    /**
     * 通知场景编码
     */
    sceneCode?: string
    /**
     * 是否启用
     */
    enabled?: boolean
    /**
     * 渠道配置列表
     */
    channels?: {
      /**
       * 通知端：admin=后台，app=C端
       */
      side?: string
      /**
       * 通知渠道
       */
      channel?: string
      /**
       * 是否启用该渠道
       */
      enabled?: boolean
      /**
       * 第三方模板ID
       */
      providerTemplateId?: string
      /**
       * 内容模板
       */
      contentTemplate?: string
      /**
       * 变量 schema JSON 字符串
       */
      variableSchemaJson?: string
      /**
       * 小程序页面路径
       */
      miniProgramPagePath?: string
      /**
       * 后台接收角色ID列表
       */
      receiverRoleIds?: string[]
      /**
       * 后台接收账号ID列表
       */
      receiverAccountIds?: string[]
      /**
       * 后台接收角色展示信息列表
       */
      receiverRoles?: {
        /**
         * 角色ID
         */
        id?: string
        /**
         * 角色名称
         */
        name?: string
        /**
         * 角色编码
         */
        code?: string
        /**
         * 是否内置角色
         */
        isBuiltin?: boolean
      }[]
      /**
       * 后台接收账号展示信息列表
       */
      receiverAccounts?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }[]
    }[]
    /**
     * 通知场景名称，前端用于展示
     */
    sceneName?: string
  }[]
}

/**
 * 接口 查询通知配置 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences`
 */
type GetApiNotificationV1PreferencesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/notification/v1/preferences', undefined, string, string, true>
>

/**
 * 接口 查询通知配置 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences`
 */
const getApiNotificationV1PreferencesRequestConfig: GetApiNotificationV1PreferencesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/notification/v1/preferences',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiNotificationV1Preferences',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询通知配置 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences`
 */
export const getApiNotificationV1Preferences = /*#__PURE__*/ (
  requestData?: GetApiNotificationV1PreferencesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiNotificationV1PreferencesResponse>(
    prepare(getApiNotificationV1PreferencesRequestConfig, requestData),
    ...args,
  )
}

getApiNotificationV1Preferences.requestConfig = getApiNotificationV1PreferencesRequestConfig

/**
 * 接口 获取通知配置 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences/{sceneCode}`
 */
export interface GetApiNotificationV1PreferencesBySceneCodeRequest {
  /**
   * 通知场景编码
   */
  sceneCode: string
}

/**
 * 接口 获取通知配置 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences/{sceneCode}`
 */
export interface GetApiNotificationV1PreferencesBySceneCodeResponse {
  /**
   * 通知场景配置展示项。
   */
  item?: {
    /**
     * 配置ID
     */
    id?: string
    /**
     * 通知场景编码
     */
    sceneCode?: string
    /**
     * 是否启用
     */
    enabled?: boolean
    /**
     * 渠道配置列表
     */
    channels?: {
      /**
       * 通知端：admin=后台，app=C端
       */
      side?: string
      /**
       * 通知渠道
       */
      channel?: string
      /**
       * 是否启用该渠道
       */
      enabled?: boolean
      /**
       * 第三方模板ID
       */
      providerTemplateId?: string
      /**
       * 内容模板
       */
      contentTemplate?: string
      /**
       * 变量 schema JSON 字符串
       */
      variableSchemaJson?: string
      /**
       * 小程序页面路径
       */
      miniProgramPagePath?: string
      /**
       * 后台接收角色ID列表
       */
      receiverRoleIds?: string[]
      /**
       * 后台接收账号ID列表
       */
      receiverAccountIds?: string[]
      /**
       * 后台接收角色展示信息列表
       */
      receiverRoles?: {
        /**
         * 角色ID
         */
        id?: string
        /**
         * 角色名称
         */
        name?: string
        /**
         * 角色编码
         */
        code?: string
        /**
         * 是否内置角色
         */
        isBuiltin?: boolean
      }[]
      /**
       * 后台接收账号展示信息列表
       */
      receiverAccounts?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }[]
    }[]
    /**
     * 通知场景名称，前端用于展示
     */
    sceneName?: string
  }
}

/**
 * 接口 获取通知配置 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences/{sceneCode}`
 */
type GetApiNotificationV1PreferencesBySceneCodeRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/notification/v1/preferences/{sceneCode}', undefined, 'sceneCode', string, false>
>

/**
 * 接口 获取通知配置 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences/{sceneCode}`
 */
const getApiNotificationV1PreferencesBySceneCodeRequestConfig: GetApiNotificationV1PreferencesBySceneCodeRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/notification/v1/preferences/{sceneCode}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: ['sceneCode'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiNotificationV1PreferencesBySceneCode',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 获取通知配置 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/preferences/{sceneCode}`
 */
export const getApiNotificationV1PreferencesBySceneCode = /*#__PURE__*/ (
  requestData: GetApiNotificationV1PreferencesBySceneCodeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiNotificationV1PreferencesBySceneCodeResponse>(
    prepare(getApiNotificationV1PreferencesBySceneCodeRequestConfig, requestData),
    ...args,
  )
}

getApiNotificationV1PreferencesBySceneCode.requestConfig = getApiNotificationV1PreferencesBySceneCodeRequestConfig

/**
 * 接口 更新通知配置 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/preferences_put`
 */
export interface PutApiNotificationV1PreferencesRequest {
  /**
   * 通知场景编码
   */
  sceneCode?: string
  /**
   * 是否启用该场景通知
   */
  enabled?: boolean
  /**
   * 渠道配置列表，每项包含端、渠道、模板和后台接收人
   */
  channels?: {
    /**
     * 通知端：admin=后台，app=C端
     */
    side?: string
    /**
     * 通知渠道：inbox=站内信，mini_program=小程序订阅消息
     */
    channel?: string
    /**
     * 是否启用该渠道
     */
    enabled?: boolean
    /**
     * 第三方模板ID，小程序订阅消息使用
     */
    providerTemplateId?: string
    /**
     * 内容模板，支持 {变量名} 占位符
     */
    contentTemplate?: string
    /**
     * 变量 schema JSON 字符串
     */
    variableSchemaJson?: string
    /**
     * 小程序跳转页面路径
     */
    miniProgramPagePath?: string
    /**
     * 后台接收角色ID列表，仅 admin/inbox 使用
     */
    receiverRoleIds?: string[]
    /**
     * 后台接收账号ID列表，仅 admin/inbox 使用
     */
    receiverAccountIds?: string[]
  }[]
}

/**
 * 接口 更新通知配置 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/preferences_put`
 */
export interface PutApiNotificationV1PreferencesResponse {
  /**
   * 通知场景配置展示项。
   */
  item?: {
    /**
     * 配置ID
     */
    id?: string
    /**
     * 通知场景编码
     */
    sceneCode?: string
    /**
     * 是否启用
     */
    enabled?: boolean
    /**
     * 渠道配置列表
     */
    channels?: {
      /**
       * 通知端：admin=后台，app=C端
       */
      side?: string
      /**
       * 通知渠道
       */
      channel?: string
      /**
       * 是否启用该渠道
       */
      enabled?: boolean
      /**
       * 第三方模板ID
       */
      providerTemplateId?: string
      /**
       * 内容模板
       */
      contentTemplate?: string
      /**
       * 变量 schema JSON 字符串
       */
      variableSchemaJson?: string
      /**
       * 小程序页面路径
       */
      miniProgramPagePath?: string
      /**
       * 后台接收角色ID列表
       */
      receiverRoleIds?: string[]
      /**
       * 后台接收账号ID列表
       */
      receiverAccountIds?: string[]
      /**
       * 后台接收角色展示信息列表
       */
      receiverRoles?: {
        /**
         * 角色ID
         */
        id?: string
        /**
         * 角色名称
         */
        name?: string
        /**
         * 角色编码
         */
        code?: string
        /**
         * 是否内置角色
         */
        isBuiltin?: boolean
      }[]
      /**
       * 后台接收账号展示信息列表
       */
      receiverAccounts?: {
        /**
         * 账号ID
         */
        id?: string
        /**
         * 账号展示名称
         */
        name?: string
        /**
         * 账号头像URL
         */
        avatarUrl?: string
        /**
         * 账号状态：1=启用，2=禁用
         */
        status?: number
        /**
         * 账号手机号
         */
        phone?: string
      }[]
    }[]
    /**
     * 通知场景名称，前端用于展示
     */
    sceneName?: string
  }
}

/**
 * 接口 更新通知配置 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/preferences_put`
 */
type PutApiNotificationV1PreferencesRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/notification/v1/preferences_put', undefined, string, string, false>
>

/**
 * 接口 更新通知配置 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/preferences_put`
 */
const putApiNotificationV1PreferencesRequestConfig: PutApiNotificationV1PreferencesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/notification/v1/preferences_put',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putApiNotificationV1Preferences',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 更新通知配置 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `POST /api/notification/v1/preferences_put`
 */
export const putApiNotificationV1Preferences = /*#__PURE__*/ (
  requestData: PutApiNotificationV1PreferencesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutApiNotificationV1PreferencesResponse>(
    prepare(putApiNotificationV1PreferencesRequestConfig, requestData),
    ...args,
  )
}

putApiNotificationV1Preferences.requestConfig = putApiNotificationV1PreferencesRequestConfig

/**
 * 接口 查询推送记录 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/pushRecords`
 */
export interface GetApiNotificationV1PushRecordsRequest {
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
  /**
   * 通知端：admin=后台，app=C端
   */
  side?: string
  /**
   * 通知渠道：inbox=站内信，mini_program=小程序订阅消息
   */
  channel?: string
  /**
   * 投递状态：pending=待发送，delivering=发送中，delivered=已送达，failed=失败
   */
  status?: string
}

/**
 * 接口 查询推送记录 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/pushRecords`
 */
export interface GetApiNotificationV1PushRecordsResponse {
  /**
   * 推送记录列表
   */
  items?: {
    /**
     * 通知事件ID
     */
    id?: string
    /**
     * 通知场景编码
     */
    sceneCode?: string
    /**
     * 通知场景名称，前端用于展示
     */
    sceneName?: string
    /**
     * 业务类型
     */
    bizType?: string
    /**
     * 业务ID
     */
    bizId?: string
    /**
     * 事件状态
     */
    status?: string
    /**
     * 创建时间
     */
    createdAt?: string
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 渠道投递汇总
     */
    channels?: {
      /**
       * 通知端：admin=后台，app=C端
       */
      side?: string
      /**
       * 通知渠道
       */
      channel?: string
      /**
       * 接收人总数
       */
      totalCount?: number
      /**
       * 送达数量
       */
      deliveredCount?: number
      /**
       * 失败数量
       */
      failedCount?: number
      /**
       * 已读数量
       */
      readCount?: number
      /**
       * 未读数量
       */
      unreadCount?: number
      /**
       * 该渠道是否支持已读
       */
      supportsRead?: boolean
      /**
       * 接收人投递明细
       */
      receivers?: {
        /**
         * 通知投递记录ID
         */
        id?: string
        /**
         * 通知端：admin=后台，app=C端
         */
        side?: string
        /**
         * 通知渠道
         */
        channel?: string
        /**
         * 接收人类型：account=后台账号，member=会员
         */
        receiverType?: string
        /**
         * 后台接收账号ID
         */
        receiverAccountId?: string
        /**
         * 会员接收人ID
         */
        receiverMemberId?: string
        /**
         * 通知内容
         */
        content?: string
        /**
         * 投递状态
         */
        status?: string
        /**
         * 重试次数
         */
        retryCount?: number
        /**
         * 第三方响应 JSON
         */
        responseJson?: string
        /**
         * 创建时间
         */
        createdAt?: string
        /**
         * MemberDisplayInfo 会员通用展示信息。
         */
        receiverMember?: {
          /**
           * 会员ID
           */
          id?: string
          /**
           * 会员展示名称
           */
          name?: string
          /**
           * 会员头像URL
           */
          avatarUrl?: string
          /**
           * 会员手机号
           */
          phone?: string
        }
        /**
         * 已读时间，仅支持已读的渠道有业务意义
         */
        readAt?: string
        /**
         * 该渠道是否支持已读状态
         */
        supportsRead?: boolean
      }[]
    }[]
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 查询推送记录 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/pushRecords`
 */
type GetApiNotificationV1PushRecordsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/notification/v1/pushRecords',
    undefined,
    string,
    'pageRequest.page' | 'pageRequest.pageSize' | 'side' | 'channel' | 'status',
    false
  >
>

/**
 * 接口 查询推送记录 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/pushRecords`
 */
const getApiNotificationV1PushRecordsRequestConfig: GetApiNotificationV1PushRecordsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl,
  devUrl: devUrl,
  prodUrl: prodUrl,
  path: '/api/notification/v1/pushRecords',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey,
  paramNames: [],
  queryNames: ['pageRequest.page', 'pageRequest.pageSize', 'side', 'channel', 'status'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiNotificationV1PushRecords',
  queryStringArrayFormat: QueryStringArrayFormat.repeat,
  extraInfo: {},
}

/**
 * 接口 查询推送记录 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/pushRecords`
 */
export const getApiNotificationV1PushRecords = /*#__PURE__*/ (
  requestData: GetApiNotificationV1PushRecordsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiNotificationV1PushRecordsResponse>(
    prepare(getApiNotificationV1PushRecordsRequestConfig, requestData),
    ...args,
  )
}

getApiNotificationV1PushRecords.requestConfig = getApiNotificationV1PushRecordsRequestConfig

/**
 * 接口 分页查询场景商户配置 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigMerchants`
 */
export interface GetApiNotificationV1SceneConfigMerchantsRequest {
  /**
   * 通知场景编码
   */
  sceneCode?: string
  /**
   * 页码
   */
  'pageRequest.page'?: number
  /**
   * 每页数量
   */
  'pageRequest.pageSize'?: number
}

/**
 * 接口 分页查询场景商户配置 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigMerchants`
 */
export interface GetApiNotificationV1SceneConfigMerchantsResponse {
  /**
   * 已配置商户详情列表
   */
  items?: {
    /**
     * 商户ID
     */
    merchantId?: string
    /**
     * MerchantDisplayInfo 商户通用展示信息。
     */
    merchant?: {
      /**
       * 商户ID
       */
      id?: string
      /**
       * 商户名称
       */
      name?: string
      /**
       * 商户logo URL
       */
      logo?: string
    }
    /**
     * 通知场景配置展示项。
     */
    preference?: {
      /**
       * 配置ID
       */
      id?: string
      /**
       * 通知场景编码
       */
      sceneCode?: string
      /**
       * 是否启用
       */
      enabled?: boolean
      /**
       * 渠道配置列表
       */
      channels?: {
        /**
         * 通知端：admin=后台，app=C端
         */
        side?: string
        /**
         * 通知渠道
         */
        channel?: string
        /**
         * 是否启用该渠道
         */
        enabled?: boolean
        /**
         * 第三方模板ID
         */
        providerTemplateId?: string
        /**
         * 内容模板
         */
        contentTemplate?: string
        /**
         * 变量 schema JSON 字符串
         */
        variableSchemaJson?: string
        /**
         * 小程序页面路径
         */
        miniProgramPagePath?: string
        /**
         * 后台接收角色ID列表
         */
        receiverRoleIds?: string[]
        /**
         * 后台接收账号ID列表
         */
        receiverAccountIds?: string[]
        /**
         * 后台接收角色展示信息列表
         */
        receiverRoles?: {
          /**
           * 角色ID
           */
          id?: string
          /**
           * 角色名称
           */
          name?: string
          /**
           * 角色编码
           */
          code?: string
          /**
           * 是否内置角色
           */
          isBuiltin?: boolean
        }[]
        /**
         * 后台接收账号展示信息列表
         */
        receiverAccounts?: {
          /**
           * 账号ID
           */
          id?: string
          /**
           * 账号展示名称
           */
          name?: string
          /**
           * 账号头像URL
           */
          avatarUrl?: string
          /**
           * 账号状态：1=启用，2=禁用
           */
          status?: number
          /**
           * 账号手机号
           */
          phone?: string
        }[]
      }[]
      /**
       * 通知场景名称，前端用于展示
       */
      sceneName?: string
    }
  }[]
  /**
   * PageReply 分页响应数据。
   */
  pageReply?: {
    /**
     * 总数
     */
    total?: number
    /**
     * 当前页码
     */
    page?: number
    /**
     * 每页数量
     */
    pageSize?: number
  }
}

/**
 * 接口 分页查询场景商户配置 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigMerchants`
 */
type GetApiNotificationV1SceneConfigMerchantsRequestConfig = Readonly<
  RequestConfig<
    '',
    '',
    '',
    '/api/notification/v1/sceneConfigMerchants',
    undefined,
    string,
    'sceneCode' | 'pageRequest.page' | 'pageRequest.pageSize',
    false
  >
>

/**
 * 接口 分页查询场景商户配置 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigMerchants`
 */
const getApiNotificationV1SceneConfigMerchantsRequestConfig: GetApiNotificationV1SceneConfigMerchantsRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/notification/v1/sceneConfigMerchants',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: ['sceneCode', 'pageRequest.page', 'pageRequest.pageSize'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiNotificationV1SceneConfigMerchants',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 分页查询场景商户配置 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigMerchants`
 */
export const getApiNotificationV1SceneConfigMerchants = /*#__PURE__*/ (
  requestData: GetApiNotificationV1SceneConfigMerchantsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiNotificationV1SceneConfigMerchantsResponse>(
    prepare(getApiNotificationV1SceneConfigMerchantsRequestConfig, requestData),
    ...args,
  )
}

getApiNotificationV1SceneConfigMerchants.requestConfig = getApiNotificationV1SceneConfigMerchantsRequestConfig

/**
 * 接口 查询通知场景配置概览 的 **请求类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigOverview`
 */
export interface GetApiNotificationV1SceneConfigOverviewRequest {}

/**
 * 接口 查询通知场景配置概览 的 **返回类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigOverview`
 */
export interface GetApiNotificationV1SceneConfigOverviewResponse {
  /**
   * 通知场景配置概览列表
   */
  items?: {
    /**
     * 通知场景编码
     */
    sceneCode?: string
    /**
     * 通知场景名称
     */
    sceneName?: string
    /**
     * 通知场景说明
     */
    description?: string
    /**
     * 已配置该场景的商户数量
     */
    configuredMerchantCount?: string
  }[]
}

/**
 * 接口 查询通知场景配置概览 的 **请求配置的类型**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigOverview`
 */
type GetApiNotificationV1SceneConfigOverviewRequestConfig = Readonly<
  RequestConfig<'', '', '', '/api/notification/v1/sceneConfigOverview', undefined, string, string, true>
>

/**
 * 接口 查询通知场景配置概览 的 **请求配置**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigOverview`
 */
const getApiNotificationV1SceneConfigOverviewRequestConfig: GetApiNotificationV1SceneConfigOverviewRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl,
    devUrl: devUrl,
    prodUrl: prodUrl,
    path: '/api/notification/v1/sceneConfigOverview',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getApiNotificationV1SceneConfigOverview',
    queryStringArrayFormat: QueryStringArrayFormat.repeat,
    extraInfo: {},
  }

/**
 * 接口 查询通知场景配置概览 的 **请求函数**
 *
 * @分类 NotificationService
 * @请求头 `GET /api/notification/v1/sceneConfigOverview`
 */
export const getApiNotificationV1SceneConfigOverview = /*#__PURE__*/ (
  requestData?: GetApiNotificationV1SceneConfigOverviewRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiNotificationV1SceneConfigOverviewResponse>(
    prepare(getApiNotificationV1SceneConfigOverviewRequestConfig, requestData),
    ...args,
  )
}

getApiNotificationV1SceneConfigOverview.requestConfig = getApiNotificationV1SceneConfigOverviewRequestConfig

/* prettier-ignore-end */
