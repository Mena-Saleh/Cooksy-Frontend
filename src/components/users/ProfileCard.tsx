import { Icon } from "@iconify/react";
import Button from "../common/buttons/Button";
import { uiIcons } from "../../constants/uiIcons";
import { useTranslation } from "react-i18next";

interface ProfileCardProps {
	rank: number;
	imageUrl: string;
	name: string;
	recipeCount: number;
	followerCount: number;
}

export default function ProfileCard({
	rank,
	imageUrl,
	name,
	recipeCount,
	followerCount,
}: ProfileCardProps) {
	const { t: tHome } = useTranslation("home");

	return (
		<div className="rounded-2xl shadow-md flex flex-col p-3 sm:p-6 w-auto max-w-48 sm:max-w-full sm:w-64 relative">
			{/* Rank Badge */}
			{rank === 1 && (
				<img
					src="./svg/Badges/BadgeNumberOne.svg"
					alt="Rank 1 Badge"
					className="absolute top-4 right-4 w-6 h-6 object-contain"
				/>
			)}

			{rank === 2 && (
				<img
					src="./svg/Badges/BadgeNumberTwo.svg"
					alt="Rank 2 Badge"
					className="absolute top-4 right-4 w-6 h-6 object-contain"
				/>
			)}

			{rank === 3 && (
				<img
					src="./svg/Badges/BadgeNumberThree.svg"
					alt="Rank 3 Badge"
					className="absolute top-4 right-4 w-6 h-6 object-contain"
				/>
			)}

			{rank > 3 && (
				<div className="absolute top-2 right-4 text-basic-700 font-pacifico text-4xl">
					{rank}
				</div>
			)}

			{/* Avatar + Name block */}
			<div className="relative mb-8">
				{/* Avatar */}
				<img
					src={imageUrl}
					alt={name}
					className="w-full h-full object-cover rounded-full p-3 sm:p-0"
				/>

				{/* Name */}
				<div className="absolute bg-primary-400 -bottom-3 flex items-center justify-center px-4 sm:py-1 text-[0.78rem]  sm:text-base rounded-lg text-nowrap w-full text-center">
					<p className="font-semibold">{name}</p>
				</div>
			</div>

			{/* Stats */}
			<div className="flex flex-col gap-2 text-xs sm:text-sm mb-6">
				<div className="flex items-center gap-2">
					<Icon icon={uiIcons.content.chefHat} className="w-5 h-5" />
					<span>
						{recipeCount} {tHome("recipes")}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Icon
						icon={uiIcons.content.usersGroup}
						className="w-5 h-5"
					/>
					<span>
						{followerCount} {tHome("followers")}
					</span>
				</div>
			</div>

			<div className="flex items-center justify-end">
				<Button>{tHome("follow")}</Button>
			</div>
		</div>
	);
}
