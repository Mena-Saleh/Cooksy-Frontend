import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";

type OAuthButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	provider: "google" | "facebook";
};

const styles = {
	base: "flex items-center gap-2 justify-center px-6 py-2 rounded-full border text-sm text-center transition-colors duration-200 cursor-pointer w-full sm:w-auto",
	google: "border-basic-200 text-basic-900 hover:border-basic-300 hover:text-basic-700",
	facebook:
		"border-basic-200 text-basic-900 hover:border-basic-300 hover:text-basic-700",
};

const icons = {
	google: "flat-color-icons:google",
	facebook: "logos:facebook",
};

export default function OAuthButton({
	children,
	provider,
	className,
	...props
}: OAuthButtonProps) {
	return (
		<button
			className={clsx(styles.base, styles[provider], className)}
			{...props}
		>
			<Icon icon={icons[provider]} className="w-6 h-6" />
			{children}
		</button>
	);
}