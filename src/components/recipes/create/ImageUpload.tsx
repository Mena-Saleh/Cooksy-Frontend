import { uiIcons } from "../../../constants/uiIcons";
import { Icon } from "@iconify/react";

export default function ImageUploader() {
	return (
		<div className="border-2 border-dashed border-basic-300 rounded-lg p-4 flex items-center justify-center text-center cursor-pointer h-48 hover:bg-basic-100 transition-300">
			<div className="flex flex-col items-center gap-2 text-sm text-basic-600">
				<Icon
					icon={uiIcons.actions.upload}
					className="w-10 h-10 text-basic-400"
				/>
				<p className="font-medium">Choose a file</p>
				<p className="text-xs text-basic-400">or drag it here</p>
			</div>
		</div>
	);
}
