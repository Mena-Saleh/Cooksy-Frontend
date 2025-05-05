import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { uiIcons } from "../../constants/uiIcons";
import { useTranslation } from "react-i18next";
import XButton from "../common/buttons/XButton";
import Button from "../common/buttons/Button";

interface FilterBarProps {
	onClose: () => void;
}

export default function FilterBar({ onClose }: FilterBarProps) {
	const { t: tFilters } = useTranslation("filters");

	const sections = Object.keys(
		tFilters("sections", { returnObjects: true })
	) as string[];

	const [openSections, setOpenSections] = useState(
		Object.fromEntries(sections.map((s) => [s, true]))
	);

	const toggleSection = (section: string) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	return (
		<aside className="w-full h-screen border border-basic-300 shadow-md flex flex-col bg-white">
			{/* Top header with title and close button */}
			<div className="w-full px-4 py-4 shadow-sm flex justify-between mb-6">
				<h2 className="text-2xl font-semibold font-poppins">
					{tFilters("title")}
				</h2>
				<XButton onClick={onClose} hasBackgroundColor={false} />
			</div>

			{/* Scrollable content */}
			<div className="flex-1 px-4 pb-4 overflow-y-auto flex flex-col gap-6">
				{sections.map((section) => {
					const sectionData = tFilters(`sections.${section}`, {
						returnObjects: true,
					}) as { title: string; options: Record<string, string> };

					const isOpen = openSections[section];

					return (
						<div
							key={section}
							className="border-b border-basic-200 pb-4"
						>
							<button
								onClick={() => toggleSection(section)}
								className="w-full flex items-center justify-between mb-2 text-base font-medium font-poppins cursor-pointer"
							>
								<span>{sectionData.title}</span>
								<Icon
									icon={uiIcons.nav.chevronDown}
									className={clsx(
										"w-4 h-4 transition-300",
										isOpen && "rotate-180"
									)}
								/>
							</button>

							<div
								className={clsx(
									"grid transition-300 overflow-hidden",
									isOpen
										? "max-h-96 translate-y-0 opacity-100"
										: "max-h-0 -translate-y-3 pointer-events-none opacity-0"
								)}
							>
								<div className="flex flex-wrap gap-2 mt-2">
									{Object.entries(sectionData.options).map(
										([key, label]) => (
											<Button variant="outline" key={key}>
												{label}
											</Button>
										)
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Sticky bottom button */}
			<div className="sticky bottom-0 p-4 bg-white rounded-b-full ">
				<Button
					variant="outline"
					className="w-full flex items-center justify-between font-medium bg-secondary-100 hover:bg-secondary-200"
				>
					<span>85 recipes found</span>
					<Icon icon={uiIcons.nav.chevronRight} className="w-4 h-4" />
				</Button>
			</div>
		</aside>
	);
}
