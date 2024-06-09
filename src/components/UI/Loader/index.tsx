import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";

interface LoaderProps {
	loaderHeight: number | string;
}
const Loader: FC<LoaderProps> = ({ loaderHeight }) => (
	<Box
		sx={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: loaderHeight,
		}}
	>
		<CircularProgress />
	</Box>
);

export default Loader;
