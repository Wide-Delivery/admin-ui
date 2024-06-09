import { Box, Typography, IconButton, Card } from "@mui/material";
import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/AuthStore";
import { useAuthStoreType } from "@/store/AuthStore/types";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const UserCard: FC = () => {
	const userInfo = useAuthStore((state: useAuthStoreType) => state.userInfo);
	const logout = useAuthStore((state: useAuthStoreType) => state.logout);

	return (
		<Card
			component={NavLink}
			to={"/profile"}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: { xs: "5px 5px", sm: "10px 10px" },
				margin: { xs: "5px 5px", sm: "0px 20px" },
				border: "1px solid #ccc",
				borderRadius: "8px",
				cursor: "pointer",
				textDecoration: "none",
				flexDirection: { xs: "column", sm: "row" },

				"&.active": {
					backgroundColor: "rgba(0, 0, 0, 0.1)",
					"& .MuiListItemIcon-root": {
						color: "black",
					},
				},
				"&:hover": {
					backgroundColor: "rgba(0, 0, 0, 0.2)",
				},
			}}
		>
			<Box sx={{ display: { xs: "none", sm: "block" } }}>
				<Typography variant="subtitle1">{`${userInfo.firstName} ${userInfo.lastName}`}</Typography>
				<Typography variant="subtitle1">{userInfo.role}</Typography>
			</Box>
			<IconButton
				sx={{ display: { xs: "flex", sm: "none" }, alignContent: "center" }}
			>
				<AccountBoxIcon />
			</IconButton>
			<IconButton
				color={"error"}
				onClick={(e) => {
					e.stopPropagation();
					logout();
					navigate("/sign-in");
				}}
				sx={{
					"&:hover": {
						backgroundColor: "#ffcccb",
					},
				}}
			>
				<ExitToAppIcon />
			</IconButton>
		</Card>
	);
};

export default UserCard;
