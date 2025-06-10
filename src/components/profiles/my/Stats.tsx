interface StatsProps {
	rating: number;
	likes: number;
	views: string | number;
}

export default function Stats({ rating, likes, views }: StatsProps) {
	return (
		<div className="rounded-xl p-6 w-fit shadow-sm space-y-3">
			<h3 className="font-semibold mb-4">Stats</h3>
			<div className="flex gap-16">
				<div>
					<div className="text-xl font-bold">{rating}</div>
					<div className="text-xs">Average rating</div>
				</div>
				<div>
					<div className="text-xl font-bold">{likes}</div>
					<div className="text-xs">Recipe likes</div>
				</div>
				<div>
					<div className="text-xl font-bold">{views}</div>
					<div className="text-xs">Recipe views</div>
				</div>
			</div>
		</div>
	);
}
