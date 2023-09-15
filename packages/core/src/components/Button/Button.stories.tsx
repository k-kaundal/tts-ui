import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }, // To display a "clicked" action in the "Actions" panel
    animations: {
      control: {
        type: 'object'
      }
    }
  }
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained Button',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined Button',
  variant: 'outlined',
};

// Demonstrate button with custom animation settings
export const CustomAnimation = Template.bind({});
CustomAnimation.args = {
  children: 'Animated Button',
  variant: 'contained',
  animations: {
    transitionDuration: "0.4s",
    hoverTransform: "scale(1.1)",
    hoverBackgroundColor: "#ff0000",
    hoverTextColor: "#ffffff",
    activeTransform: "scale(0.9)"
  }
};

// Demonstrate button without animation
export const NoAnimation = Template.bind({});
NoAnimation.args = {
  children: 'No Animation Button',
  variant: 'contained',
  animations: {
    transitionDuration: "0s",
    hoverTransform: "none",
    hoverBackgroundColor: "#007bff",
    hoverTextColor: "#ffffff",
    activeTransform: "none"
  }
};
