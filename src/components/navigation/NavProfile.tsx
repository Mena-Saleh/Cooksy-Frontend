import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../constants/uiIcons";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import AuthFormContainer from "../forms/auth/AuthFormContainer";
import { FormType } from "../../types/FormType";
import { logout as logoutApi } from '../../services/CooksyAPI/auth';
import { logout as logoutRedux } from '../../redux/slices/authSlice';
import { getInitials } from '../../utils/getInitials';

type NavProfileItem = {
	icon: string;
	label: string;
	badge?: number;
};

const icons: NavProfileItem[] = [
	// { icon: "solar:user-outline", label: "myProfile" },
	// { icon: "solar:bell-outline", label: "notifications", badge: 10 },
	// { icon: "solar:upload-outline", label: "uploadedRecipes" },
	// { icon: "solar:heart-outline", label: "savedRecipes" },
	// { icon: "solar:calendar-outline", label: "mealPlanner" },
	// { icon: "solar:book-outline", label: "recipeFeed" },
	// { icon: "solar:settings-outline", label: "settings" },
	// { icon: "solar:logout-3-outline", label: "logout" },

	{ icon: uiIcons.profile.account, label: "myProfile" },
	{ icon: uiIcons.profile.bell, label: "notifications", badge: 10 },
	{ icon: uiIcons.profile.upload, label: "uploadedRecipes" },
	{ icon: uiIcons.content.heartOutline, label: "savedRecipes" },
	{ icon: uiIcons.content.calendar, label: "mealPlanner" },
	{ icon: uiIcons.content.bookOutline, label: "recipeFeed" },
	{ icon: uiIcons.profile.settings, label: "settings" },
	{ icon: uiIcons.profile.logout, label: "logout" },
];

export default function NavProfile() {
	const { t: tNavigation } = useTranslation("navigation");
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { isAuthenticated, userFirstName, userLastName } = useAppSelector((state) => state.auth);
	const [formType, setFormType] = useState<FormType>(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!isAuthenticated) return;

		setOpen(false);
		setFormType(null);

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
	}, [isAuthenticated]);

	const handleLogout = async () => {
		await logoutApi();
		dispatch(logoutRedux());
		setOpen(false);
	};


	// Find notification badge
	const notificationItem = icons.find(
		(item) => item.label === "notifications"
	);

	return (
		<div className="relative" ref={dropdownRef}>
			{/* Avatar */}
			<div
				className="relative w-8 h-8 rounded-full cursor-pointer"
				onClick={() => {
					if (!isAuthenticated) {
						setFormType("info");
					}
					setOpen(!open)
				}}
			>
				{isAuthenticated ?
					userFirstName || userLastName ? (
						<div className={`w-full h-full flex text-sm rounded-full flex items-center justify-center text-white select-none bg-basic-900`}>
							{getInitials(userFirstName, userLastName)}
						</div>
					) : (
						<img
							src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
							alt="User avatar"
							className="w-full h-full rounded-full object-cover"
						/>
					)
					:
					< Icon icon="mingcute:user-4-fill" className="w-full h-full text-secondary-500"></Icon>

				}
				{isAuthenticated && notificationItem?.badge && notificationItem.badge > 0 && (
					<div className="absolute -top-1 -right-2 border border-basic-100 bg-secondary-500 text-basic-100 text-xs w-5 h-5 rounded-full flex items-center justify-center font-pacifico">
						{notificationItem.badge}
					</div>
				)}
			</div>

			{/* Authenticated: Show dropdown */}
			<div
				className={clsx(
					"absolute right-[-8px] xl:left-[-16px] mt-2 w-56 bg-white rounded-xl shadow-md border border-basic-100 z-50 transition-300",
					open && isAuthenticated
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-4 pointer-events-none"
				)}
			>
				{icons.map(({ icon, label, badge }, index) => (
					<div
						key={index}
						className="flex items-center gap-3 px-4 py-2 text-sm text-basic-900 hover:bg-primary-100 cursor-pointer rounded-xl transition-300"
						onClick={label === "logout" ? handleLogout : undefined}
					>
						<Icon icon={icon} className="w-5 h-5" />
						<span className="flex-1">
							{tNavigation(`profileDropdown.${label}`)}
						</span>
						{!!badge && badge > 0 && (
							<span className="bg-secondary-500 text-basic-100 text-xs px-2 py-0.5 rounded-full font-pacifico border border-basic-100 w-5 h-5 flex items-center justify-center">
								{badge}
							</span>
						)}
					</div>
				))}
			</div>

			{/* Not Authenticated: Show InfoForm in overlay */}
			<AuthFormContainer
				isOpen={formType !== null && !isAuthenticated}
				formType={formType}
				onClose={() => setFormType(null)}
				setFormType={setFormType}
			/>


		</div >
	);
}
