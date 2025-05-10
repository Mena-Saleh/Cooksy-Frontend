import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../constants/uiIcons";

export default function NavSearch() {
	const [open, setOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [query, setQuery] = useState("");
	const { t: tNavigation } = useTranslation("navigation");

	return (
		<>
			{/* Desktop Search */}
			<div className="relative hidden items-center justify-center w-10 sm:flex">
				{/* Input Field */}
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder={tNavigation("searchPlaceholder")}
					className={clsx(
						"input absolute right-0 pr-10 shadow-md",
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
						"z-10 w-7 h-7 flex items-center justify-center rounded-full transition-300 cursor-pointer outline-none",
						open
							? "bg-secondary-500 text-basic-100 shadow-md"
							: "text-basic-900 bg-transparent"
					)}
				>
					<Icon icon={uiIcons.actions.magnify} className="w-5 h-5" />
				</button>
			</div>

			{/* Mobile Search Button */}
			<div className="flex sm:hidden">
				<button
					type="button"
					onClick={() => setMobileOpen(true)}
					className="text-basic-900"
				>
					<Icon icon={uiIcons.actions.magnify} className="w-6 h-6" />
				</button>
			</div>

			{/* Mobile Fullscreen Search Overlay */}
			<div
				className={clsx(
					"fixed inset-0 h-16 bg-basic-100 shadow-sm px-4 py-3 z-50 flex flex-col justify-center transition-300",
					mobileOpen
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-8 pointer-events-none"
				)}
			>
				<div className="flex items-center gap-3">
					{/* Input Field */}
					<div className="flex-1 flex items-center border border-basic-300 rounded-full px-4 py-1.5 shadow-md">
						<input
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder={tNavigation("searchPlaceholder")}
							className="flex-1 bg-transparent outline-none text-sm"
						/>
						<button type="submit">
							<Icon
								icon={uiIcons.actions.magnify}
								className="w-7 h-7 text-basic-100 bg-secondary-500 rounded-full p-1"
							/>
						</button>
					</div>

					{/* Close Button */}
					<button onClick={() => setMobileOpen(false)}>
						<Icon
							icon={uiIcons.actions.cancel}
							className="w-6 h-6 text-basic-900"
						/>
					</button>
				</div>
			</div>
		</>
	);
}
