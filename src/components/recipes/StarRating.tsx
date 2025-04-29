import { Icon } from "@iconify/react";
import { uiIcons } from "../../constants/uiIcons";

interface StarRatingProps {
	rating: number;
	reviews: number;
}

export default function StarRating({ rating, reviews }: StarRatingProps) {
	return (
		<div className="flex items-center">
			<div className="flex items-center">
				{Array.from({ length: 5 }).map((_, i) => (
					<Icon
						key={i}
						icon={
							i < rating
								? uiIcons.star.filled
								: uiIcons.star.outline
						}
						className="text-primary-500 w-5 h-5 sm:w-8 sm:h-8 -mr-2"
					/>
				))}
			</div>
			<span className="ml-2 text-basic-900 text-[0.67rem] sm:text-sm flex items-center justify-center h-10">
				({reviews})
			</span>
		</div>
	);
}
