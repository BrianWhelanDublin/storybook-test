import { ComponentStory, ComponentMeta } from "@storybook/react";

import Intro from "./Intro";

export default {
	title: "Components/Molecules/Intro",
	component: Intro,
	argTypes: {
		direction: {
			control: {
				type: "select",
			},
		},
	},
} as ComponentMeta<typeof Intro>;

const Template: ComponentStory<typeof Intro> = (args) => <Intro {...args} />;

export const defaultIntro = Template.bind({});

defaultIntro.args = {
	cta: {
		href: "#",
		label: "Cta",
	},
	subtitle: "Subtitle",
	title: "Title",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate imperdiet ipsum. Integer vulputate augue non nulla iaculis, sed dictum purus blandit. Nam blandit massa vitae est finibus, sit amet lobortis mauris sagittis.",
};
