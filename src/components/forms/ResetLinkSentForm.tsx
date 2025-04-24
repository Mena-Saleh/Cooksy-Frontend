import BaseForm from "./BaseForm";
import { Icon } from "@iconify/react";

export default function ResetLinkSentForm() {
	return (
		<BaseForm>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">Check your inbox!</h3>

				<div className="space-y-1">
					<p className="text-basic-900">
						We’ve sent you a password reset link. Please check your
						email and follow the instructions to create a new
						password.
					</p>
				</div>

				<Icon
					icon="lucide:check"
					className="text-primary-500 w-52 h-52 mx-auto"
				/>
			</div>
		</BaseForm>
	);
}
