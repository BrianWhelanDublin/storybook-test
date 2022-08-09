import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navigation from "./Navigation";

export default {
	title: "Components/Molecules/Navigation",
	component: Navigation,
	argTypes: {
		direction: {
			control: {
				type: "select",
			},
		},
	},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const HorizontalNavigation = Template.bind({});

HorizontalNavigation.args = {
	direction: "horizontal",
	items: [
		{ url: "#", text: "Home", id: 1 },
		{ url: "#", text: "About", id: 2 },
		{ url: "#", text: "Contact", id: 3 },
		{ url: "#", text: "Blog", id: 4 },
	],
};

export const VerticalNavigation = Template.bind({});

VerticalNavigation.args = {
	direction: "vertical",
	items: [
		{ url: "#", text: "Home", id: 1 },
		{ url: "#", text: "About", id: 2 },
		{ url: "#", text: "Contact", id: 3 },
		{ url: "#", text: "Blog", id: 4 },
	],
};
