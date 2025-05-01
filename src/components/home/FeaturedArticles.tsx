import UnderlinedHeading from "../common/UnderlinedHeading";
import ArticleCard from "../articles/ArticleCard";
import { useTranslation } from "react-i18next";

const articles = [
	{
		id: 1,
		imageUrl:
			"https://media.self.com/photos/5b75ad5728dfab53ee567688/4:3/w_2560%2Cc_limit/GettyImages-614938268.jpg", // peaches
		title: "Peaches: A Nutritional Powerhouse",
		description:
			"Peaches are low in calories and rich in vitamins A and C, antioxidants, and fiber, making them beneficial for immune health and digestion.",
	},
	{
		id: 2,
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IUiC28MbohGzjRr_XcQmFe_1bzeD6DaLEA&s", // pistachios
		title: "Nutritional Benefits of Pistachios",
		description:
			"Pistachios are rich in healthy fats, protein, fiber, and essential vitamins, supporting heart health and muscle function.",
	},
];

export default function FeaturedArticles() {
	const { t: tHome } = useTranslation("home");
	return (
		<section className="flex flex-col gap-6 px-4 sm:px-10 lg:px-24 my-20">
			{/* Mobile heading */}
			<div className="block sm:hidden">
				<UnderlinedHeading
					text={tHome("articlesHeading")}
					variant="medium2"
				/>
			</div>
			{/* Desktop heading */}
			<div className="hidden sm:block">
				<UnderlinedHeading
					text={tHome("articlesHeading")}
					variant="large1"
				/>
			</div>

			<div className="flex flex-col gap-6">
				{articles.map((article) => (
					<ArticleCard
						key={article.id}
						{...article}
						onReadMore={() => {}}
					/>
				))}
			</div>
		</section>
	);
}
