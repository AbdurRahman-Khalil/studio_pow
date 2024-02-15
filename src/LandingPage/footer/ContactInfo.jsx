import React from 'react';

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";


const ContactInfo = ({ contactInfoHeading, contactNumber, gmail, email, address }) => {
    return (
        <div className='flex-grow'>
            <h2 className='mb-4 font-medium font-montserrat'>{contactInfoHeading}</h2>
                <p className='mb-3 font-light'>
                    {contactNumber}
                </p>
                <p className='mb-3 font-light'>
                    {gmail}
                </p>
                <p className='mb-3 font-light'>
                    {email}
                </p>
                <p className='mb-3 font-light'>
                    {address}
                </p>
        </div>
    );
}

export default ContactInfo;