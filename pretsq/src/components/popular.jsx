import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../api/popularapi.jsx";
import { useState } from "react";

function Popular() {
  const [num,setnum]=useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchPopularMovies(),
  });

  if (isLoading) return (<>

    <p className='h-screen flex justify-center items-center '>Loading...</p></>)
  if (error) {
    console.log(error);

    return <p>Something went wrong</p>;
  }

  return (
    <>    
    <div className="bg-neutral-900 text-slate-50">
    <button onClick={} 
    className="ml-3 mt-2 font-mono bg-amber-400 hover:bg-amber-300  text-neutral-900 px-2 py-1 rounded active:scale-95">Popular Movies</button>
    <button onClick={()=>setnum(prev=>prev+1)}
    className="ml-3 mt-2 font-mono hover:bg-amber-300 hover:border-amber-500 text-neutral-900 bg-amber-400 px-2 py-1 rounded active:scale-95">More Popular Movies</button>
    <div className="grid grid-flow-col select-none auto-cols-[140px] md:auto-cols-[190px] gap-2 md:gap-4 overflow-y-hidden mt-3 scroll-smooth scrollbar-hide overflow-x-auto focus:ring-2 focus:ring-amber-400 px-3 ">
      {data?.slice(0, 10*num).map((movie) => (
        <div className=""
          key={movie.id}>
        <div className="w-full bg-neutral-900 aspect-[2/3] place-items-center"> 
          <img className='hover:scale-105 transition-transform duration-200 ease-in-out object-cover rounded h-full '
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div> 
          <h3 className="truncate mt-[6px] pb-24 md:pb-1 font-mono font-semibold text-slate-50">{movie.title}</h3>
        </div>

      ))}
    </div>
    </div>
    </>

  );
}

export default Popular;