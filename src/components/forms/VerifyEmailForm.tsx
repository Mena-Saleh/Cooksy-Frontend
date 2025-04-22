import BaseForm from "./BaseForm";
import Button from "../common/buttons/Button";

export default function VerifyEmailForm() {
	return (
		<BaseForm>
			<div>
				<div className="text-center space-y-6">
					<h3 className="text-primary-500">Verify your email</h3>

					<p className="max-w-md mx-auto">
						We’ve sent a verification link to your email.
						<br />
						Please check your inbox and click the link to activate
						your account.
					</p>

					<p className="max-w-md mx-auto">
						Didn’t get the email? Check your spam folder or
						<Button variant="ghost" className="ml-1">resend it</Button>
					</p>
				</div>
			</div>
		</BaseForm>
	);
}
