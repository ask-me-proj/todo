import { FC } from "react";
import { ButtonProps } from "./Button.types";
import { useButtonStyles } from "./hooks";

const Button: FC<ButtonProps> = (props) => {
	const { variant, size, children, trailingIcon, leadingIcon } = props;
	const styles = useButtonStyles(props);

	if (!variant) {
		throw new Error("Button can't be rendered, becouse variant prop isn't defined");
	}

	if (!size) {
		throw new Error("Button can't be rendered, becouse size props isn't defined");
	}

	return (
		<button className={styles} {...props}>
			{leadingIcon}
			{children}
			{trailingIcon}
		</button>
	);
};

Button.defaultProps = {
	variant: "primary",
	size: "md",
	children: "Click me!",
};

export { Button };
