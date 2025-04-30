import SearchBar from "../common/SearchBar";
import { useTranslation } from "react-i18next";

export default function Hero() {
	const { t: tHome } = useTranslation("home")

	return (
		<div className="relative mx-auto w-full mt-24 sm:mt-[10%]">
			{/* Left content container with hero text and search bar */}
			<div className="pl-[10%] pt-[5%] flex flex-col w-[70%]">
				{/* Hero Text with background swoosh */}
				<div className="w-[80%] flex flex-col gap-6">
					{/* Highlight background with text */}
					<div className="relative w-full max-w-xl">
						<img
							src="./svg/Swooshes/HighlightBackground.svg"
							alt="Highlight Background"
							className="w-full h-auto object-contain"
						/>
						<div className="absolute inset-0 flex items-center justify-center p-4">
							<h1 className="px-2 leading-snug text-nowrap text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
								{tHome("heroLine1")} <br /> {tHome("heroLine2")}
							</h1>
						</div>
					</div>

					{/* Search bar*/}
					<div className="w-[165%] sm:w-full max-w-xl mt-4">
						<SearchBar />
					</div>
				</div>
			</div>

			{/* Mascot on swoosh */}
			<img
				src="./svg/Mascot/MascotStandingOnSwoosh.svg"
				alt="Mascot"
				className="absolute top-0 sm:top-10 xl:top-0 w-full left-0 -z-10"
			/>
		</div>
	);
}
