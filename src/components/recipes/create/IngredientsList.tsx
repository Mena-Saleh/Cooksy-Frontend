import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../../common/buttons/Button";
import { uiIcons } from "../../../constants/uiIcons";
import { useTranslation } from "react-i18next";

export default function IngredientsList() {
	const { t: tRecipes } = useTranslation("recipes");

	const units = tRecipes("create.ingredients.units", {
		returnObjects: true,
	}) as string[];

	const [rows, setRows] = useState([1, 2]);

	const addRow = () => {
		setRows((prev) => [...prev, Date.now()]);
	};

	const removeRow = (id: number) => {
		setRows((prev) => prev.filter((rowId) => rowId !== id));
	};

	return (
		<section className="flex flex-col gap-4">
			{/* Section Title and Add Link */}
			<div className="flex flex-col gap-1">
				<label className="mb-1 font-semibold">
					{tRecipes("create.ingredients.title")}
				</label>
				<p className="text-sm text-secondary-500">
					{tRecipes("create.ingredients.notFound")}
					<Button variant="ghost" className="mx-1">
						{tRecipes("create.ingredients.addNow")}
					</Button>
				</p>
			</div>

			{/* Labels */}
			<div className="hidden sm:grid grid-cols-12 text-sm font-medium text-basic-900 px-1">
				<span className="col-span-3">
					{tRecipes("create.ingredients.volume")}
				</span>
				<span className="col-span-2">
					{tRecipes("create.ingredients.unit")}
				</span>
				<span className="col-span-6">
					{tRecipes("create.ingredients.ingredient")}
				</span>
			</div>

			{/* Rows */}
			{rows.map((id, index) => (
				<div key={id} className="grid grid-cols-12 gap-2">
					<input
						type="text"
						placeholder={tRecipes(
							"create.ingredients.volumePlaceholder"
						)}
						className="col-span-3 rounded-lg input"
					/>

					<select
						defaultValue=""
						className="col-span-2 rounded-lg input"
					>
						<option value="" disabled hidden>
							{tRecipes("create.ingredients.unitPlaceholder")}
						</option>
						{units.map((unit) => (
							<option key={unit} value={unit}>
								{unit}
							</option>
						))}
					</select>

					<div className="col-span-6 flex items-center rounded-lg pr-3 input">
						<input
							type="text"
							placeholder={tRecipes(
								"create.ingredients.ingredientPlaceholder"
							)}
							className="w-full border-none focus:outline-none"
						/>
						{index >= 2 && (
							<Icon
								icon={uiIcons.actions.delete}
								className="text-secondary-500 w-5 h-5 cursor-pointer"
								onClick={() => removeRow(id)}
							/>
						)}
					</div>
				</div>
			))}

			{/* Add More Button */}
			<button
				onClick={addRow}
				type="button"
				className="border border-basic-300 rounded-lg py-2 flex justify-center items-center text-2xl text-secondary-500 cursor-pointer hover:bg-secondary-100 transition-500"
			>
				<Icon icon={uiIcons.actions.add} />
			</button>
		</section>
	);
}
