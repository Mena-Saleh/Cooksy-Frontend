import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import Button from "../common/buttons/Button";
import NavProfile from "./NavProfile";
import NavLang from "./NavLang";
import { useTranslation } from "react-i18next";

export default function DesktopNav() {
	const { t: tNavigation } = useTranslation("navigation");

	return (
		<header className="w-full bg-white/30 shadow-sm">
			<nav className="flex items-center justify-between py-4 px-24">
				{/* Navigation Links */}
				<div className="flex items-center gap-6 text-sm">
					<Link
						to="/"
						className="text-basic-900 hover:text-secondary-500 transition-300"
					>
						{tNavigation("home")}
					</Link>
					<Link
						to="/recipes"
						className="text-basic-900 hover:text-secondary-500 transition-300"
					>
						{tNavigation("recipes")}
					</Link>
					<Link
						to="/articles"
						className="text-basic-900 hover:text-secondary-500 transition-300"
					>
						{tNavigation("articles")}
					</Link>
					<Link
						to="/categories"
						className="text-basic-900 hover:text-secondary-500 transition-300"
					>
						{tNavigation("categories")}
					</Link>
				</div>

				{/* Logo */}
				<Link to="/">
					<img src="/logo.svg" alt="Cooksy Logo" className="w-28" />
				</Link>

				{/* Right Actions */}
				<div className="flex items-center gap-6">
					<NavSearch />
					<Button size="sm">{tNavigation("addRecipe")}</Button>
					<NavProfile />
					<NavLang />
				</div>
			</nav>
		</header>
	);
}
