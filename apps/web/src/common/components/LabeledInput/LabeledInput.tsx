import { FC } from "react";
import { Input } from "../Input/Input";
import { LabeledInputProps } from "./LabeledInput.types";

const LabeledInput: FC<LabeledInputProps> = (props) => {
	const { label, labeledProps } = props;

	return (
		<label className="flex flex-col w-full gap-1 text-md dark:text-white" {...labeledProps}>
			{label}
			<Input {...props} />
		</label>
	);
};

export { LabeledInput };
