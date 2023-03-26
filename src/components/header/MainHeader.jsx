import { useContext, useState } from "react";
import Logo from "@/assets/images/logo.svg";
import ImageAvatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavItem from "@/components/header/NavItem";

import CartDetails from "@/components/header/CartDetails";
import { CartContext } from "@/context/CartContext";

const MainHeader = () => {
    const { cartProducts, totalCartProducts } = useContext(CartContext);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

    const handleToggleCart = () => {
        setIsOpenCart(!isOpenCart);
    };

    return (
        <>
            <header className={`container ${isOpenMenu ? "static" : "relative"} mx-auto flex items-center gap-8 p-4 py-4 lg:container md:gap-16 md:p-0 md:py-0 lg:w-[90%] xl:w-[85%]`}>
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={Logo}
                    alt="Logo sneakers"
                    className="mr-auto mb-1 h-5 md:mr-0"
                />
                <nav
                    className={`font-bold md:static md:mr-auto md:flex md:flex-row ${
                        isOpenMenu
                            ? "absolute top-0 left-0 z-50 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 md:gap-4 md:gap-y-0 md:p-0"
                            : "hidden md:h-auto md:gap-8 md:gap-y-0 md:p-0"
                    }`}
                >
                    <button
                        className="mb-12 md:hidden"
                        onClick={handleCloseMenu}
                    >
                        <CloseIcon />
                    </button>
                    <NavItem text="Collections" />
                    <NavItem text="Men" />
                    <NavItem text="Women" />
                    <NavItem text="About" />
                    <NavItem text="Contact" />
                </nav>
                <div className="flex gap-4">
                    <button onClick={handleToggleCart} className="relative">
                        <CartIcon />
                        <span className="absolute top-2 right-0 translate-x-2 rounded-full bg-orange-primary px-1 text-[9px] font-bold text-white">
                            {totalCartProducts()}
                        </span>
                    </button>
                    <img
                        src={ImageAvatar}
                        alt="avatar-image"
                        className="w-10"
                    />
                    {isOpenCart && <CartDetails />}
                </div>
            </header>
            <span className="container mx-auto hidden h-[1px] w-full bg-gray-200 md:block lg:w-[90%] xl:w-[85%]"></span>
        </>
    );
};

export default MainHeader;
