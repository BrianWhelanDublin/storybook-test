import styled, { DefaultTheme } from "styled-components";

interface Props {
	theme: DefaultTheme;
}

export const StyledIntro = styled.section<Props>`
	margin-bottom: 48px;
	width: 100%;
	text-align: center;
	@media (min-width: 992px) {
		margin-bottom: 56px;
	}
	.intro {
		&__contents {
			margin: 0 auto;
			max-width: ${(props) => props.theme.gridMax};
		}
		&__subtitle {
			margin: 0 auto 32px;
			/* Secondary-500 */
			color: #54aac5;
			font-size: 14px;
			letter-spacing: 0.19em;
			line-height: 140%;
			text-transform: uppercase;
		}
		&__text {
			margin: 0 auto 16px;
			max-width: 424px;
			color: ${(props) => props.theme.grey600};
			font-weight: bold;
			letter-spacing: -0.05em;
		}
		&__title {
			margin: 0 auto 24px;
			color: ${(props) => props.theme.grey900};
			font-size: 36px;
			letter-spacing: -0.05em;
			line-height: 110%;
		}
	}
`;

export default StyledIntro;
