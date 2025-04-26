import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import i18n from "i18next";
import Flag from "react-world-flags";
import clsx from "clsx";

const languages = [
	{ code: "en", label: "English", countryCode: "GB" },
	{ code: "sv", label: "Svenska", countryCode: "SE" },
];

export default function NavLang() {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const currentLang = i18n.language || "en";

	const handleClickOutside = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleChange = (lang: string) => {
		i18n.changeLanguage(lang);
		setOpen(false);
	};

	return (
		<div className="relative" ref={ref}>
			<button
				onClick={() => setOpen(!open)}
				className="flex items-center gap-2 text-basic-900 hover:text-secondary-500 transition-300 cursor-pointer"
			>
				<Icon icon="material-symbols:globe" className="w-6 h-6" />
				<span className="text-sm font-medium">
					{currentLang.toUpperCase()}
				</span>
				<Icon icon="mdi:chevron-down" className="w-4 h-4" />
			</button>

			<div
				className={clsx(
					"relative sm:absolute sm:left-0 right-[-12px] mt-2 w-36 bg-white rounded-xl shadow-md border border-basic-100 z-50 transition-300 ",
					open
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-4 pointer-events-none"
				)}
			>
				{languages.map((lang) => (
					<button
						key={lang.code}
						onClick={() => handleChange(lang.code)}
						className="w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-primary-100 rounded-xl transition-300 cursor-pointer"
					>
						<Flag
							code={lang.countryCode}
							className="w-[20px] h-[14px] object-cover rounded-sm"
						/>
						<span>{lang.label}</span>
					</button>
				))}
			</div>
		</div>
	);
}
