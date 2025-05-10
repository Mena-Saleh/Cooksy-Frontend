import { Icon } from "@iconify/react";
import { uiIcons } from "../../../constants/uiIcons";
import clsx from "clsx";
type XButtonProps = {
	onClick?: () => void;
	hasBackgroundColor?: boolean;
};

export default function XButton({
	onClick,
	hasBackgroundColor = true,
}: XButtonProps) {
	return (
		<div
			onClick={onClick}
			className={clsx(
				"rounded-full sm:w-9 sm:h-9 w-8 h-8 transition-300 cursor-pointer flex justify-center items-center",
				hasBackgroundColor ? "bg-primary-300 hover:bg-primary-400" : ""
			)}
		>
			<Icon icon={uiIcons.actions.cancel} className="w-3/5 h-3/5" />
		</div>
	);
}
