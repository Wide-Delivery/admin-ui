import DashboardIcon from "@mui/icons-material/Dashboard";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";

export const rolePermission = {
	ADMIN: {
		routes: [
			{
				routeLink: "/",
				routeTitle: "Dashboard",
				routeIcon: <DashboardIcon />,
			},
			{
				routeLink: "/tickets",
				routeTitle: "Tickets",
				routeIcon: <BugReportIcon />,
			},
			{
				routeLink: "/clients",
				routeTitle: "Clients",
				routeIcon: <PersonIcon />,
			},
			{
				routeLink: "/orders",
				routeTitle: "Orders",
				routeIcon: <LocalGroceryStoreIcon />,
			},
			{
				routeLink: "/employers",
				routeTitle: "Employers",
				routeIcon: <PeopleAltIcon />,
			},
			{
				routeLink: "/statistic",
				routeTitle: "Statistic",
				routeIcon: <StackedLineChartIcon />,
			},
		],
		permission: [
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
		],
	},
	HEAD_OF_SUPPORT: {
		routes: [
			{
				routeLink: "/",
				routeTitle: "Dashboard",
				routeIcon: <DashboardIcon />,
			},
			{
				routeLink: "/tickets",
				routeTitle: "Tickets",
				routeIcon: <BugReportIcon />,
			},
			{
				routeLink: "/clients",
				routeTitle: "Clients",
				routeIcon: <PersonIcon />,
			},
			{
				routeLink: "/orders",
				routeTitle: "Orders",
				routeIcon: <LocalGroceryStoreIcon />,
			},
			{
				routeLink: "/employers",
				routeTitle: "Employers",
				routeIcon: <PeopleAltIcon />,
			},
		],
		permission: [],
	},
	SUPPORT: {
		routes: [
			{
				routeLink: "/",
				routeTitle: "Dashboard",
				routeIcon: <DashboardIcon />,
			},
			{
				routeLink: "/tickets",
				routeTitle: "Tickets",
				routeIcon: <BugReportIcon />,
			},
			{
				routeLink: "/clients",
				routeTitle: "Clients",
				routeIcon: <PersonIcon />,
			},
			{
				routeLink: "/orders",
				routeTitle: "Orders",
				routeIcon: <LocalGroceryStoreIcon />,
			},
		],
		permission: [],
	},
};
