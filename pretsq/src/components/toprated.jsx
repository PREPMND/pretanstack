import { useQuery } from "@tanstack/react-query";
import { fetchTopRated } from "../api/topratedapi.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopRated(props) {
    const [selected, setselected]=useState(null);
    const { selectedglobal , setselectedglobal}=props;
    const [movieHovered , setmovieHovered]=useState(null);
    const navigate = useNavigate();
    const [num, setnum] = useState(1);
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
    return (
        <div className='bg-neutral-900 mt-3 '>
            <div className='bg-neutral-900 flex justify-center flex-col w-full '>
                <button onClick={()=>navigate("/toprated")}
                    className="ml-3 mt-2 block mx-auto md:text-[18px] font-[600] text-[14px] bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-[10px] py-[6px] rounded active:scale-95">Top Rated</button>
            </div>
            <div className={`grid grid-flow-col select-none auto-cols-[140px] md:auto-cols-[190px] gap-2 md:gap-4 overflow-y-hidden mt-3 scroll-smooth scrollbar-hide overflow-x-auto focus:ring-2 focus:ring-amber-400 px-3 pt-2 
            ${selectedglobal?"pointer-events-none":""}
            ${selected?"pointer-events-none":""}`}>
                {data?.slice(0, 19).map((movie) => 
                    <div className=""
                        key={movie.id}>
                        <div 
                            onMouseEnter={() => setmovieHovered(movie.id)}
                            onMouseLeave={() => setmovieHovered(null)}
                            className={`w-full relative bg-neutral-900 aspect-[2/3] overflow-hidden group `}
                        >
                            <img
                                className="group-hover:scale-105 transition-transform duration-200 ease-in-out object-cover rounded h-full w-full"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div
                                className={`absolute inset-0 z-30 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${movieHovered === movie.id ? "opacity-100" : "opacity-0"}`}
                            >
                                <button
                                    onClick={() => {
                                        setselected(movie)
                                        setselectedglobal()
                                    }}
                                    className={`bg-black/70 hover:bg-black/70 px-4 py-2 rounded text-white text-sm flex items-center gap-2 ${selected?"pointer-events-none":""}`}
                                >
                                    <span className="text-red-500">▶</span> Play
                                </button>
                            </div>
                        </div>
                        <h3 className="truncate mt-[6px] md:pb-1 font-Inter font-semibold text-slate-50">{movie.title}</h3>
                        <h3 className={`truncate mt-[6px] md:pb-1 font-Inter text-[11px] md:text-[13px] text-white`}>{movie.vote_average}</h3>
                    </div>
                )}
            </div>
            {selected && (
                <div onClick={() => setselected(null)}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()}
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