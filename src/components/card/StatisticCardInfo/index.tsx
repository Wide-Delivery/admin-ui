import { Card, CardContent, Box, Typography } from "@mui/material";
import { FC } from "react";
import Loader from "../../UI/Loader";

interface StatisticCardInfoProps {
	title: string;
	text: string;
}
const StatisticCardInfo: FC<StatisticCardInfoProps> = ({ title, text }) => {
	return (
		<Card sx={{ border: "1px solid black" }}>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						height: 100,
					}}
				>
					{text ? (
						<>
							<Typography variant="h6" component="div">
								{title}
							</Typography>
							<Typography variant="h5" color="text.secondary" mt={"auto"}>
								{text}
							</Typography>
						</>
					) : (
						<Box
							sx={{ display: "flex", justifyContent: "center", width: "100%" }}
						>
							<Loader loaderHeight={100} />
						</Box>
					)}
				</Box>
			</CardContent>
		</Card>
	);
};

export default StatisticCardInfo;
