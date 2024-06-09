import { alpha, createTheme } from "@mui/material";

export const signInPageTheme = () =>
	createTheme({
		components: {
			MuiInput: {
				styleOverrides: {
					root: {
						color: "white",
						"&::before": {
							borderBottomColor: "white",
						},
						"&:hover:not(.Mui-disabled, .Mui-error):before": {
							borderBottomColor: "lightgray",
						},
						"&.Mui-focused:after": {
							borderBottomColor: "gray",
						},
					},
				},
			},
			MuiInputLabel: {
				styleOverrides: {
					root: {
						color: "white",
						"&.Mui-focused": {
							color: "gray",
						},
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						background: "white",
						color: "black",
						"&:hover": {
							background: alpha("#ffffff", 0.5),
						},
					},
				},
			},
			MuiFormControlLabel: {
				styleOverrides: {
					root: {
						color: "white",
					},
				},
			},
			MuiCheckbox: {
				styleOverrides: {
					root: {
						color: "white",
						"&.Mui-checked": {
							color: "white",
						},
					},
				},
			},
		},
	});
