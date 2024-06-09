import { Avatar, Box, Grid, Typography } from "@mui/material";
import PageTitle from "@/components/UI/PageTitle";
import { mockClients } from "../../constants";

const ClientsPage = () => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
			<PageTitle pageTitle={"Clietns page"} />
			<Grid container spacing={4}>
				{mockClients.map((client) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={client._id.$oid}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								p: 2,
								boxShadow: 3,
								borderRadius: 2,
							}}
						>
							<Avatar
								alt={client.name}
								src={client.photo}
								sx={{ width: 100, height: 100, mb: 2 }}
							/>
							<Typography variant="h6" component="h2">
								{client.name}
							</Typography>
							<Typography variant="body2" color="textSecondary">
								Email: {client.email}
							</Typography>
							<Typography variant="body2" color="textSecondary">
								Role: {client.role}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ClientsPage;
