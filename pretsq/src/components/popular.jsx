import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../api/popularapi.jsx";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChangeTitle } from "../App.jsx";
function Popular(props) {
  const navigate = useNavigate();
  const [movieHovered , setmovieHovered]=useState(null);
  
  const {selected , setselected }=props;
  const [num, setnum] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchPopularMovies(),
    refetchOnMount:true,
    refetchOnWindowFocus:true
  });

  console.log({selected})
  if (isLoading) return (<>

    <p className='h-screen flex justify-center items-center '>Loading...</p></>)
  if (error) {
    console.log(error);

    return <p>Something went wrong</p>;
  }

  return (
    <>
      <div className="bg-neutral-900  font-Inter text-slate-50">
        <div className="pt-1">
          <button onClick={() => navigate("/movie")}
            className="px-3 font-Inter tracking-wide text-[13px] md:text-[14px]">Popular Movies</button>
          <button onClick={() => setnum(prev => prev + 1)}
            className="ml-3 mt-2 m-auto md:text-[15px] font-[600] text-[13px] bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-2 py-1 rounded active:scale-95">More Popular Movies</button>
        </div>
        <div className={`grid grid-flow-col select-none auto-cols-[140px] md:auto-cols-[190px] gap-2 md:gap-4 overflow-y-hidden mt-3 scroll-smooth scrollbar-hide overflow-x-auto focus:ring-2 focus:ring-amber-400 px-3 pt-2 ${selected ? "pointer-events-none" : ""}`}>
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
                    onClick={() => setselected(movie)}
                    className={`bg-black/70 hover:bg-black/70 px-4 py-2 rounded text-white text-sm flex items-center gap-2`}
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
      </div>
      {selected && (
        <div  onClick={() => setselected(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] ">
            <img
              src={`https://image.tmdb.org/t/p/original${selected.backdrop_path}`}
              className="rounded-lg"
            />
            
            <button
              className="absolute inset-0 flex items-center justify-center text-white text-3xl"
              onClick={(e)=>navigate(`/popular/${ChangeTitle(selected.title)}`)}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </>

  );
}

export default Popular;