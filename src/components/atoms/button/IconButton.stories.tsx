import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
	title: "Components/Atoms/Icon Button",
	component: Button,
	argTypes: {
		icon: {
			control: {
				type: "select",
			},
			options: ["bag", "cart", "plus", "user", "x"],
		},
	},
	parameters: {
		componentSubtitle: "Displays an incon in a button",
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BagIcon = Template.bind({});

BagIcon.args = {
	children: "Buy Now",
	varient: "primary",
	icon: "bag",
};

export const CartIcon = Template.bind({});

CartIcon.args = {
	children: "Cart",
	varient: "primary",
	icon: "cart",
};

export const PlusIcon = Template.bind({});

PlusIcon.args = {
	children: "Add",
	varient: "primary",
	icon: "plus",
};

export const UserIcon = Template.bind({});

UserIcon.args = {
	children: "Account",
	varient: "primary",
	icon: "user",
};

export const XIcon = Template.bind({});

XIcon.args = {
	children: "Exit",
	varient: "primary",
	icon: "x",
};
