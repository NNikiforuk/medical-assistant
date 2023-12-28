import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
	component: Input,
	title: "Input",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {
	args: {
		variant: "email",
		label: "Email",
		msg: false,
	},
};

export const ErrorEmail: Story = {
	args: {
		variant: "errorEmail",
		label: "Email",
		msg: true,
	},
};

export const Password: Story = {
	args: {
		variant: "password",
		label: "Password",
		msg: false,
	},
};

export const ErrorPassword: Story = {
	args: {
		variant: "errorPassword",
		label: "Password",
		msg: true,
	},
};
