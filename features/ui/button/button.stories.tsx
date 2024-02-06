import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonSize, ButtonColor } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <div>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  color: ButtonColor.primary,
  disabled: false,
  label: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  disabled: false,
  iconSrc: "/icons/circle.svg",
  label: "Button CTA",
};
LeadingIcon.parameters = {
  viewMode: "docs",
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  disabled: false,
  trailingIconSrc: "/icons/circle.svg",
  label: "Button CTA",
};
TrailingIcon.parameters = {
  viewMode: "docs",
};

export const Icon = Template.bind({});
Icon.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  disabled: false,
  iconSrc: "/icons/circle.svg",
};
TrailingIcon.parameters = {
  viewMode: "docs",
};
