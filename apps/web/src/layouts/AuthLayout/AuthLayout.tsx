import { FC } from "react";
import { LayoutProps } from "../types";
import styles from "./AuthLayout.module.scss";

const AuthLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<main className={styles.AuthLayout}>
			<div className={styles.AuthWrapper}>{children}</div>
		</main>
	);
};

export { AuthLayout };
