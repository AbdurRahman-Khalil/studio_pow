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
                <a className='text-3xl text-blue-500 duration-300 cursor-pointer hover:scale-125'><FaSquareFacebook /></a>
                <a className='text-3xl text-white duration-300 cursor-pointer hover:scale-125'><FaSquareXTwitter /></a>
                <a className='text-3xl text-red-400 duration-300 cursor-pointer hover:scale-125'><FaGooglePlus /></a>
                <a className='text-3xl text-red-500 duration-300 cursor-pointer hover:scale-125'><FaYoutube /></a>
            </ul>
            <p className='mt-4'>{copyrightText}</p>
        </div>
    )
}

export default About