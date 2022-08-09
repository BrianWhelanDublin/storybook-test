import styled, { DefaultTheme } from "styled-components";

interface Props {
	theme: DefaultTheme;
	href?: string;
	varient?: "primary" | "secondary" | "tertiary"
	icon?: "bag" | "cart" | "plus" | "user" | "x"
}

const buttonBackground = ({varient, theme} : Props) => {
	// Fallback value if we can't get access to props
	if (!theme || !theme.primary) return "#000000";
	// If no variant is specified, return the primary colour in our theme
	if (!varient) return theme.primary;

	// Dynamically determine the background colour based on props
	let colour;
	switch (varient) {
		case "primary":
			colour = theme.primary;
			break;
		case "secondary":
			colour = theme.secondary;
			break;
		case "tertiary":
			colour = theme.tertiary;
			break;
		default:
			colour = theme.primary;
			break;
	}

	return colour;
};

export const StyledButton = styled.button<Props>`
	align-items: center;
	display: inline-flex;
	padding: 16px;
	background-color: ${props => buttonBackground(props)};
	border: none;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	color: ${(props) => props.theme.white};
	cursor: pointer;
	font-weight: 700;
	line-height: 1;
	outline: none;
	text-decoration: none;
	transition: all 0.15s ease;
	white-space: nowrap;
	.button__icon {
		display: inline-block;
		margin-right: 16px;
	}
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })``;
