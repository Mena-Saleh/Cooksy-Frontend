import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "outline" | "ghost";
};

export default function Button({
	children,
	className,
	variant = "primary",
	...props
}: ButtonProps) {
	const base =
		"rounded-full text-center transition-colors duration-200 cursor-pointer";

	const variants = {
		primary:
			"px-6 py-2 bg-secondary-500 hover:bg-secondary-600 text-basic-100 font-medium",
		secondary:
			"px-6 py-2 bg-primary-500 hover:bg-primary-600 text-basic-100",
		outline:
			"px-6 py-2 border border-secondary-500 text-secondary-500 hover:bg-secondary-100",
		ghost: "text-secondary-500 hover:underline",
	};

	return (
		<button className={clsx(base, variants[variant], className)} {...props}>
			{children}
		</button>
	);
}
