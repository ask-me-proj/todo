import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { render, screen, userEvent } from "../../../../utils/test-utils";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
	const user = userEvent.setup();
	const client = new QueryClient();
	const emailValue = "example@example.com";
	const passwordValue = "123456";

	it("should render correctly with empty values", () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<LoginForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const emailInput = screen.getByPlaceholderText("Write an email");
		const passwordInput = screen.getByPlaceholderText("Write an email");
		const submitButton = screen.getByRole("button", {
			name: "Sign in",
		});

		expect(emailInput).toHaveValue("");
		expect(passwordInput).toHaveValue("");
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).toBeDisabled();
	});

	it("should change email input value and button still should be disabled", async () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<LoginForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const emailInput = screen.getByPlaceholderText("Write an email");
		const submitButton = screen.getByRole("button", {
			name: "Sign in",
		});

		await user.type(emailInput, emailValue);

		expect(emailInput).toHaveValue(emailValue);
		expect(submitButton).toBeDisabled();
	});

	it("should change password input and button still should be disabled", async () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<LoginForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const passwordInput = screen.getByPlaceholderText("Write an email");
		const submitButton = screen.getByRole("button", {
			name: "Sign in",
		});

		await user.type(passwordInput, passwordValue);

		expect(passwordInput).toHaveValue(passwordValue);
		expect(submitButton).toBeDisabled();
	});

	it("should change email and password inputs value and button should be enabled", async () => {
		render(
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<LoginForm />
				</BrowserRouter>
			</QueryClientProvider>,
		);

		const emailInput = screen.getByPlaceholderText("Write an email");
		const passwordInput = screen.getByPlaceholderText("Write an email");
		const submitButton = screen.getByRole("button", {
			name: "Sign in",
		});

		await user.type(emailInput, emailValue);
		await user.type(passwordInput, passwordValue);

		expect(submitButton).not.toBeEnabled();
	});
});
