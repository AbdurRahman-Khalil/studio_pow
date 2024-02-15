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
                            <div className='absolute bottom-0 w-full h-full flex flex-col justify-center items-center backdrop-blur-xl p-1 opacity-0 hover:opacity-100 duration-500 border-2 border-white/20 cursor-pointer'>
                                <h1 className='text-white text-4xl text-wrap font-medium mb-4'>{item.title}</h1>
                                <p className='font-medium font-montserrat mb-7'>{item.genre[0]} ‎ ‎ ‎ ‎ ‎ {item.genre[1]}</p>
                                <p className='status font-montserrat mb-2'>{item.status}</p>
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