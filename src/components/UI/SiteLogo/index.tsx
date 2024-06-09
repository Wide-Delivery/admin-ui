import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface SiteLogoProps {
	logoTitle: string;
	mobileLogoTitle: string;
}

const SiteLogo: FC<SiteLogoProps> = ({ logoTitle, mobileLogoTitle }) => {
	return (
		<Box
			component={Link}
			to="/"
			sx={{
				display: "grid",
				placeContent: "center",
				background: "black",
				margin: { sm: "20px" },
				minHeight: "50px",
				fontSize: "clamp(1.5rem, 1rem + 18vw, 15rem)",
				fontWeight: 700,
				textTransform: "uppercase",
				textDecoration: "none",
				color: "white",
				"& > div": {
					gridArea: "1/1/-1/-1",
				},
			}}
		>
			<Typography
				sx={{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 48%, 0% 58%)",
					display: { xs: "none", sm: "block" },
				}}
			>
				{logoTitle}
			</Typography>
			<Typography
				sx={{
					clipPath: "polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%)",
					color: "white",
					background: "linear-gradient(177deg, black 53%, black 65%)",
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					transform: "translateX(-0.02em)",
					marginTop: "-1.4em",
					display: { xs: "none", sm: "block" },
				}}
			>
				{logoTitle}
			</Typography>
			<Typography
				sx={{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 48%, 0% 58%)",
					display: { xs: "block", sm: "none" },
				}}
			>
				{mobileLogoTitle}
			</Typography>
			<Typography
				sx={{
					clipPath: "polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%)",
					color: "white",
					background: "linear-gradient(177deg, black 53%, black 65%)",
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					transform: "translateX(-0.02em)",
					marginTop: "-1.4em",
					display: { xs: "block", sm: "none" },
				}}
			>
				{mobileLogoTitle}
			</Typography>
		</Box>
	);
};

export default SiteLogo;
