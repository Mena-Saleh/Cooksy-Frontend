import BaseForm from "./BaseForm";
import { Icon } from "@iconify/react";
import Button from "../common/buttons/Button";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../constants/uiIcons";

interface InfoFormProps {
	onClose: () => void;
}
export default function InfoForm({ onClose }: InfoFormProps) {
	const { t: tForms } = useTranslation("forms");

	return (
		<BaseForm onClose={onClose}>
			<div className="space-y-6">
				<div className="text-center">
					<div className="space-y-2 text-left inline-block">
						<h3 className="text-primary-500">
							{tForms("info.title")}
						</h3>
						<p className="font-medium sm:text-xl">
							{tForms("info.subtitle")}
						</p>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-start gap-4">
						<div className="bg-secondary-100 p-2 w-8 h-8 rounded-full flex items-center justify-center align-center">
							<Icon
								icon={uiIcons.content.heartFilled}
								className="text-secondary-500"
							/>
						</div>
						<p>{tForms("info.items.track")}</p>
					</div>

					<div className="flex items-start gap-4">
						<div className="bg-primary-100 p-2 w-8 h-8 rounded-full flex items-center justify-center align-center">


							<Icon
								icon={uiIcons.content.folder}
								className="text-primary-500"
							/>
						</div>
						<p>{tForms("info.items.folders")}</p>
					</div>

					<div className="flex items-start gap-4">
						<div className="bg-info-blue-100 p-2 w-8 h-8 rounded-full flex items-center justify-center">
							<Icon
								icon={uiIcons.content.bookFilled}
								className="text-info-blue-500 scale-130"
							/>
						</div>
						<p>{tForms("info.items.articles")}</p>
					</div>
				</div>

				<div className="flex sm:flex-row flex-col w-[180px] sm:w-auto mx-auto justify-center gap-4 mt-8">
					<Button>{tForms("buttons.login")}</Button>
					<Button>{tForms("buttons.createAccount")}</Button>
				</div>
			</div>
		</BaseForm>
	);
}
