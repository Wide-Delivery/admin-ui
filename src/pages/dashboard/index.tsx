import { Box, CircularProgress, Grid } from "@mui/material";
import { Line, Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	ArcElement,
} from "chart.js";
import PageTitle from "@/components/UI/PageTitle";
import ChartTitleLayout from "@/components/layouts/ChartTitleLayout";
import { processDataForLineChart, processDataForPieChart } from "@/utils/utils";
import { useEffect, useState } from "react";
import StatisticService from "@/services/StatisticService";
import Loader from "../../components/UI/Loader";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	ArcElement
);

const DashboardPage = () => {
	const [dailyTicketsData, setDailyTicketsData] = useState(null);
	const [dailyOrdersData, setDailyOrdersData] = useState(null);
	const [ticketsStatusData, setTicketsStatusData] = useState(null);
	const [ordersStatusData, setOrdersStatusData] = useState(null);

	useEffect(() => {
		const responseDailyTicketsData =
			StatisticService.fetchTicketsDailyCreationLastMonth().then((data) =>
				setDailyTicketsData(processDataForLineChart(data, "Tickets day count"))
			);
		const responseDailyOrdersData =
			StatisticService.fetchOrdersDailyCreationLastMonth().then((data) =>
				setDailyOrdersData(processDataForLineChart(data, "Orders day count"))
			);
		const responseTicketsStatusData =
			StatisticService.fetchTicketsStatusCount().then((data) =>
				setTicketsStatusData(processDataForPieChart(data))
			);
		const responseOrdersStatusData =
			StatisticService.fetchOrdersStatusCount().then((data) =>
				setOrdersStatusData(processDataForPieChart(data))
			);
	}, []);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
			<PageTitle pageTitle={"Dashboard page"} />
			<Grid container spacing={6}>
				<ChartTitleLayout
					chartTitle={"Daily statistics on the number of created tickets"}
					chartWidth={12}
				>
					{dailyTicketsData ? (
						<Line data={dailyTicketsData} options={dailyTicketsData.options} />
					) : (
						<Loader loaderHeight={300} />
					)}
				</ChartTitleLayout>
				<ChartTitleLayout
					chartTitle={"Daily statistics on the number of created orders"}
					chartWidth={12}
				>
					{dailyOrdersData ? (
						<Line data={dailyOrdersData} options={dailyOrdersData.options} />
					) : (
						<Loader loaderHeight={300} />
					)}
				</ChartTitleLayout>
				<ChartTitleLayout chartTitle={"Tickets status count"} chartWidth={6}>
					{ticketsStatusData ? (
						<Pie data={ticketsStatusData} />
					) : (
						<Loader loaderHeight={300} />
					)}
				</ChartTitleLayout>
				<ChartTitleLayout chartTitle={"Orders status count"} chartWidth={6}>
					{ordersStatusData ? (
						<Pie data={ordersStatusData} />
					) : (
						<Loader loaderHeight={300} />
					)}
				</ChartTitleLayout>
			</Grid>
		</Box>
	);
};

export default DashboardPage;
