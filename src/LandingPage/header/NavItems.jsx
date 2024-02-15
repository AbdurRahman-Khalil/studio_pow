import React, { useState } from 'react';

import { IoClose } from "react-icons/io5";


const NavItems = ({ showNav, setHamburger, destination1, navItem1, destination2, navItem2, destination3, navItem3, destination4, navItem4 }) => {
    const [navItem, setNavItem] = useState("item1");

    // navItem
    const handleNavItem = (itemName) => {
        setNavItem(itemName);
    }

    // Close button
    let handleClose = () => {
        setHamburger(hamburger => !hamburger);
    }


    return (
        <ul className={`max-[767px]:fixed top-0 ${showNav} bottom-0 duration-500 bg-white/5 backdrop-blur-2xl flex flex-col justify-center gap-y-12 max-[767px]:p-16 max-[767px]:h-screen 
            md:flex md:flex-row md:gap-x-6 md:bg-transparent min-[980px]:mr-20 max-[767px]:border-l-2 border-white/20`}>

            <IoClose className='block mb-6 text-4xl text-white duration-300 border-2 rounded-md border-white/40 bg-white/10 md:hidden'
                onClick={handleClose}
            />

            <li>
                <a
                    href={destination1}
                    className={`text-2xl font-semibold md:text-base md:font-medium tracking-wide duration-300
                    ${navItem == "item1" ? "text-sky-500 md:font-semibold" : "text-white"}`}
                    onClick={() => handleNavItem("item1")}
                >
                    {navItem1}
                </a>
            </li>

            <li>
                <a
                    href={destination2}
                    className={`text-2xl font-semibold md:text-base md:font-medium tracking-wide duration-300
                    ${navItem == "item2" ? "text-sky-500 md:font-semibold" : "text-white"}`}
                    onClick={() => handleNavItem("item2")}
                >
                    {navItem2}
                </a>
            </li>

            <li>
                <a
                    href={destination3}
                    className={`text-2xl font-semibold md:text-base md:font-medium tracking-wide duration-300
                    ${navItem == "item3" ? "text-sky-500 md:font-semibold" : "text-white"}`}
                    onClick={() => handleNavItem("item3")}
                >
                    {navItem3}
                </a>
            </li>

            <li>
                <a
                    href={destination4}
                    className={`text-2xl font-semibold md:text-base md:font-medium tracking-wide duration-300
                    ${navItem == "item4" ? "text-sky-500 md:font-semibold" : "text-white"}`}
                    onClick={() => handleNavItem("item4")}
                >
                    {navItem4}
                </a>
            </li>
        </ul>
    );
}

export default NavItems;