import { makeStyles } from "tss-react/mui";

const useStylesLayouts = makeStyles()((theme) => {
	return {
		full: {
			width: "100%",
			height: "100%",
		},
		flexCenter: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
	};
});

export default useStylesLayouts;
