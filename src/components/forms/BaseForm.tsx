import XButton from "../common/buttons/XButton";

export default function BaseForm({ children }: { children?: React.ReactNode }) {
	return (
		<div className="relative text-sm sm:text-base bg-white shadow-2xl w-[95%] md:w-[600px] h-auto rounded-[20px] overflow-hidden">
			{/* Top swoosh */}
			<img
				src="./svg/Swooshes/TopSwoosh.svg"
				alt="Top swoosh"
				className="absolute top-0 left-0 w-[150px] sm:w-[180px] object-cover z-0"
			/>

			{/* X Button */}
			<div className="absolute top-4 right-4 z-2">
				<XButton />
			</div>

			{/* Form content */}
			<div className="relative z-1 px-12 py-12 flex flex-col align-center justify-center">
				<div className="space-y-4 py-8 mx-auto sm:w-[80%]">
					{children}
				</div>
			</div>

			{/* Bottom swoosh */}
			<img
				src="./svg/Swooshes/BottomSwoosh.svg"
				className="absolute bottom-0 left-0 w-full h-auto object-cover z-0"
			/>
		</div>
	);
}
