import BaseForm from "../BaseForm";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../../constants/uiIcons";
import { useNavigate } from "react-router-dom";

interface PasswordResetSuccessfullyFormProps {
	onClose: () => void;
	showCloseButton?: boolean;
}
export default function PasswordResetSuccessfullyForm({ onClose, showCloseButton = true }: PasswordResetSuccessfullyFormProps) {
	const { t: tForms } = useTranslation("forms");
	const navigate = useNavigate();

	setTimeout(() => {
		navigate("/");
	}, 3000);


	return (
		<BaseForm onClose={onClose} showCloseButton={showCloseButton}>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">
					{tForms("passwordResetSuccessfully.title")}
				</h3>

				<div className="space-y-1">
					<p className="text-basic-900">
						{tForms("passwordResetSuccessfully.text")}
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
