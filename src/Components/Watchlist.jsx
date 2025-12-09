import React, { useState, useEffect } from 'react'
import { BASE_IMG_URL,GENREIDs } from '../util';

const Watchlist = () => {
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    const watchListFromLocalStorage = localStorage.getItem('watchListMovies');
    if (watchListFromLocalStorage) {
      setWatchList(JSON.parse(watchListFromLocalStorage));
    }
  }, []);

  function handleAscRatings()
  {
    const sortAscMovies= watchlist.sort((a,b)=>a.vote_average-b.vote_average)
    return setWatchList([...sortAscMovies]) 
  }
   function handleDescRatings()
  {
    const sortDescMovies= watchlist.sort((a,b)=>b.vote_average-a.vote_average)
    return setWatchList([...sortDescMovies]) 
  }

  return (
    <div>
      <table className='w-full border border-gray-200 shadow-lg m-3 rounded-lg'>
        <thead>
          <tr>
            <th>Name</th>            
            <th>
              <i class="fa-solid fa-arrow-up" onClick={handleAscRatings}></i>
              <span className='p-2'>Rating</span>
              <i class="fa-solid fa-arrow-down" onClick={handleDescRatings}></i>
              </th>
            
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 border-t'>
          {watchlist.map((moviesObj) => {
            return(
<tr>
              <td>
                <div className='flex flex-col items-center'>
                <img src={BASE_IMG_URL + moviesObj.poster_path} alt='Movie Poster' className='h-[10rem] w-[10rem] p-2'>
              </img>
                <span className='font-medium text-gray-700'>{moviesObj.title}</span>
                </div>
              </td>
              <td>{moviesObj.vote_average.toFixed(1)}</td>
              <td>{moviesObj.popularity.toFixed(1)}</td>
              <td>{moviesObj.genre_ids.map((each_genre)=>
              GENREIDs[each_genre]).join('/')
            }</td>
            </tr>
            ) 
            
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Watchlist
