import React from 'react';

import Logo from "../header/Logo";
import SocialLinks from "../header/SocialLinks";

import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaGooglePlus, FaYoutube } from "react-icons/fa";


const About = ({ footerAboutText, copyrightText }) => {
    return (
        <div className='flex-grow'>
            <Logo destination={"#"} logoTitle={"STUDIO | POW"} />
            <p className='mt-4 mb-4 text-sm font-light'>{footerAboutText}</p>
            <ul className='flex gap-2'>
                <a className='text-3xl text-blue-700 hover:scale-125 duration-300 cursor-pointer'><FaSquareFacebook /></a>
                <a className='text-3xl text-white hover:scale-125 duration-300 cursor-pointer'><FaSquareXTwitter /></a>
                <a className='text-3xl text-red-500 hover:scale-125 duration-300 cursor-pointer'><FaGooglePlus /></a>
                <a className='text-3xl text-red-600 hover:scale-125 duration-300 cursor-pointer'><FaYoutube /></a>
            </ul>
            <p className='mt-4'>{copyrightText}</p>
        </div>
    )
}

export default About