import React from "react";

import Hero from './Hero';
import About from './About';
import Projects from './projects/Projects';
import NewsLetter from "./NewsLetter";


const Main = () => {
    return (
        <main className='font-poppins'>
            <Hero
                heroText={"W E L C O M ‎ ‎ TO ‎ ‎ S T U D I O P O W"}

                heroHeading1={"PRODUCE"}
                heroHeading2={"FILMS"}
                heroHeading3={"FEATURE"}
                heroHeading4={"TELEVISION"}
                heroHeading5={"&"}
                heroHeading6={"GAMES"}

                heroBtnText={"CONTACT ‎ US"}
            />

            <About
                aboutHeading1={"W E L C O M E ‎ T O"}
                aboutHeading2={"STUDIO | POW"}

                aboutPara1={
                    "STUDIO|POW is a vibrant UK production company who develop and produce distinctive feature films, television series"
                    + "and games. This is achieved by retaining creative independence with the backing from private investors and"
                    + "engaging the best talent."
                }

                aboutPara2={
                    "In a business that can be difficult for non-experts to navigate we mitigate risk and optimise fully HMRC-compliant"
                    + "investment mechanisms, by making the best possible product, ensuring those who invest in our success get to share in"
                    + "the rewards."
                }

                aboutBtnText={"LEARN MORE"}
            />

            <Projects
                projectsHeading1={"RECENT"}
                projectsHeading2={"OUR FILMS"}
            />

            <NewsLetter
                newsLetterHeading={"SIGNUP NEWSLETTER"}
                newsLetterPara={"Subscribe to receive our monthly newsletter and updates about Purpose Forward"}
                placeholderText={"Enter your email here"}
            />

        </main>
    );
}

export default Main;