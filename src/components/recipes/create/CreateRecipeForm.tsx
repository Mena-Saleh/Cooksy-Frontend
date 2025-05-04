import UnderlinedHeading from "../../common/UnderlinedHeading";
import RecipeTitleInput from "./RecipeTitleInput";
import ImageUpload from "./ImageUpload";
import RecipeDescription from "./RecipeDescription";
import ServingAndTime from "./ServingAndTime";
import IngredientsList from "./IngredientsList";
import NutritionInfo from "./NutritionInfo";
import InstructionsList from "./InstructionsList";
import CategorySelector from "./CategorySelector";
import SharingOptions from "./SharingOptions";
import Button from "../../common/buttons/Button";
import { useTranslation } from "react-i18next";

export default function CreateRecipeForm() {
	const { t: tRecipes } = useTranslation("recipes");
	return (
		<div className="mt-40">
			<div className="sm:px-24 px-4">
				<UnderlinedHeading
					text={tRecipes("create.title")}
					variant="medium1"
				/>
			</div>
			<form className="flex flex-col gap-8 px-4 sm:px-10 lg:px-24 py-12 max-w-4xl">
				<RecipeTitleInput />
				<ImageUpload />
				<RecipeDescription />
				<ServingAndTime />
				<IngredientsList />
				<NutritionInfo />
				<InstructionsList />
				<CategorySelector />
				<SharingOptions />
				<Button className="w-1/5">{tRecipes("create.button")}</Button>
			</form>
		</div>
	);
}
