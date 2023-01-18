import { PlusIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconButton } from "./IconButton";

export default {
	title: "Components/IconButton",
	component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: "primary",
	size: "md",
	children: <PlusIcon />,
	disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
	variant: "outlined",
	size: "md",
	children: <PlusIcon />,
	disabled: false,
};

export const Invisible = Template.bind({});
Invisible.args = {
	variant: "invisible",
	size: "md",
	children: <PlusIcon />,
	disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
	variant: "danger",
	size: "md",
	children: <PlusIcon />,
	disabled: false,
};
