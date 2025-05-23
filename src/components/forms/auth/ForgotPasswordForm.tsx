import BaseForm from "../BaseForm";
import Button from "../../common/buttons/Button";
import { useTranslation } from "react-i18next";


interface ForgotPasswordFormProps {
	onClose: () => void;
}
export default function ForgotPasswordForm({ onClose }: ForgotPasswordFormProps) {
	const { t: tForms } = useTranslation("forms");

	return (
		<BaseForm onClose={onClose}>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">
					{tForms("forgotPassword.title")}
				</h3>

				<div className="space-y-1">
					<p className="text-basic-900">
						{tForms("forgotPassword.text")}
					</p>
				</div>

				<form className="space-y-4">
					<input
						type="email"
						placeholder={tForms("forgotPassword.fields.email")}
						className="w-full input"
					/>

					<Button type="submit" className="mt-2">
						{tForms("buttons.sendResetLink")}
					</Button>
				</form>
			</div>
		</BaseForm>
	);
}
