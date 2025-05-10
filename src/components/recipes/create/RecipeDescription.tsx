import { useTranslation } from "react-i18next";

export default function RecipeDescription() {
		const { t: tRecipes } = useTranslation("recipes");
	return (
		<section className="mb-6">
			<label className="mb-1 font-semibold">
				{tRecipes("create.description.title")}
			</label>
			<textarea
				className="w-full p-3 border border-basic-300 rounded-lg"
				placeholder={tRecipes("create.description.placeholder")}
				rows={4}
			/>
		</section>
	);
}
