import BaseForm from "./BaseForm";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../constants/uiIcons";

export default function EmailVerifiedForm() {
	const { t: tForms } = useTranslation("forms");

	return (
		<BaseForm>
			<div className="text-center space-y-6">
				<h3 className="text-primary-500">
					 {tForms("emailVerified.title")}
				</h3>

				<div>
					<p className="text-basic-900">
						 {tForms("emailVerified.text")}
					</p>

					<Icon
						icon={uiIcons.actions.check}
						className="text-primary-300 w-52 h-52 mx-auto"
					/>
				</div>
			</div>
		</BaseForm>
	);
}
