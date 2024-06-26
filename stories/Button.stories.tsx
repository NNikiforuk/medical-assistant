import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/common/Button/Button";

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Button",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		label: "Button"
	},
};

export const Disabled: Story = {
	args: {
		label: "Button",
	},
};


