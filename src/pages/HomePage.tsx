import Hero from "../components/home/Hero";
import FeaturedRecipes from "../components/home/FeaturedRecipes";

export default function HomePage() {
	return (
		<div>
			<Hero />

			<FeaturedRecipes />
			<div className="h-100"></div>
		</div>
	);
}
