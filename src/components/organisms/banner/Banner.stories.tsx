import { ComponentStory, ComponentMeta } from "@storybook/react";
import Banner from "./Banner";

export default {
	title: "Components/Molecules/Banner",
	component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const PrimaryBanner = Template.bind({});

PrimaryBanner.args = {
	content: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
	cta: {
		title: "Lowered action",
		url: "/discount",
	},
	title: "Launch discount",
	variant: "primary",
};

export const SecondaryBanner = Template.bind({});

SecondaryBanner.args = {
	content: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
	cta: {
		title: "Lowered action",
		url: "/discount",
	},
	title: "Launch discount",
	variant: "secondary",
};

export const DarkBanner = Template.bind({});

DarkBanner.args = {
	content: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
	cta: {
		title: "Lowered action",
		url: "/discount",
	},
	title: "Launch discount",
	variant: "dark",
};

export const LightBanner = Template.bind({});

LightBanner.args = {
	content: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
	cta: {
		title: "Lowered action",
		url: "/discount",
	},
	title: "Launch discount",
	variant: "light",
};
