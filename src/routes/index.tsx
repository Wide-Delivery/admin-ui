import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import SignInPage from "@/pages/sign-in";
import AuthorizedLayout from "@/components/layouts/AuthLayout";
import DashboardPage from "@/pages/dashboard";
import TicketsPage from "@/pages/tickets";
import StatisticPage from "@/pages/statistic";
import EmployersPage from "@/pages/employers";
import OrdersPage from "@/pages/orders";
import ClientsPage from "@/pages/clients";
import MainLayout from "@/components/layouts/MainLayout";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import ProfilePage from "@/pages/profile";
import TicketPage from "@/pages/tickets/ticket";
import OrderPage from "@/pages/orders/order";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<MainLayout />}>
			<Route element={<AuthorizedLayout />}>
				<Route element={<SideBarLayout />}>
					<Route path="/" element={<DashboardPage />} />
					<Route path="/tickets" element={<TicketsPage />} />
					<Route path="/tickets/:id" element={<TicketPage />} />
					<Route path="/clients" element={<ClientsPage />} />
					<Route path="/orders" element={<OrdersPage />} />
					<Route path="/orders/:id" element={<OrderPage />} />
					<Route path="/employers" element={<EmployersPage />} />
					<Route path="/statistic" element={<StatisticPage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Route>
			</Route>
			<Route path="/sign-in" element={<SignInPage />} />
		</Route>
	)
);
