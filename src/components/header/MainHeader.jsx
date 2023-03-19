import { useState } from "react";
import Logo from "@/assets/images/logo.svg";
import ImageAvatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavItem from "@/components/header/NavItem";

const MainHeader = () => {
  const navClassesWithoutMenu =
    "hidden font-bold md:static md:mr-auto md:flex md:flex-row md:h-auto md:gap-4 md:gap-y-0 md:p-0";

  const navClassesWithMenu =
    "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:gap-y-0 md:p-0";

  const [navClass, setNavClass] = useState(navClassesWithoutMenu);

  const handleOpenMenu = () => {
    setNavClass(navClassesWithMenu);
  };

  const handleCloseMenu = () => {
    setNavClass(navClassesWithoutMenu);
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-4 py-4 md:p-0 md:py-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={Logo}
          alt="Logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavItem text="Collections" />
          <NavItem text="Men" />
          <NavItem text="Women" />
          <NavItem text="About" />
          <NavItem text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={ImageAvatar} alt="avatar-image" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[1px] w-full bg-gray-200 md:block"></span>
    </>
  );
};

export default MainHeader;
