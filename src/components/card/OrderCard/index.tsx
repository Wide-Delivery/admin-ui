import {
	Grid,
	Card,
	CardContent,
	Box,
	Typography,
	Button,
} from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { OrderType } from "@/utils/types";

interface OrderCardProps {
	order: OrderType;
	handlerOnDelete: (id: string) => void;
}
const OrderCard: FC<OrderCardProps> = ({ order, handlerOnDelete }) => {
	return (
		<Grid
			item
			xs={12}
			key={order.id}
			component={Link}
			to={`/orders/${order.id}`}
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
						<Typography
							sx={{
								width: "30%",
								overflow: "hidden",
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: 1,
								lineHeight: "1.5em",
								textOverflow: "ellipsis",
							}}
						>
							{order.description}
						</Typography>
						<Typography sx={{ width: "20%" }}>{order.paymentMethod}</Typography>
						<Typography sx={{ flexGrow: 1 }}>{order.status}</Typography>
						<Button
							variant="contained"
							color="error"
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								handlerOnDelete(order.id);
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

export default OrderCard;
