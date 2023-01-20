import { render, screen, userEvent } from "../../../utils/test-utils";
import { EnvFormProvider } from "../../../utils/withRHF";
import { LabeledInput } from "./LabeledInput";

describe("LabeledInput", () => {
	const user = userEvent.setup();

	it("should render correctly", () => {
		render(
			<EnvFormProvider>
				<LabeledInput name="name" label="Name" inputSize="md" placeholder="Write a name" />
			</EnvFormProvider>,
		);

		expect(screen.getByPlaceholderText("Write a name")).toBeInTheDocument();
		expect(screen.getByText("Name")).toBeInTheDocument();
	});

	it("should render disabled input inside label", () => {
		render(
			<EnvFormProvider>
				<LabeledInput name="name" label="Name" inputSize="md" placeholder="Write a name" disabled />
			</EnvFormProvider>,
		);

		expect(screen.getByPlaceholderText("Write a name")).toBeDisabled();
	});

	it("should change input's value", async () => {
		render(
			<EnvFormProvider>
				<LabeledInput name="name" label="Name" inputSize="md" placeholder="Write a name" />
			</EnvFormProvider>,
		);

		await user.type(screen.getByPlaceholderText("Write a name"), "Hello world!");
		expect(screen.getByPlaceholderText("Write a name")).toHaveValue("Hello world!");
	});
});
