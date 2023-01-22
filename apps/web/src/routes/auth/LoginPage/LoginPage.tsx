import { FC } from "react";
import { LoginForm } from "../../../features/auth";
import { AuthLayout } from "../../../layouts";

const LoginPage: FC = () => (
	<AuthLayout>
		<h1 className="text-xl dark:text-white bold">Login</h1>
		<LoginForm />
	</AuthLayout>
);

export { LoginPage };
