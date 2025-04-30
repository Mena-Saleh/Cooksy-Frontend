import Button from "../common/buttons/Button";
import { useTranslation } from "react-i18next";

export default function ContributeBanner() {
	const { t: tHome } = useTranslation("home");

	return (
		<section className="relative w-full overflow-hidden">
			{/* Desktop Swoosh */}
			<div className="hidden md:block">
				<img
					src="./svg/Swooshes/SectionBackgroundWave.svg"
					alt="Background wave"
					className="w-full h-auto object-cover"
				/>
			</div>

			{/* Mobile Swoosh */}
			<div className="block md:hidden">
				<img
					src="./svg/Swooshes/MobileSectionBackgroundWave.svg"
					alt="Background wave"
					className="w-full h- object-cover"
				/>
			</div>

			<div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-5 sm:gap-12 md:gap-6 lg:gap-8 mt-8 sm:mt-12 ">
				<h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">
					{tHome("contributeMessage")}
				</h2>

				<Button>{tHome("addRecipe")}</Button>
			</div>
		</section>
	);
}
