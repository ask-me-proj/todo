import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, LabeledInput } from "../../../../common";
import { useLogin } from "../../hooks";
import { LoginSchema } from "../../schemas";

const LoginForm = () => {
	const { login, isLoading, isError, error } = useLogin();
	const [emailValue, setEmailValue] = useState<string>("");
	const [passwordValue, setPasswordValue] = useState<string>("");
	const disabled = emailValue === "" || passwordValue === "";

	return (
		<Form
			className="flex flex-col w-full gap-2"
			schema={LoginSchema}
			initialValues={{
				email: passwordValue,
				password: emailValue,
			}}
			onSubmit={async (values) => {
				await login(values);
			}}
		>
			<LabeledInput
				name="email"
				label="Email"
				type="email"
				inputSize="md"
				placeholder="Write an email"
				inputMode="email"
				defaultValue={emailValue}
				onChange={(e: any) => setEmailValue(e.target.value)}
				sx="w-full"
			/>
			<LabeledInput
				name="password"
				label="Password"
				type="password"
				inputSize="md"
				placeholder="Write a password"
				inputMode="text"
				defaultValue={passwordValue}
				onChange={(e: any) => setPasswordValue(e.target.value)}
				sx="w-full"
			/>
			{isError && typeof error === "string" ? (
				<p className="text-base text-red-500" role="alert">
					{error}
				</p>
			) : (
				""
			)}
			<Button
				variant="primary"
				size="md"
				type="submit"
				disabled={isLoading || disabled}
				sx="w-full mt-3"
			>
				{isLoading ? "Signing in" : "Sign in"}
			</Button>
			<div className="flex flex-row justify-center w-full gap-2">
				<p className="text-base dark:text-original-dark-100">Dont have an account?</p>
				<Link className="text-base text-indigo-500" to={"/signup"}>
					Sign up
				</Link>
			</div>
		</Form>
	);
};

export { LoginForm };
