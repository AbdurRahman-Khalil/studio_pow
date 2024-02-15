import React from 'react';
import { Link } from 'react-router-dom';


const Logo = ({ destination, logoTitle }) => {
    return (
        <a href={destination} className="text-2xl min-[355px]:text-3xl text-white font-bold">{logoTitle}</a>
    );
}

export default Logo;