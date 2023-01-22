import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, LabeledInput } from "../../../../common";
import { useSignup } from "../../hooks";
import { SignupSchema } from "../../schemas";

const SignupForm = () => {
	const [nameValue, setNameValue] = useState<string>("");
	const [emailValue, setEmailValue] = useState<string>("");
	const [passwordValue, setPasswordValue] = useState<string>("");
	const { signup, isLoading, isError, error } = useSignup();
	const disabled = nameValue === "" || emailValue === "" || passwordValue === "";

	return (
		<Form
			className="flex flex-col w-full gap-3"
			schema={SignupSchema}
			initialValues={{
				name: nameValue,
				email: emailValue,
				password: passwordValue,
			}}
			onSubmit={async (values) => {
				await signup(values);
			}}
		>
			<LabeledInput
				name="name"
				label="Name"
				type="text"
				inputSize="md"
				inputMode="text"
				placeholder="Write username"
				defaultValue={nameValue}
				onChange={(e: any) => setNameValue(e.target.value)}
				sx="w-full"
			/>
			<LabeledInput
				name="email"
				label="Email"
				type="email"
				inputSize="md"
				inputMode="email"
				placeholder="Write an email"
				defaultValue={emailValue}
				onChange={(e: any) => setEmailValue(e.target.value)}
				sx="w-full"
			/>
			<LabeledInput
				name="password"
				label="Password"
				type="password"
				inputSize="md"
				inputMode="text"
				placeholder="Write a password"
				defaultValue={nameValue}
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
				sx="w-full mt-3"
				disabled={isLoading || disabled}
			>
				{isLoading ? "Signing up" : "Sign up"}
			</Button>
			<div className="flex flex-row justify-center w-full gap-2">
				<p className="text-base dark:text-original-dark-100">Already have an account?</p>
				<Link className="text-base text-indigo-500" to={"/login"}>
					Sign in
				</Link>
			</div>
		</Form>
	);
};

export { SignupForm };
