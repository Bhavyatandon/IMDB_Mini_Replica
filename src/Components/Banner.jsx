import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_IMG_URL,API_KEY} from '../util';

const Banner = () => {

  const [bannerMovie, setBannerMovie] = useState("");
  const [bannerMovieImg, setBannerMovieImg] = useState("");


  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        console.log("Fetched Data:", response.data.results);
        const list = response.data?.results[0];
        setBannerMovie(list.original_title);
        setBannerMovieImg(`${BASE_IMG_URL}${list.backdrop_path}`);

      }
      catch (error) {
        console.log('Error', error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div
      className='h-[80vh] bg-cover bg-center rounded-2xl flex justify-center items-end'
      style={{
        backgroundImage: `url(${bannerMovieImg})`
      }}>
      <div
        className='text-white text-3xl text-center font-bold'>
        {bannerMovie}</div>
    </div>
  )
}

export default Banner
