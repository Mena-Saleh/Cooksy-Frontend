export default function RecipeTitleInput() {
	return (
		<div className="flex flex-col gap-1 w-full">
			<label className="mb-1 font-semibold">
				Recipe Title
			</label>
			<input
				id="recipeTitle"
				name="title"
				type="text"
				className="rounded-md px-3 py-2 input w-full"
				placeholder="Enter your recipe title"
			/>
		</div>
	);
}
