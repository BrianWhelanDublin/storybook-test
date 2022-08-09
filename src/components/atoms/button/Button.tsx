import { StyledButton, StyledLinkButton } from "./Buttons.styles";

import { ReactComponent as IconBag } from "../../../assets/images/icons/shopping-bag.svg";
import { ReactComponent as IconCart } from "../../../assets/images/icons/shopping-cart.svg";
import { ReactComponent as IconPlus } from "../../../assets/images/icons/plus.svg";
import { ReactComponent as IconUser } from "../../../assets/images/icons/user.svg";
import { ReactComponent as IconX } from "../../../assets/images/icons/x.svg";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: (e: any) => void;
	href?: string;
	varient?: "primary" | "secondary" | "tertiary";
	icon?: "bag" | "cart" | "plus" | "user" | "x";
}

const Icons = {
	bag: IconBag,
	cart: IconCart,
	plus: IconPlus,
	user: IconUser,
	x: IconX,
};

interface ButtionIconProps {
	name: "bag" | "cart" | "plus" | "user" | "x";
}

const ButtonIcon: React.FC<ButtionIconProps> = ({ name }) => {
	if (Icons[name] === undefined) return null;

	const Icon = Icons[name];

	return (
		<span className="button__icon">
			<Icon />
		</span>
	);
};

const Button: React.FC<ButtonProps> = ({ children, onClick, href, varient = "primary", icon }) => {
	if (!href)
		return (
			<StyledButton type="button" onClick={onClick} varient={varient}>
				{icon && <ButtonIcon name={icon} />}
				{children}
			</StyledButton>
		);

	return (
		<StyledLinkButton href={href} varient={varient}>
			{icon && <ButtonIcon name={icon} />}
			{children}
		</StyledLinkButton>
	);
};

export default Button;
