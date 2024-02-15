import React, { useState } from 'react';

import Logo from './Logo';
import NavItems from './NavItems';
import SocialLinks from './SocialLinks';

import { FiMenu } from "react-icons/fi";


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [hamburger, setHamburger] = useState(true);

    // navbar
    const handleNavbar = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        }

        else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", handleNavbar);

    // Hamburger button
    const handleHamburger = () => {
        setHamburger(hamburger => !hamburger);
    }


    return (
        <nav
            className={`font-montserrat flex justify-between items-center py-5 pt-4 w-full fixed px-4 min-[300px]:px-6 sm:px-12 md:px-18 lg:px-20 z-50
            ${navbar ? "bg-black/90" : "duration-500 bg-gradient-to-b from-black"}`}
        >
            <Logo
                destination={"#"}
                logoTitle={"STUDIO | POW"}
            />

            <NavItems 
                showNav={hamburger ? "max-[768px]:-right-80" : "max-[768px]:right-0"}
                setHamburger={setHamburger}

                destination1={"#"}
                navItem1={"HOME"}

                destination2={"#about"}
                navItem2={"ABOUT"}

                destination3={"#projects"}
                navItem3={"PROJECTS"}

                destination4={"#contact"}
                navItem4={"CONTACT"}
            />

            <SocialLinks />

            <FiMenu className='text-white text-3xl min-[355px]:text-4xl block md:hidden' onClick={handleHamburger} />
        </nav>
    );
}

export default Navbar;