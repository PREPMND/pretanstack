import { useQuery } from "@tanstack/react-query";
import { fetchTopRated } from "../api/trendingapi.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopRated() {
    const navigate = useNavigate();
    const [num, setnum] = useState(1);
    const { data, isLoading, error } = useQuery({
        queryKey: ["top-rated"],
        queryFn: () => fetchTopRated(),
    });
    console.log(data);

    if (isLoading) return (<>

        <p className='h-screen flex justify-center items-center '>Loading...</p></>)
    if (error) {
        console.log(error);

        return <p>Something went wrong</p>;
    }
    return (
        <div  className='bg-neutral-900 flex justify-center flex-col w-full mt-3 '>
        <button onClick={()=>setnum(prev=>prev+1)}
    className="ml-3 mt-2 block mx-auto md:text-[18px] font-[600] text-[14px] bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-3 py-2 rounded active:scale-95">Top Rated</button>    
        <div className="grid grid-flow-col select-none auto-cols-[140px] md:auto-cols-[190px] gap-2 md:gap-4 overflow-y-hidden mt-3 scroll-smooth scrollbar-hide overflow-x-auto focus:ring-2 focus:ring-amber-400 px-3 pt-2">
            {data?.slice(0, 19).map((movie) => (
                <div className=""
                    key={movie.id}>
                    <div className="w-full bg-neutral-900 aspect-[2/3] place-items-center">
                        <img className='hover:scale-105 transition-transform duration-200 ease-in-out object-cover rounded h-full '
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                    <h3 className="truncate mt-[6px] md:pb-1 font-Inter font-semibold text-slate-50">{movie.title}</h3>
                    <h3 className="truncate mt-[6px] md:pb-1 font-Inter font-semibold text-slate-50">{movie.vote_average}</h3>
                </div>

            ))}
        </div>
        </div>
        )
}