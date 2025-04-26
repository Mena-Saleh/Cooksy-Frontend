import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type XButtonProps = {
	onClick?: () => void;
};

export default function XButton({ onClick }: XButtonProps) {
	return (
		<div
			onClick={onClick}
			className="rounded-full sm:w-7 sm:h-7 w-6 h-6 bg-primary-300 hover:bg-primary-400 transition-300 cursor-pointer flex justify-center items-center"
		>
			<FontAwesomeIcon
				icon={faX}
				className="text-basic-900 text-xs sm:text-sm"
			/>
		</div>
	);
}
