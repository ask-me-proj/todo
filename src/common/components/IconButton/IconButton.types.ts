import { ButtonProps } from "../Button/Button.types";

type IconButtonProps = Omit<ButtonProps, "trailingIcon | leadingIcon">;

export type { IconButtonProps };
