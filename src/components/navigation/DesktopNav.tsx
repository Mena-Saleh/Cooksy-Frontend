import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import Button from "../common/buttons/Button";
import NavProfile from "./NavProfile";
import NavLang from "./NavLang";
import { useTranslation } from "react-i18next";
import { useAppSelector } from '../../redux/hooks';

export default function DesktopNav() {
	const { t: tNavigation } = useTranslation("navigation");
	const { isAuthenticated } = useAppSelector((state) => state.auth);

	return (
		<header className="w-full bg-white/40 shadow-sm fixed top-0 z-100 backdrop-blur-sm">
			<nav className="flex items-center justify-between py-4 px-24">
				{/* Navigation Links */}
				<div className="flex items-center gap-6 text-base">
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
					<img src="./logo.svg" alt="Cooksy Logo" className="w-28" />
				</Link>

				{/* Right Actions */}
				<div className="flex items-center justify-end gap-6 min-w-[30%]">
					<NavSearch />
					{isAuthenticated && <Link to="add-recipe">
						<Button>{tNavigation("addRecipe")}</Button>
					</Link>}

					<NavProfile />
					<NavLang />
				</div>
			</nav>
		</header>
	);
}
