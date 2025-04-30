import StarRating from "./StarRating";
import { Icon } from "@iconify/react";
import { Category, categoryIcons } from "../../constants/categoryIcons";
import ActionButton from "../common/buttons/ActionButton";
import { uiIcons } from "../../constants/uiIcons";
import { useTranslation } from "react-i18next";
interface Author {
	name: string;
	avatarUrl: string;
}

interface RecipeCardProps {
	imageUrl: string;
	title: string;
	categories: Category[];
	time: string;
	rating: number;
	reviews: number;
	comments: number;
	author: Author;
}

export default function RecipeCard({
	imageUrl,
	title,
	categories,
	time,
	rating,
	reviews,
	comments,
	author,
}: RecipeCardProps) {
	const { t: tCategories } = useTranslation("categories");

	return (
		<div className="rounded-2xl shadow-md bg-white flex flex-col w-auto max-w-48 sm:max-w-full sm:w-68 xl:w-72 h-auto cursor-pointer">
			{/* Image */}
			<div className="relative w-full">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-35 sm:h-50 object-cover rounded-t-2xl"
				/>
				{/* Buttons */}
				<div className="absolute top-2 right-2 flex flex-col gap-2">
					<ActionButton
						icon={uiIcons.content.heartOutline}
						bgColor="bg-white"
						iconColor="text-secondary-500"
						hoverBgColor="bg-secondary-100"
						hoverIconColor="text-secondary-600"
					/>
					<ActionButton
						icon={uiIcons.actions.add}
						bgColor="bg-secondary-500"
						iconColor="text-basic-100"
						hoverBgColor="bg-secondary-600"
						hoverIconColor="text-basic-100"
					/>
				</div>
				{/* Author */}
				<div className="absolute bottom-0 right-0 flex items-center gap-2">
					<span className="bg-primary-500 text-[0.65rem] sm:text-xs pl-1.5 py-0.5 sm:pl-3 sm:py-1 rounded-tl-lg font-medium truncate pr-16 w-full">
						{author.name}
					</span>
					<img
						src={author.avatarUrl}
						alt={author.name}
						className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-basic-100 absolute right-2"
					/>
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 p-2 sm:p-4 flex flex-col gap-1 sm:gap-4 w-full">
				<h3 className="font-poppins text-xs sm:text-base leading-snug overflow-hidden text-ellipsis line-clamp-2 hyphens-auto min-h-[3rem]">
					{title}
				</h3>
				<div className="flex items-center justify-between text-basic-700 text-[0.67rem] sm:text-sm gap-1 sm:gap-4">
					<div className="flex items-center sm:gap-2">
						{categories.map((category, index) => (
							<div
								key={index}
								className="flex items-center gap-1"
							>
								<Icon
									icon={categoryIcons[category].icon}
									className="w-4 h-4"
								/>
								<span>
									<span>{tCategories(category)}</span>
								</span>
							</div>
						))}
					</div>

					<div className="flex items-center gap-1 text-nowrap">
						<Icon
							icon={uiIcons.content.clock}
							className="w-4 h-4"
						/>
						<span>{time}</span>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="flex items-center justify-between px-2 sm:px-4 py-0 border-t border-basic-200 text-[0.67rem] sm:text-sm w-full">
				<StarRating rating={rating} reviews={reviews} />
				<div className="flex items-center gap-1">
					<Icon
						icon={uiIcons.content.comment}
						className="w-4 h-4 sm:w-5 sm:h-5"
					/>
					<span className="">{comments}</span>
				</div>
			</div>
		</div>
	);
}
