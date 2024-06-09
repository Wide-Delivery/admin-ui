import { Stack, Typography } from "@mui/material";
import ModalLayout from "@/components/layouts/ModalLayout";
import EditTicketForm from "@/components/forms/EditTicketForm";
import { TicketType } from "@/utils/types";
import { FC } from "react";
import ticket from "../../../pages/tickets/ticket";
import useTicketsStore from "../../../store/TiketsStore";

interface EditTicketModalProps {
	active: boolean;
	ticket: TicketType | null;
	setActive: (state: boolean) => void;
}

const EditTicketModal: FC<EditTicketModalProps> = ({
	active,
	setActive,
	ticket,
}) => {
	const editTicket = useTicketsStore((state) => state.editTicket);

	const handlerOnEditTicket = async (editTicketData: TicketType) => {
		const changeTicket = { ...ticket, ...editTicketData };
		await editTicket(changeTicket);
	};
	return (
		<ModalLayout active={active} setActive={setActive}>
			<Stack direction={"column"} spacing={8}>
				<Typography variant="h5">Edit ticket</Typography>
				<EditTicketForm
					ticket={ticket}
					setActive={setActive}
					editTicket={handlerOnEditTicket}
				/>
			</Stack>
		</ModalLayout>
	);
};

export default EditTicketModal;
