import {
	Grid,
	Paper,
	Stack,
	IconButton,
	Typography,
	Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { TicketType } from "@/utils/types";
import { FC, useState } from "react";
import EditTicketModal from "@/components/modals/EditTicketModal";

interface TicketInfoCardProps {
	ticket: TicketType;
	removeTicket: (ticketId: string) => void;
}

const TicketInfoCard: FC<TicketInfoCardProps> = ({ ticket, removeTicket }) => {
	const navigate = useNavigate();
	const [modalActive, setModalActive] = useState<boolean>(false);

	return (
		<Grid item xs={12} md={6}>
			<Paper elevation={3} sx={{ padding: 2 }}>
				<Stack direction="row" alignItems="center" spacing={1}>
					<IconButton onClick={() => navigate("/tickets")}>
						<ArrowBackIcon />
					</IconButton>
					<Typography variant="h5">Ticket Information</Typography>
				</Stack>
				<Stack spacing={2} sx={{ marginTop: 2 }}>
					<Typography variant="body1">
						<strong>Title:</strong> {ticket.title}
					</Typography>
					<Typography variant="body1">
						<strong>Description:</strong> {ticket.description}
					</Typography>
					<Typography variant="body1">
						<strong>Status:</strong> {ticket.status}
					</Typography>
					<Typography variant="body1">
						<strong>Priority:</strong> {ticket.priority}
					</Typography>
					<Typography variant="body1">
						<strong>Author ID:</strong> {ticket.authorId}
					</Typography>
					<Typography variant="body1">
						<strong>Created At:</strong>{" "}
						{new Date(ticket.createdAt).toLocaleString()}
					</Typography>
				</Stack>
				<Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => setModalActive(true)}
					>
						Edit
					</Button>
					<Button
						variant="contained"
						color="error"
						onClick={() => removeTicket(ticket.id)}
					>
						Delete
					</Button>
				</Stack>
			</Paper>
			<EditTicketModal
				active={modalActive}
				setActive={setModalActive}
				ticket={ticket}
			/>
		</Grid>
	);
};

export default TicketInfoCard;
