import BaseForm from "./BaseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFolder } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import Button from "../common/buttons/Button";

export default function InfoForm() {
	return (
		<BaseForm>
			<div className="space-y-6">
				<div className="text-center">

					<div className="space-y-2 text-left inline-block">
						<h3 className="text-primary-500">
							Save your favorite recipes
						</h3>
						<p className="font-medium sm:text-xl">
							– create a free account
						</p>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-start gap-4">
						<div className="bg-secondary-100 p-2 w-8 h-8 rounded-full flex items-center justify-center align-center">
							<FontAwesomeIcon
								icon={faHeart}
								className="text-secondary-500"
							/>
						</div>
						<p>
							Easily keep track of your recipes by having them all
							in one place
						</p>
					</div>

					<div className="flex items-start gap-4">
						<div className="bg-primary-100 p-2 w-8 h-8 rounded-full flex items-center justify-center align-center">
							<FontAwesomeIcon
								icon={faFolder}
								className="text-primary-500"
							/>
						</div>
						<p>
							Save your favorites in practical folders! Why not
							create your own weekly menus?
						</p>
					</div>

					<div className="flex items-start gap-4">
						<div className="bg-info-blue-100 p-2 w-8 h-8 rounded-full flex items-center justify-center">
							<Icon
								icon="mynaui:book-open"
								className="text-info-blue-500 scale-130"
							/>
						</div>
						<p>
							Read articles with information about the nutrition
							you need!
						</p>
					</div>
				</div>

				<div className="flex sm:flex-row flex-col w-[180px] sm:w-auto mx-auto justify-center gap-4 mt-8">
					<Button>Log in</Button>
					<Button>Create account</Button>
				</div>
			</div>
		</BaseForm>
	);
}
