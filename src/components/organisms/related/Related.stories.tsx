import { ComponentStory, ComponentMeta } from "@storybook/react";

import Related from "./Related";

export default {
	title: "Components/Molecules/Related",
	component: Related,
} as ComponentMeta<typeof Related>;

const Template: ComponentStory<typeof Related> = (args) => <Related {...args} />;

export const defaultRelated = Template.bind({});

defaultRelated.args = {
	intro: {
		cta: { href: "/posts", label: "View all posts" },
		subtitle: "Related posts",
		text: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
		title: "Continue reading our beauty insights",
	},
	items: [
		{
			category: { href: "/category/beauty-routine", label: "Beauty routine" },
			description:
				"Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
			image: {
				mediaItemUrl: "https://source.unsplash.com/random/500x300",
				altText: "",
			},
			slug: "creating-a-positive-day",
			title: "Creating a Positive Day",
		},
		{
			category: { href: "/category/beauty-routine", label: "Beauty routine" },
			description:
				"Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
			image: {
				mediaItemUrl: "https://source.unsplash.com/random/500x300",
				altText: "",
			},
			slug: "creating-a-positive-day",
			title: "Creating a Positive Day",
		},
		{
			category: { href: "/category/beauty-routine", label: "Beauty routine" },
			description:
				"Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
			image: {
				mediaItemUrl: "https://source.unsplash.com/random/500x300",
				altText: "",
			},
			slug: "creating-a-positive-day",
			title: "Creating a Positive Day",
		},
	],
};
