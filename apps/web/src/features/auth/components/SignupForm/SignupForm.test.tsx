import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { render, screen, userEvent } from "../../../../utils/test-utils";
import { SignupForm } from "./SignupForm";

describe("SignupForm", () => {
	const client = new QueryClient();
	const user = userEvent.setup();
	const nameValue = "John Doe";
	const emailValue = "example@example.com";
	const passwordValue = "123456";

	it("should render correctly", () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<SignupForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const nameInput = screen.getByPlaceholderText("Write username");
		const emailInput = screen.getByPlaceholderText("Write an email");
		const passwordInput = screen.getByPlaceholderText("Write a password");
		const submitButton = screen.getByRole("button", {
			name: "Sign up",
		});

		expect(nameInput).toBeInTheDocument();
		expect(nameInput).toHaveValue("");
		expect(emailInput).toBeInTheDocument();
		expect(emailInput).toHaveValue("");
		expect(passwordInput).toBeInTheDocument();
		expect(passwordInput).toHaveValue("");
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toBeDisabled();
	});

	it("should change name input value and button still should be disabled", async () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<SignupForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const nameInput = screen.getByPlaceholderText("Write username");
		const submitButton = screen.getByRole("button", {
			name: "Sign up",
		});

		await user.type(nameInput, nameValue);

		expect(nameInput).toHaveValue(nameValue);
		expect(submitButton).toBeDisabled();
	});

	it("should change email input value and button still should be disabled", async () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<SignupForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const emailInput = screen.getByPlaceholderText("Write an email");
		const submitButton = screen.getByRole("button", {
			name: "Sign up",
		});

		await user.type(emailInput, emailValue);

		expect(emailInput).toHaveValue(emailValue);
		expect(submitButton).toBeDisabled();
	});

	it("should change password value and button still should be disabled", async () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<SignupForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const passwordInput = screen.getByPlaceholderText("Write a password");
		const submitButton = screen.getByRole("button", {
			name: "Sign up",
		});

		await user.type(passwordInput, passwordValue);

		expect(passwordInput).toHaveValue(passwordValue);
		expect(submitButton).toBeDisabled();
	});

	it("should change all inputs values and button ahouldn't be disabled", async () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<SignupForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const nameInput = screen.getByPlaceholderText("Write username");
		const emailInput = screen.getByPlaceholderText("Write an email");
		const passwordInput = screen.getByPlaceholderText("Write a password");
		const submitButton = screen.getByRole("button", {
			name: "Sign up",
		});

		await user.type(nameInput, nameValue);
		await user.type(emailInput, emailValue);
		await user.type(passwordInput, passwordValue);

		expect(nameInput).toHaveValue(nameValue);
		expect(emailInput).toHaveValue(emailValue);
		expect(passwordInput).toHaveValue(passwordValue);
		expect(submitButton).not.toBeDisabled();
	});
});
