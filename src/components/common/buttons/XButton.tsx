import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function XButton() {
	return (
		<div className="rounded-full w-8 h-8 bg-primary-300 hover:bg-primary-400 transition-colors duration-200 cursor-pointer flex justify-center items-center">
			<FontAwesomeIcon icon={faX} className="text-basic-900" />
		</div>
	);
}
