import { Icon } from "@iconify/react";
import Button from "../../common/buttons/Button";
import { uiIcons } from "../../../constants/uiIcons";

export default function IngredientsList() {
	return (
		<section className="flex flex-col gap-4">
			{/* Section Title and Add Link */}
			<div className="flex flex-col gap-1">

				<label className="mb-1 font-semibold">Add the ingredients</label>
				<p className="text-sm text-secondary-500">
					Can’t find your ingredient?
					<Button variant="ghost" className="mx-1">Add it now</Button>
				</p>
			</div>

			{/* Labels */}
			<div className="hidden sm:grid grid-cols-12 text-sm font-medium text-basic-900 px-1">
				<span className="col-span-3">Volume</span>
				<span className="col-span-2">Unit</span>
				<span className="col-span-6">Ingredient</span>
			</div>

			{/* Ingredient Row 1 */}
			<div className="grid grid-cols-12 gap-2">
				<input
					type="text"
					placeholder="Text"
					className="col-span-3 rounded-md input"
				/>
				<select className="col-span-2 rounded-md input">
					<option>Unit</option>
				</select>
				<input
					type="text"
					placeholder="Text"
					className="col-span-6 rounded-md input"
				/>
			</div>

			{/* Ingredient Row 2 with delete icon */}
			<div className="grid grid-cols-12 gap-2">
				<input
					type="text"
					placeholder="Text"
					className="col-span-3 rounded-md input "
				/>
				<select className="col-span-2 rounded-md input">
					<option>Unit</option>
				</select>
				<div className="col-span-6 flex items-center border border-basic-300 rounded-md pr-3">
					<input
						type="text"
						placeholder="Text"
						className="w-full border-none focus:outline-none input"
					/>
					<Icon
						icon={uiIcons.actions.delete}
						className="text-secondary-500 w-5 h-5 cursor-pointer"
					/>
				</div>
			</div>

			{/* Add More Button */}
			<button className="border border-basic-300 rounded-md py-2 flex justify-center items-center text-2xl text-secondary-500 cursor-pointer hover:bg-secondary-100 transition-500">
				<Icon icon={uiIcons.actions.add} />
			</button>
		</section>
	);
}
