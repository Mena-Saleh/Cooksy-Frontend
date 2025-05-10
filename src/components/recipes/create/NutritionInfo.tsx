import Button from "../../common/buttons/Button";
import { useTranslation } from "react-i18next";

export default function NutritionInfo() {
		const { t: tRecipes } = useTranslation("recipes");
	return (
		<section className="flex flex-col gap-4">
			{/* Header row with button */}
			<div className="flex flex-col items-start gap-1">
				<label className="mb-1 font-semibold">
					{tRecipes("create.nutrition.title")}
				</label>

				<Button variant="ghost">
					{tRecipes("create.nutrition.calculate")}
				</Button>
			</div>

			{/* Nutrition fields */}
			<div className="flex flex-col gap-3 text-sm text-basic-900">
				<div className="flex items-center gap-3">
					<label className="w-20">
						{tRecipes("create.nutrition.protein")}
					</label>
					<input
						type="text"
						placeholder={tRecipes("create.nutrition.placeholder")}
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none "
					/>
					<span className="ml-1">
						{" "}
						{tRecipes("create.nutrition.unit.grams")}
					</span>
				</div>

				<div className="flex items-center gap-3">
					<label className="w-20">
						{tRecipes("create.nutrition.carbs")}
					</label>
					<input
						type="text"
						placeholder={tRecipes("create.nutrition.placeholder")}
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span className="ml-1">
						{" "}
						{tRecipes("create.nutrition.unit.grams")}
					</span>
				</div>

				<div className="flex items-center gap-3">
					<label className="w-20">
						{tRecipes("create.nutrition.fat")}
					</label>
					<input
						type="text"
						placeholder={tRecipes("create.nutrition.placeholder")}
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span className="ml-1">
						{tRecipes("create.nutrition.unit.grams")}
					</span>
				</div>

				<div className="flex items-center gap-3">
					<label className="w-20">
						{tRecipes("create.nutrition.energy")}
					</label>
					<input
						type="text"
						placeholder={tRecipes("create.nutrition.placeholder")}
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span>/</span>
					<input
						type="text"
						placeholder={tRecipes("create.nutrition.placeholder")}
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span className="ml-1">
						{tRecipes("create.nutrition.unit.kjkcal")}
					</span>
				</div>
			</div>
		</section>
	);
}
