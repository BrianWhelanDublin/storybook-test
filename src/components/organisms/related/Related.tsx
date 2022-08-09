import StyledRelated from "./Realeated.styles";
import ParseHTML from "../../particles/parseHTML";
import Intro, { IntroProps } from "../../molecules/intro/Intro";
import React from "react";

export interface RelatedProps {
	intro: IntroProps;
	items: Array<Item>;
	variant?: string;
}

const Related: React.FC<RelatedProps> = ({ intro, items, variant }) => {
	if (!items) return null;
	if (!items.length) return null;
	return (
		<StyledRelated className="related" variant={variant}>
			<div className="related__contents">
				<Intro {...intro} />
				<div className="related__items">
					{items.map((item) => (
						<RelatedItem {...item} />
					))}
				</div>
			</div>
		</StyledRelated>
	);
};

export interface Item {
	category: { href: string; label: string };
	description: string;
	image: { mediaItemUrl: string; altText: string };
	slug: string;
	title: string;
}

const RelatedItem: React.FC<Item> = ({ category, description, image, slug, title }) => (
	<div className="related-item">
		{image && slug && (
			<a href={`/${slug}`}>
				<div className="related-item__image">
					<img src={image.mediaItemUrl} alt={title} />
				</div>
			</a>
		)}
		{category && category.href && category.label && (
			<h4 className="related-item__subtitle">
				<a href={category.href}>{category.label}</a>
			</h4>
		)}
		<h3 className="related-item__title">
			<a href={`/${slug}`}>{title}</a>
		</h3>
		<div className="related-item__description">{ParseHTML(description)}</div>
		<a href="#">View article</a>
	</div>
);

export default Related;
