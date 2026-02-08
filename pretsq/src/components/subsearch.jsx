import { fetchSearch } from "../api/movies"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
export default function SubSearch(props){
    const { search , setsearch}=props;
    const{ data , isLoading , error}=useQuery({
        queryKey:["search",search],
        queryFn:()=>fetchSearch(search),
        enabled:search.length>0,
    })
    const sortedData = data ? [...data].sort((a, b) => b.popularity - a.popularity) : [];
    console.log(sortedData.slice(0,4));
    return(

        <>
        <div className={` min-w-full`} >
        <div className='bg-neutral-900 pt-2 md:hidden flex w-full'>
            <input type="text" id="search" placeholder=' Search...' className='p-1 py-[4px] bg-neutral-700  ml-12 mx-5 rounded-md text-white'
            value={search}
            onChange={(e)=>{setsearch(e.target.value)}}
            />
        </div></div>
        <div className={`${search.length>0 ? "block" : "hidden"}  mt-3 h-full w-full z-999 `}>
            {sortedData?.slice(0,4).map((movie)=>{
                <div key={movie.id}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <h2>{movie.title}</h2>
                </div>

            })}
        </div>

        </>
    )
}