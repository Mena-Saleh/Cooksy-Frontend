import Button from "../../common/buttons/Button";
import { useTranslation } from "react-i18next";

export default function CategorySelector() {
	const { t: tRecipes } = useTranslation("recipes");
	const categoryKeys = [
		"lowCalorie",
		"lowSugar",
		"highFiber",
		"lowCarb",
		"highProtein",
		"american",
		"mediterranian",
		"asian",
		"middleEast",
		"vegan",
		"vegetarian",
		"glutenFree",
		"christmas",
		"thanksgiving",
		"easter",
	];

	return (
		<section className="flex flex-col gap-4">
			<label className="mb-1 font-semibold">
				{tRecipes("create.category.title")}
			</label>
			<div className="flex flex-wrap gap-2">
				{categoryKeys.map((key) => (
					<Button
						key={key}
						variant="outline"
						className="text-basic-900!"
					>
						{tRecipes(`create.category.categories.${key}`)}
					</Button>
				))}
			</div>
		</section>
	);
}
