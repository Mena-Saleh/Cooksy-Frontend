import BaseForm from "../BaseForm";
import Button from "../../common/buttons/Button";
import { useTranslation } from "react-i18next";
import { forgotPasswordSchema } from "../../../schemas/forgotPasswordSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { forgotPassword as forgotPasswordApi } from "../../../services/CooksyAPI/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../../common/ErrorMessage";
import { useState } from "react";

interface ForgotPasswordFormProps {
	onClose: () => void;
	onResetLinkSent: () => void;
}

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm({ onClose, onResetLinkSent }: ForgotPasswordFormProps) {
	const { t: tForms } = useTranslation("forms");
	const { t: tSchemas } = useTranslation("schemas");
	const { t: tApi } = useTranslation("api");

	const [apiError, setApiError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema)
	});

	const onSubmit = async (forgetPasswordData: ForgotPasswordFormData) => {
		const response = await forgotPasswordApi(forgetPasswordData);
		if (response.success) {
			reset();
			onResetLinkSent();
		} else {
			setApiError(`errors.${response.message ?? "serverError"}`);
		}
	};

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

				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

					<div className="w-full">
						<input
							type="text"
							placeholder={tForms("forgotPassword.fields.email")}
							className="w-full input"
							{...register("email")}
						/>
						{errors.email && (
							<ErrorMessage message={tSchemas(`${errors.email.message}`)} />
						)}
					</div>
					{apiError && (
						<ErrorMessage message={tApi(`${apiError}`)} className="text-center mb-0" />
					)}

					<Button type="submit" className="mt-2">
						{tForms("buttons.sendResetLink")}
					</Button>
				</form>
			</div>
		</BaseForm>
	);
}
