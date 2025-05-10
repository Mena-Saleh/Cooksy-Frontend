import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SharingOptions() {
	const [selected, setSelected] = useState("public");
	const { t: tRecipes } = useTranslation("recipes");

	return (
		<section className="flex flex-col gap-4">
			<label className="mb-1 font-semibold">
				{tRecipes("create.sharing.title")}
			</label>

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
						<strong>
							{tRecipes("create.sharing.private.label")}
						</strong>{" "}
						– {tRecipes("create.sharing.private.description")}
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
						<strong>
							{tRecipes("create.sharing.public.label")}
						</strong>{" "}
						– {tRecipes("create.sharing.public.description")}
					</span>
				</label>
			</div>
		</section>
	);
}
