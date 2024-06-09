import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

const MainLayout = () => {
	return (
		<>
			<main className={styles["main-layout"]}>
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
