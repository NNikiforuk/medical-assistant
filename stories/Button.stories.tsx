import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Button",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		label: "Sign in",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		label: "Sign in",
	},
};

export const Disabled: Story = {
	args: {
		variant: "disabled",
		label: "Sign in",
	},
};
