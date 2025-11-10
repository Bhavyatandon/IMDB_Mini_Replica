import React, { useEffect,useState } from 'react'
import axios from 'axios'

const API_KEY = 'da04e034f4479f3d9a9eee8b9c0ae413';
const Banner = () => {

  const[trendingMov,setTrendingMovies]=useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
       console.log("Fetched Data:", response.data.results);
       setTrendingMovies(response.data.results);
      }
      catch (error) {
        console.log('Error', error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div
      className='h-[50vh] bg-cover bg-center flex justify-center items-end'
      style={{
        backgroundImage: 'url(https://tse2.mm.bing.net/th/id/OIP.2x-nTebnrKtCMCPIcqyiFQHaE7?pid=Api&P=0&h=180)'
      }}>
      <div
        className='text-white text-3xl text-center font-bold'>
        Nature</div>
    </div>
  )
}

export default Banner
