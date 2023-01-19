import { PlusIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: "primary",
	size: "md",
	children: "Click me!",
	disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
	variant: "outlined",
	size: "md",
	children: "Click me!",
	disabled: false,
};

export const Invisible = Template.bind({});
Invisible.args = {
	variant: "invisible",
	size: "md",
	children: "Click me!",
	disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
	variant: "danger",
	size: "md",
	children: "Click me!",
	disabled: false,
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
	variant: "primary",
	size: "md",
	children: "Click me!",
	disabled: false,
	leadingIcon: <PlusIcon />,
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
	variant: "primary",
	size: "md",
	children: "Click me!",
	disabled: false,
	trailingIcon: <PlusIcon />,
};
