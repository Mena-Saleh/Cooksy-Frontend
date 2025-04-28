import { Icon } from "@iconify/react";
import { uiIcons } from "../../constants/uiIcons";

export default function SearchBar() {
	return (
		<div className="relative flex items-center justify-center w-full">
			{/* Input Field */}
			<input
				type="text"
				placeholder="Search"
				className="input border-basic-900 w-full pr-10 px-4 py-1 sm:py-2 rounded-full bg-white focus:outline-none transition-300"
			/>

			{/* Search Button */}
			<button
				type="button"
				className="absolute right-0 sm:right-1 m-1 w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-secondary-500 text-basic-100 transition-300 cursor-pointer hover:bg-secondary-600"
			>
				<Icon
					icon={uiIcons.actions.magnify}
					className="w-3 h-3 sm:w-5 sm:h-5"
				/>
			</button>
		</div>
	);
}
