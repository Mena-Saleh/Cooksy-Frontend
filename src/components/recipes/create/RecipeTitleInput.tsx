import { useTranslation } from "react-i18next";

export default function RecipeTitleInput() {
	const { t: tRecipes } = useTranslation("recipes");
	return (
		<div className="flex flex-col gap-1 w-full">
			<label className="mb-1 font-semibold">
				{tRecipes("create.recipeTitle.title")}
			</label>
			<input
				id="recipeTitle"
				name="title"
				type="text"
				className="rounded-lg px-3 py-2 input w-full"
				placeholder={tRecipes("create.recipeTitle.placeholder")}
			/>
		</div>
	);
}
