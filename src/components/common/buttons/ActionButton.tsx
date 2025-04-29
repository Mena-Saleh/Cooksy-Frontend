import { Icon } from "@iconify/react";

interface ActionButtonProps {
	icon: string;
	bgColor: string;
	iconColor: string;
	hoverBgColor?: string;
	hoverIconColor?: string;
	onClick?: () => void;
}

export default function ActionButton({
	icon,
	bgColor,
	iconColor,
	hoverBgColor,
	hoverIconColor,
	onClick,
}: ActionButtonProps) {
	return (
		<button
			className={`p-1 rounded-full shadow transition-300 cursor-pointer ${bgColor} ${
				hoverBgColor ? `hover:${hoverBgColor}` : ""
			}`}
			onClick={onClick}
		>
			<Icon
				icon={icon}
				className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor} ${
					hoverIconColor ? `hover:${hoverIconColor}` : ""
				}`}
			/>
		</button>
	);
}
