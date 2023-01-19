import { PlusIcon } from "@radix-ui/react-icons";
import { vi } from "vitest";
import { render, screen } from "../../../utils/test-utils";
import { Button } from "./Button";

describe("Button", () => {
	it("should render the button", () => {
		render(
			<Button variant="primary" size="md">
				Click me!
			</Button>,
		);

		expect(
			screen.getByRole("button", {
				name: "Click me!",
			}),
		).toBeInTheDocument();
	});

	it("leading icon renders correctly", () => {
		render(
			<Button
				variant="primary"
				size="md"
				leadingIcon={<PlusIcon className="icon-md" aria-label="Leading icon" />}
			>
				Click me!
			</Button>,
		);

		expect(screen.getByRole("button")).toBeInTheDocument();
		expect(screen.getByLabelText("Leading icon")).toBeInTheDocument();
	});

	it("trailing icon renders correctly", () => {
		render(
			<Button
				variant="primary"
				size="md"
				trailingIcon={<PlusIcon className="icon-md" aria-label="Trailing icon" />}
			>
				Click me!
			</Button>,
		);

		expect(screen.getByRole("button")).toBeInTheDocument();
		expect(screen.getByLabelText("Trailing icon")).toBeInTheDocument();
	});

	it("onClick handler doesn't work, when button is disabled", () => {
		const func = vi.fn();
		render(
			<Button variant="primary" size="md" onClick={func} disabled>
				Click me!
			</Button>,
		);

		screen.getByRole("button").click();
		expect(func).not.toHaveBeenCalled();
	});
});
