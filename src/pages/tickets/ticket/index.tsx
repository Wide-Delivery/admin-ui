import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import useTicketsStore from "@/store/TiketsStore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TicketInfoCard from "@/components/card/TicketInfoCard";
import TicketChat from "@/components/TicketChat";

const TicketPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [ticket, setTicket] = useState(null);
	const fetchTicket = useTicketsStore((state) => state.fetchTicket);
	const removeTicket = useTicketsStore((state) => state.removeTicket);
	const ticketsList = useTicketsStore((state) => state.ticketsList);

	const fetchData = async (ticketId: string) => {
		const res = await fetchTicket(ticketId);
		setTicket(res);
	};
	const handlerOnDelete = async (ticketId: string) => {
		await removeTicket(ticketId);
		navigate("/tickets");
	};
	useEffect(() => {
		fetchData(id);
	}, [ticketsList]);
	useEffect(() => {
		const interval = setInterval(() => {
			fetchData(id);
		}, 1 * 20 * 1000);

		return () => clearInterval(interval);
	}, []);
	return (
		<Box sx={{ display: "flex", height: "100%" }}>
			{ticket && (
				<Grid container spacing={2}>
					<TicketInfoCard ticket={ticket} removeTicket={handlerOnDelete} />
					<TicketChat ticket={ticket} />
				</Grid>
			)}
		</Box>
	);
};

export default TicketPage;
