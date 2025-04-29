interface UnderlinedHeadingProps {
	text: string;
	className?: string;
	variant?: keyof typeof underlineSizes;
}

const underlineSizes: Record<string, string> = {
	small1: "./svg/Underlines/SwooshSmall1.svg",
	small2: "./svg/Underlines/SwooshSmall2.svg",
	medium1: "./svg/Underlines/SwooshMedium1.svg",
	medium2: "./svg/Underlines/SwooshMedium2.svg",
	large1: "./svg/Underlines/SwooshLarge1.svg",
	large2: "./svg/Underlines/SwooshLarge2.svg",
};

export default function UnderlinedHeading({
	text,
	className,
	variant = "medium1",
}: UnderlinedHeadingProps) {
	const swooshSrc = underlineSizes[variant];

	return (
		<div className="flex flex-col items-baseline w-auto">
			{/* Text */}
			<h2
				className={`z-10 font-semibold text-2xl sm:text-3xl text-left ${className}`}
			>
				{text}
			</h2>

			{/* Swoosh */}
			{variant && (
				<img
					src={swooshSrc}
					alt="Underline Swoosh"
					aria-hidden="true"
					className="h-6 z-0"
				/>
			)}
		</div>
	);
}
