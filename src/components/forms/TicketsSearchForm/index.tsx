import {
	Stack,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useTicketsStore from "@/store/TiketsStore";
import { searchTicketsInitialValue } from "@/utils/validation/initialValue";

const TicketsSearchForm = ({ handlerOnSearch }) => {
	const searchTickets = useTicketsStore((state: any) => state.searchTickets);

	const { control, handleSubmit } = useForm({
		defaultValues: searchTicketsInitialValue,
	});

	const onSubmit: SubmitHandler<any> = async (data) => {
		try {
			const filteredData = Object.fromEntries(
				Object.entries(data).filter(([key, value]) => value)
			);
			handlerOnSearch(filteredData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Stack direction={"column"} spacing={{ sm: 3, xs: 2 }}>
				<Stack direction={"column"}>
					<Stack direction={"column"} spacing={2}>
						<Controller
							name="title"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									label={"Title"}
									type="text"
									variant="standard"
								/>
							)}
						/>
						<Controller
							name="description"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									label={"Description"}
									type="text"
									variant="standard"
								/>
							)}
						/>
						<Controller
							name="status"
							control={control}
							render={({ field }) => (
								<FormControl variant="standard" fullWidth>
									<InputLabel>Status</InputLabel>
									<Select {...field} label="Status">
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
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
								<FormControl variant="standard" fullWidth>
									<InputLabel>Priority</InputLabel>
									<Select {...field} label="Priority">
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value="LOW">Low</MenuItem>
										<MenuItem value="MEDIUM">Medium</MenuItem>
										<MenuItem value="HIGH">High</MenuItem>
									</Select>
								</FormControl>
							)}
						/>
					</Stack>
				</Stack>
				<Stack spacing={{ md: 3, xs: 2 }}>
					<Button
						variant="contained"
						type="submit"
						fullWidth
						sx={{
							py: {
								sm: "16px",
								xs: "12px",
							},
						}}
					>
						Search
					</Button>
				</Stack>
			</Stack>
		</form>
	);
};

export default TicketsSearchForm;
