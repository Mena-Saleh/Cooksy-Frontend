import FilterBar from "../components/recipes/FilterBar";
import RecipeGrid from "../components/recipes/RecipeGrid";
import { useState } from "react";
import clsx from "clsx";

export default function RecipesPage() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const handleBackdropClick = () => {
		if (isFilterOpen) setIsFilterOpen(false);
	};

	return (
		<div className="mt-20">
			{/* Backdrop */}
			<div
				className={clsx(
					"fixed inset-0 z-100 transition-all duration-300",
					isFilterOpen
						? "backdrop-blur-sm bg-black/20"
						: "pointer-events-none"
				)}
				onClick={handleBackdropClick}
			/>

			{/* Sidebar */}
			<div
				className={clsx(
					"fixed sm:max-w-1/2 md:max-w-2/5 lg:max-w-1/3 xl:max-w-1/4 inset-0 z-100 h-full transition-500",
					isFilterOpen
						? "translate-x-0"
						: "-translate-x-full pointer-events-none"
				)}
			>
				<FilterBar onClose={() => setIsFilterOpen(false)} />
			</div>

			{/* Main content */}
			<RecipeGrid onOpenFilter={() => setIsFilterOpen(true)} />
		</div>
	);
}
