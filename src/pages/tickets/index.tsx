import { Box } from "@mui/material";
import PageTitle from "@/components/UI/PageTitle";
import SearchBlock from "@/components/UI/SearchBlock";
import { useEffect, useState } from "react";
import useTicketsStore from "@/store/TiketsStore";
import PaginationListLayout from "@/components/layouts/PaginationListLayout";
import TicketCard from "@/components/card/TicketCard";
import { TicketType } from "@/utils/types";
import TicketsSearchForm from "@/components/forms/TicketsSearchForm";

const TicketsPage = () => {
	const [pagination, setPagination] = useState({ page: 1, totalPages: 0 });
	const [filters, setFilters] = useState({});
	const ticketsList = useTicketsStore((state) => state.ticketsList);
	const fetchTickets = useTicketsStore((state) => state.fetchTickets);
	const searchTickets = useTicketsStore((state) => state.searchTickets);
	const removeTicket = useTicketsStore((state) => state.removeTicket);

	const fetchData = async () => {
		if (Object.keys(filters).length > 0) {
			const response = await searchTickets({
				...filters,
				page: pagination.page - 1,
			});
			setPagination((prev) => ({ ...prev, totalPages: response.totalPages }));
		} else {
			const response = await fetchTickets(pagination.page - 1);
			setPagination((prev) => ({ ...prev, totalPages: response.totalPages }));
		}
	};
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPagination((pagination) => ({ ...pagination, page: value }));
	};

	const handlerOnDelete = async (ticketId: string) => {
		await removeTicket(ticketId);
	};
	const handleSearch = (searchData: any) => {
		setFilters(searchData);
		setPagination((prev) => ({ ...prev, page: 1 }));
	};

	useEffect(() => {
		fetchData();
	}, [pagination.page, filters]);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
			<PageTitle pageTitle={"Tickets page"} />
			<SearchBlock>
				<TicketsSearchForm handlerOnSearch={handleSearch} />
			</SearchBlock>
			<PaginationListLayout
				currentPage={pagination.page}
				totalPage={pagination.totalPages}
				handleChange={handleChange}
			>
				{ticketsList &&
					ticketsList.map((ticket: TicketType) => (
						<TicketCard
							key={ticket.id}
							ticket={ticket}
							handlerOnDelete={handlerOnDelete}
						/>
					))}
			</PaginationListLayout>
		</Box>
	);
};

export default TicketsPage;
