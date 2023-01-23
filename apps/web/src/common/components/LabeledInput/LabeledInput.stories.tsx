import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRHF } from "../../../utils/withRHF";
import { LabeledInput } from "./LabeledInput";

export default {
	title: "Components/LabeledInput",
	component: LabeledInput,
	decorators: [withRHF()],
} as ComponentMeta<typeof LabeledInput>;

const Template: ComponentStory<typeof LabeledInput> = (args) => <LabeledInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: "name",
	label: "Name",
	placeholder: "Write a name",
	inputSize: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
	name: "name",
	label: "Write a name",
	placeholder: "Write a name",
	inputSize: "md",
	disabled: true,
};
