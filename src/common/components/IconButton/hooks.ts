import { IconButtonProps } from "./IconButton.types";
import styles from "./IconButton.module.scss";
import { style } from "../../../utils";

const useIconButtonStyles = (props: IconButtonProps) => {
	const { variant, size, sx } = props;

	if (variant === "primary") {
		switch (size) {
			case "sm":
				return style(styles.PrimaryIconButtonSm, sx);
			case "md":
				return style(styles.PrimaryIconButtonMd, sx);
			case "lg":
				return style(styles.PrimaryIconButtonLg, sx);
		}
	}

	if (variant === "outlined") {
		switch (size) {
			case "sm":
				return style(styles.OutlinedIconButtonSm, sx);
			case "md":
				return style(styles.OutlinedIconButtonMd, sx);
			case "lg":
				return style(styles.OutlinedIconButtonLg, sx);
		}
	}

	if (variant === "invisible") {
		switch (size) {
			case "sm":
				return style(styles.InvisibleIconButtonSm, sx);
			case "md":
				return style(styles.InvisibleIconButtonMd, sx);
			case "lg":
				return style(styles.InvisibleIconButtonLg, sx);
		}
	}

	if (variant === "danger") {
		switch (size) {
			case "sm":
				return style(styles.DangerIconButtonSm, sx);
			case "md":
				return style(styles.DangerIconButtonMd, sx);
			case "lg":
				return style(styles.DangerIconButtonLg, sx);
		}
	}
};

export { useIconButtonStyles };
