import { useAppSelector } from "../redux/hooks";
import ProfileIntro from "../components/profiles/my/ProfileIntro";
import Stats from "../components/profiles/my/Stats";
import Badges from "../components/profiles/my/Badges";
import UnderlinedHeading from "../components/common/UnderlinedHeading";
import RecipeGrid from "../components/recipes/RecipeGrid";
import FollowersCard from "../components/profiles/my/FollowersCard";

export default function MyProfilePage() {
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	return (
		isAuthenticated && (
			<div className="px-4 sm:px-8 py-12 space-y-10 mt-20">
				<div className="flex justify-center items-center">
					<ProfileIntro />
				</div>

				<div className="flex flex-col sm:flex-row justify-center items-center gap-8 ">
					<div>
						{/* Stats */}
						<Stats rating={4.9} likes={254} views="3.2k" />
					</div>
					{/* Badges */}
					<div className="">
						<Badges
							badges={[
								{ key: "topContributor" },
								{ key: "earlyAdopter" },
								{ key: "uploadStreak" },
								{ key: "recipeVeteran" },
								{ key: "firstRecipe" },
								{ key: "uploadStreak" },
							]}
						/>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<FollowersCard
						followers={[
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 103,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 89,
							},
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 782,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 216,
							},
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 45,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 30,
							},
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 103,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 89,
							},
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 782,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 216,
							},
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 45,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 30,
							},
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 103,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 89,
							},
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 782,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 216,
							},
							{
								name: "Lisa Karlsson",
								avatarUrl:
									"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740",
								recipeCount: 45,
							},
							{
								name: "John Doe",
								avatarUrl:
									"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
								recipeCount: 30,
							},
						]}
					/>
				</div>

				{/* Recipes */}
				<section className="px-24 space-y-4 mt-50">
					<UnderlinedHeading text="My Recipes" variant="small2" />
					<div className="flex gap-6 text-sm text-gray-600 mb-4">
						<button className="font-semibold text-black underline underline-offset-4">
							Uploaded
						</button>
						<button>Favorites</button>
						<button>Collections</button>
					</div>
					<div className="my-6">
						<RecipeGrid onOpenFilter={() => {}}></RecipeGrid>
					</div>
				</section>
			</div>
		)
	);
}
