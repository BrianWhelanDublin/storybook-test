import React from "react";
import Link from "../../atoms/link/Link";
import { StyledNavigation } from "./Naviagtion.styles";

export interface Item {
	url: string;
	text: string;
	id: number;
}

interface NavigationProps {
	direction: "horizontal" | "vertical";
	items: Array<Item>;
}

const Navigation: React.FC<NavigationProps> = ({ direction, items = [] }) => {
	return (
		<StyledNavigation direction={direction}>
			{items.map((item) => (
				<Link key={item.id} href={item.url} text={item.text} />
			))}
		</StyledNavigation>
	);
};

export default Navigation;
