import { useState } from "react";
import Button from "./buttons/Button";
import { Icon } from "@iconify/react";
import SearchBar from "./SearchBar";
import SortDropdown from "../recipes/SortDropdown";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../constants/uiIcons";

interface DesktopSearchContainerProps {
	onOpenFilter: () => void;
}

const sortKeys = [
	"mostPopular",
	"newest",
	"totalTime",
	"rating",
	"alphabetical",
	"reverseAlphabetical",
];

export default function DesktopSearchContainer({
	onOpenFilter,
}: DesktopSearchContainerProps) {
	const [sortValue, setSortValue] = useState("mostPopular");
	const { t: tSort } = useTranslation("sort");

	return (
		<div className="flex flex-row justify-between items-stretch gap-4 mb-14">
			{/* Filter Button */}
			<div className="flex justify-start">
				<Button onClick={onOpenFilter} className="">
					<Icon icon={uiIcons.nav.filter} />
					Filter
				</Button>
			</div>

			{/* Search Bar */}
			<div className="w-1/2">
				<SearchBar />
			</div>

			{/* Sort By Dropdown */}
			<div className="flex justify-end w-30">
				<SortDropdown
					value={tSort(`sortBy.${sortValue}`)}
					options={sortKeys.map((key) => ({
						label: tSort(`sortBy.${key}`),
						key,
					}))}
					onChange={(key) => setSortValue(key)}
				/>
			</div>
		</div>
	);
}
