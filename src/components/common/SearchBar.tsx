import { Icon } from "@iconify/react";
import { uiIcons } from "../../constants/uiIcons";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
	const { t: tHome } = useTranslation("home")
	return (
		<div className="relative flex items-center justify-center w-full">
			{/* Input Field */}
			<input
				type="text"
				placeholder={tHome("searchPlaceholder")}
				className="input w-full pr-10 sm:text-base"
			/>

			{/* Search Button */}
			<button
				type="button"
				className="absolute right-0 sm:right-1 m-1 w-7 h-7 flex items-center justify-center rounded-full bg-secondary-500 text-basic-100 transition-300 cursor-pointer hover:bg-secondary-600"
			>
				<Icon
					icon={uiIcons.actions.magnify}
					className="w-5 h-5"
				/>
			</button>
		</div>
	);
}
