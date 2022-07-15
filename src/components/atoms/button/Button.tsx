interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, href }) => {
	if (!href)
		return (
			<button type="button" onClick={onClick}>
				{children}
			</button>
		);

	return <a href={href}>{children}</a>;
};

export default Button;
