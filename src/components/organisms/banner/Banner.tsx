import StyledBanner from "./Banner.styles";
import ParseHTML from "../../particles/parseHTML";
import Button from "../../atoms/button/Button";
import React from "react";

interface BannerProps {
	content: string;
	cta: {
		title: string;
		url: string;
	};
	title: string;
	variant?: "primary" | "secondary" | "light" | "dark";
	background?: string;
}

const Banner: React.FC<BannerProps> = ({ content, cta, title, variant, background }) => {
	return (
		<StyledBanner variant={variant} background={background} className="banner">
			<div className="banner__contents">
				{title && <h2 className="banner__title">{title}</h2>}
				{content && <div className="banner__content">{ParseHTML(content)}</div>}
				{cta && cta.title && cta.title !== "" && (
					<footer className="banner__footer">
						<Button href={cta.url}>{cta.title}</Button>
					</footer>
				)}
			</div>
		</StyledBanner>
	);
};
export default Banner;
