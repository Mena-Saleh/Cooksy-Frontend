import CategoryCard from "./CategoryCard";
import UnderlinedHeading from "../common/UnderlinedHeading";
import Button from "../common/buttons/Button";
import { Icon } from "@iconify/react";
import { uiIcons } from "../../constants/uiIcons";
import { useTranslation } from "react-i18next";

interface MainIngredient {
	id: number;
	label: string;
	imageUrl: string;
}

interface MainIngredientPickerProps {
	onShowMore: () => void;
}

const mainIngredients: MainIngredient[] = [
	{
		id: 1,
		label: "Fish",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJhYw_d9c4iV52wpMpEPAe9X9zx8BsS6cJg&s",
	},
	{
		id: 2,
		label: "Vegetables",
		imageUrl:
			"https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
	},
	{
		id: 3,
		label: "Chicken",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GuLgcwAR5NBfmstk0TZxZlNH20aL-mwDOw&s",
	},
	{
		id: 4,
		label: "Meat",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-dU5xD4z99hCYlukrCOdB6qU9CloYLGNwA&s",
	},
];

export default function MainIngredientPicker({
	onShowMore,
}: MainIngredientPickerProps) {
	const { t: tHome } = useTranslation("home");

	return (
		<section className="flex flex-col gap-6 mt-[10%] sm:mt-[5%]">
			{/* Heading */}
			<div className="px-6 sm:px-24">
				<UnderlinedHeading
					text={tHome("pickMainIngredient")}
					variant="medium1"
				/>
			</div>

			{/* Ingredients Grid */}
			<div className="grid justify-center items-center gap-4 sm:gap-12 px-4 sm:px-10 lg:px-24 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
				{mainIngredients.map((ingredient) => (
					<CategoryCard
						key={ingredient.id}
						label={tHome(`categories.${ingredient.label}`)}
						imageUrl={ingredient.imageUrl}
					/>
				))}
			</div>

			{/* Show More Button */}
			<div className="flex items-center justify-end px-6 sm:px-24 ">
				<Button onClick={onShowMore} className="flex items-center">
					{tHome("showMore")}
					<Icon icon={uiIcons.nav.chevronRight} className="w-4 h-4" />
				</Button>
			</div>
		</section>
	);
}
