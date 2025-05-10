import { useState } from "react";
import { uiIcons } from "../../constants/uiIcons";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Button from "../common/buttons/Button";
import { useTranslation } from "react-i18next";

interface SortDropdownProps {
	value: string;
	options: { label: string; key: string }[];
	onChange: (value: string) => void;
}

export default function SortDropdown({
	value,
	options,
	onChange,
}: SortDropdownProps) {
	const [open, setOpen] = useState(false);
	const { t: tSort } = useTranslation("sort");
	return (
		<div className="relative">
			<div className="w-auto sm:block flex justify-end">
				<Button
					onClick={() => setOpen(!open)}
					variant="outline"
					className="w-auto border-primary-500! text-basic-900! hover:bg-primary-100! text-nowrap"
				>
					{tSort("sortBy.label")}: {value}
					<Icon icon={uiIcons.nav.chevronDown}></Icon>
				</Button>
			</div>
			<div
				className={clsx(
					"relative sm:absolute sm:left-0 right-[-12px] mt-2 w-full bg-white rounded-xl shadow-md border border-basic-100 z-50 transition-300",
					open
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-4 pointer-events-none"
				)}
			>
				{options.map((option) => (
					<button
						key={option.key}
						onClick={() => {
							onChange(option.key);
							setOpen(false);
						}}
						className={`w-full text-left px-4 py-2 text-sm 
						 hover:bg-primary-100 rounded-xl transition-300
						cursor-pointer ${option.key === value ? "font-semibold" : ""}`}
					>
						{option.label}
					</button>
				))}
			</div>
		</div>
	);
}
