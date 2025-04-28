import StarRating from "./StarRating";
import { Icon } from "@iconify/react";
import { Category, categoryIcons } from "../../constants/categoryIcons";
import ActionButton from "./ActionButton";
import { uiIcons } from "../../constants/uiIcons";

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
	return (
		<div className="rounded-2xl overflow-hidden shadow-md bg-white flex flex-col w-72 h-auto">
			{/* Image */}
			<div className="relative w-full">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover"
				/>
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

				<div className="absolute bottom-0 right-0 flex items-center gap-2">
					<span className="bg-primary-500 text-xs px-3 py-1 rounded-tl-lg font-medium truncate pr-16 w-full">
						{author.name}
					</span>
					<img
						src={author.avatarUrl}
						alt={author.name}
						className="w-10 h-10 rounded-full object-cover border-2 border-basic-100 absolute right-2"
					/>
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 p-4 flex flex-col gap-4 w-full">
				<h3 className="font-poppins text-base leading-snug overflow-hidden text-ellipsis line-clamp-2 break-all hyphens-auto">
					{title}
				</h3>

				{/* <p className="text-xs text-basic-700 overflow-hidden text-ellipsis line-clamp-2 break-all">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Asperiores, ducimus. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Asperiores, ducimus.
				</p> */}

				<div className="flex items-center justify-between text-basic-700 text-sm gap-4">
					<div className="flex items-center gap-2">
						{categories.map((category, index) => (
							<div
								key={index}
								className="flex items-center gap-1"
							>
								<Icon
									icon={categoryIcons[category]}
									className="w-4 h-4"
								/>
								<span>{category}</span>
							</div>
						))}
					</div>

					<div className="flex items-center gap-1">
						<Icon icon={uiIcons.content.clock} className="w-4 h-4" />
						<span>{time}</span>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="flex items-center justify-between px-4 py-0 border-t border-basic-200 text-sm w-full">
				<StarRating rating={rating} reviews={reviews} />
				<div className="flex items-center gap-1">
					<Icon
						icon={uiIcons.content.comment}
						className="w-5 h-5 text-basic-600"
					/>
					<span className="text-basic-600">{comments}</span>
				</div>
			</div>
		</div>
	);
}
