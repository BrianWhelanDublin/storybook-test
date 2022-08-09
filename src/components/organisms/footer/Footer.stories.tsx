import { ComponentStory, ComponentMeta } from "@storybook/react";
import { title } from "process";

import Footer from "./Footer";

export default {
	title: "Components/Organisms/Footer",
	component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const defaultFooter = Template.bind({});

defaultFooter.args = {
	menus: [
		{
			items: [
				{ url: "#", text: "Home", id: 1 },
				{ url: "#", text: "About", id: 2 },
			],
			title: "Menu 1",
		},
		{
			items: [
				{ url: "#", text: "Contact", id: 3 },
				{ url: "#", text: "Blog", id: 4 },
			],
			title: "Menu 2",
		},
		{
			items: [
				{ url: "#", text: "Privacy", id: 1 },
				{ url: "#", text: "Cookies", id: 2 },
			],
			title: "Menu 3",
		},
	],
};
