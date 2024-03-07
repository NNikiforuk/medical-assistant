import type { Meta, StoryObj } from "@storybook/react";
import Icon from "@/components/common/Icon/Icon";

const meta: Meta<typeof Icon> = {
	component: Icon,
	title: "Icon",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Green: Story = {
	args: {
		variant: "green",
	},
};
export const Red: Story = {
	args: {
		variant: "red",
	},
};


