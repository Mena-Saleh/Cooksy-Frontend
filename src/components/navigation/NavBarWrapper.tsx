import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import NavSearch from './NavSearch';

export default function NavBarWrapper() {
    return (
        <>
            <div className="xl:hidden">
                <MobileNav />
                <div className='fixed bottom-5 right-5 z-10'>
                    <NavSearch />
                </div>
            </div>
            <div className="hidden xl:block">
                <DesktopNav />
            </div>
        </>
    );
}
