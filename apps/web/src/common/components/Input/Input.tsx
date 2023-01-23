import { ErrorMessage } from "@hookform/error-message";
import { FC, Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { useInputStyles } from "./hooks";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = (props) => {
	const { name } = props;
	const {
		register,
		formState: { errors, isSubmitting },
	} = useFormContext();
	const styles = useInputStyles(props, errors);

	return (
		<Fragment>
			<input className={styles} disabled={isSubmitting} {...register(name)} {...props} />
			<ErrorMessage
				render={({ message }) => <p className="text-base text-red-500">{message}</p>}
				name={name}
				errors={errors}
			/>
		</Fragment>
	);
};

export { Input };
