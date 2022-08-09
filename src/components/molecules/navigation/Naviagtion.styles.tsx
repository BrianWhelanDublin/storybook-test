import styled, { DefaultTheme } from "styled-components";

interface StyledNavigationProps {
	direction: string;
}

export const StyledNavigation = styled.div<StyledNavigationProps>`
	display: flex;
	flex-direction: ${(props) => (props.direction !== "horizontal" ? `column` : undefined)};
	padding: 16px;
	a + a {
		margin-left: ${(props) => (props.direction === "horizontal" ? `24px` : undefined)};
		margin-top: ${(props) => (props.direction !== "horizontal" ? `24px` : undefined)};
	}
`;
