import { Icon } from "@iconify/react";
import { uiIcons } from "../../../constants/uiIcons";

export default function InstructionsList() {
	return (
		<section className="flex flex-col gap-4">
			<label className="mb-1 font-semibold">
				Instructions
			</label>

			<div className="flex flex-col gap-3">
				{[1, 2, 3, 4].map((step) => (
					<div key={step} className="flex items-center gap-2">
						<span className="font-bold">{step}.</span>
						<div className="relative flex-1">
							<input
								type="text"
								placeholder="Text"
								className="w-full border border-basic-200 px-4 py-2 pr-10 rounded-lg focus:outline-none"
							/>
							{step > 1 && (
								<button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
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
				<button className="w-full border border-basic-200 rounded-lg py-2 text-secondary-500 hover:bg-secondary-100 transition-700 cursor-pointer">
					<Icon
						icon={uiIcons.actions.add}
						className="mx-auto w-5 h-5"
					/>
				</button>
			</div>
		</section>
	);
}
