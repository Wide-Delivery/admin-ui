import { Typography } from "@mui/material";
import { FC } from "react";

interface PageTitleProps {
	pageTitle: string;
}

const PageTitle: FC<PageTitleProps> = ({ pageTitle }) => {
	return (
		<Typography variant="h2" sx={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
			{pageTitle}
		</Typography>
	);
};

export default PageTitle;
