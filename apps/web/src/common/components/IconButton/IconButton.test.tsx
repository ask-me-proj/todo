import { PlusIcon } from "@radix-ui/react-icons";
import { vi } from "vitest";
import { render, screen } from "../../../utils/test-utils";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
	it("should render correctly", () => {
		render(
			<IconButton variant="primary" size="md">
				<PlusIcon aria-label="Icon" />
			</IconButton>,
		);

		expect(screen.getByRole("button")).toBeInTheDocument();
		expect(screen.getByLabelText("Icon")).toBeInTheDocument();
	});

	it("onClick handler doesn't work, when button is disabled", () => {
		const func = vi.fn();

		render(
			<IconButton variant="primary" size="md" onClick={func} disabled>
				<PlusIcon aria-label="Icon" />
			</IconButton>,
		);
	});
});
