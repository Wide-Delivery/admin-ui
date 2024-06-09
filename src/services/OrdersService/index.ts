import $api from "@/http";
import { AxiosResponse } from "axios";
import { TicketType } from "@/utils/types";

export default class OrdersService {
	static async getOrders(page = 1): Promise<AxiosResponse<any>> {
		return $api
			.post<any>("/orders/search", { pageNumber: page, pageSize: 10 })
			.then((res): any => res.data);
	}
	static async searchOrders(
		searchOrdersInfo,
		page = 1
	): Promise<AxiosResponse<any>> {
		const searchInfo = {
			...searchOrdersInfo,
			pageNumber: page,
			pageSize: 10,
		};
		console.log(searchInfo);
		return $api
			.post<any>(`/orders/search`, searchInfo)
			.then((res): any => res.data);
	}

	static async getOneOrder(orderId: string): Promise<AxiosResponse<any>> {
		console.log("get one order");
		// return $api.get<any>(`/ticket/${ticketId}`).then((res): any => res.data);
	}
	static async editOrder(
		editOrderInfo: TicketType
	): Promise<AxiosResponse<any>> {
		console.log("edit order");
	}
	static async removeOrder(orderId: string): Promise<AxiosResponse<any>> {
		console.log("remove order");
	}
}
