import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
import { FC } from "react";

interface ModalLayoutProps {
	active: boolean;
	setActive: (state: boolean) => void;
	children: React.ReactNode;
}

const ModalLayout: FC<ModalLayoutProps> = ({ active, setActive, children }) => {
	return createPortal(
		<div
			className={`${styles["modal"]} ${active ? styles.active : ""}`}
			onClick={() => setActive(false)}
		>
			<div
				className={`${styles["modal-content"]} ${active ? styles.active : ""}`}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default ModalLayout;
