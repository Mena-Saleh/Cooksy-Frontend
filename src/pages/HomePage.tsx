import Hero from "../components/home/Hero";
import FeaturedRecipes from "../components/home/FeaturedRecipes";
import MainIngredientPicker from "../components/home/MainIngredientPicker";
import ContributeBanner from "../components/home/ContributeBanner";
// import ProfileCard from "../components/users/ProfileCard";
import TopContributors from "../components/home/TopContributors";
// import ArticleCard from "../components/articles/ArticleCard";
import FeaturedArticles from "../components/home/FeaturedArticles";

export default function HomePage() {
	return (
		<div>
			<Hero />
			<FeaturedRecipes onShowMore={() => {}} />
			<MainIngredientPicker onShowMore={() => {}} />
			<ContributeBanner />
			<TopContributors onShowMore={() => {}} />
			<FeaturedArticles />
		</div>
	);
}
