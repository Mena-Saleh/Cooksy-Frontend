import BaseForm from "./BaseForm";
import Button from "../common/buttons/Button";

export default function ForgotPasswordForm() {
	return (
		<BaseForm>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">Forgot your password?</h3>

				<div className="space-y-1">
					<p className="text-basic-900">
						Enter your email address and we’ll send you a link to
						reset your password
					</p>
				</div>

				<form className="space-y-4">
					<input
						type="email"
						placeholder="Email"
						className="w-full input"
					/>

					<Button type="submit" className="mt-2">
						Send reset link
					</Button>
				</form>
			</div>
		</BaseForm>
	);
}
