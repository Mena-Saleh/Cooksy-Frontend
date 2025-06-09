import BaseForm from "../BaseForm";
import Button from "../../common/buttons/Button";
import OAuthButton from "../../common/buttons/OAuthButton";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../../constants/uiIcons";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { login as loginApi, getCurrentUser as getCurrentUserApi } from "../../../services/CooksyAPI/auth";
import { login as loginRedux } from "../../../redux/slices/authSlice";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../common/ErrorMessage";
import { z } from "zod";
import { loginSchema } from "../../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginFormProps {
	onClose: () => void;
	onForgetPasswordClick: () => void;
	onRegisterClick: () => void;
}

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm({ onClose, onForgetPasswordClick, onRegisterClick }: LoginFormProps) {
	const { t: tForms } = useTranslation("forms");
	const { t: tApi } = useTranslation("api");
	const { t: tSchemas } = useTranslation("schemas");

	const [apiError, setApiError] = useState<string | null>(null);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema)
	});

	const onSubmit = async (loginData: LoginFormData) => {
		setApiError(null);
		const response = await loginApi(loginData);

		if (!response.success) {
			setApiError(`errors.${response.message ?? "serverError"}`);
			return;
		}

		const userResponse = await getCurrentUserApi();
		if (!userResponse.success || !userResponse.data) {
			setApiError(`errors.${userResponse.message ?? "serverError"}`);
			return;
		}

		reset();
		dispatch(loginRedux(userResponse.data));
		onClose();
	};

	return (
		<BaseForm onClose={onClose}>
			<div>
				<h3 className="text-center text-primary-500 mb-6">
					{tForms("login.title")}
				</h3>

				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<div className="w-full">
						<input
							placeholder={tForms("login.fields.email")}
							className="w-full input"
							{...register("email")}
						/>
						{errors.email && (
							<ErrorMessage message={tSchemas(`${errors.email.message}`)} />
						)}
					</div>

					<div className="relative">
						<input
							type="password"
							placeholder={tForms("login.fields.password")}
							className="w-full input pr-10"
							{...register("password")}
						/>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
							<Icon
								icon={uiIcons.visibility.eyeOpen}
								className="w-5 h-5 text-basic-900"
							/>
						</span>
						{errors.password && (
							<ErrorMessage message={tSchemas(`${errors.password.message}`)} />
						)}
					</div>

					{apiError && <ErrorMessage message={tApi(`${apiError}`)} className="text-center mb-2" />}

					<div className="text-right text-sm">
						<Button variant="ghost" className="text-secondary-500" onClick={onForgetPasswordClick} type="button">
							{tForms("buttons.forgot")}
						</Button>
					</div>

					<div className="flex justify-center">
						<Button type="submit">{tForms("buttons.login")}</Button>
					</div>
				</form>

				<p className="text-center mt-4">
					{tForms("login.registerText")}
					<Button variant="ghost" className="mx-1" onClick={onRegisterClick} type="button">
						{tForms("buttons.createAccount")}
					</Button>
				</p>

				<div className="flex items-center gap-4 mt-6">
					<hr className="flex-1 border-basic-300 rounded-full" />
					<span className="text-sm text-basic-400">
						{tForms("login.alternative")}
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
