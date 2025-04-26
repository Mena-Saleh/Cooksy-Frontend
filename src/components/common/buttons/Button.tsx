import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "xs" | "sm" | "md" | "lg";
};

export default function Button({
	children,
	className,
	variant = "primary",
	size = "md",
	...props
}: ButtonProps) {
	const base = "rounded-full text-center transition-300 cursor-pointer";

	const variants = {
		primary:
			"bg-secondary-500 hover:bg-secondary-600 text-basic-100 font-medium",
		secondary: "bg-primary-500 hover:bg-primary-600 text-basic-100",
		outline:
			"border border-secondary-500 text-secondary-500 hover:bg-secondary-100",
		ghost: "text-secondary-500 hover:underline",
	};

	const sizes = {
		xs: "px-3 py-2 text-xs",
		sm: "px-4 py-2 text-sm",
		md: variant === "ghost" ? "p-0 text-base" : "px-6 py-2 text-base",
		lg: "px-8 py-3 text-lg",
	};

	return (
		<button
			className={clsx(base, variants[variant], sizes[size], className)}
			{...props}
		>
			{children}
		</button>
	);
}
