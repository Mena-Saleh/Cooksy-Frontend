import Button from "../common/buttons/Button";
import { useTranslation } from "react-i18next";

interface ArticleCardProps {
	imageUrl: string;
	title: string;
	description: string;
	onReadMore: () => void;
}

export default function ArticleCard({
	imageUrl,
	title,
	description,
	onReadMore,
}: ArticleCardProps) {
	const { t: tHome } = useTranslation("home");
	return (
		<div className="flex flex-col sm:flex-row rounded-2xl shadow-md overflow-hidden w-[95%] sm:w-[88%] h-auto mx-auto">
			{/* Image */}
			<div className="w-full sm:w-1/3 md:w-1/4">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover max-h-60 sm:max-h-full"
				/>
			</div>

			{/* Content */}
			<div className="w-full sm:w-2/3 md:w-3/4 p-6 flex flex-col justify-between gap-4">
				<div>
					<h3 className="font-semibold text-xl sm:text-2xl text-basic-900">
						{title}
					</h3>
					<p className="text-sm sm:text-base mt-2">{description}</p>
				</div>

				<div className="mt-2 flex justify-end">
					<Button onClick={onReadMore}>{tHome("readMore")}</Button>
				</div>
			</div>
		</div>
	);
}
