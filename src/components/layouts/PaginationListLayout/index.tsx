import { Box, Grid, Pagination } from "@mui/material";
import { FC } from "react";

interface PaginationListLayoutProps {
	children: React.ReactNode;
	currentPage: number;
	totalPage: number;
	handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationListLayout: FC<PaginationListLayoutProps> = ({
	children,
	currentPage,
	totalPage,
	handleChange,
}) => {
	return (
		<>
			<Box
				sx={{
					overflow: "auto",
					display: "flex",
					flexDirection: "column",
					gap: 2,
					height: totalPage !== 1 ? "50vh" : "",
				}}
			>
				<Grid container spacing={2} maxHeight={"50vh"}>
					{children}
				</Grid>
			</Box>
			{totalPage && totalPage !== 1 ? (
				<Pagination
					count={totalPage}
					page={currentPage}
					sx={{
						mx: "auto",
					}}
					onChange={handleChange}
				/>
			) : (
				""
			)}
		</>
	);
};

export default PaginationListLayout;
