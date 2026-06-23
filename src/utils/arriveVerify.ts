import QrScanner from 'qr-scanner'

export interface ArriveVerifyPayload {
  memberId: string
  merchantId: string
  reservationId: string
  storeId: string
}

export type ArriveVerifyResolveResult =
  | { status: 'empty' }
  | { status: 'invalid'; message: string }
  | { reservationId: string; status: 'valid'; storeId?: string }

interface ArriveVerifyContext {
  canOperateStore: (storeId: string) => boolean
  merchantId: string
}

const normalizeText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

export const parseArriveVerifyPayload = (rawValue: string): ArriveVerifyPayload | null => {
  const text = normalizeText(rawValue)
  if (!text) return null

  const paramsCandidates: URLSearchParams[] = []

  try {
    paramsCandidates.push(new URL(text).searchParams)
  } catch {
    paramsCandidates.push(new URLSearchParams(text.startsWith('?') ? text.slice(1) : text))
  }

  for (const params of paramsCandidates) {
    const reservationId = normalizeText(params.get('r'))
    const merchantId = normalizeText(params.get('m'))
    const storeId = normalizeText(params.get('s'))
    const memberId = normalizeText(params.get('u'))

    if (reservationId && merchantId && storeId && memberId) {
      return {
        memberId,
        merchantId,
        reservationId,
        storeId,
      }
    }
  }

  return null
}

export const extractArriveLegacyVerifyCode = (rawValue: string) => {
  const text = normalizeText(rawValue)
  if (!text) return ''

  try {
    const url = new URL(text)

    for (const key of ['id', 'reservationId', 'code', 'verifyCode', 'arriveCode']) {
      const value = normalizeText(url.searchParams.get(key))
      if (value) return value
    }

    return normalizeText(url.pathname.split('/').filter(Boolean).pop()) || text
  } catch {
    return text.includes('=') ? '' : text
  }
}

export const resolveArriveVerifyFromRaw = (
  rawValue: string,
  context: ArriveVerifyContext,
): ArriveVerifyResolveResult => {
  const text = normalizeText(rawValue)
  if (!text) return { status: 'empty' }

  const payload = parseArriveVerifyPayload(text)
  if (!payload) {
    const legacyCode = extractArriveLegacyVerifyCode(text)

    return legacyCode
      ? { reservationId: legacyCode, status: 'valid' }
      : { message: '二维码格式不正确，请确认预约核验码', status: 'invalid' }
  }

  if (payload.merchantId !== context.merchantId || !context.canOperateStore(payload.storeId)) {
    return {
      message: '该预约商户/门店不在操作权限内',
      status: 'invalid',
    }
  }

  return {
    reservationId: payload.reservationId,
    status: 'valid',
    storeId: payload.storeId,
  }
}

export const decodeQrFromImage = async (file: File) => {
  const result = await QrScanner.scanImage(file, {
    returnDetailedScanResult: true,
  })

  return normalizeText(result.data)
}
