import { useQuery } from "@tanstack/react-query";
import { fetchTopRated } from "../api/topratedapi.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopRated() {
    const [selected, setselected]=useState
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
                <button onClick={()=>navigate("/trending/movies")}
                    className="ml-3 mt-2 block mx-auto md:text-[18px] font-[600] text-[14px] bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-[10px] py-[6px] rounded active:scale-95">Top Rated</button>
            </div>
            
            {selected && (
                <div onClick={() => setselected(null)}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center">
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