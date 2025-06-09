import XButton from "../common/buttons/XButton";

interface BaseFormProps {
	children: React.ReactNode;
	onClose?: () => void;
	showCloseButton?: boolean;
}
export default function BaseForm({ children, onClose, showCloseButton = true }: BaseFormProps) {
	return (
		<div className="relative text-sm sm:text-base bg-white shadow-2xl w-[90vw] md:w-[520px] h-auto rounded-[20px] overflow-hidden">
			{/* Top swoosh */}
			<img
				src="./svg/Swooshes/TopSwoosh.svg"
				alt="Top swoosh"
				className="absolute top-0 left-0 w-[150px] sm:w-[180px] object-cover z-0"
			/>

			{/* X Button */}
			{showCloseButton && <div className="absolute top-4 right-4 z-2">
				<XButton onClick={onClose} />
			</div>
			}

			{/* Form content */}
			<div className="relative z-1 px-12 flex flex-col align-center justify-center">
				<div className="py-16 mx-auto sm:w-[85%]">
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
