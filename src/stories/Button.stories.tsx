import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};
export const Default = Template.bind({});
Default.args = {
  color: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  size: "lg",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  size: "sm",
};
