import { Icon } from "@iconify/react";
import { uiIcons } from "../constants/uiIcons";
import RecipeCard from "../components/recipes/RecipeCard";
import { dummyRecipes } from "../constants/dummyRecipes";

const badgeList = [
	{ key: "topContributor", label: "Top Contributor" },
	{ key: "recipeVeteran", label: "Recipe Veteran" },
	{ key: "earlyAdopter", label: "Early Adopter" },
	{ key: "firstRecipe", label: "First Recipe Published" },
	{ key: "uploadStreak", label: "Weekly Upload Streak" },
	// { key: "topRated", label: "Top Rated Chef" },
	// { key: "mostFavorited", label: "Most Favorited" },
	// { key: "commentHero", label: "Comment King/Queen" },
	// { key: "communityHelper", label: "Community Helper" },
	// { key: "trending", label: "Trending Recipe" },
	// { key: "viral", label: "Viral Chef" },
	// { key: "fusionMaster", label: "Fusion Master" },
	// { key: "photogenic", label: "Photogenic Dish" },
	// { key: "onePot", label: "One-Pot Wonder" },
	// { key: "mealPrep", label: "Meal Prep Pro" },
	// { key: "holidayHero", label: "Holiday Hero" },
	// { key: "dessertWizard", label: "Dessert Wizard" },
	// { key: "plantBased", label: "Plant-Based Pro" },
];

export default function MyProfilePage() {
	return (
		<div className=" mx-auto px-4 sm:px-8 py-12 space-y-10 mt-50">
			{/* Profile Header */}
			<section className="bg-white rounded-xl p-6 shadow flex flex-col md:flex-row items-start md:items-center gap-6">
				{/* Profile Picture */}
				<div className="w-28 h-28 rounded-full overflow-hidden shrink-0">
					<img
						src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
						alt="Lisa Karlsson"
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Info */}
				<div className="flex-1 space-y-2">
					<div className="flex flex-wrap items-center gap-3">
						<h1 className="text-2xl font-bold">Lisa Karlsson</h1>
						<span className="flex items-center gap-1 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
							<Icon
								icon={uiIcons.badges.topContributor}
								className="text-sm"
							/>
							Top Contributor
						</span>
					</div>

					<div className="flex gap-6 text-sm text-gray-600">
						<div>
							<strong className="block text-black">13</strong>{" "}
							Recipes
						</div>
						<div>
							<strong className="block text-black">182</strong>{" "}
							Followers
						</div>
						<div>
							<strong className="block text-black">58</strong>{" "}
							Following
						</div>
					</div>

					<p className="text-sm max-w-2xl pt-2 text-gray-700">
						Hi, I’m Lisa Karlsson! Cooking has always been my
						greatest passion, and I love experimenting in the
						kitchen to create delicious and unique recipes. I enjoy
						blending traditional flavors with modern twists to make
						dishes that are both comforting and exciting.
					</p>
				</div>

				<button className="border rounded-full px-4 py-1 text-sm hover:bg-gray-100 transition">
					Edit Profile
				</button>
			</section>

			{/* Stats + Badges */}
			<section className="grid sm:grid-cols-2 gap-4">
				{/* Stats */}
				<div className="bg-white rounded-xl p-6 shadow space-y-3">
					<h3 className="font-semibold mb-4">Stats</h3>
					<div className="grid grid-cols-3 gap-4 text-center">
						<div>
							<div className="text-xl font-bold">4.9</div>
							<div className="text-xs text-gray-500">
								Average rating
							</div>
						</div>
						<div>
							<div className="text-xl font-bold">254</div>
							<div className="text-xs text-gray-500">
								Recipe likes
							</div>
						</div>
						<div>
							<div className="text-xl font-bold">3.2k</div>
							<div className="text-xs text-gray-500">
								Recipe views
							</div>
						</div>
					</div>
				</div>

				{/* Badges */}
				<div className="bg-white rounded-xl p-6 shadow space-y-3">
					<h3 className="font-semibold mb-4">Badges</h3>
					<div className="flex flex-wrap gap-3">
						{badgeList.map((badge) => (
							<div
								key={badge.key}
								className="flex items-center gap-1 text-xs bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full"
							>
								<Icon
									icon={
										uiIcons.badges[
											badge.key as keyof typeof uiIcons.badges
										]
									}
									className="text-sm"
								/>
								{badge.label}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Recipes */}
			<section>
				<h2 className="text-xl font-semibold mb-4">My Recipes</h2>
				<div className="flex gap-6 text-sm text-gray-600 mb-4">
					<button className="font-semibold text-black underline underline-offset-4">
						Uploaded
					</button>
					<button>Favorites</button>
					<button>Collections</button>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 place-content-center place-items-center w-full max-w-fit mx-auto">
					{dummyRecipes.slice(0, 6).map((recipe) => (
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
			</section>
		</div>
	);
}
