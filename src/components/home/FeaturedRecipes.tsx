import RecipeCard from "../recipes/RecipeCard";
import Button from "../common/buttons/Button";
import { Icon } from "@iconify/react";
import { dummyRecipes } from "../../constants/dummyRecipes";
import { Category } from "../../constants/categoryIcons";
import UnderlinedHeading from "../common/UnderlinedHeading";

interface FeaturedRecipesProps {
	onShowMore: () => void;
}

interface Recipe {
	id: number;
	title: string;
	imageUrl: string;
	categories: Category[]; // 👈 Match your RecipeCard exactly
	time: string;
	rating: number;
	reviews: number;
	comments: number;
	author: {
		name: string;
		avatarUrl: string;
	};
}

export default function FeaturedRecipes({ onShowMore }: FeaturedRecipesProps) {
	return (
		<section className="flex flex-col gap-6 mt-[40%] sm:mt-[30%]">
			<div className="px-6 sm:px-24">
				<UnderlinedHeading
					text="Discover new recipes"
					variant="medium2"
				/>
			</div>

			{/* Recipes Grid */}
			<div className="grid justify-center items-center gap-4 sm:gap-12 px-4 sm:px-10 lg:px-24 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
				{dummyRecipes.map((recipe) => (
					<RecipeCard key={recipe.id} {...(recipe as Recipe)} />
				))}
			</div>

			{/* Show More Button */}
			<div className="flex items-center justify-end px-6 sm:px-24 ">
				<Button onClick={onShowMore} className="flex items-center">
					Show more
					<Icon icon="tabler:chevron-right" className="w-4 h-4" />
				</Button>
			</div>
		</section>
	);
}
