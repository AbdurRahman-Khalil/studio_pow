import React from 'react';

import { BsArrowRightCircleFill } from "react-icons/bs";


const NewsLetter = ({ newsLetterHeading, newsLetterPara, placeholderText }) => {
    return (
        <section className="bg-newsletter-img text-slate-950 bg-cover bg-center h-[fit-content] w-full mt-20 mb-8">
            <div className='flex flex-col items-center text-center w-[100%] h-[100%] backdrop-blur-3xl py-14 px-5 min-[300px]:px-6 sm:px-12 md:px-18 lg:px-20'>
                <h2 className='mb-4 text-3xl font-bold font-montserrat'>{newsLetterHeading}</h2>
                <p className='pr-1 mb-6 text-lg font-medium'>{newsLetterPara}</p>
                <form className='flex gap-2 px-3 py-3 rounded-md bg-white/50'>
                    <input
                        type='email'
                        id='email'
                        placeholder={placeholderText}
                        className='flex-1 text-sm font-semibold bg-transparent outline-none text-slate-900 placeholder:font-medium placeholder:text-black/50'
                    />
                    <BsArrowRightCircleFill className='text-3xl duration-300 cursor-pointer text-slate-800 hover:text-slate-700' />
                </form>
            </div>
        </section>
    );
}

export default NewsLetter;