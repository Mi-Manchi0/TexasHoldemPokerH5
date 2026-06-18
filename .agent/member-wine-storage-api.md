# 会员存取酒接口文档

本文档基于当前前端源码与生成的 API 类型整理。会员存酒、取酒业务不是直接调用 `MemberService` 写入存酒记录，而是通过工单体系提交申请；审核通过后由后端根据工单类型与载荷生成/更新存酒记录和流水。

## 1. 结论

| 场景 | 接口 | 方法 | 关键参数 |
| --- | --- | --- | --- |
| 创建存酒申请 | `/api/ticket/v1/tickets` | `POST` | `type=member_wine_deposit`，业务明细放在 `payload`/`entityJson` |
| 创建取酒申请 | `/api/ticket/v1/tickets` | `POST` | `type=member_wine_withdraw`，业务明细放在 `payload`/`entityJson` |
| 审核通过 | `/api/ticket/v1/tickets/approve_put` | `POST` | `id`，`reviewRemark` |
| 审核驳回 | `/api/ticket/v1/tickets/reject_put` | `POST` | `id`，`reviewRemark` |
| 批量完成/通过工单 | `/api/ticket/v1/tickets/batchComplete_put` | `POST` | `ids`，`reviewRemark` |
| 查询工单列表 | `/api/ticket/v1/tickets` | `GET` | `merchantId`，`storeId`，`type`，`status`，分页 |
| 查询工单详情 | `/api/ticket/v1/tickets/{id}` | `GET` | `id` |
| 查询会员存酒记录 | `/api/member/v1/storedWines` | `GET` | `merchantId`，`memberId`，`storeId`，`storageStoreId`，`dishId`，`status`，分页 |
| 查询会员存酒流水 | `/api/member/v1/storageFlows` | `GET` | `merchantId`，`memberId`，`storeId`，`dishId`，`type`，`status`，分页 |
| 打印取酒小票 | `/api/ticket/v1/tickets/print` | `POST` | `id`，`receiptTypes=["wine_withdraw_ticket"]` |

源码位置：

- 存酒提交：`src/views/dashboard/components/WineStorageModal.vue`
- 工单审核、批量完成、取酒小票打印：`src/views/ticket/index.vue`、`src/views/dashboard/components/TicketListModal.vue`
- 存酒记录/流水查询类型：`src/services/basis/basis.ts`

## 2. 创建存酒申请

### 接口

```http
POST /api/ticket/v1/tickets
Content-Type: application/json
```

### 顶层请求体

```json
{
  "type": "member_wine_deposit",
  "merchantId": "merchant_001",
  "storeId": "store_001",
  "applicantId": "member_001",
  "targetId": "member_001",
  "targetType": "member",
  "payload": "{\"memberId\":\"member_001\",\"memberName\":\"张三\",\"memberPhone\":\"13800000000\",\"storeId\":\"store_001\",\"storeName\":\"门店A\",\"dishId\":\"dish_001\",\"dishName\":\"威士忌\",\"dishUnit\":\"瓶\",\"quantity\":1,\"remark\":\"寄存一瓶\",\"member\":{\"id\":\"member_001\",\"name\":\"张三\",\"phone\":\"13800000000\",\"avatarUrl\":\"\"},\"store\":{\"id\":\"store_001\",\"name\":\"门店A\"},\"dish\":{\"id\":\"dish_001\",\"name\":\"威士忌\",\"unit\":\"瓶\"}}",
  "entityJson": "{\"memberId\":\"member_001\",\"memberName\":\"张三\",\"memberPhone\":\"13800000000\",\"storeId\":\"store_001\",\"storeName\":\"门店A\",\"dishId\":\"dish_001\",\"dishName\":\"威士忌\",\"dishUnit\":\"瓶\",\"quantity\":1,\"remark\":\"寄存一瓶\",\"member\":{\"id\":\"member_001\",\"name\":\"张三\",\"phone\":\"13800000000\",\"avatarUrl\":\"\"},\"store\":{\"id\":\"store_001\",\"name\":\"门店A\"},\"dish\":{\"id\":\"dish_001\",\"name\":\"威士忌\",\"unit\":\"瓶\"}}"
}
```

### `payload` / `entityJson` 业务 JSON

`payload` 和 `entityJson` 都是 JSON 字符串。当前存酒弹窗两者传相同内容。

```json
{
  "memberId": "member_001",
  "memberName": "张三",
  "memberPhone": "13800000000",
  "storeId": "store_001",
  "storeName": "门店A",
  "dishId": "dish_001",
  "dishName": "威士忌",
  "dishUnit": "瓶",
  "quantity": 1,
  "remark": "寄存一瓶",
  "member": {
    "id": "member_001",
    "name": "张三",
    "phone": "13800000000",
    "avatarUrl": ""
  },
  "store": {
    "id": "store_001",
    "name": "门店A"
  },
  "dish": {
    "id": "dish_001",
    "name": "威士忌",
    "unit": "瓶"
  }
}
```

字段说明：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `type` | string | 是 | 固定 `member_wine_deposit` |
| `merchantId` | string | 是 | 商户 ID |
| `storeId` | string | 是 | 存酒门店 ID |
| `applicantId` | string | 是 | 申请人 ID，当前传会员 ID |
| `targetId` | string | 建议传 | 关联目标 ID，当前传会员 ID |
| `targetType` | string | 建议传 | 关联目标类型，当前传 `member` |
| `payload` | string | 是 | 工单创建载荷 JSON 字符串 |
| `entityJson` | string | 建议传 | 业务实体快照 JSON 字符串；当前前端传入，用于详情展示 |
| `payload.memberId` | string | 是 | 会员 ID |
| `payload.memberName` | string | 建议传 | 会员展示名 |
| `payload.memberPhone` | string | 建议传 | 会员手机号 |
| `payload.storeId` | string | 是 | 存酒门店 ID |
| `payload.storeName` | string | 建议传 | 存酒门店名称 |
| `payload.dishId` | string | 是 | 菜品/酒品 ID |
| `payload.dishName` | string | 建议传 | 菜品/酒品名称 |
| `payload.dishUnit` | string | 建议传 | 单位，例如 `瓶`、`份` |
| `payload.quantity` | number | 是 | 存酒数量，必须为正整数 |
| `payload.remark` | string | 否 | 备注 |
| `payload.member` | object | 建议传 | 会员展示快照 |
| `payload.store` | object | 建议传 | 门店展示快照 |
| `payload.dish` | object | 建议传 | 菜品展示快照 |

## 3. 创建取酒申请

### 接口

```http
POST /api/ticket/v1/tickets
Content-Type: application/json
```

### 顶层请求体

```json
{
  "type": "member_wine_withdraw",
  "merchantId": "merchant_001",
  "storeId": "store_001",
  "applicantId": "member_001",
  "targetId": "member_001",
  "targetType": "member",
  "payload": "{\"memberId\":\"member_001\",\"memberName\":\"张三\",\"memberPhone\":\"13800000000\",\"storeId\":\"store_001\",\"storeName\":\"门店A\",\"storageStoreId\":\"store_001\",\"storageStoreName\":\"门店A\",\"storageRecordId\":\"storage_001\",\"dishId\":\"dish_001\",\"dishName\":\"威士忌\",\"dishUnit\":\"瓶\",\"quantity\":1,\"withdrawQuantity\":1,\"remainingQuantity\":2,\"remark\":\"取走一瓶\",\"member\":{\"id\":\"member_001\",\"name\":\"张三\",\"phone\":\"13800000000\",\"avatarUrl\":\"\"},\"store\":{\"id\":\"store_001\",\"name\":\"门店A\"},\"storageStore\":{\"id\":\"store_001\",\"name\":\"门店A\"},\"dish\":{\"id\":\"dish_001\",\"name\":\"威士忌\",\"unit\":\"瓶\"}}",
  "entityJson": "{\"memberId\":\"member_001\",\"memberName\":\"张三\",\"memberPhone\":\"13800000000\",\"storeId\":\"store_001\",\"storeName\":\"门店A\",\"storageStoreId\":\"store_001\",\"storageStoreName\":\"门店A\",\"storageRecordId\":\"storage_001\",\"dishId\":\"dish_001\",\"dishName\":\"威士忌\",\"dishUnit\":\"瓶\",\"quantity\":1,\"withdrawQuantity\":1,\"remainingQuantity\":2,\"remark\":\"取走一瓶\",\"member\":{\"id\":\"member_001\",\"name\":\"张三\",\"phone\":\"13800000000\",\"avatarUrl\":\"\"},\"store\":{\"id\":\"store_001\",\"name\":\"门店A\"},\"storageStore\":{\"id\":\"store_001\",\"name\":\"门店A\"},\"dish\":{\"id\":\"dish_001\",\"name\":\"威士忌\",\"unit\":\"瓶\"}}"
}
```

### `payload` / `entityJson` 业务 JSON

```json
{
  "memberId": "member_001",
  "memberName": "张三",
  "memberPhone": "13800000000",
  "storeId": "store_001",
  "storeName": "门店A",
  "storageStoreId": "store_001",
  "storageStoreName": "门店A",
  "storageRecordId": "storage_001",
  "dishId": "dish_001",
  "dishName": "威士忌",
  "dishUnit": "瓶",
  "quantity": 1,
  "withdrawQuantity": 1,
  "remainingQuantity": 2,
  "remark": "取走一瓶",
  "member": {
    "id": "member_001",
    "name": "张三",
    "phone": "13800000000",
    "avatarUrl": ""
  },
  "store": {
    "id": "store_001",
    "name": "门店A"
  },
  "storageStore": {
    "id": "store_001",
    "name": "门店A"
  },
  "dish": {
    "id": "dish_001",
    "name": "威士忌",
    "unit": "瓶"
  }
}
```

字段说明：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `type` | string | 是 | 固定 `member_wine_withdraw` |
| `merchantId` | string | 是 | 商户 ID |
| `storeId` | string | 是 | 业务发生门店 ID，即本次取酒门店 |
| `applicantId` | string | 是 | 申请人 ID，当前体系通常传会员 ID |
| `targetId` | string | 建议传 | 关联目标 ID，当前传会员 ID |
| `targetType` | string | 建议传 | 关联目标类型，当前传 `member` |
| `payload.memberId` | string | 是 | 会员 ID |
| `payload.storageRecordId` | string | 是 | 要取酒的存酒记录 ID |
| `payload.storageStoreId` | string | 建议传 | 原存酒门店 ID |
| `payload.storageStoreName` | string | 建议传 | 原存酒门店名称 |
| `payload.dishId` | string | 是 | 菜品/酒品 ID |
| `payload.dishName` | string | 建议传 | 菜品/酒品名称 |
| `payload.dishUnit` | string | 建议传 | 单位 |
| `payload.quantity` | number | 是 | 本次取酒数量 |
| `payload.withdrawQuantity` | number | 建议传 | 本次取酒数量；工单详情兼容读取该字段 |
| `payload.remainingQuantity` | number | 建议传 | 取酒前或取酒后剩余数量，用于详情展示；最终剩余以审核后后端流水为准 |
| `payload.remark` | string | 否 | 备注 |
| `payload.member` / `payload.store` / `payload.storageStore` / `payload.dish` | object | 建议传 | 展示快照 |

注意：当前源码中已支持 `member_wine_withdraw` 的工单列表、详情、审核和小票打印，但未找到直接创建 `member_wine_withdraw` 的前端提交入口。若要新增取酒按钮，按本节格式调用同一个创建工单接口即可。

## 4. 审核通过/驳回

### 审核通过

```http
POST /api/ticket/v1/tickets/approve_put
Content-Type: application/json
```

```json
{
  "id": "ticket_001",
  "reviewRemark": "核对无误"
}
```

### 审核驳回

```http
POST /api/ticket/v1/tickets/reject_put
Content-Type: application/json
```

```json
{
  "id": "ticket_001",
  "reviewRemark": "数量不符"
}
```

字段说明：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 工单 ID |
| `reviewRemark` | string | 驳回时必填 | 审核备注；驳回时前端要求填写 |

## 5. 批量完成/通过工单

```http
POST /api/ticket/v1/tickets/batchComplete_put
Content-Type: application/json
```

```json
{
  "ids": ["ticket_001", "ticket_002"],
  "reviewRemark": "批量完成"
}
```

返回字段：

```json
{
  "successCount": 2,
  "completedIds": ["ticket_001", "ticket_002"]
}
```

## 6. 查询工单

### 查询列表

```http
GET /api/ticket/v1/tickets?pageRequest.page=1&pageRequest.pageSize=10&merchantId=merchant_001&storeId=store_001&type=member_wine_deposit&status=pending
```

查询参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageRequest.page` | number | 否 | 页码 |
| `pageRequest.pageSize` | number | 否 | 每页数量 |
| `merchantId` | string | 否 | 商户 ID |
| `storeId` | string | 否 | 门店 ID |
| `type` | string | 否 | `member_wine_deposit` 或 `member_wine_withdraw` |
| `status` | string | 否 | `pending`、`approved`、`rejected`、`cancelled` |

### 查询详情

```http
GET /api/ticket/v1/tickets/{id}
```

## 7. 查询存酒记录

```http
GET /api/member/v1/storedWines?pageRequest.page=1&pageRequest.pageSize=10&merchantId=merchant_001&memberId=member_001&status=active
```

查询参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageRequest.page` | number | 否 | 页码 |
| `pageRequest.pageSize` | number | 否 | 每页数量 |
| `merchantId` | string | 否 | 商户 ID |
| `storeId` | string | 否 | 当前门店 ID |
| `storageStoreId` | string | 否 | 原存酒门店 ID |
| `memberId` | string | 否 | 会员 ID |
| `dishId` | string | 否 | 菜品/酒品 ID |
| `status` | string | 否 | `active` 可取、`finished` 已取完、`expired` 已过期、`cancelled` 已取消、`pending` 待审核、`approved` 已通过、`rejected` 已驳回、`completed` 已完成 |

主要返回字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `wines[].id` | string | 存酒记录 ID |
| `wines[].merchantId` | string | 商户 ID |
| `wines[].storeId` | string | 原存酒门店 ID |
| `wines[].storeName` | string | 原存酒门店名称 |
| `wines[].memberId` | string | 会员 ID |
| `wines[].memberName` | string | 会员名称 |
| `wines[].dishId` | string | 菜品/酒品 ID |
| `wines[].dishName` | string | 菜品/酒品名称 |
| `wines[].totalQuantity` | number | 存入总数量 |
| `wines[].remainingQuantity` | number | 剩余可取数量 |
| `wines[].expireAt` | string | 过期时间，空表示不过期 |
| `wines[].status` | string | 存酒记录状态 |
| `pageReply` | object | 分页信息 |

## 8. 查询存酒流水

```http
GET /api/member/v1/storageFlows?pageRequest.page=1&pageRequest.pageSize=10&merchantId=merchant_001&memberId=member_001&type=withdraw
```

查询参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pageRequest.page` | number | 否 | 页码 |
| `pageRequest.pageSize` | number | 否 | 每页数量 |
| `merchantId` | string | 否 | 商户 ID |
| `storeId` | string | 否 | 业务发生门店 ID |
| `memberId` | string | 否 | 会员 ID |
| `dishId` | string | 否 | 菜品/酒品 ID |
| `type` | string | 否 | `deposit` 存酒申请、`withdraw` 取酒 |
| `status` | string | 否 | `active`、`finished`、`expired`、`cancelled`、`pending`、`approved`、`rejected`、`completed` |

主要返回字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `flows[].id` | string | 流水 ID |
| `flows[].merchantId` | string | 商户 ID |
| `flows[].storeId` | string | 业务发生门店 ID |
| `flows[].storeName` | string | 业务发生门店名称 |
| `flows[].storageStoreId` | string | 原存酒门店 ID |
| `flows[].storageStoreName` | string | 原存酒门店名称 |
| `flows[].memberId` | string | 会员 ID |
| `flows[].memberName` | string | 会员名称 |
| `flows[].dishId` | string | 菜品/酒品 ID |
| `flows[].dishName` | string | 菜品/酒品名称 |
| `flows[].storageRecordId` | string | 存酒记录 ID |
| `flows[].ticketId` | string | 关联工单 ID |
| `flows[].type` | string | `deposit` 或 `withdraw` |
| `flows[].quantity` | number | 本次变动数量 |
| `flows[].status` | string | 流水状态 |
| `flows[].balanceAfter` | number | 操作后剩余数量 |
| `flows[].remark` | string | 备注 |
| `flows[].reviewerId` | string | 审核人 ID |
| `flows[].reviewRemark` | string | 审核备注 |
| `flows[].reviewedAt` | string | 审核时间 |
| `flows[].createdAt` | string | 创建时间 |
| `pageReply` | object | 分页信息 |

## 9. 打印取酒小票

```http
POST /api/ticket/v1/tickets/print
Content-Type: application/json
```

```json
{
  "id": "ticket_001",
  "receiptTypes": ["wine_withdraw_ticket"]
}
```

字段说明：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 工单 ID |
| `receiptTypes` | string[] | 否 | 不传则打印该工单可配置的小票类型；取酒小票传 `wine_withdraw_ticket` |

## 10. 状态与类型枚举

工单类型：

| 值 | 说明 |
| --- | --- |
| `member_wine_deposit` | 会员存酒申请 |
| `member_wine_withdraw` | 会员取酒申请 |

流水类型：

| 值 | 说明 |
| --- | --- |
| `deposit` | 存酒申请 |
| `withdraw` | 取酒 |

工单状态：

| 值 | 说明 |
| --- | --- |
| `pending` | 待审核 |
| `approved` | 已通过 |
| `rejected` | 已驳回 |
| `cancelled` | 已取消 |

存酒记录/流水状态：

| 值 | 说明 |
| --- | --- |
| `active` | 可取 |
| `finished` | 已取完 |
| `expired` | 已过期 |
| `cancelled` | 已取消 |
| `pending` | 待审核 |
| `approved` | 已通过 |
| `rejected` | 已驳回 |
| `completed` | 已完成 |

## 11. 当前源码确认点

1. `WineStorageModal.vue` 已实现存酒申请创建：构造业务 `entity`，以 `member_wine_deposit` 调用 `POST /api/ticket/v1/tickets`，同时传 `payload` 和 `entityJson`。
2. 工单列表、首页活动、会员详情已支持展示 `member_wine_deposit` 与 `member_wine_withdraw`。
3. 工单审核统一使用 `approve_put` / `reject_put`。
4. 会员详情中的存酒流水使用 `GET /api/member/v1/storageFlows` 查询。
5. 当前前端源码未发现创建 `member_wine_withdraw` 的直接提交入口，但生成的 API 类型、工单列表、详情解析、审核与取酒小票打印都已支持该类型。

