import Hero from "../components/home/Hero";
import FeaturedRecipes from "../components/home/FeaturedRecipes";
import MainIngredientPicker from "../components/home/MainIngredientPicker";
import ContributeBanner from "../components/home/ContributeBanner";
// import ProfileCard from "../components/users/ProfileCard";
import TopContributors from "../components/home/TopContributors";

export default function HomePage() {
	return (
		<div>
			<Hero />

			<FeaturedRecipes onShowMore={() => {}} />

			<MainIngredientPicker onShowMore={() => {}} />

			<ContributeBanner />

			<TopContributors onShowMore={() => {}} />

			{/* <div className="flex justify-center items-center my-50">
				<ProfileCard
					rank={1}
					imageUrl="https://eco-cdn.iqpc.com/eco/images/speakers/7l8tMmTXd9HkqHe79nhKvXvJS2RwQDmWH8YcAJv8.png"
					name="Lisa Karlsson"
					recipeCount={35}
					followerCount={452}
				/>
			</div> */}

			<div className="h-30"></div>
		</div>
	);
}
