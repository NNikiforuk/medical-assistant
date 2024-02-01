import type { Meta, StoryObj } from "@storybook/react";
import Card from "../components/dashboard/Card/Card";

const meta: Meta<typeof Card> = {
	component: Card,
	title: "Card",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Taken: Story = {
	args: {
		isTaken: true,
	},
};

export const Todo: Story = {
	args: {
		isTaken: false,
	},
};
