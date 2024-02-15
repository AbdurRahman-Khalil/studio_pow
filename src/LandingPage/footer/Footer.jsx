import React from "react";

import FooterLinks from "./FooterLinks";
import About from "./About";
import ContactInfo from "./ContactInfo";
import NewsLetter from "./NewsLetter";


const Footer = () => {
    return (
        <footer id="contact" className="bg-black text-white flex gap-20 gap-y-12 max-[1051px]:flex-wrap font-poppins px-5 min-[300px]:px-6 sm:px-12 md:px-18 lg:px-20 pt-20 pb-16">
            <About
                footerAboutText={"Configuration, idditing, logistics, inventory, call center services and more"}
                copyrightText={"Copyright © 2018 StudioPOW.com"}
            />
            
            <FooterLinks 
                footerLinkHeading={"MENU"}

                destination1={"#home"}
                footerLinkTitle1={"Home"}
                
                destination2={"#about"}
                footerLinkTitle2={"About"}
                
                destination3={"#projects"}
                footerLinkTitle3={"Projects"}
                
                destination4={"#contact"}
                footerLinkTitle4={"Contact"}
            />

            <ContactInfo 
                contactInfoHeading={"CONTACT INFO"}
                contactNumber={"(888) 665-8808"}
                gmail={"angela@studio-pow.com"}
                email={"yes@studio-pow.com"}
                address={"StudioPOW 18 Brewer Street Soho London"}
            />
            
            <NewsLetter 
                newsLetterHeading={"SIGNUP NEWSLETTER"}
                newsLetterPara={"Sign up for our weekly newsletter, to keep yourself updated about our latest news and events."}
                placeholderText={"Enter your email here"}
            />
        </footer>
    );
}

export default Footer;