import React from 'react';

import { BsArrowRightCircleFill } from "react-icons/bs";


const NewsLetter = ({ newsLetterHeading, newsLetterPara, placeholderText }) => {
    return (
        <div>
            <h2 className='mb-4 font-medium font-montserrat'>{newsLetterHeading}</h2>
            <p className='pr-1 mb-3 text-sm font-light'>{newsLetterPara}</p>
            <form className='flex gap-2 bg-white rounded-md px-3 py-3 max-w-[100%]'>
                <input
                    type='email' 
                    id='email' 
                    placeholder={placeholderText}
                    className='flex-1 font-medium text-black outline-none placeholder:font-normal'
                />
                <BsArrowRightCircleFill className='text-3xl text-blue-500 duration-300 cursor-pointer hover:text-blue-400'/>
            </form>
        </div>
    );
}

export default NewsLetter;