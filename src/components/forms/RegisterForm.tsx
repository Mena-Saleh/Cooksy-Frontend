import BaseForm from "./BaseForm";
import Button from "../common/buttons/Button";
import OAuthButton from "../common/buttons/OAuthButton";
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';

export default function RegisterForm() {
	const { t } = useTranslation('buttons');

	return (
		<BaseForm>
			<div>
				<h3 className="text-center text-primary-500 mb-6">
					Create an account
				</h3>

				<form className="space-y-4">
					<input
						type="text"
						placeholder="First name"
						className="w-full input"
					/>
					<input
						type="text"
						placeholder="Last name"
						className="w-full input"
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full input"
					/>
					<div className="relative">
						<input
							type="password"
							placeholder="Password"
							className="w-full input pr-10"
						/>
						{/* Eye Toggle */}
						<span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
							<Icon
								icon="lucide:eye-off"
								className="w-5 h-5 text-basic-400"
							/>
						</span>
					</div>
					<div className="relative">
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full input pr-10"
						/>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
							<Icon
								icon="lucide:eye"
								className="w-5 h-5 text-basic-900"
							/>
						</span>
					</div>

					<div className="flex justify-center align-center">
						<Button type="submit" className="mt-4">
							{t('createAccount')}
						</Button>
					</div>
				</form>

				<p className="text-base text-center mt-4">
					Already have an account?
					<Button variant="ghost" className="mx-1">Log in</Button>
				</p>

				<div className="flex items-center gap-4 mt-6">
					<hr className="flex-1 border-basic-300" />
					<span className="text-sm text-basic-400">
						Or sign up with
					</span>
					<hr className="flex-1 border-basic-300" />
				</div>

				<div className="flex flex-col sm:flex-row gap-4 my-4 justify-center align-center">
					<OAuthButton provider="google">Google</OAuthButton>
					<OAuthButton provider="facebook">Facebook</OAuthButton>
				</div>
			</div>
		</BaseForm>
	);
}
