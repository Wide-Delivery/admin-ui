import { Box, Grid } from "@mui/material";
import StatisticCardInfo from "@/components/card/StatisticCardInfo";
import StatisticService from "@/services/StatisticService";
import { convertMillisecondsToHours } from "@/utils/utils";
import { useEffect, useState } from "react";
import Loader from "@/components/UI/Loader";
import ChartTitleLayout from "@/components/layouts/ChartTitleLayout";
import { processDataForLineChart, processDataForBarChart } from "@/utils/utils";
import { Bar, Line } from "react-chartjs-2";

const CardBlock = () => {
	const [avrDeliveryTime, setAvrDeliveryTime] = useState<string>(null);
	const [medDeliveryTime, setMedDeliveryTime] = useState<string>(null);
	const [stddevDeliveryTime, setStddevDeliveryTime] = useState<string>(null);
	const [createOrdersLastMonth, setCreateOrdersLastMonth] =
		useState<string>(null);
	const [correlationOrderWeightTime, setCorrelationOrderWeightTime] =
		useState<string>(null);
	const [avrOrdersWeight, setAvrOrdersWeight] = useState<string>(null);

	const [avrResolutionTime, setAvrResolutionTime] = useState<string>(null);
	const [medResolutionTime, setMedResolutionTime] = useState<string>(null);
	const [stddevResolutionTime, setStddevResolutionTime] =
		useState<string>(null);
	const [createTicketsLastMonth, setCreateTicketsLastMonth] =
		useState<string>(null);
	const [correlationTicketsMessageCount, setCorrelationTicketsMessageCount] =
		useState<string>(null);
	const [avrMessageCount, setAvrMessageCount] = useState<string>(null);
	const [seasonOrdersCount, setSeasonOrdersCount] = useState<string>(null);
	const [ticketsPriorityCount, setTicketsPriorityCount] =
		useState<string>(null);

	useEffect(() => {
		const responseOrdersAverageDeliveryTime =
			StatisticService.fetchOrdersAverageDeliveryTime().then((data) =>
				setAvrDeliveryTime(`${convertMillisecondsToHours(data)} hour`)
			);
		const responseOrdersMedianDeliveryTime =
			StatisticService.fetchOrdersMedianDeliveryTime().then((data) =>
				setMedDeliveryTime(`${convertMillisecondsToHours(data)} hour`)
			);
		const responseOrdersStddevDeliveryTime =
			StatisticService.fetchOrdersDeliveryTimeStddev().then((data) =>
				setStddevDeliveryTime(`${convertMillisecondsToHours(data)} hour`)
			);
		const responseOrdersCreatedLastMonth =
			StatisticService.fetchOrdersCreatedLastMonth().then((data) =>
				setCreateOrdersLastMonth(`${data} per/month`)
			);
		const responseOrdersCorrelationOrderWeight =
			StatisticService.fetchOrdersCorrelationWeightDeliveryTime().then((data) =>
				setCorrelationOrderWeightTime(`${data.toFixed(3)} w/t`)
			);
		const responseOrdersAverageCargo =
			StatisticService.fetchOrdersAverageCargoWeight().then((data) =>
				setAvrOrdersWeight(`${data.toFixed(2)} kg`)
			);

		const responseAverageResolutionTime =
			StatisticService.fetchTicketsAverageResolutionTime().then((data) =>
				setAvrResolutionTime(`${convertMillisecondsToHours(data)} hour`)
			);
		const responseTicketsMedianResolutionTime =
			StatisticService.fetchTicketsMedianResolutionTime().then((data) =>
				setMedResolutionTime(`${convertMillisecondsToHours(data)} hour`)
			);
		const responseStddevResolutionTime =
			StatisticService.fetchTicketsResolutionTimeStddev().then((data) =>
				setStddevResolutionTime(`${convertMillisecondsToHours(data)} hour`)
			);
		const responseCreateTicketsLastMonth =
			StatisticService.fetchTicketsCreatedLastMonth().then((data) =>
				setCreateTicketsLastMonth(`${data} per/month`)
			);
		const responseCorrelationTicketsMessageCount =
			StatisticService.fetchTicketsCorrelationPriorityMessageCount().then(
				(data) => setCorrelationTicketsMessageCount(`${data.toFixed(3)} t/p`)
			);
		const responseAvrMessageCount =
			StatisticService.fetchTicketsAverageMessageCount().then((data) =>
				setAvrMessageCount(`${data.toFixed(1)} messages`)
			);

		const responseOrdersSeasonAnalysis =
			StatisticService.fetchOrdersSeasonalAnalysis().then((data) => {
				const result = {};
				for (const month in data) {
					result[month] = convertMillisecondsToHours(data[month]);
				}
				setSeasonOrdersCount(
					processDataForLineChart(result, "Tickets season count")
				);
			});
		const responseTicketsPriorityCount =
			StatisticService.fetchTicketsPriorityCount().then((data) => {
				setTicketsPriorityCount(processDataForBarChart(data));
			});
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				flexGrow: 1,
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Orders average delivery time"}
						text={avrDeliveryTime}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Orders median delivery time"}
						text={medDeliveryTime}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Orders stddev delivery time"}
						text={stddevDeliveryTime}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Orders created last month"}
						text={createOrdersLastMonth}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Correlation orders weight and delivery time"}
						text={correlationOrderWeightTime}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Average orders weight"}
						text={avrOrdersWeight}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Tickets average resolution time"}
						text={avrResolutionTime}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Tickets median resolution time"}
						text={medResolutionTime}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Tickets stddev resolution time"}
						text={stddevResolutionTime}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Tickets created last month"}
						text={createTicketsLastMonth}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Correlation tickets priority message count"}
						text={correlationTicketsMessageCount}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<StatisticCardInfo
						title={"Average tickets message count"}
						text={avrMessageCount}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<ChartTitleLayout chartTitle={"Season orders analysis"} chartWidth={12}>
					{seasonOrdersCount ? (
						<Line
							data={seasonOrdersCount}
							options={seasonOrdersCount.options}
						/>
					) : (
						<Loader loaderHeight={300} />
					)}
				</ChartTitleLayout>
				<ChartTitleLayout chartTitle={"Tickets priority count"} chartWidth={12}>
					{ticketsPriorityCount ? (
						<Bar data={ticketsPriorityCount} />
					) : (
						<Loader loaderHeight={300} />
					)}
				</ChartTitleLayout>
			</Grid>
		</Box>
	);
};

export default CardBlock;
