import {
	Grid,
	Paper,
	Typography,
	Stack,
	Divider,
	TextField,
	Button,
} from "@mui/material";
import { TicketType } from "@/utils/types";
import { FC, useState } from "react";
import useTicketsStore from "../../store/TiketsStore";
import useAuthStore from "../../store/AuthStore";

interface TicketChatProps {
	ticket: TicketType;
}

const TicketChat: FC<TicketChatProps> = ({ ticket }) => {
	const [messageText, setMessageText] = useState("");
	const sendMessage = useTicketsStore((state) => state.sendMessage);
	const currentUserId = useAuthStore((state) => state.userInfo.id);

	const isCurrentUser = (authorId: string) => authorId === currentUserId;
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMessageText(event.target.value);
	};

	const handleSendMessage = async (messageText: string) => {
		if (messageText !== "") {
			const newMessage = {
				...ticket.conversation[ticket.conversation.length - 1],
				id: "665a52423a25172289e77434",
				text: messageText,
				authorId: currentUserId,
			};
			ticket.conversation.push(newMessage);
			setMessageText("");
			await sendMessage(ticket);
		}
	};

	return (
		<Grid item xs={12} md={6}>
			<Paper
				elevation={3}
				sx={{
					padding: 2,
					height: "95vh",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Typography variant="h5">Chat</Typography>
				<Divider />
				<Stack
					spacing={2}
					sx={{
						marginTop: 2,
						display: "flex",
						flexDirection: "column",
						overflowY: "auto",
						maxHeight: "calc(95vh - 156px)",
						alignItems: isCurrentUser(ticket.authorId)
							? "flex-end"
							: "flex-start",
					}}
				>
					{ticket.conversation.map((message, index) => (
						<Paper
							key={index}
							variant="outlined"
							sx={{
								padding: 1,
								width: "fit-content",
								background: isCurrentUser(message.authorId)
									? "lightgray"
									: "lightcoral",
								alignSelf: isCurrentUser(message.authorId)
									? "flex-end"
									: "flex-start",
								maxWidth: isCurrentUser(message.authorId) ? "80%" : "50%",
								wordWrap: "break-word",
							}}
						>
							{message.text}
						</Paper>
					))}
				</Stack>
				<Stack spacing={1} direction="row" mt={"auto"}>
					<TextField
						label="Message"
						variant="outlined"
						size="large"
						sx={{ flexGrow: 1 }}
						value={messageText}
						onChange={handleChange}
					/>
					<Button
						variant="contained"
						onClick={() => handleSendMessage(messageText)}
					>
						Send
					</Button>
				</Stack>
			</Paper>
		</Grid>
	);
};

export default TicketChat;
