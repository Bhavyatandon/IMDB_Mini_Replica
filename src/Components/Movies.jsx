import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_IMG_URL, API_KEY } from '../util';


const Movies = () => {
    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1);
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${pageNo}`)
                const list = response.data?.results;
                setMovies(list);

            }
            catch (error) {
                console.log('Error', error);
            }
        }

        fetchMovies();
    }, [pageNo]);

    const addToWatchList = (moviesObj) => {
        const updateList = [...watchList, moviesObj];
        setWatchList(updateList);

    }    
    
    const removeFromWatchList = (moviesObj) => {
       const filteredMovies = watchList.filter((movie) => movie.id !== moviesObj.id)
       setWatchList(filteredMovies);
       return;
    }

    function IsPresentInWatchList(moviesObj) {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === moviesObj.id) {
                return true; // show tick icon
            }
        }
        return false; //show plus icon
    }

    const handlePrev = () => {
        if (pageNo === 1) return;
        else {
            setPageNo(prev => prev - 1);

        }
    }
    const handleNext = () => {
        setPageNo(prev => prev + 1);
    }
    return (
        <div >
            <h1 className='text-5xl font-bold text-center m-5'>Trending Movies </h1>
            <div
                className='flex justify-evenly  flex-wrap gap-8 '>

                {movies.map((moviesObj) => (
                    <div
                        key={moviesObj.original_title}
                        className=" relative w-40 sm:w-44 md:w-52 lg:w-60 xl:w-64 bg-[#1A1A1A] 
                        rounded-2xl overflow-hidden shadow-lg flex flex-col hover:scale-105 duration-300"
                    >
                        {/* POSTER */}
                        <div

                            className="h-60 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${BASE_IMG_URL}${moviesObj.poster_path})`
                            }}>
                            {/* WATCHLIST       */}
                            {IsPresentInWatchList(moviesObj) ?
                                (<button className="absolute  left-2 bg-black
                             text-white text-2xl p-1 rounded-md hover:bg-gray-700" onClick={() => removeFromWatchList(moviesObj)}>
                                   ✓ 
                                </button>) :
                                (
                                    <button className="absolute  left-2 bg-black
                             text-white text-2xl p-1 rounded-md hover:bg-gray-700" onClick={() => addToWatchList(moviesObj)}>
                                        +
                                    </button>
                                )}

                        </div>
                        {/* IMDB RATING & RATE */}

                        <div className="flex items-center gap-2 p-2 ">
                            <span className="text-yellow-400 text-2xl">★</span>
                            <span className="font-bold text-white">{(moviesObj.vote_average).toFixed(1)}</span>
                            <div className="text-gray-500 p-4 text-2xl">
                                <span >☆</span>
                            </div>
                        </div>

                    </div>


                ))}
            </div>

            <div className='h-[5vh] w-full p-2 m-6 bg-gray-400 rounded-xl flex items-center justify-center gap-3'>
                <span onClick={handlePrev}
                    className='cursor-pointer'>
                    <i className="fa-solid fa-arrow-left"></i>
                </span>
                <span >{pageNo}</span>
                <span onClick={handleNext}
                    className='cursor-pointer'>
                    <i className="fa-solid fa-arrow-right"></i>
                </span>
            </div>


        </div>
    )
}

export default Movies
