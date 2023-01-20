import { render, screen, userEvent } from "../../../utils/test-utils";
import { EnvFormProvider } from "../../../utils/withRHF";
import { Input } from "./Input";

describe("Input", () => {
	const user = userEvent.setup();

	it("should render correctly", () => {
		render(
			<EnvFormProvider>
				<Input name="name" inputSize="md" placeholder="Write a name" />
			</EnvFormProvider>,
		);

		expect(screen.getByPlaceholderText("Write a name")).toBeInTheDocument();
	});

	it("should render disabled input", () => {
		render(
			<EnvFormProvider>
				<Input name="name" inputSize="md" placeholder="Write a name" disabled />
			</EnvFormProvider>,
		);

		expect(screen.getByPlaceholderText("Write a name")).toBeDisabled();
	});

	it("should change input's value", async () => {
		render(
			<EnvFormProvider>
				<Input name="name" inputSize="md" placeholder="Write a name" />
			</EnvFormProvider>,
		);

		await user.type(screen.getByPlaceholderText("Write a name"), "Hello world!");
		expect(screen.getByPlaceholderText("Write a name")).toHaveValue("Hello world!");
	});
});
