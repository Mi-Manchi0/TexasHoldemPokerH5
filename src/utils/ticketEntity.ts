export type TicketEntityRecord = Record<string, unknown>

export interface PointsTicketExchangeSegment {
  depositExchangePoints: number | null
  depositPoints: number | null
  depositRemainderPoints: number | null
  drawChanceCount: number | null
  drawExchangePoints: number | null
  drawRemainderPoints: number | null
  drawSourcePoints: number | null
  maxPoints: number | null
  minPoints: number | null
  sourcePoints: number | null
}

export interface PointsTicketEntity {
  businessDate: string
  cancelledAt: string
  createdAt: string
  depositPoints: number | null
  drawChanceCount: number | null
  drawSourcePoints: number | null
  exchangeSegments: PointsTicketExchangeSegment[]
  id: string
  memberId: string
  merchantId: string
  originalPoints: number | null
  points: number | null
  reviewRemark: string
  reviewedAt: string
  reviewerId: string
  status: string
  storeId: string
  unconvertedPoints: number | null
  undepositedPoints: number | null
  updatedAt: string
}

export type PointsWithdrawExchangeSegment = PointsTicketExchangeSegment
export type PointsWithdrawTicketEntity = PointsTicketEntity

export interface WineStorageTicketEntity {
  balanceAfter: number | null
  createdAt: string
  dishId: string
  dishImageUrl: string
  dishName: string
  id: string
  memberId: string
  memberName: string
  merchantId: string
  quantity: number | null
  remark: string
  reviewRemark: string
  reviewedAt: string
  reviewerId: string
  status: string
  storageRecordId: string
  storageStoreId: string
  storageStoreName: string
  storeId: string
  storeName: string
  ticketId: string
  type: string
}

const normalizeEntityText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

const isEntityRecord = (value: unknown): value is TicketEntityRecord =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const parseJsonEntityRecord = (value: unknown) => {
  if (isEntityRecord(value)) return value

  const text = normalizeEntityText(value)
  if (!text) return null

  try {
    const parsed = JSON.parse(text) as unknown

    return isEntityRecord(parsed) ? parsed : null
  } catch {
    return null
  }
}

const pickEntityText = (record: TicketEntityRecord | null, keys: string[]) => {
  if (!record) return ''

  for (const key of keys) {
    const text = normalizeEntityText(record[key])

    if (text) return text
  }

  return ''
}

const pickEntityNumber = (record: TicketEntityRecord | null, keys: string[]) => {
  const text = pickEntityText(record, keys)
  if (!text) return null

  const numberValue = Number(text.replace(/,/g, ''))

  return Number.isFinite(numberValue) ? numberValue : null
}

const parseExchangeSegmentList = (value: unknown) => {
  if (Array.isArray(value)) return value

  const text = normalizeEntityText(value)
  if (!text) return []

  try {
    const parsed = JSON.parse(text) as unknown

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const parsePointsTicketExchangeSegments = (
  value: unknown,
): PointsTicketExchangeSegment[] =>
  parseExchangeSegmentList(value)
    .filter(isEntityRecord)
    .map((segment) => ({
      depositExchangePoints: pickEntityNumber(segment, ['depositExchangePoints', 'deposit_exchange_points']),
      depositPoints: pickEntityNumber(segment, ['depositPoints', 'deposit_points']),
      depositRemainderPoints: pickEntityNumber(segment, ['depositRemainderPoints', 'deposit_remainder_points']),
      drawChanceCount: pickEntityNumber(segment, ['drawChanceCount', 'draw_chance_count']),
      drawExchangePoints: pickEntityNumber(segment, ['drawExchangePoints', 'draw_exchange_points']),
      drawRemainderPoints: pickEntityNumber(segment, ['drawRemainderPoints', 'draw_remainder_points']),
      drawSourcePoints: pickEntityNumber(segment, ['drawSourcePoints', 'draw_source_points']),
      maxPoints: pickEntityNumber(segment, ['maxPoints', 'max_points']),
      minPoints: pickEntityNumber(segment, ['minPoints', 'min_points']),
      sourcePoints: pickEntityNumber(segment, ['sourcePoints', 'source_points']),
    }))

export const parsePointsTicketEntity = (
  entityJson: string | TicketEntityRecord | null | undefined,
): PointsTicketEntity | null => {
  const entity = parseJsonEntityRecord(entityJson)
  if (!entity) return null

  return {
    businessDate: pickEntityText(entity, ['businessDate', 'business_date']),
    cancelledAt: pickEntityText(entity, ['cancelledAt', 'cancelled_at']),
    createdAt: pickEntityText(entity, ['createdAt', 'created_at']),
    depositPoints: pickEntityNumber(entity, ['depositPoints', 'deposit_points']),
    drawChanceCount: pickEntityNumber(entity, ['drawChanceCount', 'draw_chance_count']),
    drawSourcePoints: pickEntityNumber(entity, ['drawSourcePoints', 'draw_source_points']),
    exchangeSegments: parsePointsTicketExchangeSegments(
      entity.exchangeSegmentJSON ?? entity.exchangeSegmentJson ?? entity.exchangeSegments,
    ),
    id: pickEntityText(entity, ['id']),
    memberId: pickEntityText(entity, ['memberId', 'member_id']),
    merchantId: pickEntityText(entity, ['merchantId', 'merchant_id']),
    originalPoints: pickEntityNumber(entity, ['originalPoints', 'original_points']),
    points: pickEntityNumber(entity, ['points']),
    reviewRemark: pickEntityText(entity, ['reviewRemark', 'review_remark']),
    reviewedAt: pickEntityText(entity, ['reviewedAt', 'reviewed_at']),
    reviewerId: pickEntityText(entity, ['reviewerId', 'reviewer_id']),
    status: pickEntityText(entity, ['status']),
    storeId: pickEntityText(entity, ['storeId', 'store_id']),
    unconvertedPoints: pickEntityNumber(entity, ['unconvertedPoints', 'unconverted_points']),
    undepositedPoints: pickEntityNumber(entity, ['undepositedPoints', 'undeposited_points']),
    updatedAt: pickEntityText(entity, ['updatedAt', 'updated_at']),
  }
}

export const parsePointsWithdrawTicketEntity = parsePointsTicketEntity

export const parseWineStorageTicketEntity = (
  entityJson: string | TicketEntityRecord | null | undefined,
): WineStorageTicketEntity | null => {
  const entity = parseJsonEntityRecord(entityJson)
  if (!entity) return null

  return {
    balanceAfter: pickEntityNumber(entity, ['balanceAfter', 'balance_after']),
    createdAt: pickEntityText(entity, ['createdAt', 'created_at']),
    dishId: pickEntityText(entity, ['dishId', 'dish_id']),
    dishImageUrl: pickEntityText(entity, ['dishImageUrl', 'dish_image_url']),
    dishName: pickEntityText(entity, ['dishName', 'dish_name']),
    id: pickEntityText(entity, ['id']),
    memberId: pickEntityText(entity, ['memberId', 'member_id']),
    memberName: pickEntityText(entity, ['memberName', 'member_name']),
    merchantId: pickEntityText(entity, ['merchantId', 'merchant_id']),
    quantity: pickEntityNumber(entity, ['quantity']),
    remark: pickEntityText(entity, ['remark']),
    reviewRemark: pickEntityText(entity, ['reviewRemark', 'review_remark']),
    reviewedAt: pickEntityText(entity, ['reviewedAt', 'reviewed_at']),
    reviewerId: pickEntityText(entity, ['reviewerId', 'reviewer_id']),
    status: pickEntityText(entity, ['status']),
    storageRecordId: pickEntityText(entity, ['storageRecordId', 'storage_record_id']),
    storageStoreId: pickEntityText(entity, ['storageStoreId', 'storage_store_id']),
    storageStoreName: pickEntityText(entity, ['storageStoreName', 'storage_store_name']),
    storeId: pickEntityText(entity, ['storeId', 'store_id']),
    storeName: pickEntityText(entity, ['storeName', 'store_name']),
    ticketId: pickEntityText(entity, ['ticketId', 'ticket_id']),
    type: pickEntityText(entity, ['type']),
  }
}
