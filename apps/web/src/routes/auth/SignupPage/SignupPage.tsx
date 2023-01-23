import { SignupForm } from "../../../features/auth";
import { AuthLayout } from "../../../layouts";

const SignupPage = () => (
	<AuthLayout>
		<h1 className="text-2xl dark:text-white bold">Sign up</h1>
		<SignupForm />
	</AuthLayout>
);

export { SignupPage };
