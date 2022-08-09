import { ComponentStory, ComponentMeta } from "@storybook/react";

import Link from "./Link";

export default {
	title: "Components/Atoms/Link",
	component: Link,
	parameters: {
		componentSubtitle: "Simple a link tag",
	},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
	href: "#",
	text: "Link Text",
};
