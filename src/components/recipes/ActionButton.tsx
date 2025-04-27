import { Icon } from "@iconify/react";
import { uiIcons } from "../../constants/uiIcons";

interface ActionButtonProps {
	icon: keyof typeof uiIcons;
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
				icon={uiIcons[icon]}
				className={`w-6 h-6 ${iconColor} ${
					hoverIconColor ? `hover:${hoverIconColor}` : ""
				}`}
			/>
		</button>
	);
}
