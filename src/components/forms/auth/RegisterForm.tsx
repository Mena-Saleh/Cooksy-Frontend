import BaseForm from "../BaseForm";
import Button from "../../common/buttons/Button";
import ErrorMessage from "../../common/ErrorMessage";
import OAuthButton from "../../common/buttons/OAuthButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { register as registerAPI } from "../../../services/CooksyAPI/auth";
import { registerSchema } from "../../../schemas/registerSchema";
import { useState } from "react";
import { z } from "zod";
import { useAppDispatch } from "../../../redux/hooks";
import { setPendingEmail } from "../../../redux/slices/authSlice";

interface RegisterFormProps {
	onClose: () => void;
	onLoginClick: () => void;
	onRegisterDone: () => void;
}

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm({ onClose, onLoginClick, onRegisterDone }: RegisterFormProps) {
	const { t: tForms } = useTranslation("forms");
	const { t: tSchemas } = useTranslation("schemas");
	const { t: tApi } = useTranslation("api");

	const dispatch = useAppDispatch();
	const [apiError, setApiError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema)
	});

	const onSubmit = async (data: RegisterFormData) => {
		const response = await registerAPI(data);
		if (response.success) {
			reset();
			dispatch(setPendingEmail(data.email));
			onRegisterDone();
		} else {
			setApiError(response.message ?? "The server has encountered an error.");
		}
	};

	return (
		<BaseForm onClose={onClose}>
			<div>
				<h3 className="text-center text-primary-500 mb-6">
					{tForms("register.title")}
				</h3>

				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="w-full">
							<input
								type="text"
								placeholder={tForms("register.fields.firstName")}
								className="w-full input"
								{...register("firstName")}
							/>
							{errors.firstName && (
								<ErrorMessage message={tSchemas(`${errors.firstName.message}`)} />
							)}
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder={tForms("register.fields.lastName")}
								className="w-full input"
								{...register("lastName")}
							/>
							{errors.lastName && (
								<ErrorMessage message={tSchemas(`${errors.lastName.message}`)} />
							)}
						</div>
					</div>

					<div>
						<input
							type="text"
							placeholder={tForms("register.fields.email")}
							className="w-full input"
							{...register("email")}
						/>
						{errors.email && (
							<ErrorMessage message={tSchemas(`${errors.email.message}`)} />
						)}
					</div>

					<div>
						<input
							type="password"
							placeholder={tForms("register.fields.password")}
							className="w-full input"
							{...register("password")}
						/>
						{errors.password && (
							<ErrorMessage message={tSchemas(`${errors.password.message}`)} />
						)}
					</div>

					<div>
						<input
							type="password"
							placeholder={tForms("register.fields.confirmPassword")}
							className="w-full input"
							{...register("confirmPassword")}
						/>
						{errors.confirmPassword && (
							<ErrorMessage message={tSchemas(`${errors.confirmPassword.message}`)} />
						)}
					</div>

					{apiError && (
						<ErrorMessage message={tApi(`errors.${apiError}`)} className="text-center mb-0" />
					)}

					<div className="flex justify-center mt-4">
						<Button type="submit">
							{tForms("buttons.createAccount")}
						</Button>
					</div>
				</form>

				<p className="text-center mt-4">
					{tForms("register.loginText")}
					<Button onClick={onLoginClick} variant="ghost" className="mx-1">
						{tForms("buttons.login")}
					</Button>
				</p>

				<div className="flex items-center gap-4 mt-6">
					<hr className="flex-1 border-basic-300 rounded-full" />
					<span className="text-sm text-basic-400">
						{tForms("register.alternative")}
					</span>
					<hr className="flex-1 border-basic-300 rounded-full" />
				</div>

				<div className="flex flex-col sm:flex-row gap-4 my-4 justify-center">
					<OAuthButton provider="google">Google</OAuthButton>
					<OAuthButton provider="facebook">Facebook</OAuthButton>
				</div>
			</div>
		</BaseForm>
	);
}
