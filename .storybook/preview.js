// import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { myTheme } from "../src/components/particles/themeDefault";
import GlobalStyles from "../src/components/particles/GlobalStyles";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const GlobalWrapper = (storyFn) => (
	<ThemeProvider theme={myTheme}>
		<GlobalStyles />
		{storyFn()}
	</ThemeProvider>
);

addDecorator(GlobalWrapper);
