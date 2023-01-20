import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithoutRef, ReactNode } from "react";
import { FormProvider, useForm, UseFormProps } from "react-hook-form";
import { z } from "zod";

export function Form<S extends z.ZodType<any, any>>(props: FormProps<S>) {
	const { schema, initialValues, children, onSubmit, ...rest } = props;

	const ctx = useForm<z.infer<S>>({
		mode: "onBlur",
		resolver: zodResolver(schema),
		defaultValues: initialValues,
	});

	return (
		<FormProvider {...ctx}>
			<form
				onSubmit={ctx.handleSubmit(async (values) => {
					await onSubmit(values);
				})}
				{...rest}
			>
				{children}
			</form>
		</FormProvider>
	);
}
