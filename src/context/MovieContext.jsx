import React, {useState,useEffect} from 'react'

export default function MovieContextWrapper({ children }) {
    const [watchlist, setWatchList] = useState([]);

    useEffect(() => {
        const watchListFromLocalStorage = localStorage.getItem('watchListMovies');
        if (watchListFromLocalStorage) {
            setWatchList(JSON.parse(watchListFromLocalStorage));
        }


    }, []);

    const addToWatchList = (moviesObj) => {
        const updateList = [...watchlist, moviesObj];
        setWatchList(updateList);
        localStorage.setItem('watchListMovies', JSON.stringify(updateList));

    }

    const removeFromWatchList = (moviesObj) => {
        const filteredMovies = watchlist.filter((movie) => movie.id !== moviesObj.id)
        setWatchList(filteredMovies);
        localStorage.setItem('watchListMovies', JSON.stringify(filteredMovies));

        return;
    }

    return <MovieContext.Provider value={{ addToWatchList, removeFromWatchList, watchlist, setWatchList }}>
        {children}
    </MovieContext.Provider>
}

export const MovieContext = React.createContext()