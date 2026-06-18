import {
	defineConfig,
	QueryStringArrayFormat,
	type ChangeCase,
	type ExtendedInterface,
	type ServerConfig,
} from "@f_anaan/ytt"

type YttModuleConfig = {
	entryName: string
	fileName: string
	name: string
	requestFile: string
	services: string[]
}

const defaultSwaggerServer = "http://10.126.126.1:8000"

const swaggerServer =
	process.env.YTT_SWAGGER_SERVER || defaultSwaggerServer
const swaggerUrls = (
	process.env.YTT_SWAGGER_URLS ||
	process.env.YTT_SWAGGER_URL ||
	""
)
	.split(",")
	.map(item => item.trim())
	.filter(Boolean)

const swaggerServices: string[] = [
	// Replace with backend Swagger service names, for example:
	// 'api.auth.v1.AuthService',
	// 'api.game.v1.TableService',
	// 'api.wallet.v1.WalletService',
	"api.auth.v1.AuthService",
	"api.dish.v1.DishService",
	"api.order.v1.OrderService",
	"api.store.v1.StoreService",
	"api.merchant.v1.MerchantService",
	"api.staff.v1.StaffService",
	"api.table.v1.TableService",
	"api.store.v1.BusinessService",
	"api.member.v1.MemberService",
	"api.ticket.v1.TicketService",
	"api.wallet.v1.WalletService",
	"api.notification.v1.NotificationService",
]

const genList = (itemList: string[], extraUrl = swaggerServer) =>
	itemList.map(item => `${extraUrl}/q/service/${item}`)

const getServerUrls = (services: string[]) => {
	if (swaggerUrls.length > 0) return swaggerUrls

	const serviceUrls = genList(services)
	if (serviceUrls.length > 0) return serviceUrls

	throw new Error(
		[
			"未配置 ytt Swagger 服务。",
			"请在 ytt.config.ts 的 swaggerServices 中填写服务名，",
			"或通过 YTT_SWAGGER_URL / YTT_SWAGGER_URLS 指定 Swagger/OpenAPI JSON 地址。",
		].join(""),
	)
}

const toPathSegments = (path: string) =>
	path.split("/").filter(Boolean)

const getRequestFunctionName = (
	interfaceInfo: ExtendedInterface,
	changeCase: ChangeCase,
) => {
	const method = interfaceInfo.method.toLowerCase()
	const segments = toPathSegments(interfaceInfo.path)
	const lastSegment = segments[segments.length - 1]
	const suffixMethodMap: Record<string, string> = {
		delete: "delete",
		get: "get",
		list: "get",
		put: "put",
		update: "put",
	}
	const suffixMatch = lastSegment?.match(
		/_(delete|get|list|put|update)$/,
	)
	const requestMethod = suffixMatch
		? suffixMethodMap[suffixMatch[1]]
		: method
	const normalizedSegments = suffixMatch
		? [
				...segments.slice(0, -1),
				lastSegment.replace(suffixMatch[0], ""),
		  ]
		: segments
	const paramNames =
		interfaceInfo.req_params?.map(item => item.name) ?? []

	const pathName = normalizedSegments
		.map(segment => {
			const word = segment.replace(/[{}]/g, "")
			const isPathParam =
				paramNames.includes(word) ||
				/^\{.+\}$/.test(segment) ||
				/^:.+/.test(segment)

			if (isPathParam) {
				return `By${changeCase.pascalCase(word.replace(/^:/, ""))}`
			}

			return changeCase.pascalCase(word)
		})
		.join("")
		.replace(/By([^B].*)By/g, "By$1And")

	if (method === "put" || method === "delete") {
		console.warn(
			`[ytt] ${interfaceInfo.method} ${interfaceInfo.path} uses native ${interfaceInfo.method}.`,
		)
	}

	return `${requestMethod}${pathName}`
}

const createSubConfig = (
	serverUrl: string,
	entryName: string,
	fileName: string,
	requestFile: string,
): ServerConfig => ({
	comment: { enabled: true },
	outputFilePath: `src/services/${entryName}/${fileName}.ts`,
	prodEnvName: "production",
	projects: [
		{
			categories: [{ getRequestFunctionName, id: 0 }],
			token: "",
		},
	],
	queryStringArrayFormat: QueryStringArrayFormat.repeat,
	reactHooks: { enabled: false },
	requestFunctionFilePath: `src/ytt/request/${requestFile}.ts`,
	serverType: "swagger",
	serverUrl,
	target: "typescript",
	typesOnly: false,
})

const createConfig = ({
	entryName,
	fileName,
	requestFile,
	services,
}: YttModuleConfig) =>
	getServerUrls(services).map(serverUrl =>
		createSubConfig(serverUrl, entryName, fileName, requestFile),
	)

export default defineConfig([
	...createConfig({
		entryName: "basis",
		fileName: "basis",
		name: "basis",
		requestFile: "basis",
		services: swaggerServices,
	}),
])
