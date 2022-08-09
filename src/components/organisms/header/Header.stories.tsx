import { ComponentStory, ComponentMeta } from "@storybook/react";
import { title } from "process";

import Header from "./Header";

export default {
	title: "Components/Organisms/Header",
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const defaultHeader = Template.bind({});

defaultHeader.args = {
	navigation: [
		{
			items: [
				{ url: "#", text: "Home", id: 1 },
				{ url: "#", text: "About", id: 2 },
			],
			title: "Menu 1",
		},
		{
			items: [
				{ url: "#", text: "Account", id: 1 },
				{ url: "#", text: "Sign UP", id: 2 },
			],
			title: "Menu 2",
		},
	],
};
