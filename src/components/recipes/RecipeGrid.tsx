import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { dummyRecipes } from "../../constants/dummyRecipes";
import Pagination from "../common/Pagination";
import DesktopSearchContainer from "../common/DesktopSearchContainer";
import MobileSearchContainer from "../common/MobileSearchContainer";

interface RecipeGridProps {
	onOpenFilter: () => void;
}

export default function RecipeGrid({ onOpenFilter }: RecipeGridProps) {
	const [page, setPage] = useState(1);

	return (
		<>
			<div className="hidden md:block">
				<DesktopSearchContainer onOpenFilter={onOpenFilter} />
			</div>
			<div className="block md:hidden">
				<MobileSearchContainer onOpenFilter={onOpenFilter} />
			</div>

			{/* Recipe Grid */}
			<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 place-content-center place-items-center w-full max-w-fit mx-auto">
				{dummyRecipes.map((recipe) => (
					<RecipeCard
						key={recipe.id}
						title={recipe.title}
						imageUrl={recipe.imageUrl}
						categories={["Meat", "Seafood"]}
						time={recipe.time}
						rating={recipe.rating}
						reviews={recipe.reviews}
						author={recipe.author}
						comments={5}
					/>
				))}
			</div>
			<div className="my-10">
				<Pagination
					currentPage={page}
					totalPages={543}
					onPageChange={setPage}
				/>
			</div>
		</>
	);
}
