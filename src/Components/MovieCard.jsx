import React from 'react'
import { BASE_IMG_URL } from '../util'

const MovieCard = (props) => {
    const { moviesObj, addToWatchList, removeFromWatchList, watchList } = props;
     function IsPresentInWatchList(moviesObj) {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === moviesObj.id) {
                return true; // show tick icon
            }
        }
        return false; //show plus icon
    }
    return (
        <div>
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


        </div>
    )
}

export default MovieCard
