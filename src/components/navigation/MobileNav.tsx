import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import NavLang from "./NavLang";
import NavProfile from "./NavProfile";
import NavSearch from "./NavSearch";
import Button from "../common/buttons/Button";
import XButton from "../common/buttons/XButton";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-screen bg-basic-100/30 shadow-sm px-4 py-3 flex items-center justify-between">
            {/* Hamburger */}
            <Icon
                icon="mdi:menu"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setOpen(true)}
            />

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <Button size="xs">Add Recipe</Button>
                <NavProfile />
            </div>

            {/* Slide-out menu */}
            <div
                className={clsx(
                    "fixed inset-y-0 left-0 w-screen bg-white z-50 p-6 shadow-xl",
                    "transition-transform duration-500 ease-in-out",
                    open ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex justify-between items-center mt-4 mb-16">
                    {/* Logo */}
                    <Link to="/">
                        <img src="/logo.svg" alt="Cooksy Logo" className="w-28" />
                    </Link>
                    <XButton
                        onClick={() => setOpen(false)}
                    />
                </div>
                <nav className="flex flex-col gap-4 text-basic-900 pl-6">
                    <Link to="/" className="text-basic-900 hover:text-secondary-500"
                        onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/recipes" className="text-basic-900 hover:text-secondary-500"
                        onClick={() => setOpen(false)}>Recipes</Link>
                    <Link to="/articles" className="text-basic-900 hover:text-secondary-500"
                        onClick={() => setOpen(false)}>Articles</Link>
                    <Link to="/categories" className="text-basic-900 hover:text-secondary-500"
                        onClick={() => setOpen(false)}>Categories</Link>
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
                    className="fixed inset-0 bg-black/20 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}
