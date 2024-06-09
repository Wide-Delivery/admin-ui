import { Box } from "@mui/material";
import PageTitle from "@/components/UI/PageTitle";
import CardBlock from "@/components/CardBlock";

const StatisticPage = () => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
			<PageTitle pageTitle={"Statistic page"} />
			<CardBlock />
		</Box>
	);
};

export default StatisticPage;
