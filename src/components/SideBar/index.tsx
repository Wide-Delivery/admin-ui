import { FC } from "react";
import { SideBarProps } from "./types";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import UserCard from "@/components/card/UserCard";
import SiteLogo from "@/components/UI/SiteLogo";
import { NavLink } from "react-router-dom";

const SideBar: FC<SideBarProps> = ({ navLinks }) => {
	return (
		<Drawer
			open={true}
			variant="permanent"
			anchor="left"
			sx={{
				"& .MuiDrawer-paper": {
					boxSizing: "border-box",
					width: { xs: "60px", sm: "200px", lg: "250px" },
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					pb: { xs: "10px", sm: "20px" },
					overflow: "hidden",
					zIndex: 10,
				},
			}}
		>
			<List sx={{ pt: { xs: 0, sm: "8px" } }}>
				<SiteLogo logoTitle={"WideDelivery"} mobileLogoTitle={"WD"} />
				{navLinks.map((navItem) => (
					<ListItem key={navItem.routeLink} disablePadding>
						<ListItemButton
							component={NavLink}
							to={navItem.routeLink}
							sx={{
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
							<ListItemIcon>{navItem.routeIcon}</ListItemIcon>
							<ListItemText primary={navItem.routeTitle} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<UserCard />
		</Drawer>
	);
};

export default SideBar;
