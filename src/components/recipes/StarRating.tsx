import { Icon } from "@iconify/react";

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
								? "material-symbols-light:star-rounded"
								: "material-symbols-light:star-outline-rounded"
						}
						className="text-primary-500 w-8 h-8 -mr-2"
					/>
				))}
			</div>
			<span className="ml-2 text-basic-900 text-sm flex items-center justify-center h-10">
				({reviews})
			</span>
		</div>
	);
}
