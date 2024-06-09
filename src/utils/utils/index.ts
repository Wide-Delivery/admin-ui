import { TokenType } from "@/types";
import { RoleRoutesType } from "../types";

export const setLocalStorageUserData = (userData: TokenType) => {
	localStorage.setItem("token", userData.accessToken);
	localStorage.setItem("r_token", userData.refreshToken);
	// localStorage.setItem("user", userData.user);
};
export const clearLocalStorageUserData = () => {
	localStorage.clear();
};
export const hasAccess = (pathname: string, permissionArr: any) => {
	return permissionArr.routes.some((route: RoleRoutesType) => {
		const regex = new RegExp(`^${route.routeLink}(/|$)`);
		return regex.test(pathname);
	});
};

export const processDataForLineChart = (data, labelTitle) => {
	const labels = Object.keys(data);
	const values = Object.values(data);
	return {
		labels,
		datasets: [
			{
				label: labelTitle,
				data: values,
				fill: false,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
			},
		],
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	};
};

export const processDataForPieChart = (data) => {
	const labels = Object.keys(data);
	const values = Object.values(data);
	return {
		labels,
		datasets: [
			{
				data: values,
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#9966FF",
					"#FF9F40",
					"#FFCD56",
					"#4BC0C0",
					"#F7464A",
					"#46BFBD",
					"#FDB45C",
					"#949FB1",
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#9966FF",
					"#FF9F40",
					"#FFCD56",
					"#4BC0C0",
					"#F7464A",
					"#46BFBD",
					"#FDB45C",
					"#949FB1",
				],
			},
		],
	};
};
export const processDataForBarChart = (data) => {
	const labels = Object.keys(data);
	const values = Object.values(data);

	return {
		labels: labels,
		datasets: [
			{
				label: "Count",
				data: values,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
				],
				borderWidth: 1,
			},
		],
	};
};
export const convertMillisecondsToHours = (milliseconds) => {
	return (milliseconds / 3600000).toFixed(1);
};
