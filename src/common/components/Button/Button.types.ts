import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariants = "primary" | "outlined" | "invisible" | "danger";
type ButtonSizes = "lg" | "md" | "sm";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	variant: ButtonVariants;
	size: ButtonSizes;
	leadingIcon?: ReactNode;
	trailingIcon?: ReactNode;
	children: ReactNode;
	sx?: string;
}

export type { ButtonProps };
