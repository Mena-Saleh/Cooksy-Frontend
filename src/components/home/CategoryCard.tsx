interface HomeCategoryCardProps {
	imageUrl: string;
	label: string;
	onClick?: () => void;
}

export default function HomeCategoryCard({
	imageUrl,
	label,
	onClick,
}: HomeCategoryCardProps) {
	return (
		<div
			onClick={onClick}
			className="rounded-2xl shadow-md overflow-hidden bg-white cursor-pointer transition-300 hover:scale-105 flex flex-col w-auto max-w-48 sm:max-w-full sm:w-68 xl:w-72 h-auto"
		>
			{/* Image */}
			<div className="w-full h-28 sm:h-60">
				<img
					src={imageUrl}
					alt={label}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Label */}
			<div className="px-2 py-2 text-center">
				<p className="text-sm sm:text-base truncate">{label}</p>
			</div>
		</div>
	);
}
