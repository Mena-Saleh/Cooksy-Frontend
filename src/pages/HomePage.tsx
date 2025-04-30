import Hero from "../components/home/Hero";
import FeaturedRecipes from "../components/home/FeaturedRecipes";
import MainIngredientPicker from "../components/home/MainIngredientPicker";

export default function HomePage() {
	return (
		<div>
			<Hero />

			<FeaturedRecipes onShowMore={() => {}} />

			<MainIngredientPicker onShowMore={() => { }} />
			
			<div className="h-30"></div>
		</div>
	);
}
