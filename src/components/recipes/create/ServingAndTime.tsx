export default function ServingAndTime() {
	return (
		<section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div>
				<label className="mb-1 font-semibold">Servings</label>
				<input
					type="number"
					className="w-full border border-basic-300 p-2 rounded-lg"
					placeholder="e.g. 4"
				/>
			</div>
			<div>
				<label className="mb-1 font-semibold">Time (min)</label>
				<input
					type="number"
					className="w-full border border-basic-300 p-2 rounded-lg"
					placeholder="e.g. 45"
				/>
			</div>
		</section>
	);
}
