import React from "react";

import Movie from './Movie'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Projects = ({ projectsHeading1, projectsHeading2 }) => {
    let slider = document.getElementById('slider');

    const slideLeft = () => {
        slider.scrollLeft = slider.scrollLeft - 570;
    };

    const slideRight = () => {
        slider.scrollLeft = slider.scrollLeft + 570;
    };


    return (
        <section id="projects" className="text-center bg-black text-white px-5 min-[300px]:px-6 sm:px-12 md:px-18 lg:px-20 pt-20 pb-8">
            <p className="text-blue-400 text-lg font-medium">{projectsHeading1}</p>
            <h1 className="mb-10 text-4xl font-bold">{projectsHeading2}</h1>
            <div className="relative flex items-center">
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 max-[768px]:hidden' onClick={slideLeft} size={40} />
                <div id="slider" className="w-full min-h-[427px] flex items-center gap-3 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide min-[768px]:mx-2">
                    <Movie />
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 max-[768px]:hidden' onClick={slideRight} size={40} />
            </div>
        </section>
    );
}

export default Projects;




















// draggiing
//  let isDragging = false;

//  const dragging = (e) => {
//      if (!isDragging) return;

//      slider.scrollLeft -= e.movementX;
//  }

//  document.addEventListener("mouseup", () => {
//      isDragging = false;
//  });

// onMouseDown = {() => isDragging = true}
// onMouseMove = { dragging }