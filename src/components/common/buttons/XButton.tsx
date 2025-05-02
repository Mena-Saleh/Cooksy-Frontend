import { Icon } from "@iconify/react";
import { uiIcons } from "../../../constants/uiIcons";

type XButtonProps = {
	onClick?: () => void;
};

export default function XButton({ onClick }: XButtonProps) {
	return (
		<div
			onClick={onClick}
			className="rounded-full sm:w-9 sm:h-9 w-8 h-8 bg-primary-300 hover:bg-primary-400 transition-300 cursor-pointer flex justify-center items-center"
		>
			<Icon icon={uiIcons.actions.cancel} className="w-3/5 h-3/5" />
		</div>
	);
}
