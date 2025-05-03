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

export default function CreateRecipeForm() {
	return (
		<div className="mt-40">
			<div className="sm:px-24 px-4">
				<UnderlinedHeading
					text="Create your own recipe"
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
				<Button className="w-1/5">Post</Button>
			</form>
		</div>
	);
}
