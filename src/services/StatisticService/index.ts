import $api from "@/http";
import { AxiosResponse } from "axios";

export default class StatisticService {
	//This for dashboard
	static async fetchOrdersStatusCount(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/orders/status-count")
			.then((res): any => res.data);
	}
	//This done
	static async fetchOrdersSeasonalAnalysis(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/orders/seasonal-order-analysis")
			.then((res): any => res.data);
	}
	//This done
	static async fetchOrdersMedianDeliveryTime(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/orders/median-delivery-time")
			.then((res): any => res.data);
	}
	//This done
	static async fetchOrdersDeliveryTimeStddev(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/orders/delivery-time-stddev")
			.then((res): any => res.data);
	}
	//This for dashboard
	static async fetchOrdersDailyCreationLastMonth(): Promise<
		AxiosResponse<any>
	> {
		return $api
			.get<any>("/statistics/orders/daily-creation-last-month")
			.then((res): any => res.data);
	}
	//This for dashboard
	static async fetchOrdersCreatedLastMonth(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/orders/created-last-month")
			.then((res): any => res.data);
	}
	//This done
	static async fetchOrdersCorrelationWeightDeliveryTime(): Promise<
		AxiosResponse<any>
	> {
		return $api
			.get<any>("/statistics/orders/correlation-weight-delivery-time")
			.then((res): any => res.data);
	}
	//This done
	static async fetchOrdersAverageDeliveryTime(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/orders/average-delivery-time")
			.then((res): any => res.data);
	}
	//This done
	static async fetchOrdersAverageCargoWeight(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/orders/average-cargo-weight")
			.then((res): any => res.data);
	}
	//This for dashboard
	static async fetchTicketsStatusCount(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/tickets/status-count")
			.then((res): any => res.data.statusCount);
	}
	//This done
	static async fetchTicketsPriorityCount(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/tickets/priority-count")
			.then((res): any => res.data.priorityCount);
	}
	//This for dashboard
	static async fetchTicketsDailyCreationLastMonth(): Promise<
		AxiosResponse<any>
	> {
		return $api
			.get<any>("/statistics/tickets/daily-creation-last-month")
			.then((res): any => res.data.dailyCreationCount);
	}
	//This done
	static async fetchTicketsResolutionTimeStddev(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/tickets/resolution-time-stddev")
			.then((res): any => res.data.stdDev);
	}
	//This done
	static async fetchTicketsMedianResolutionTime(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/tickets/median-resolution-time")
			.then((res): any => res.data.medianResolutionTime);
	}
	//This done
	static async fetchTicketsCreatedLastMonth(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/tickets/created-last-month")
			.then((res): any => res.data.ticketsCreatedLastMonth);
	}
	//This done
	static async fetchTicketsCorrelationPriorityMessageCount(): Promise<
		AxiosResponse<any>
	> {
		return $api
			.get<any>("/statistics/tickets/correlation-priority-message-count")
			.then((res): any => res.data.correlation);
	}
	//This done
	static async fetchTicketsAverageResolutionTime(): Promise<
		AxiosResponse<any>
	> {
		return $api
			.get<any>("/statistics/tickets/average-resolution-time")
			.then((res): any => res.data.averageResolutionTime);
	}
	//This done
	static async fetchTicketsAverageMessageCount(): Promise<AxiosResponse<any>> {
		return $api
			.get<any>("/statistics/tickets/average-message-count")
			.then((res): any => res.data.averageMessageCount);
	}
}
