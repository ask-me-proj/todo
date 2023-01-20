import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRHF } from "../../../utils/withRHF";
import { Input } from "./Input";

export default {
	title: "Components/Input",
	component: Input,
	decorators: [withRHF()],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: "name",
	inputSize: "md",
	placeholder: "Write a name",
};

export const Disabled = Template.bind({});
Disabled.args = {
	name: "name",
	inputSize: "md",
	disabled: true,
	placeholder: "Write a name",
};
