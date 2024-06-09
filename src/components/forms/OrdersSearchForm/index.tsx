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
import { searchOrdersInitialValue } from "@/utils/validation/initialValue";

const OrdersSearchForm = ({ handlerOnSearch }) => {
	const searchTickets = useTicketsStore((state: any) => state.searchTickets);

	const { control, handleSubmit } = useForm({
		defaultValues: searchOrdersInitialValue,
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
							name="paymentMethod"
							control={control}
							render={({ field }) => (
								<FormControl variant="standard" fullWidth>
									<InputLabel>Payment method</InputLabel>
									<Select {...field} label="Priority">
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value="Cash">Cash</MenuItem>
										<MenuItem value="Credit Card">Credit Card</MenuItem>
										<MenuItem value="Paypal">Paypal</MenuItem>
									</Select>
								</FormControl>
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
										<MenuItem value="CREATED">Created</MenuItem>
										<MenuItem value="WAIT_FOR_PICKUP">Wait for pickup</MenuItem>
										<MenuItem value="MATCHING_DRIVER">Matching driver</MenuItem>
										<MenuItem value="UNLOAD">Unload</MenuItem>
										<MenuItem value="TRANSPORTATION">Transportation</MenuItem>
										<MenuItem value="NEED_PAYMENT">Need payment</MenuItem>
										<MenuItem value="PICKUP">Pickup</MenuItem>
										<MenuItem value="DRIVER_MOVES_TO_PICKUP">
											Driver moves to pickup
										</MenuItem>
										<MenuItem value="CANNOT_MATCH_DRIVER">
											Cannot match driver
										</MenuItem>
										<MenuItem value="READY">Ready</MenuItem>
										<MenuItem value="COMPLETED">Completed</MenuItem>
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

export default OrdersSearchForm;
