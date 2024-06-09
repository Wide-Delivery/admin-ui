import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styles from "./styles.module.scss";
import { SignInFormInputs } from "@/utils/types";
import { useState } from "react";
import { signInPageTheme } from "@/utils/theme";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginInitialValue } from "@/utils/validation/initialValue";
import { LoginSchema } from "@/utils/validation/validationSchema";
import useAuthStore from "@/store/AuthStore";
import { useAuthStoreType } from "@/store/AuthStore/types";

const SignInForm = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const login = useAuthStore((state: useAuthStoreType) => state.login);

	const { control, handleSubmit, reset } = useForm({
		defaultValues: loginInitialValue,
		resolver: yupResolver(LoginSchema),
	});

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
		try {
			await login(data);
			navigate("/");
			reset();
		} catch (error) {
			setErrorMessage(error.response.data.error);
		}
	};

	return (
		<ThemeProvider theme={signInPageTheme(theme)}>
			<Stack
				className={styles["sign-in-form-wrapper"]}
				sx={{ width: "85%" }}
				p={2.5}
				direction={"column"}
				spacing={{ md: 6, xs: 3 }}
			>
				<Stack direction={"column"} spacing={2}>
					<Typography variant="h5" color="white">
						Sign in
					</Typography>
					<Divider
						orientation="horizontal"
						flexItem
						color="#64b5f6"
						sx={{
							width: "100px",
							borderBottomWidth: "2.5px",
						}}
					/>
					<Box>
						<Typography
							variant="body1"
							color="white"
							align="left"
							sx={{
								opacity: 0.5,
								fontSize: {
									sm: "1rem",
									xs: "0.80rem",
								},
							}}
						>
							Enter your email address below and we will email you your login
							page.
						</Typography>
						<Typography
							variant="body1"
							color="white"
							align="left"
							sx={{
								opacity: 0.5,
								fontSize: {
									sm: "1rem",
									xs: "0.80rem",
								},
							}}
						>
							You can sign in from your Web Address, which looks like this:
						</Typography>
					</Box>
				</Stack>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<Stack direction={"column"} spacing={{ sm: 7, xs: 2 }}>
						<Stack direction={"column"}>
							<Stack direction={"column"} spacing={3}>
								<Controller
									name="email"
									control={control}
									rules={{ required: true }}
									render={({ field, fieldState: { error } }) => (
										<TextField
											id="sign-in-email"
											{...field}
											label={"Email"}
											type="email"
											error={!!error}
											helperText={error ? error.message : null}
											variant="standard"
										/>
									)}
								/>
								<Controller
									name="password"
									control={control}
									rules={{ required: true }}
									render={({ field, fieldState: { error } }) => (
										<TextField
											id="sign-in-password"
											{...field}
											type={showPassword ? "text" : "password"}
											label={"Password"}
											error={!!error}
											helperText={
												error
													? error.message
													: "Password must be at least 8 characters and required"
											}
											FormHelperTextProps={{
												variant: "standard",
												sx: {
													color: error ? "red" : "white",
													opacity: error ? 1 : 0.5,
												},
											}}
											variant="standard"
											InputProps={{
												endAdornment: (
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															onClick={handleClickShowPassword}
														>
															{showPassword ? (
																<VisibilityOff sx={{ color: "white" }} />
															) : (
																<Visibility sx={{ color: "white" }} />
															)}
														</IconButton>
													</InputAdornment>
												),
											}}
										/>
									)}
								/>
							</Stack>
							{errorMessage && (
								<Typography color="error" align="left">
									{errorMessage}
								</Typography>
							)}
						</Stack>
						<Stack
							direction={{ sm: "row", xs: "column" }}
							spacing={{ md: 5, xs: 2 }}
						>
							<FormControlLabel
								sx={{ flexBasis: { lg: "50%", xs: "100%" } }}
								label="Remember me"
								control={
									<Controller
										name="remember"
										control={control}
										render={({ field }) => (
											<Checkbox sx={{ pl: "unset" }} {...field} size="large" />
										)}
									/>
								}
							/>
							<Button
								variant="contained"
								type="submit"
								fullWidth
								sx={{
									py: {
										sm: "16px",
										xs: "12px",
									},
								}}
							>
								Login
							</Button>
						</Stack>
					</Stack>
				</form>
			</Stack>
		</ThemeProvider>
	);
};

export default SignInForm;
