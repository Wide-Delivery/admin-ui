import { create } from "zustand";
import TicketsService from "@/services/TicketsService";
import { TicketType, MessageType } from "@/utils/types";

const useTicketsStore = create<any>((set, get) => ({
	ticketsList: [],

	fetchTickets: async (page: number) => {
		try {
			const ticketsResponse = await TicketsService.getTickets(page);
			set({ ticketsList: ticketsResponse.content });
			return ticketsResponse;
		} catch (error) {
			console.error("Failed:", error);
			throw error;
		}
	},
	searchTickets: async (filteredData: any) => {
		try {
			const ticketsResponse = await TicketsService.searchTickets(filteredData);

			set({ ticketsList: ticketsResponse.content });
			return ticketsResponse;
		} catch (error) {
			console.error("Failed:", error);
			throw error;
		}
	},

	fetchTicket: async (ticketId: string) => {
		try {
			const ticketResponse = await TicketsService.getOneTicket(ticketId);
			return ticketResponse;
		} catch (error) {
			console.error("Failed:", error);
			throw error;
		}
	},
	editTicket: async (changeTicket: TicketType) => {
		try {
			const editResponse = await TicketsService.editTicket(changeTicket);

			const currentTickets = get().ticketsList.map((ticket: TicketType) =>
				ticket.id === changeTicket.id ? editResponse : ticket
			);
			set({ ticketsList: currentTickets });
		} catch (error) {
			console.error("Login failed:", error);
			throw error;
		}
	},
	removeTicket: async (ticketId: string) => {
		try {
			const removeResponse = await TicketsService.removeTicket(ticketId);

			if (removeResponse === 200) {
				const currentTickets = get().ticketsList.filter(
					(ticket: TicketType) => ticket.id !== ticketId
				);

				set({ ticketsList: currentTickets });
			}
		} catch (error) {
			console.error("Login failed:", error);
			throw error;
		}
	},
	sendMessage: async (newMessage: MessageType) => {
		try {
			const sendMessage = await TicketsService.sendMessage(newMessage);

			const currentTickets = get().ticketsList.map((ticket: TicketType) =>
				ticket.id === sendMessage.id ? sendMessage : ticket
			);
			set({ ticketsList: currentTickets });
		} catch (error) {
			console.error("Login failed:", error);
			throw error;
		}
	},
}));

export default useTicketsStore;
