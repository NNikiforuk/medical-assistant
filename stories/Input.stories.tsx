import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/common/Input/Input";

const meta: Meta<typeof Input> = {
	component: Input,
	title: "Input",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {
	args: {
		type: "email",
		label: "Email",
		msg: false,
	},
};

export const ErrorEmail: Story = {
	args: {
		type: "email",
		label: "Email",
		msg: true,
	},
};

export const Password: Story = {
	args: {
		type: "password",
		label: "Password",
		msg: false,
	},
};

export const ErrorPassword: Story = {
	args: {
		type: "password",
		label: "Password",
		msg: true,
	},
};
