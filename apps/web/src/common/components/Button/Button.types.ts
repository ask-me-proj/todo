import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Size } from "../../types";

type ButtonVariants = "primary" | "outlined" | "invisible" | "danger";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	variant: ButtonVariants;
	size: Size;
	leadingIcon?: ReactNode;
	trailingIcon?: ReactNode;
	children: ReactNode;
	sx?: string;
}

export type { ButtonProps };
