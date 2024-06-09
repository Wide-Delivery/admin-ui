import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface ChartTitleLayoutProps {
	children: React.ReactNode;
	chartTitle: string;
	chartWidth: number;
}
const ChartTitleLayout: FC<ChartTitleLayoutProps> = ({
	children,
	chartTitle,
	chartWidth,
}) => {
	return (
		<Grid item xs={chartWidth} spacing={3}>
			<Typography textAlign={"center"} variant="h6">
				{chartTitle}
			</Typography>
			{children}
		</Grid>
	);
};

export default ChartTitleLayout;
