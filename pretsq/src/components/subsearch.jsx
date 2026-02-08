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
        <div className="relative">
        <div className={` min-w-full`} >
        <div className='bg-neutral-900 pt-2 md:hidden flex w-full'>
            <input type="text" id="search" placeholder=' Search...' className='p-1 py-[4px] bg-neutral-700  ml-12 mx-5 rounded-md text-white'
            value={search}
            onChange={(e)=>{setsearch(e.target.value)}}
            />
        </div></div> 
        {data && (<div className={` w-[400px] z-50 justify-center absolute top-full text-blue-500 font-bold text-lg `}>
            {sortedData?.slice(0,4).map((movie)=>{
                return (
                <div className="bg-neutral-900 p-2 border-b-2 m-auto border-white/10 w-[70%] hover:bg-neutral-800 cursor-pointer gap-3"
                key={movie.id}>
                    <div className="flex items-center gap-3">
                    <div className="aspect-[2/3] w-[50px] rounded overflow-hidden ">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                        <h2 className="trun">{movie.title}</h2>
                    </div>
                </div>)

            })}
        </div>)
}</div>
        </>
    )
}