import React from 'react';


const FooterLinks = ({ footerLinkHeading, destination1, footerLinkTitle1, destination2, footerLinkTitle2, destination3, footerLinkTitle3, destination4, footerLinkTitle4 }) => {
    return (
        <div className='flex flex-col flex-grow'>
            <h2 className='mb-4 font-medium font-montserrat'>{footerLinkHeading}</h2>
            <a className="mb-3 font-light duration-300 hover:text-sky-500" href={destination1} >{footerLinkTitle1}</a>
            <a className="mb-3 font-light duration-300 hover:text-sky-500" href={destination2} >{footerLinkTitle2}</a>
            <a className="mb-3 font-light duration-300 hover:text-sky-500" href={destination3} >{footerLinkTitle3}</a>
            <a className="mb-3 font-light duration-300 hover:text-sky-500" href={destination4} >{footerLinkTitle4}</a>
        </div>
    );
}

export default FooterLinks;