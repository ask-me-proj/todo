import { FC } from "react";
import { useIconButtonStyles } from "./hooks";
import { IconButtonProps } from "./IconButton.types";

const IconButton: FC<IconButtonProps> = (props) => {
	const { children, variant, size } = props;
	const styles = useIconButtonStyles(props);

	if (variant === undefined) {
		throw new Error("IconButton can't be rendered, because variant prop isn't defined");
	}

	if (size === undefined) {
		throw new Error("IconButton can't be rendered, because size prop isn't defined");
	}

	if (children === undefined) {
		throw new Error("IconButton can't be rendered, becouse children prop isn't defined");
	}

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	);
};

export { IconButton };
