import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";
import { style } from "../../../utils";

const useButtonStyles = (props: ButtonProps) => {
	const { variant, size, sx } = props;

	if (variant === "primary") {
		switch (size) {
			case "sm":
				return style(styles.PrimaryButtonSm, sx);
			case "md":
				return style(styles.PrimaryButtonMd, sx);
			case "lg":
				return style(styles.PrimaryButtonLg, sx);
		}
	}

	if (variant === "outlined") {
		switch (size) {
			case "sm":
				return style(styles.OutlinedButtonSm, sx);
			case "md":
				return style(styles.OutlinedButtonMd, sx);
			case "lg":
				return style(styles.OutlinedButtonLg, sx);
		}
	}

	if (variant === "invisible") {
		switch (size) {
			case "sm":
				return style(styles.InvisibleButtonSm, sx);
			case "md":
				return style(styles.InvisibleButtonMd, sx);
			case "lg":
				return style(styles.InvisibleButtonLg, sx);
		}
	}

	if (variant === "danger") {
		switch (size) {
			case "sm":
				return style(styles.DangerButtonSm, sx);
			case "md":
				return style(styles.DangerButtonMd, sx);
			case "lg":
				return style(styles.DangerButtonLg, sx);
		}
	}
};

export { useButtonStyles };
