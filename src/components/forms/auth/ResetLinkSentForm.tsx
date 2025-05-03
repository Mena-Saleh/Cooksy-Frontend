import BaseForm from "../BaseForm";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../../constants/uiIcons";

interface ResetLinkSentFormProps {
	onClose: () => void;
}
export default function ResetLinkSentForm({ onClose }: ResetLinkSentFormProps) {
	const { t: tForms } = useTranslation("forms");
	return (
		<BaseForm onClose={onClose}>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">
					{tForms("resetLinkSent.title")}
				</h3>

				<div className="space-y-1">
					<p className="text-basic-900">
						{tForms("resetLinkSent.text")}
					</p>
				</div>

				<Icon
					icon={uiIcons.actions.check}
					className="text-primary-500 w-52 h-52 mx-auto"
				/>
			</div>
		</BaseForm>
	);
}
