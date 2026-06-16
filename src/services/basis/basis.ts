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

/* prettier-ignore-end */
