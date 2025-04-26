import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function NavBarWrapper() {
	return (
		<>
			<div className="xl:hidden">
				<MobileNav />
			</div>
			<div className="hidden xl:block">
				<DesktopNav />
			</div>
		</>
	);
}
