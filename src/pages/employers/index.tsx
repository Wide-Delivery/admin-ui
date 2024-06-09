import { Box } from "@mui/material";
import PageTitle from "@/components/UI/PageTitle";

const EmployersPage = () => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
			<PageTitle pageTitle={"Employers page"} />
		</Box>
	);
};

export default EmployersPage;
