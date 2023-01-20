import { ComponentPropsWithoutRef } from "react";
import { InputProps } from "../Input/Input.types";

interface LabeledInputProps extends InputProps {
	label: string;
	labeledProps?: ComponentPropsWithoutRef<"label">;
}

export type { LabeledInputProps };
