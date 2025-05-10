import { useTranslation } from "react-i18next";
import ProfileCard from "../users/ProfileCard";
import UnderlinedHeading from "../common/UnderlinedHeading";
import Button from "../common/buttons/Button";
import { uiIcons } from "../../constants/uiIcons";
import { Icon } from "@iconify/react";

interface TopContributorsProps {
	onShowMore: () => void;
}

const dummyContributors = [
	{
		rank: 1,
		imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
		name: "Alex Cook",
		recipeCount: 32,
		followerCount: 1250,
	},
	{
		rank: 2,
		imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
		name: "Sara Spoon",
		recipeCount: 28,
		followerCount: 1100,
	},
	{
		rank: 3,
		imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
		name: "John Fry",
		recipeCount: 25,
		followerCount: 980,
	},
	{
		rank: 4,
		imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
		name: "Emma Whisk",
		recipeCount: 22,
		followerCount: 920,
	},
];

export default function TopContributors({ onShowMore }: TopContributorsProps) {
	const { t: tHome } = useTranslation("home");

	return (
		<section className="flex flex-col gap-6 mt-[20%] sm:mt-[10%]">
			<div className="px-6 sm:px-24">
				<UnderlinedHeading
					text={tHome("topContributors")}
					variant="medium1"
				/>
			</div>

			<div className="grid justify-center items-center gap-4 px-4 sm:px-10 lg:px-24 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:gap-12">
				{dummyContributors.map((user) => (
					<ProfileCard key={user.rank} {...user} />
				))}
			</div>

			{/* Show More Button */}
			<div className="flex items-center justify-end px-6 sm:px-24">
				<Button onClick={onShowMore}>
					{tHome("seeAllContributors")}
					<Icon icon={uiIcons.nav.chevronRight} className="w-4 h-4" />
				</Button>
			</div>
		</section>
	);
}
