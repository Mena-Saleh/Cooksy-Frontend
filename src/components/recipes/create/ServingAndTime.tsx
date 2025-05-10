import { useTranslation } from "react-i18next";

export default function ServingAndTime() {
		const { t: tRecipes } = useTranslation("recipes");
	return (
		<section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div>
				<label className="mb-1 font-semibold">
					{tRecipes("create.servingTime.servingsTitle")}
				</label>
				<input
					type="number"
					className="w-full input rounded-lg"
					placeholder={tRecipes(
						"create.servingTime.servingsPlaceholder"
					)}
				/>
			</div>
			<div>
				<label className="mb-1 font-semibold">
					{tRecipes("create.servingTime.timeTitle")}
				</label>
				<input
					type="number"
					className="w-full input rounded-lg"
					placeholder={tRecipes("create.servingTime.timePlaceholder")}
				/>
			</div>
		</section>
	);
}
