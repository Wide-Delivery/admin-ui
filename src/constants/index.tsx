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

export const mockClients = [
	{
		_id: { $oid: "6651e6502d1fbe31c0938871" },
		name: "Stanislav",
		email: "stanislav.matsak3@nure.ua",
		password: "$2a$12$m/wbwQsa18w1pPJABOdxHOmIvlGSeKo/ztHVibIFfP7qpwZzL6a.6",
		phoneNumber: "",
		photo:
			"https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg",
		provider: "local",
		role: "USER",
		deleted: false,
		createdAt: { $date: "2024-05-25T13:23:28.015Z" },
		updatedAt: { $date: "2024-05-25T13:23:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938872" },
		name: "Alexey",
		email: "alexey.nikolaev@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "1234567890",
		photo: "https://randomuser.me/api/portraits/men/1.jpg",
		provider: "local",
		role: "USER",
		deleted: false,
		createdAt: { $date: "2024-05-26T10:30:28.015Z" },
		updatedAt: { $date: "2024-05-26T10:30:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938873" },
		name: "Maria",
		email: "maria.ivanova@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "0987654321",
		photo: "https://randomuser.me/api/portraits/women/2.jpg",
		provider: "local",
		role: "ADMIN",
		deleted: false,
		createdAt: { $date: "2024-05-27T08:15:28.015Z" },
		updatedAt: { $date: "2024-05-27T08:15:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938874" },
		name: "Dmitry",
		email: "dmitry.smirnov@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "1122334455",
		photo: "https://randomuser.me/api/portraits/men/3.jpg",
		provider: "local",
		role: "USER",
		deleted: true,
		createdAt: { $date: "2024-05-28T12:45:28.015Z" },
		updatedAt: { $date: "2024-05-28T12:45:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938875" },
		name: "Elena",
		email: "elena.petrovna@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "2233445566",
		photo: "https://randomuser.me/api/portraits/women/3.jpg",
		provider: "local",
		role: "USER",
		deleted: false,
		createdAt: { $date: "2024-05-29T09:30:28.015Z" },
		updatedAt: { $date: "2024-05-29T09:30:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938876" },
		name: "Igor",
		email: "igor.kuznetsov@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "3344556677",
		photo: "https://randomuser.me/api/portraits/men/4.jpg",
		provider: "local",
		role: "USER",
		deleted: false,
		createdAt: { $date: "2024-05-30T14:10:28.015Z" },
		updatedAt: { $date: "2024-05-30T14:10:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938877" },
		name: "Natalia",
		email: "natalia.sergeeva@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "4455667788",
		photo: "https://randomuser.me/api/portraits/women/4.jpg",
		provider: "local",
		role: "USER",
		deleted: false,
		createdAt: { $date: "2024-06-01T10:00:28.015Z" },
		updatedAt: { $date: "2024-06-01T10:00:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938878" },
		name: "Sergey",
		email: "sergey.voronin@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "5566778899",
		photo: "https://randomuser.me/api/portraits/men/5.jpg",
		provider: "local",
		role: "ADMIN",
		deleted: false,
		createdAt: { $date: "2024-06-02T16:25:28.015Z" },
		updatedAt: { $date: "2024-06-02T16:25:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938879" },
		name: "Olga",
		email: "olga.andreeva@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "6677889900",
		photo: "https://randomuser.me/api/portraits/women/5.jpg",
		provider: "local",
		role: "USER",
		deleted: false,
		createdAt: { $date: "2024-06-03T11:15:28.015Z" },
		updatedAt: { $date: "2024-06-03T11:15:28.015Z" },
		__v: 0,
	},
	{
		_id: { $oid: "6651e6502d1fbe31c0938870" },
		name: "Andrey",
		email: "andrey.popov@example.com",
		password: "$2a$12$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		phoneNumber: "7788990011",
		photo: "https://randomuser.me/api/portraits/men/6.jpg",
		provider: "local",
		role: "USER",
		deleted: false,
		createdAt: { $date: "2024-06-04T13:45:28.015Z" },
		updatedAt: { $date: "2024-06-04T13:45:28.015Z" },
		__v: 0,
	},
];
