import { useState } from "react";
import Button from "./buttons/Button";
import { Icon } from "@iconify/react";
import SearchBar from "./SearchBar";
import SortDropdown from "../recipes/SortDropdown";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../constants/uiIcons";

interface MobileSearchContainerProps {
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

export default function MobileSearchContainer({
	onOpenFilter,
}: MobileSearchContainerProps) {
	const [sortValue, setSortValue] = useState("mostPopular");
	const { t: tSort } = useTranslation("sort");

	return (
		<div className="max-h-32">
			{/* Search */}
			<div className="w-full mb-4">
				<SearchBar />
			</div>

			{/* Filter + Sort */}
			<div className="flex flex-row justify-between gap-4 mb-8">
				{/* Filter Button */}
				<div>
					<Button
						onClick={onOpenFilter}
						className="w-full sm:w-auto justify-center"
					>
						<Icon icon={uiIcons.nav.filter} />
						Filter
					</Button>
				</div>

				{/* Sort Dropdown */}
				<div className="w-1/2 sm:w-auto">
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
		</div>
	);
}
