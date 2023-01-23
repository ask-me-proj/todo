import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";
import { style } from "../../../utils";

const useInputStyles = (props: InputProps, errors: any): string => {
	const { name, inputSize, sx } = props;
	const modifiedSx = `${styles.InputError} ${sx}`;

	// @ts-ignore
	const error = Array.isArray(errors[name]);

	switch (inputSize) {
		case "sm":
			if (error) {
				return style(styles.InputSm, modifiedSx);
			} else {
				return style(styles.InputSm, sx);
			}
		case "md":
			if (error) {
				return style(styles.InputMd, modifiedSx);
			} else {
				return style(styles.InputMd, sx);
			}
		case "lg":
			if (error) {
				return style(styles.InputLg, modifiedSx);
			} else {
				return style(styles.InputLg, sx);
			}
	}
};

export { useInputStyles };
