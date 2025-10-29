import React, { useState } from 'react'

const Movies = () => {
    const [movies, setMovies] = useState(
        [
            {
                url: 'https://tse2.mm.bing.net/th/id/OIP.2x-nTebnrKtCMCPIcqyiFQHaE7?pid=Api&P=0&h=180',
                title: 'Movie1'
            },
            {
                url: 'https://tse2.mm.bing.net/th/id/OIP.2x-nTebnrKtCMCPIcqyiFQHaE7?pid=Api&P=0&h=180',
                title: 'Movie2'
            },
            {
                url: 'https://tse2.mm.bing.net/th/id/OIP.2x-nTebnrKtCMCPIcqyiFQHaE7?pid=Api&P=0&h=180',
                title: 'Movie3'
            },
            {
                url: 'https://tse2.mm.bing.net/th/id/OIP.2x-nTebnrKtCMCPIcqyiFQHaE7?pid=Api&P=0&h=180',
                title: 'Movie4'
            },
            {
                url: 'https://tse2.mm.bing.net/th/id/OIP.2x-nTebnrKtCMCPIcqyiFQHaE7?pid=Api&P=0&h=180',
                title: 'Movie5'
            }
        ])
    
    const [pageNo,setPageNo] = useState(1);
    const handlePrev = ()=>
    {
        if (pageNo===1) return;
       else{
       setPageNo(prev=>prev-1);
        
    }
}
    const handleNext = () =>
    {
        setPageNo(prev=>prev+1);
    }
    return (
        <div >
            <h1 className='text-2xl font-bold text-center m-5'>Trending Movies </h1>
            <div 
            className='flex justify-evenly  flex-wrap gap-8'>
                {movies.map((moviesObj) => (
                    <>
                        <div 
                         className='h-[30vh] w-[30vh] bg-center
                          bg-cover rounded-xl flex flex-col 
                          items-center justify-end hover:cursor-pointer hover:scale-105 duration-300'
                        key={moviesObj.title}
                            style={{
                                backgroundImage: `url(${moviesObj.url})`
                            }}>
                                <div className='text-white w-full text-5xl text-bold bg-gray-900/60'>{moviesObj.title}

                                </div>
                        </div>
                    </>

                ))}
            </div>

            <div className='h-[5vh] w-full p-2 bg-gray-200 flex justify-center gap-3'>
                <span onClick={handlePrev}
                 className='cursor-pointer p-3'>
                    <i class="fa-solid fa-arrow-left"></i>
                </span>
                <span>{pageNo}</span>
                <span onClick={handleNext}
                 className='cursor-pointer p-3'>
                    <i class="fa-solid fa-arrow-right"></i>
                 </span>
                </div>


        </div>
    )
}

export default Movies
