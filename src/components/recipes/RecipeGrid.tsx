import { useState } from "react";
import Button from "../common/buttons/Button";
import { uiIcons } from "../../constants/uiIcons";
import { Icon } from "@iconify/react";
import RecipeCard from "./RecipeCard";
import { dummyRecipes } from "../../constants/dummyRecipes";
import SearchBar from "../common/SearchBar";
import SortDropdown from "./SortDropdown";
import { useTranslation } from "react-i18next";

interface RecipeGridProps {
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

export default function RecipeGrid({ onOpenFilter }: RecipeGridProps) {
	const [sortValue, setSortValue] = useState("mostPopular");
	const { t: tSort } = useTranslation("sort");

	return (
		<div className="sm:mt-40 px-4 mx-auto sm:px-24">
			{/* Top Controls */}
			<div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 mb-8">
				{/* Filter Button */}
				<div className="flex justify-start">
					<Button onClick={onOpenFilter} className="gap-2 px-4 py-2">
						<Icon icon={uiIcons.nav.filter} />
						Filter
					</Button>
				</div>

				{/* Search Bar */}
				<div className="w-1/2">
					<SearchBar />
				</div>

				{/* Sort By Dropdown */}
				<div className="flex justify-end">
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

			{/* Recipe Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
				{dummyRecipes.map((recipe) => (
					<RecipeCard
						key={recipe.id}
						title={recipe.title}
						imageUrl={recipe.imageUrl}
						categories={["Meat"]}
						time={recipe.time}
						rating={recipe.rating}
						reviews={recipe.reviews}
						author={recipe.author}
						comments={5}
					/>
				))}
			</div>
		</div>
	);
}
