import { useEffect, useState } from "react";
import BaseForm from "../BaseForm";
import Button from "../../common/buttons/Button";
import ErrorMessage from "../../common/ErrorMessage";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/hooks";
import { resendVerification } from "../../../services/CooksyAPI/auth";
import clsx from "clsx";

interface VerifyEmailFormProps {
	onClose: () => void;
}

export default function ConfirmEmailForm({ onClose }: VerifyEmailFormProps) {
	const { t: tForms } = useTranslation("forms");
	const { t: tApi } = useTranslation("api");
	const email = useAppSelector((state) => state.auth.userEmail);
	const [success, setSuccess] = useState<boolean>(false);
	const [apiError, setApiError] = useState<string | null>(null);
	const [cooldown, setCooldown] = useState(0);
	const [hasTried, setHasTried] = useState(false);

	useEffect(() => {
		if (cooldown > 0) {
			const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
			return () => clearTimeout(timer);
		}
	}, [cooldown]);

	const handleResend = async () => {
		if (!email || cooldown > 0) return;
		setCooldown(30);
		setHasTried(true);
		const response = await resendVerification({ email });
		if (response.success) {
			setSuccess(true);
			setApiError(null);
		} else {
			setSuccess(false);
			setApiError(`errors.${response.message ?? "serverError"}`);
		}
	};

	return (
		<BaseForm onClose={onClose}>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">{tForms("confirmEmail.title")}</h3>

				<p className="max-w-md mx-auto">{tForms("confirmEmail.text")}</p>

				<p className="max-w-md mx-auto">
					{tForms("confirmEmail.note")}
					<Button
						variant="ghost"
						className={clsx("ml-1", cooldown > 0 ? "!text-basic-300 pointer-events-none" : "")}
						onClick={handleResend}
						disabled={cooldown > 0}
					>
						{cooldown > 0
							? `${tForms("confirmEmail.resend")} (${cooldown})`
							: tForms("confirmEmail.resend")}
					</Button>
				</p>

				{hasTried && (
					<>
						{success && (
							<p className="text-primary-500 text-xs">
								{tApi(`success.verificationResentSuccessfully`)}
							</p>
						)}
						{apiError && (
							<ErrorMessage message={tApi(`${apiError}`)} className="m-0" />
						)}
					</>
				)}


			</div>
		</BaseForm>
	);
}
