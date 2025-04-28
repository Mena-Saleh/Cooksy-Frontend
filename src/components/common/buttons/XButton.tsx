import { Icon } from "@iconify/react";
import { uiIcons } from "../../../constants/uiIcons";

type XButtonProps = {
	onClick?: () => void;
};

export default function XButton({ onClick }: XButtonProps) {
	return (
		<div
			onClick={onClick}
			className="rounded-full sm:w-7 sm:h-7 w-6 h-6 bg-primary-300 hover:bg-primary-400 transition-300 cursor-pointer flex justify-center items-center"
		>
			<Icon icon={uiIcons.actions.cancel} />
		</div>
	);
}
