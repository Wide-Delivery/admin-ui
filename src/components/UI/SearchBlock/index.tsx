import { Button, Stack } from "@mui/material";
import styles from "./styles.module.scss";

const SearchBlock = ({ children }) => {
	return (
		<Stack
			className={styles["search-block-wrapper"]}
			p={2.5}
			direction={"column"}
			spacing={{ md: 6, xs: 3 }}
		>
			{children}
		</Stack>
	);
};

export default SearchBlock;
