import { fetchTrending } from "../api/trendingapi.jsx";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export default function Trending() {
    const [selected, setselected] = useState(null);
    const { data, isPending, error } = useQuery({

        queryKey: ["trending"],
        queryFn: () => fetchTrending()
    })
    console.log(data)
    if (isPending) return (
        <>
            <p className='h-screen flex justify-center items-center '>Loading...</p>
        </>)
    if (error) {
        console.log(error);
        return <p>Something went wrong</p>;
    }
    return (
        <div className='bg-neutral-900 mt-3 '>
            <div className='bg-neutral-900 flex justify-center flex-col w-full '>
                <button onClick={() => navigate("/trending/movies")}
                    className="ml-3 mt-2 block mx-auto md:text-[18px] font-[600] text-[14px] bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-3 py-2 rounded active:scale-95">Top Rated</button>
            </div>
            <div className="grid grid-flow-col select-none auto-cols-[140px] md:auto-cols-[190px] gap-2 md:gap-4 overflow-y-hidden mt-3 scroll-smooth scrollbar-hide overflow-x-auto focus:ring-2 focus:ring-amber-400 px-3 pt-2">
                {data?.slice(0, 19).map((movie) => (
                    <div className=""
                        key={movie.id}>
                        <div className="w-full z-30 bg-neutral-900 aspect-[2/3] place-items-center">
                            <img onClick={() => setselected(movie)}
                            className='hover:scale-105 transition-transform duration-200 ease-in-out object-cover rounded h-full '
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div></div>
                        </div>
                        <h3 className="truncate mt-[6px] md:pb-1 font-Inter font-semibold text-slate-50">{movie.title}</h3>
                        <h3 className={`truncate mt-[6px] md:pb-1 font-Inter text-[11px]
                        md:text-[13px] font- 
                        text-white`}>{movie.vote_average}</h3>
                    </div>

                ))}
            </div>
            {selected && (
                <div onClick={()=>setselected(null)}
                className="fixed inset-0 bg-black/80 flex items-center justify-center">
                    <div onClick={(e)=>e.stopPropagation()}
                    className="relative w-[90%] ">
                        <img
                            src={`https://image.tmdb.org/t/p/original${selected.backdrop_path}`}
                            className="rounded-lg"
                        />
                        <button
                            className="absolute inset-0 flex items-center justify-center text-white text-3xl"
                            onClick={() =>
                                window.open(`https://www.themoviedb.org/movie/${selected.id}`, "")
                            }
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}