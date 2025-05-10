import { uiIcons } from "../../constants/uiIcons";
import { Icon } from "@iconify/react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const getPageNumbers = () => {
		const pages: (number | string)[] = [];

		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			pages.push(1);

			// Show left dots only when we're near the end
			if (currentPage > 4) {
				pages.push("...");
			}

			// Middle pages
			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);
			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			// Show right dots unless we're at the end
			if (currentPage < totalPages - 3) {
				pages.push("...");
			}

			pages.push(totalPages);
		}

		return pages;
	};

	const pageNumbers = getPageNumbers();

	return (
		<div className="flex items-center justify-center gap-2 mt-10">
			{/* Previous */}
			<button
				className="text-xl px-2 py-1 disabled:opacity-40 cursor-pointer"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<Icon icon={uiIcons.nav.chevronLeft} />
			</button>

			{/* Page numbers */}
			{pageNumbers.map((page, index) =>
				page === "..." ? (
					<span key={`dots-${index}`} className="px-2 text-basic-700">
						…
					</span>
				) : (
					<button
						key={page}
						onClick={() => onPageChange(Number(page))}
						className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm cursor-pointer outline-none ${
							currentPage === page
								? "bg-primary-300 font-semibold"
								: "hover:bg-basic-200"
						}`}
					>
						{page}
					</button>
				)
			)}

			{/* Next */}
			<button
				className="text-xl px-2 py-1 disabled:opacity-40 cursor-pointer"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<Icon icon={uiIcons.nav.chevronRight} />
			</button>
		</div>
	);
}
