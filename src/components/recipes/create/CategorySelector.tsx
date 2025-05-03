import Button from "../../common/buttons/Button";

export default function CategorySelector() {
	const categories = [
		"Low-calorie",
		"Low-sugar",
		"High-fiber",
		"Low-carb",
		"High protein",
		"American",
		"Mediterranian",
		"Asian",
		"Middle-east",
		"Vegan",
		"Vegetarian",
		"Glutenfree",
		"Christmas",
		"Thanksgiving",
		"Easter",
	];

	return (
		<section className="flex flex-col gap-4">
			<label className="mb-1 font-semibold">Add category</label>
			<div className="flex flex-wrap gap-2">
				{categories.map((category) => (
				
					<Button key={category} variant="outline">{category}</Button>
				))}
			</div>
		</section>
	);
}
