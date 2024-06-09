import Container from "@mui/material/Container";
import useStylesLayouts from "@/utils/theme/layouts.tsx";
import SignInForm from "@/components/forms/SignInForm/inedx";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

const SignInPage = () => {
	const { classes } = useStylesLayouts();

	return (
		<Box className={`${styles["sign-in-page-wrapper"]} ${classes.full}`}>
			<Container
				className={`${classes.flexCenter} ${classes.full}`}
				maxWidth={"md"}
			>
				<SignInForm />
			</Container>
		</Box>
	);
};

export default SignInPage;
