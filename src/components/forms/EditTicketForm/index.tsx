import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Stack,
	Box,
} from "@mui/material";

const EditTicketForm = ({ ticket, setActive, editTicket }) => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			title: ticket.title,
			description: ticket.description,
			status: ticket.status,
			priority: ticket.priority,
		},
	});

	const onSubmit = async (data) => {
		try {
			await editTicket(data);
			setActive(false);
		} catch (error) {
			console.error("Failed to edit ticket:", error);
		}
	};

	const handleCancel = () => {
		reset();
		setActive(false);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
				<Controller
					name="title"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label="Title"
							type="text"
							variant="standard"
							fullWidth
						/>
					)}
				/>
				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label="Description"
							type="text"
							variant="standard"
							fullWidth
						/>
					)}
				/>
				<Controller
					name="status"
					control={control}
					render={({ field }) => (
						<FormControl variant="standard" fullWidth>
							<InputLabel>Status</InputLabel>
							<Select {...field} label="Status" sx={{ zIndex: 9999 }}>
								<MenuItem value="OPEN">Open</MenuItem>
								<MenuItem value="IN_PROGRESS">In Progress</MenuItem>
								<MenuItem value="CLOSED">Closed</MenuItem>
								<MenuItem value="RESOLVED">Resolved</MenuItem>
							</Select>
						</FormControl>
					)}
				/>
				<Controller
					name="priority"
					control={control}
					render={({ field }) => (
						<FormControl variant="standard" fullWidth sx={{ zIndex: 9999 }}>
							<InputLabel>Priority</InputLabel>
							<Select {...field} label="Priority">
								<MenuItem value="LOW">Low</MenuItem>
								<MenuItem value="MEDIUM">Medium</MenuItem>
								<MenuItem value="HIGH">High</MenuItem>
							</Select>
						</FormControl>
					)}
				/>
				<Stack direction="row" spacing={2} justifyContent="flex-end">
					<Button variant="contained" color="primary" type="submit">
						Save
					</Button>
					<Button variant="contained" color="error" onClick={handleCancel}>
						Cancel
					</Button>
				</Stack>
			</Box>
		</form>
	);
};

export default EditTicketForm;
