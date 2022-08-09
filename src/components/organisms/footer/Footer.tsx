import React from "react";
import Navigation, { Item } from "../../molecules/navigation/Navigation";
import StyledFooter from "./Footer.styles";

export interface Menus {
	items: Array<Item>;
	title: string;
}

interface FooterProps {
	menus: Array<Menus>;
}

const Footer: React.FC<FooterProps> = ({ menus }) => {
	return (
		<StyledFooter>
			<div className="footer__contents">
				<div className="footer__wrapper">
					{menus.map(({ items, title }) => (
						<div className="footer__navigation" key={`footer-nav-${title}`}>
							{title && <h3 className="footer__heading">{title}</h3>}
							<Navigation direction="vertical" items={items} />
						</div>
					))}
				</div>

				<div className="footer__newsletter">
					<h4 className="footer__heading">Join our newsletter</h4>
					<p>We will send you updates on new products and discounts.</p>
				</div>

				<nav className="footer__copyright">
					<p>Copyright &copy; Celtic Elements {new Date().getFullYear()}</p>
					<a href="" rel="noopener noreferrer" target="_blank">
						Website by Joe Blogs
					</a>
				</nav>
			</div>
		</StyledFooter>
	);
};

export default Footer;
