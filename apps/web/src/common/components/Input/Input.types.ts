import { PropsWithoutRef } from "react";
import { Size } from "../../types";

interface InputProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
	name: string;
	inputSize: Size;
	sx?: string;
}

export type { InputProps };
