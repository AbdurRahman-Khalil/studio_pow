import React from 'react';

import { data } from "./moviesData.js";


const Movie = () => {
    return (
        <>
            {
                data.map(item => {
                    return (
                        <div className='relative' key={item.id}>
                            <img
                                className="max-w-[250px] min-h-[400px] object-cover inline-block"
                                src={item.img}
                                alt="poster of the movie"
                            />
                            <div className='absolute bottom-0 flex flex-col items-center justify-center w-full h-full p-1 duration-500 border-2 opacity-0 cursor-pointer text-wrap backdrop-blur-xl hover:opacity-100 border-white/20'>
                                <h1 className='mb-4 text-4xl font-medium text-white'>{item.title}</h1>
                                <p className='font-medium font-montserrat mb-7'>{item.genre[0]} ‎ ‎ ‎ ‎ ‎ {item.genre[1]}</p>
                                <p className='mb-2 status font-montserrat'>{item.status}</p>
                                <p className='release-date font-montserrat'>{item.release_date}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Movie;





// * hover:scale-105 ease-in-out duration-300