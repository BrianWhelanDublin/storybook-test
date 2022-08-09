import Parser from "html-react-parser";

const config = {};

export const ParseHTML = (html: string) => {
	const clean = Parser(html, config);
	return clean;
};

export default ParseHTML;
