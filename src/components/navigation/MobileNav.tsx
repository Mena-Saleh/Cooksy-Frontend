import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import NavLang from "./NavLang";
import NavProfile from "./NavProfile";
import NavSearch from "./NavSearch";
import Button from "../common/buttons/Button";
import XButton from "../common/buttons/XButton";
import { useTranslation } from "react-i18next";

export default function MobileNav() {
	const [open, setOpen] = useState(false);
	const { t: tNavigation } = useTranslation("navigation");

	return (
		<header className="w-screen bg-basic-100/30 shadow-sm px-4 py-3 flex items-center justify-between">
			{/* Hamburger */}
			<Icon
				icon="charm:menu-hamburger"
				className="w-6 h-6 cursor-pointer"
				onClick={() => setOpen(true)}
			/>
			<div className="flex justify-between items-center w-full ml-4">
				{/* Logo */}
				<div className="w-20 h-auto flex justify-start ml-2 ">
					<img src="/logo.svg" alt="Cooksy Logo" className="" />
				</div>

				{/* Right: Actions */}
				<div className="flex items-center gap-2">
					<NavSearch />
					<Button size="xs">{tNavigation("addRecipe")}</Button>
					<NavProfile />
				</div>
			</div>

			{/* Slide-out menu */}
			<div
				className={clsx(
					"fixed inset-y-0 left-0 w-screen bg-white z-50 p-6 shadow-xl",
					"transition-500",
					open ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<div className="flex justify-between items-center mt-4 mb-16">
					{/* Logo */}
					<Link to="/">
						<img
							src="/logo.svg"
							alt="Cooksy Logo"
							className="w-28"
						/>
					</Link>
					<XButton onClick={() => setOpen(false)} />
				</div>
				<nav className="flex flex-col gap-4 text-basic-900 pl-6 text-sm">
					<Link
						to="/"
						className="text-basic-900 hover:text-secondary-500"
						onClick={() => setOpen(false)}
					>
						{tNavigation("home")}
					</Link>
					<Link
						to="/recipes"
						className="text-basic-900 hover:text-secondary-500"
						onClick={() => setOpen(false)}
					>
						{tNavigation("recipes")}
					</Link>
					<Link
						to="/articles"
						className="text-basic-900 hover:text-secondary-500"
						onClick={() => setOpen(false)}
					>
						{tNavigation("articles")}
					</Link>
					<Link
						to="/categories"
						className="text-basic-900 hover:text-secondary-500"
						onClick={() => setOpen(false)}
					>
						{tNavigation("categories")}
					</Link>
					<div className="mt-4">
						<NavLang />
					</div>
				</nav>
				{/* Bottom swoosh */}
				<img
					src="/svg/Swooshes/BottomSwooshMobileNav.svg"
					className="absolute bottom-0 left-0 w-full h-auto object-cover z-[-1]"
				/>
			</div>

			{/* Backdrop */}
			{open && (
				<div
					className="fixed inset-0 bg-basic-900/20 z-40"
					onClick={() => setOpen(false)}
				/>
			)}
		</header>
	);
}
