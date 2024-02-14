import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./menu";

const meta = {
  title: "ui/organisms/Menu",
  component: Menu,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuList: [
      { icon: "menu", label: "Menu" },
      { icon: "car", label: "Delivery" },
      { icon: "payment", label: "Payment" },
      { icon: "about", label: "About" },
    ],
  },
};
