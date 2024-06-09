import { rolePermission } from "@/constants";
import SideBar from "@/components/SideBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useAuthStoreType } from "@/store/AuthStore/types";
import useAuthStore from "@/store/AuthStore";

const SideBarLayout = () => {
	const userInfo = useAuthStore((state: useAuthStoreType) => state.userInfo);

	return (
		<Box sx={{ display: "flex" }}>
			{userInfo && <SideBar navLinks={rolePermission[userInfo.role]?.routes} />}
			<Box
				sx={{
					flexGrow: 1,
					p: 3,
					width: {
						xs: "calc(100% - 60px)",
						sm: "calc(100% - 200px)",
						lg: "calc(100% - 250px)",
					},
					ml: { xs: "60px", sm: "200px", lg: "250px" },
				}}
			>
				<Outlet />
			</Box>
		</Box>
	);
};

export default SideBarLayout;
