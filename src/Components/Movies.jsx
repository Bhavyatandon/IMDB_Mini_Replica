import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../util';
import MovieCard from './MovieCard'


const Movies = () => {
    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1);
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        const watchListFromLocalStorage = localStorage.getItem('watchListMovies');
        if (watchListFromLocalStorage) {
            setWatchList(JSON.parse(watchListFromLocalStorage));
        }


    }, []);

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
        localStorage.setItem('watchListMovies', JSON.stringify(updateList));

    }

    const removeFromWatchList = (moviesObj) => {
        const filteredMovies = watchList.filter((movie) => movie.id !== moviesObj.id)
        setWatchList(filteredMovies);
        localStorage.setItem('watchListMovies', JSON.stringify(filteredMovies));

        return;
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

                    <>
                        <MovieCard
                            moviesObj={moviesObj}
                            addToWatchList={addToWatchList}
                            removeFromWatchList={removeFromWatchList}
                            watchList={watchList} />
                    </>
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
