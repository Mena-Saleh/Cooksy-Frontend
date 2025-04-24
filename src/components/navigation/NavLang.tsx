import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import i18n from "i18next";

const languages = [
	{ code: "en", label: "English", flag: "🇬🇧" },
	{ code: "sv", label: "Svenska", flag: "🇸🇪" },
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
				className="flex items-center gap-1 text-basic-900 hover:text-secondary-500 transition-colors cursor-pointer"
			>
				<Icon icon="material-symbols:globe" className="w-6 h-6" />
				<span className="text-sm font-medium">
					{languages
						.find((l) => l.code === currentLang)
						?.code.toUpperCase()}
				</span>
				<Icon icon="mdi:chevron-down" className="w-4 h-4" />
			</button>

			{open && (
				<div className="absolute left-0 mt-2 w-32 bg-white rounded-xl shadow-md border border-basic-200 z-50">
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => handleChange(lang.code)}
							className="w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-primary-100 rounded-xl transition-colors cursor-pointer"
						>
							<span>{lang.flag}</span>
							<span>{lang.label}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
