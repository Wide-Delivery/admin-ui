import {
	Grid,
	Card,
	CardContent,
	Box,
	Typography,
	Button,
} from "@mui/material";
import { TicketType } from "@/utils/types";
import { FC } from "react";
import { Link } from "react-router-dom";

interface TicketCardProps {
	ticket: TicketType;
}
const TicketCard: FC<TicketCardProps> = ({ ticket, handlerOnDelete }) => {
	return (
		<Grid
			item
			xs={12}
			key={ticket.id}
			component={Link}
			to={`/tickets/${ticket.id}`}
			sx={{ textDecoration: "none", color: "unset" }}
		>
			<Card
				sx={{
					border: "1px solid black",
					"&:hover": {
						backgroundColor: "#f0f0f0",
					},
				}}
			>
				<CardContent>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<Typography sx={{ width: "30%" }} variant="h6">
							{ticket.title}
						</Typography>
						<Typography sx={{ width: "30%" }}>{ticket.description}</Typography>
						<Typography sx={{ flexGrow: 1 }}>{ticket.status}</Typography>
						<Button
							variant="contained"
							color="error"
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								handlerOnDelete(ticket.id);
							}}
						>
							Delete
						</Button>
					</Box>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default TicketCard;
