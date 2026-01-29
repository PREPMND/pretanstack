import { useQuery } from "@tanstack/react-query";
import { fetchTopRated } from "../api/popularapi.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Popular() {
  const navigate= useNavigate();
  const [num,setnum]=useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["top-rated"],
    queryFn: () => fetchTopRated(),
  });

  if (isLoading) return (<>

    <p className='h-screen flex justify-center items-center '>Loading...</p></>)
  if (error) {
    console.log(error);

    return <p>Something went wrong</p>;
  }
  return(
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
          <h3 className="truncate mt-[6px] md:pb-1 font-Inter font-semibold text-slate-50">{movie.title}</h3>
        </div>

      ))}
    </div>_
}