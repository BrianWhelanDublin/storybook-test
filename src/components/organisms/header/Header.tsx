import { useState } from "react";
import Button from "../../atoms/button/Button";
import Navigation, { Item } from "../../molecules/navigation/Navigation";
import { Menus } from "../footer/Footer";
import StyledHeader from "./Header.styles";
import Logo from "../../../assets/images/logo.png";

interface HeaderProps {
	navigation: Array<Menus>;
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setOpen(!isOpen);
	};

	return (
		<StyledHeader className={isOpen ? `header--open` : `header--closed`}>
			<div className="header__navigation">
				{navigation.length > 0 &&
					navigation.map(({ items, title }) => (
						<Navigation items={items} direction="horizontal" key={`header-menu-${title}`} />
					))}
			</div>
			<img src={Logo} alt="Celtic Elements Logo" />
			<Button onClick={toggleMenu}>{isOpen ? `Hide` : `Show`} menu</Button>
		</StyledHeader>
	);
};

export default Header;
