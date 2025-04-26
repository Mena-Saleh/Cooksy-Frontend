import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

export default function NavProfile() {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			{/* Avatar */}
			<div
				className="relative w-8 h-8 rounded-full cursor-pointer"
				onClick={() => setOpen(!open)}
			>
				<img
					src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
					alt="User avatar"
					className="w-full h-full rounded-full object-cover"
				/>
				<div className="absolute -top-1 -right-2 border border-basic-100 bg-secondary-500 text-basic-100 text-xs w-5 h-5 rounded-full flex items-center justify-center font-pacifico">
					10
				</div>
			</div>

			{/* Dropdown */}
			<div
				className={clsx(
					"absolute  right-[-8px] sm:right-[-16px] mt-2 w-56 bg-white rounded-xl shadow-md border border-basic-100 py-2 z-50 transition-300",
					open
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-4 pointer-events-none"
				)}
			>
				{[
					{ icon: "mdi:user", label: "My profile" },
					{ icon: "mdi:bell", label: "Notifications", badge: 1 },
					{
						icon: "mdi:cloud-upload-outline",
						label: "My uploaded recipes",
					},
					{ icon: "mdi:heart-outline", label: "My saved recipes" },
					{ icon: "mdi:calendar", label: "Meal planner" },
					{
						icon: "mdi:newspaper-variant-outline",
						label: "Recipe feed",
					},
					{ icon: "mdi:cog", label: "Settings" },
					{ icon: "mdi:power", label: "Log out" },
				].map((item, index) => (
					<div
						key={index}
						className="flex items-center gap-3 px-4 py-2 text-sm text-basic-900 hover:bg-primary-100 cursor-pointer"
					>
						<Icon icon={item.icon} className="w-5 h-5" />
						<span className="flex-1">{item.label}</span>
						{item.badge && (
							<span className="bg-secondary-500 text-basic-100 text-xs px-2 py-0.5 rounded-full font-pacifico">
								{item.badge}
							</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
