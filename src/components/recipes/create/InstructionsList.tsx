import { useState } from "react";
import { Icon } from "@iconify/react";
import { uiIcons } from "../../../constants/uiIcons";
import { useTranslation } from "react-i18next";

export default function InstructionsList() {
	const { t: tRecipes } = useTranslation("recipes");

	const [steps, setSteps] = useState([{ id: 1, text: "" }]);

	const addStep = () => {
		setSteps((prev) => [...prev, { id: Date.now(), text: "" }]);
	};

	const removeStep = (id: number) => {
		if (steps.length > 1) {
			setSteps((prev) => prev.filter((step) => step.id !== id));
		}
	};

	return (
		<section className="flex flex-col gap-4">
			<label className="mb-1 font-semibold">
				{tRecipes("create.instructions.title")}
			</label>

			<div className="flex flex-col gap-3">
				{steps.map((step, index) => (
					<div key={step.id} className="flex items-center gap-2">
						<span className="font-bold">{index + 1}.</span>
						<div className="relative flex-1">
							<input
								type="text"
								placeholder={tRecipes(
									"create.instructions.placeholder"
								)}
								className="w-full input pr-10 rounded-lg"
							/>
							{index >= 1 && (
								<button
									type="button"
									onClick={() => removeStep(step.id)}
									className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
								>
									<Icon
										icon={uiIcons.actions.delete}
										className="text-secondary-500 w-5 h-5"
									/>
								</button>
							)}
						</div>
					</div>
				))}

				{/* Add Instruction Button */}
				<button
					type="button"
					onClick={addStep}
					className="w-full border border-basic-300 rounded-lg py-2 text-secondary-500 hover:bg-secondary-100 transition-700 cursor-pointer"
				>
					<Icon
						icon={uiIcons.actions.add}
						className="mx-auto w-5 h-5"
					/>
				</button>
			</div>
		</section>
	);
}
