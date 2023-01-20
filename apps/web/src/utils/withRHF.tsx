import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import { FC, ReactNode, VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const EnvFormProvider: VFC<{ children: ReactNode }> = ({ children }) => {
	const methods = useForm();
	return (
		<FormProvider {...methods}>
			<form>{children}</form>
		</FormProvider>
	);
};

export const withRHF =
	() =>
	(Story: FC): StoryFnReactReturnType =>
		(
			<EnvFormProvider>
				<Story />
			</EnvFormProvider>
		);
