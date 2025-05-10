import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

export default function Button({
	children,
	className,
	variant = "primary",
	onClick,
	...props
}: ButtonProps) {
	const base =
		"rounded-full text-center transition-300 cursor-pointer sm:px-4 sm:py-2 sm:text-sm px-3 py-2 text-xs flex items-center gap-x-1 justify-center";

	const variants = {
		primary:
			"bg-secondary-500 hover:bg-secondary-600 text-basic-100 font-medium",
		secondary: "bg-primary-500 hover:bg-primary-600 text-basic-100",
		outline:
			"border border-secondary-500 text-secondary-500 hover:bg-secondary-100",
		ghost: "text-secondary-500 hover:underline p-0! inline",
	};

	return (
		<button
			onClick={onClick}
			className={clsx(base, variants[variant], className)}
			{...props}
		>
			{children}
		</button>
	);
}
