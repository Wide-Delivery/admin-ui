import { create } from "zustand";
import { TicketType } from "@/utils/types";
import OrdersService from "@/services/OrdersService";

const useOrdersStore = create<any>((set, get) => ({
	ordersList: [],

	fetchOrders: async (page: number) => {
		try {
			const ordersResponse = await OrdersService.getOrders(page);
			set({ ordersList: ordersResponse.orders });
			return ordersResponse;
		} catch (error) {
			console.error("Failed:", error);
			throw error;
		}
	},
	searchOrders: async (filteredData: any, page: number) => {
		try {
			const ordersResponse = await OrdersService.searchOrders(
				filteredData,
				page
			);

			set({ ordersList: ordersResponse.orders });
			return ordersResponse;
		} catch (error) {
			console.error("Failed:", error);
			throw error;
		}
	},

	fetchOrder: async (orderId: string) => {
		try {
			const orderResponse = await OrdersService.getOneOrder(orderId);
			return orderResponse;
		} catch (error) {
			console.error("Failed:", error);
			throw error;
		}
	},
	editOrder: async (changeOrder: TicketType) => {
		try {
			console.log("edit order");
		} catch (error) {
			console.error("Failed:", error);
			throw error;
		}
	},
	removeOrder: async (orderId: string) => {
		try {
			console.log("remove order");
		} catch (error) {
			console.error("Failed:", error);
			throw error;
		}
	},
}));

export default useOrdersStore;
