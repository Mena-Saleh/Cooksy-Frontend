import BaseForm from "./BaseForm";
import Button from "../common/buttons/Button";
import OAuthButton from "../common/buttons/OAuthButton";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../constants/uiIcons";

interface RegisterFormProps {
	onClose: () => void;
}
export default function RegisterForm({ onClose }: RegisterFormProps) {
	const { t: tForms } = useTranslation("forms");

	return (
		<BaseForm onClose={onClose}>
			<div>
				<h3 className="text-center text-primary-500 mb-6">
					{tForms("register.title")}
				</h3>

				<form className="space-y-4">
					<input
						type="text"
						placeholder={tForms("register.fields.firstName")}
						className="w-full input"
					/>
					<input
						type="text"
						placeholder={tForms("register.fields.lastName")}
						className="w-full input"
					/>
					<input
						type="email"
						placeholder={tForms("register.fields.email")}
						className="w-full input"
					/>
					<div className="relative">
						<input
							type="password"
							placeholder={tForms("register.fields.password")}
							className="w-full input pr-10"
						/>
						{/* Eye Toggle */}
						<span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
							<Icon
								icon={uiIcons.visibility.eyeClosed}
								className="w-5 h-5 text-basic-400"
							/>
						</span>
					</div>
					<div className="relative">
						<input
							type="password"
							placeholder={tForms(
								"register.fields.confirmPassword"
							)}
							className="w-full input pr-10"
						/>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
							<Icon
								icon={uiIcons.visibility.eyeOpen}
								className="w-5 h-5 text-basic-900"
							/>
						</span>
					</div>

					<div className="flex justify-center align-center">
						<Button type="submit" className="mt-4">
							{tForms("buttons.createAccount")}
						</Button>
					</div>
				</form>

				<p className="text-base text-center mt-4">
					{tForms("register.loginText")}
					<Button variant="ghost" className="mx-1">
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

				<div className="flex flex-col sm:flex-row gap-4 my-4 justify-center align-center">
					<OAuthButton provider="google">Google</OAuthButton>
					<OAuthButton provider="facebook">Facebook</OAuthButton>
				</div>
			</div>
		</BaseForm>
	);
}
