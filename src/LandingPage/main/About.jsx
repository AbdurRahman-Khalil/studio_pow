import React from "react";

import about_image from "./images/about_image.webp";


const About = ({ aboutHeading1, aboutHeading2, aboutPara1, aboutPara2, aboutBtnText }) => {
    return (
        <section id="about" className="bg-black text-white px-5 min-[300px]:px-6 sm:px-12 md:px-18 lg:px-20 pt-28 pb-8 space-y-10 md:space-y-3 md:flex gap-14">
            <div className="flex-1">
                <h1 className="relative pl-3 mb-3 text-4xl font-bold before:bg-white before:w-1 before:h-[74%] before:absolute before:left-0 before:bottom-1 ">
                    <span className="text-lg font-medium text-blue-500">{aboutHeading1}</span><br />
                    {aboutHeading2}
                </h1>
                <p className="mb-5 text-sm">{aboutPara1}</p>
                <p className="mb-8 text-sm">{aboutPara2}</p>
                <button className="bg-transparent hover:bg-white duration-300 text-white hover:text-black font-semibold 
                py-4 px-6 min-[625px]:px-8 text-sm min-[625px]:text-base font-montserrat rounded-md border border-white">
                    {aboutBtnText}
                </button>
            </div>
            <div className="flex-1 duration-300">
                <img className="object-cover h-full rounded-3xl" src={about_image} />
            </div>
        </section>
    );
}

export default About;