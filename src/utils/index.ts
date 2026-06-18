export const Global =
	window ||
	globalThis ||
	(function () {
		// @ts-ignore
		return this
	})()

export const getGlobalThis = (): any => Global
/**
 * 规范url，去除多余的/
 * @param url {string} url
 * @returns {string} 规范后的url
 */
export const normaliseHttpUrl = (url = "") => {
	return url.replace(/[\/]+[\/]/g, "/").replace(":/", "://")
}

/**
 * 标准化 url。仅当路径以 `merchant` 或 `/merchant` 开头时补上 `/oss` 前缀。
 * @param url 路径
 * @returns {string} 规范后的 url
 */
export const normalizeUrl = (url = "", addOrigin = false) => {
	const value = String(url ?? "").trim()
	if (/^\/?merchant(\/|$)/.test(value)) {
		return normaliseHttpUrl(
			`${addOrigin ? getGlobalThis().origin : ""}/oss/${value}`,
		)
	}
	return normaliseHttpUrl(value)
}

export const getDefaultAvatarText = (
	name?: string | number | null,
	fallback = "会",
) => {
	const text = String(name ?? "").trim()
	return Array.from(text)[0] || fallback
}

const MONEY_YUAN_REGEX = /^-?\d+(\.\d{1,2})?$/

/**
 * 前端按元录入，提交接口前转成分字符串。
 * 返回 null 表示输入格式不合法。
 */
export const yuanToFen = (
	value?: string | number | null,
): string | null => {
	const text = String(value ?? "").trim()
	if (!text || !MONEY_YUAN_REGEX.test(text)) return null

	const negative = text.startsWith("-")
	const normalized = negative ? text.slice(1) : text
	const [integerPart, decimalPart = ""] = normalized.split(".")
	const fenValue =
		`${integerPart}${(decimalPart + "00").slice(0, 2)}`.replace(
			/^0+(?=\d)/,
			"",
		) || "0"

	if (!negative || fenValue === "0") return fenValue
	return `-${fenValue}`
}

/**
 * 接口返回分时，前端展示为元字符串。
 */
export const fenToYuan = (value?: string | number | null): string => {
	const text = String(value ?? "").trim()
	if (!text) return "0.00"

	const negative = text.startsWith("-")
	const digits = text.replace(/^-/, "").replace(/\D/g, "")
	if (!digits) return "0.00"

	const normalized = digits.padStart(3, "0")
	const integerPart =
		normalized.slice(0, -2).replace(/^0+(?=\d)/, "") || "0"
	const decimalPart = normalized.slice(-2)

	return `${negative ? "-" : ""}${integerPart}.${decimalPart}`
}

/** 中国大陆 11 位手机号（1 开头，第二位 3–9） */
export const CN_MOBILE_PHONE_REGEX = /^1[3-9]\d{9}$/

export function isValidCnMobilePhone(phone: string): boolean {
	return CN_MOBILE_PHONE_REGEX.test(String(phone).trim())
}
