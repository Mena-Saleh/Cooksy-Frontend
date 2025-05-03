import { useState } from "react";

export default function SharingOptions() {
	const [selected, setSelected] = useState("public");

	return (
		<section className="flex flex-col gap-4">
			<label className="mb-1 font-semibold">Sharing options</label>

			<div className="flex flex-col gap-3 text-sm">
				<label className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sharing"
						value="private"
						checked={selected === "private"}
						onChange={() => setSelected("private")}
						className="appearance-none w-4 h-4 rounded-full border-1 border-basic-300 checked:border-basic-300 checked:bg-secondary-500 transition-300 shadow-sm"
					/>
					<span>
						<strong>Private</strong> – Not visible for others
					</span>
				</label>

				<label className="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						name="sharing"
						value="public"
						checked={selected === "public"}
						onChange={() => setSelected("public")}
						className="appearance-none w-4 h-4 rounded-full border-1 border-basic-300 checked:border-basic-300 checked:bg-secondary-500 transition-300 shadow-sm"
					/>
					<span>
						<strong>Public</strong> – Accessible for all visitors
					</span>
				</label>
			</div>
		</section>
	);
}
