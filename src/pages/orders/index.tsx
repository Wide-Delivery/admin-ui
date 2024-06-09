import { Box } from "@mui/material";
import PageTitle from "@/components/UI/PageTitle";
import { useState, useEffect } from "react";
import SearchBlock from "@/components/UI/SearchBlock";
import useOrdersStore from "@/store/OrdersStore";
import OrdersSearchForm from "@/components/forms/OrdersSearchForm";
import PaginationListLayout from "@/components/layouts/PaginationListLayout";
import { OrderType } from "@/utils/types";
import OrderCard from "@/components/card/OrderCard";

const OrdersPage = () => {
	const [pagination, setPagination] = useState({ page: 1, totalPages: 0 });
	const [filters, setFilters] = useState({});
	const ordersList = useOrdersStore((state) => state.ordersList);
	const fetchOrders = useOrdersStore((state) => state.fetchOrders);
	const searchOrders = useOrdersStore((state) => state.searchOrders);

	const fetchData = async () => {
		if (Object.keys(filters).length > 0) {
			const response = await searchOrders({
				...filters,
				pageNumber: pagination.page,
			});
			setPagination((prev) => ({ ...prev, totalPages: response.totalPages }));
		} else {
			const response = await fetchOrders(pagination.page);
			setPagination((prev) => ({ ...prev, totalPages: response.totalPages }));
		}
	};
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPagination((pagination) => ({ ...pagination, page: value }));
	};

	const handlerOnDelete = async (orderId: string) => {
		// await removeTicket(ticketId);
		console.log(orderId);
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
			<PageTitle pageTitle={"Orders page"} />
			<SearchBlock>
				<OrdersSearchForm handlerOnSearch={handleSearch} />
			</SearchBlock>
			<PaginationListLayout
				currentPage={pagination.page}
				totalPage={pagination.totalPages}
				handleChange={handleChange}
			>
				{ordersList &&
					ordersList.map((order: OrderType) => (
						<OrderCard
							key={order.id}
							order={order}
							handlerOnDelete={handlerOnDelete}
						/>
					))}
			</PaginationListLayout>
		</Box>
	);
};

export default OrdersPage;
