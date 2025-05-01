import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="border-t border-basic-900/10 text-xs px-6 lg:px-24 pt-24 pb-36 flex  lg:gap-24 flex-col lg:flex-row lg:text-sm">
			{/* Navigation Links */}
			<div className="flex mb-20 lg:mb-0 lg:w-[50%] gap-[10%] justify-evenly text-nowrap">
				<div className="flex flex-col gap-2">
					<h4 className="text-base lg:text-lg font-semibold text-basic-900">
						Explore
					</h4>
					<Link to="/">Home</Link>
					<Link to="/recipes">Recipes</Link>
					<Link to="/articles">Articles</Link>
					<Link to="/categories">Categories</Link>
				</div>

				<div className="flex flex-col gap-2">
					<h4 className="text-base lg:text-lg font-semibold text-basic-900">
						About
					</h4>
					<Link to="/about">About Us</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/newsletter">Newsletter</Link>
				</div>

				<div className="flex flex-col gap-2">
					<h4 className="text-base lg:text-lg font-semibold text-basic-900">
						Preferences
					</h4>
					<Link to="/cookies">Cookies</Link>
					<Link to="/privacy">Privacy Policy</Link>
					<Link to="/terms">Terms & Conditions</Link>
					<Link to="/faq">FAQ</Link>
				</div>
			</div>

			{/* About, Social & logo*/}
			<div className="flex flex-col-reverse lg:flex-row items-start gap-4 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-full mx-auto justify-evenly">
				<div className="sm:basis-1/2 flex flex-col gap-4">
					<p className="text-sm">
						Cooksy offers recipes with detailed nutritional
						information. You can easily search and filter recipes by
						ingredients, nutritional values, or cooking time.
					</p>
					<div className="flex flex-col gap-1">
						<h4 className="font-semibold">Follow us</h4>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 hover:underline"
						>
							<Icon icon="mdi:instagram" className="w-5 h-5" />
							CooksyInstagram
						</a>
					</div>
				</div>

				{/* Logo */}
				<Link
					to="/"
					className="flex items-center align-self-center h-full justify-center basis-full w-full lg:basis-1/3 border-border-red-900"
				>
					<img
						src="./logo.svg"
						alt="Cooksy Logo"
						className="w-full max-w-50 mb-4 mr-4 h-auto object-contain"
					/>
				</Link>
			</div>
		</footer>
	);
}
