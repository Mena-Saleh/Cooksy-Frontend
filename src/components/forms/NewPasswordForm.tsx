import BaseForm from "./BaseForm";
import Button from "../common/buttons/Button";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export default function NewPasswordForm() {
	const { t: tForms } = useTranslation("forms");

	return (
		<BaseForm>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">
					{tForms("newPassword.title")}
				</h3>

				<div className="space-y-1">
					<p className="text-basic-900">
						{tForms("newPassword.text")}
					</p>
				</div>

				<form className="space-y-4">
					<div className="relative">
						<input
							type="password"
							placeholder={tForms("newPassword.fields.password")}
							className="w-full input pr-10"
						/>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
							<Icon
								icon="lucide:eye"
								className="w-5 h-5 text-basic-400"
							/>
						</span>
					</div>

					<div className="relative">
						<input
							type="password"
							placeholder={tForms(
								"newPassword.fields.confirmPassword"
							)}
							className="w-full input pr-10"
						/>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
							<Icon
								icon="lucide:eye-off"
								className="w-5 h-5 text-basic-400"
							/>
						</span>
					</div>

					<Button type="submit" className="mx-auto block mt-4">
						{tForms("buttons.resetPassword")}
					</Button>
				</form>
			</div>
		</BaseForm>
	);
}
