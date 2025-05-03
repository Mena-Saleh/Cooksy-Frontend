export default function RecipeDescription() {
	return (
		<section className="mb-6">
			<label className="mb-1 font-semibold">
				Recipe Description
			</label>
			<textarea
				className="w-full p-3 border border-basic-300 rounded-lg"
				placeholder="Write a short description..."
				rows={4}
			/>
		</section>
	);
}
