import BaseForm from "../BaseForm";
import Button from "../../common/buttons/Button";
import { useTranslation } from "react-i18next";
import ErrorMessage from "../../common/ErrorMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassword as resetPasswordApi } from "../../../services/CooksyAPI/auth";
import { resetPasswordSchema } from "../../../schemas/resetPasswordSchema";
import { useState } from "react";
import { z } from "zod";
import { ResetPassword as resetPasswordModel } from "../../../models/auth/ResetPassword";
import { useSearchParams } from "react-router-dom";

interface NewPasswordFormProps {
	onClose?: () => void;
	onResetPasswordDone: () => void;
	showCloseButton?: boolean;
}

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm({ onClose, onResetPasswordDone, showCloseButton = true }: NewPasswordFormProps) {
	const { t: tForms } = useTranslation("forms");
	const { t: tSchemas } = useTranslation("schemas");
	const { t: tApi } = useTranslation("api");

	const [searchParams] = useSearchParams();
	const userId = searchParams.get("userId");
	const token = searchParams.get("token");

	const [apiError, setApiError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ResetPasswordFormData>({
		resolver: zodResolver(resetPasswordSchema)
	});

	const onSubmit = async (resetPasswordData: ResetPasswordFormData) => {

		const resetPasswordModel: resetPasswordModel = {
			userId: userId ?? "",
			token: token ?? "",
			newPassword: resetPasswordData.password,
			confirmPassword: resetPasswordData.confirmPassword
		}

		const response = await resetPasswordApi(resetPasswordModel);

		if (response.success) {
			reset();
			onResetPasswordDone();
		} else {
			setApiError(`errors.serverError`);
		}
	};

	return (
		<BaseForm onClose={onClose} showCloseButton={showCloseButton}>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">
					{tForms("resetPassword.title")}
				</h3>

				<div className="space-y-1">
					<p className="text-basic-900">
						{tForms("resetPassword.text")}
					</p>
				</div>

				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<div className="relative">
						<input
							type="password"
							placeholder={tForms("resetPassword.fields.password")}
							className="w-full input pr-10"
							{...register("password")}
						/>
						{errors.password && (
							<ErrorMessage message={tSchemas(`${errors.password.message}`)} />
						)}
					</div>

					<div className="relative">
						<input
							type="password"
							placeholder={tForms(
								"resetPassword.fields.confirmPassword"
							)}
							className="w-full input pr-10"
							{...register("confirmPassword")}
						/>
						{errors.confirmPassword && (
							<ErrorMessage message={tSchemas(`${errors.confirmPassword.message}`)} />
						)}
					</div>
					{apiError && <ErrorMessage message={tApi(apiError)} />}

					<Button type="submit" className="mx-auto block mt-4">
						{tForms("buttons.resetPassword")}
					</Button>
				</form>
			</div>
		</BaseForm>
	);
}
