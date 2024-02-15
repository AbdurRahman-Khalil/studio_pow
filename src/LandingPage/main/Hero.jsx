import React from "react";


const Hero = ({ heroText, heroHeading1, heroHeading2, heroHeading3, heroHeading4, heroHeading5, heroHeading6, heroBtnText }) => {
    return (
        <section id="home" className="bg-hero-img h-[fit-content] bg-cover bg-center flex justify-center items-center max-[280px]:px-3 px-5">
            <div className="text-white text-center my-52">
                <p className="mt-2 mb-3 font-medium max-[319px]:text-sm min-[625px]:text-lg">{heroText}</p>
                <h1 className="max-[319px]:text-4xl text-5xl min-[1175px]:text-6xl mb-7">
                    {heroHeading1} <span className="font-extrabold">{heroHeading2}</span> {heroHeading3}<br />
                    <span className="font-extrabold">{heroHeading4}</span> {heroHeading5} <span className="font-extrabold">{heroHeading6}</span>
                </h1>

                <button
                    className="max-[460px]:bg-blue-400 max-[460px]:hover:bg-blue-500 bg-blue-500 hover:bg-blue-400 duration-300 
                    text-white font-semibold rounded-md py-4 px-6 min-[625px]:px-8 text-sm min-[625px]:text-base font-montserrat">
                    {heroBtnText}
                </button>
            </div>
        </section>
    );
}

export default Hero;