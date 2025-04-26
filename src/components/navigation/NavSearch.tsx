import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

export default function NavSearch() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");

	return (
		<div className="relative flex items-center justify-center w-10">
			{/* Input Field */}
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search"
				className={clsx(
					"input absolute right-0 transition-300 pr-10 shadow-md bg-neutral-50",
					open
						? "2xl:w-64 w-48 opacity-100 px-4"
						: "w-0 opacity-0 px-0 pointer-events-none"
				)}
			/>

			{/* Toggle Button */}
			<button
				type="button"
				onClick={() => setOpen((prev) => !prev)}
				className={clsx(
					"z-10 w-7 h-7 flex items-center justify-center rounded-full transition-300 cursor-pointer",
					open
						? "bg-secondary-500 text-basic-100 shadow-md"
						: "text-basic-900 bg-transparent"
				)}
			>
				<Icon icon="mdi:magnify" className="w-5 h-5" />
			</button>
		</div>
	);
}
