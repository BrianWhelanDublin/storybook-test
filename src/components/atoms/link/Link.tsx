import React from "react";

interface LinkProps {
	href: string;
	text: string;
}

const Link: React.FC<LinkProps> = ({ href, text }) => {
	return <a href={href}>{text}</a>;
};

export default Link;
