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
        <div className="w-screen relative">
        <div className={``} >
        <div className='bg-neutral-900 pt-2 flex md:pt-2 md:justify-center items-center '>
            <input type="text" id="search" placeholder=' Search...' className='p-1 py-[4px] bg-neutral-700 md:w-[350px] md:py-2 ml-12 mx-5 rounded-md text-white '
            value={search}
            onChange={(e)=>{setsearch(e.target.value)}}
            />
            <span onClick={()=>{setsearch("")}} className={`${search.length>0 ? "block" : "hidden"} cursor-pointer text-red-50`}>✖</span>
        </div></div> 
        {data && (<div className={` z-50 flex-col justify-center pt-1 m-auto absolute  place-items-center w-[70%] left-1/2 -translate-x-1/2 top-full text-stone-200 min-h-60 font-bold text-lg `}>
            {sortedData?.slice(0,4).map((movie)=>{
                return (
                <div className="bg-neutral-900 p-2 border-b-2 ml-12 mx-5 m-auto border-white/10 w-[70%] hover:bg-neutral-800 cursor-pointer gap-3  overflow-y-auto"
                key={movie.id}>
                    <div className="flex items-center w-max gap-7">
                    <div className="aspect-[2/3] md:w-[70px] w-[50px] rounded object-fill overflow-hidden overflow-x-hidden ">
                        <img className="object-cover w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                        <h2 onClick={()=>{
                window.open(`https://cineby.gd/movie/${movie.id}`)
            }}
                        className="truncate hover:text-neutral-400">{movie.title}</h2>
                        <h2 className="truncate hover:text-neutral-400 right-0"></h2>
                    </div>
                </div>)

            })}
        </div>)
}</div>
        </>
    )
}