import React, { useState, useEffect,useContext } from 'react'
import { BASE_IMG_URL, GENREIDs,ALL_GENRES } from '../util';
import { MovieContext } from '../context/MovieContext';

const Watchlist = () => {
 // const [watchlist, setWatchList] = useState([]);
  const [search, setSearch] = useState('');
  const [genrelist, setGenreList] = useState([]);
  const [currgenre, setCurrGenre] = useState(ALL_GENRES);

  const {removeFromWatchList, watchlist, setWatchList} = useContext(MovieContext)
  
  // useEffect(() => {
  //   const watchListFromLocalStorage = localStorage.getItem('watchListMovies');
  //   if (watchListFromLocalStorage) {
  //     setWatchList(JSON.parse(watchListFromLocalStorage));
  //   }
  // }, []);

  useEffect(() => {
    const relevantGenreList = watchlist.map((moviesObj) => moviesObj.genre_ids)
    let temp = [];
    temp = relevantGenreList.flat(); //flatten for Array of Array
    temp = [...new Set(temp)]; //unique filtered genreList
    const namedGenreList = temp.map((filterlist) => {
      return GENREIDs[filterlist]
    })
    setGenreList([ALL_GENRES, ...namedGenreList]);
  }, [watchlist]);

  function handleAscRatings() {
    const sortAscMovies = watchlist.sort((a, b) => a.vote_average - b.vote_average)
    return setWatchList([...sortAscMovies])
  }
  function handleDescRatings() {
    const sortDescMovies = watchlist.sort((a, b) => b.vote_average - a.vote_average)
    return setWatchList([...sortDescMovies])
  }

  function handleSearch(ev) {
    setSearch(ev.target.value.toLowerCase());
  }

  function handleGenreFilter(selectedgenre) {

    setCurrGenre(selectedgenre);
  }

  // const removeFromWatchList = (moviesObj) => {
  //       const filteredMovies = watchlist.filter((movie) => movie.id !== moviesObj.id)
  //       setWatchList(filteredMovies);
  //       localStorage.setItem('watchListMovies', JSON.stringify(filteredMovies));

  //       return;
  //   }


  return (
    <div>
      {/* Genre List */}
      <div className='flex p-2 m-5 justify-center flex-wrap'>
        {genrelist.map((genre) => (
          <div className={`flex justify-center items-center h-[3rem] w-[15rem] m-4 p-3 rounded text-white font-bold cursor-pointer ${currgenre === genre ? 'bg-blue-500' : 'bg-blue-200'}`}
            onClick={() => handleGenreFilter(genre)} role='button'>
            {genre}
          </div>
        )
        )}
      </div>

      {/* SEARCH  */}
      <div className='flex p-2 m-5 justify-center'>
        <input className='h-[3rem] w-[25rem] px-3 py-2 
      rounded-md focus:outline-none focus:border-yellow-400 focus:ring-1  focus:ring-yellow-400' value={search} onChange={handleSearch}
          placeholder='Search by movie name'></input>
      </div>
      {/* TABLE DESIGN  */}
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 border-t'>
          {watchlist
            .filter((moviesObj) => moviesObj.title.toLowerCase().includes(search))
            .filter((moviesObj) => {
              if(currgenre===ALL_GENRES) return true
              return moviesObj.genre_ids.some((genreId) => GENREIDs[genreId] === currgenre)
            })
            .map((moviesObj) => {
              return (
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
                  <td>{moviesObj.genre_ids.map((each_genre) =>
                    GENREIDs[each_genre]).join('/')
                  }</td>
                  <td><button onClick={()=>removeFromWatchList(moviesObj)}>❌</button></td>
                </tr>
              )

            })}
        </tbody>
      </table>
    </div>
  )
}

export default Watchlist
