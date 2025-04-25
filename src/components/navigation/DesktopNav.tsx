import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import Button from "../common/buttons/Button";
import NavProfile from "./NavProfile";
import NavLang from "./NavLang";

export default function NavBar() {
	return (
		<header className="w-full bg-white/30 shadow-sm">
			<nav className="flex items-center justify-between py-4 px-24">
				{/* Navigation Links */}
				<div className="flex items-center gap-6 text-sm">
					<Link
						to="/"
						className="text-basic-900 hover:text-secondary-500"
					>
						Home
					</Link>
					<Link
						to="/recipes"
						className="text-basic-900 hover:text-secondary-500"
					>
						Recipes
					</Link>
					<Link
						to="/articles"
						className="text-basic-900 hover:text-secondary-500"
					>
						Articles
					</Link>
					<Link
						to="/categories"
						className="text-basic-900 hover:text-secondary-500"
					>
						Categories
					</Link>
				</div>

				{/* Logo */}
				<Link to="/">
					<img src="/logo.svg" alt="Cooksy Logo" className="w-28" />
				</Link>

				{/* Right Actions */}
				<div className="flex items-center gap-6">
					<NavSearch />
					<Button size="sm">Add Recipe</Button>
					<NavProfile />
					<NavLang />
				</div>
			</nav>
		</header>
	);
}
