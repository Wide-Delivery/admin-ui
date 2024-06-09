import $api from "@/http";
import axios, { AxiosResponse } from "axios";
import { TicketType } from "@/utils/types";

export default class TicketsService {
	static async getTickets(page = 0): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/ticket", {
				params: {
					page: page,
					size: 10,
				},
			})
			.then((res): any => res.data);
	}
	static async searchTickets(
		searchTicketInfo: any
	): Promise<AxiosResponse<any>> {
		return $api
			.post<any>(`/ticket/search`, searchTicketInfo)
			.then((res): any => res.data);
	}

	static async getOneTicket(ticketId: string): Promise<AxiosResponse<any>> {
		return $api.get<any>(`/ticket/${ticketId}`).then((res): any => res.data);
	}
	static async editTicket(
		editTicketInfo: TicketType
	): Promise<AxiosResponse<any>> {
		return $api
			.put<any>(`/ticket`, editTicketInfo)
			.then((res): any => res.data);
	}
	static async removeTicket(ticketId: string): Promise<AxiosResponse<any>> {
		return $api
			.delete<any>(`/ticket/${ticketId}`)
			.then((res): any => res.status);
	}
	static async sendMessage(
		ticketId: string,
		messageInfo: any
	): Promise<AxiosResponse<any>> {
		return $api
			.post<any>(`/ticket/${ticketId}/message`, messageInfo)
			.then((res): any => res.data);
	}
}
