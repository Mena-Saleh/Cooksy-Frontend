import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const { t: tFooter } = useTranslation("footer")
	return (
		<footer className="border-t border-basic-900/10 text-xs px-6 lg:px-24 pt-24 pb-36 flex  lg:gap-24 flex-col lg:flex-row lg:text-sm  bg-white/40 backdrop-blur-sm">
			{/* Navigation Links */}
			<div className="flex mb-20 lg:mb-0 lg:w-[50%] gap-[10%] justify-evenly text-nowrap">
				<div className="flex flex-col gap-2">
					<h4 className="text-base lg:text-lg font-semibold text-basic-900">
						{tFooter("explore")}
					</h4>
					<Link className="transition-300 hover:text-secondary-500" to="/">{tFooter("home")}</Link>
					<Link className="transition-300 hover:text-secondary-500" to="/recipes">{tFooter("recipes")}</Link>
					<Link className="transition-300 hover:text-secondary-500" to="/articles">{tFooter("articles")}</Link>
					<Link className="transition-300 hover:text-secondary-500" to="/categories">{tFooter("categories")}</Link>
				</div>

				<div className="flex flex-col gap-2">
					<h4 className="text-base lg:text-lg font-semibold text-basic-900">
						{tFooter("about")}
					</h4>
					<Link className="transition-300 hover:text-secondary-500" to="/about">{tFooter("aboutUs")}</Link>
					<Link className="transition-300 hover:text-secondary-500" to="/contact">{tFooter("contact")}</Link>
					<Link className="transition-300 hover:text-secondary-500" to="/newsletter">{tFooter("newsletter")}</Link>
				</div>

				<div className="flex flex-col gap-2">
					<h4 className="text-base lg:text-lg font-semibold text-basic-900">
						{tFooter("preferences")}
					</h4>
					<Link className="transition-300 hover:text-secondary-500" to="/cookies">{tFooter("cookies")}</Link>
					<Link className="transition-300 hover:text-secondary-500" to="/privacy">{tFooter("privacyPolicy")}</Link>
					<Link className="transition-300 hover:text-secondary-500" to="/terms">{tFooter("terms")}</Link>
					<Link className="transition-300 hover:text-secondary-500" to="/faq">{tFooter("faq")}</Link>
				</div>
			</div>

			{/* About, Social & logo*/}
			<div className="flex flex-col-reverse lg:flex-row items-start gap-4 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-full mx-auto justify-evenly">
				<div className="sm:basis-1/2 flex flex-col gap-4">
					<p className="text-sm">{tFooter("description")}</p>
					<div className="flex flex-col gap-1">
						<h4 className="font-semibold">{tFooter("followUs")}</h4>
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
