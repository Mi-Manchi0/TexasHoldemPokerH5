## 1. 通用约定

- 常规 HTTP 接口仍返回 `{code, message, data}`，业务字段都从 `body.data` 读取。
- 64 位 ID 建议前端按字符串处理，避免 JS number 精度问题。
- Socket.IO 只用于后台站内信实时提醒；C 端小程序通知仍走原有 HTTP 通知列表和微信订阅消息链路。

## 2. 后台站内信 Socket.IO

### 2.1 连接方式

服务端入口固定为：

```text
path: /socket.io/
namespace: /adminNotify
```

前端示例：

```ts
import { io } from 'socket.io-client'

const socket = io('/adminNotify', {
  path: '/socket.io/',
  transports: ['websocket'],
  query: { token },
})
```

当前 Go Socket.IO 服务端使用 `query.token` 绑定后台账号，不需要也不要传 `auth.token`。

如果前端无法通过 `query` 传 token，也可以在建连请求头带：

```http
Authorization: Bearer <token>
```

### 2.2 事件

后端只在后台站内信 `admin/inbox` 投递成功后推送事件：

```ts
socket.on('notification.created', (payload) => {
  // 推荐：更新消息角标，再按需刷新站内信列表
})
```

payload 示例：

```json
{
  "type": "admin.notification.created",
  "eventId": 10001,
  "deliveryId": 20001,
  "merchantId": 1,
  "sceneCode": "reservation_created",
  "bizType": "reservation",
  "bizId": 30001,
  "channel": "inbox",
  "content": "会员张三已预约总店，到店时间：2026-05-17 18:00:00",
  "createdAt": "2026-05-17 10:00:00"
}
```

### 2.3 推荐前端处理

1. 登录成功后建立 Socket.IO 连接，退出登录时主动 `socket.disconnect()`。
2. 收到 `notification.created` 后，先调用 `GET /api/notification/v1/notifications/unread/count` 刷新角标。
3. 如果当前在消息中心页面，再调用 `GET /api/notification/v1/notifications` 刷新列表。
4. Socket.IO 断线重连后不需要补偿历史消息；历史消息以 HTTP 列表为准。