import BaseForm from "./BaseForm";
import { Icon } from "@iconify/react";

export default function EmailVerifiedForm() {
	return (
		<BaseForm>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">
					Your email has been verified
				</h3>

				<div>
					<p className="text-basic-900">
						Your account has been successfully activated. You can
						now log in and enjoy full access to all features and
						personalized content.
					</p>

					<Icon
						icon="lucide:check"
						className="text-primary-300 w-52 h-52 mx-auto"
					/>
				</div>

			
			</div>
		</BaseForm>
	);
}
