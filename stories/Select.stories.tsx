import type { Meta, StoryObj } from "@storybook/react";
import Select from "@/components/common/Select/Select";

const meta: Meta<typeof Select> = {
	component: Select,
	title: "Select",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
