import React from 'react';

import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaGooglePlus, FaYoutube } from "react-icons/fa";


const SocialLinks = () => {    
    return (
        <ul className="hidden min-[980px]:flex gap-2">
            <a className='text-3xl text-blue-500 duration-300 cursor-pointer hover:scale-125'><FaSquareFacebook /></a>
            <a className='text-3xl text-white duration-300 cursor-pointer hover:scale-125'><FaSquareXTwitter /></a>
            <a className='text-3xl text-red-400 duration-300 cursor-pointer hover:scale-125'><FaGooglePlus /></a>
            <a className='text-3xl text-red-500 duration-300 cursor-pointer hover:scale-125'><FaYoutube /></a>
        </ul>
    );
}

export default SocialLinks;