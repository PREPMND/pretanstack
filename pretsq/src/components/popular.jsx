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
    <button className="ml-3 mt-2 font-mono hover:bg-amber-200 hover:border-amber-500 px-2 py-1 rounded active:scale-95">Popular Movies</button>
    <button onClick={()=>setnum(prev=>prev+1)}
    className="ml-3 mt-2 font-mono hover:bg-amber-200 hover:border-amber-500 px-2 py-1 rounded active:scale-95">More Popular Movies</button>
    <div className="grid grid-flow-col auto-cols-[120px] md:auto-cols-[180px] overflow-y-hidden overflow-x-auto ">
      {data?.slice(0, 10*num).map((movie) => (
        <div className=""
          key={movie.id}>
        <div className="flex-nowrap aspect-[2/3]"> 
          <img className='hover:scale-105 transition-transform duration-200 ease-in-out object-cover rounded '
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div> 
          <h3 className="truncate mt-[6px] pb-24 md:pb-1 font-mono font-semibold text-zinc-900">{movie.title}</h3>
        </div>

      ))}
    </div>
    </>

  );
}

export default Popular;