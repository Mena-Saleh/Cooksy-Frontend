import BaseForm from "../BaseForm";
import Button from "../../common/buttons/Button";
import { useTranslation } from "react-i18next";

interface VerifyEmailFormProps {
	onClose: () => void;

}
export default function VerifyEmailForm({ onClose }: VerifyEmailFormProps) {
	const { t: tForms } = useTranslation("forms");

	return (
		<BaseForm onClose={onClose}>
			<div>
				<div className="text-center space-y-6">
					<h3 className="text-primary-500">
						{tForms("verifyEmail.title")}
					</h3>

					<p className="max-w-md mx-auto">
						{tForms("verifyEmail.text")}
					</p>

					<p className="max-w-md mx-auto">
						{tForms("verifyEmail.note")}
						<Button variant="ghost" className="ml-1">
							{tForms("verifyEmail.resend")}
						</Button>
					</p>
				</div>
			</div>
		</BaseForm>
	);
}
