import { PropsWithoutRef, ReactNode } from "react";
import { UseFormProps } from "react-hook-form";
import { z } from "zod";

export interface FormProps<S extends z.ZodType<any, any>>
	extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
	children: ReactNode;
	schema: S;
	onSubmit: (values: z.infer<S>) => Promise<void>;
	initialValues?: UseFormProps<z.infer<S>>["defaultValues"];
}
