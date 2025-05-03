import Button from "../../common/buttons/Button";

export default function NutritionInfo() {
	return (
		<section className="flex flex-col gap-4">
			{/* Header row with button */}
			<div className="flex flex-col items-start gap-1">
		
				<label className="mb-1 font-semibold">
					Nutrition information
				</label>

				<Button variant="ghost" className="text-sm!">Calculate nutrition value</Button>
			</div>

			{/* Nutrition fields */}
			<div className="flex flex-col gap-3 text-sm text-basic-900">
				<div className="flex items-center gap-3">
					<label className="w-20">Protein</label>
					<input
						type="text"
						placeholder="0"
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span className="ml-1">g</span>
				</div>

				<div className="flex items-center gap-3">
					<label className="w-20">Carbs</label>
					<input
						type="text"
						placeholder="0"
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span className="ml-1">g</span>
				</div>

				<div className="flex items-center gap-3">
					<label className="w-20">Fat</label>
					<input
						type="text"
						placeholder="0"
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span className="ml-1">g</span>
				</div>

				<div className="flex items-center gap-3">
					<label className="w-20">Energy</label>
					<input
						type="text"
						placeholder="0"
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span>/</span>
					<input
						type="text"
						placeholder="0"
						className="border-b border-basic-300 px-2 py-1 w-16 text-center focus:outline-none"
					/>
					<span className="ml-1">kJ/kcal</span>
				</div>
			</div>
		</section>
	);
}
