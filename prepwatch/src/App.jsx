import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import { BrowserRouter } from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"    
import { useState } from "react"
import SubSearch from "./components/subsearch"
import { Heart } from "lucide-react "
export default function App(){
    const [selectedtoprated,setselectedtoprated]=useState(null)
    const [selectedtrending, setselectedtrending] = useState(null)
    const [selected, setselected] = useState(null)
    const [selectedglobal , setselectedglobal]=useState(null);
    const [searchnav , setsearchnav ]=useState(null);
    const [page,setpage]=useState(null);
    const [favourites, setfavourites] = useState([]);
    const [heart, setheart] = useState([]);
    const [backdrop, setbackdrop] = useState(false);
    return(
        <>
        
        <BrowserRouter>
           
           
           <NavRoutes backdrop={backdrop} setbackdrop={setbackdrop} favourites={favourites} setfavourites={setfavourites} heart={heart} setheart={setheart} page={page} setpage={setpage} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} selected={selected } setselected={setselected}/>
           
        </BrowserRouter>
        
        </>
    )
}
export function ChangeTitle(moviename){
    return moviename
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g,"")
    .replace(/\s+/g,"-")
    .replace(/-+/g,"-");


}
export function GridLayout(navigate, data, setselected, selected ,movieHovered, setmovieHovered, favourites, setfavourites, heart, setheart){
    return(
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
                    onClick={() => {setselected(movie)}}
                    className={`bg-black/70 hover:bg-black/70 px-4 py-2 rounded text-white text-sm flex items-center gap-2`}
                  >
                    <span className="text-red-500">▶</span> Play
                  </button>
                  /*
                  <Heart 
                    onClick={()=>{
                      console.log(favourites);
                      if(favourites.includes(movie)){
                        setfavourites([...favourites].filter(id => id !== movie));
                        setheart([...heart].filter(id => id !== movie.id))
                        localStorage.setItem("heart", JSON.stringify([...heart].filter(id => id !== movie.id)))
                        localStorage.setItem("favourites", JSON.stringify(favourites.filter(id => id !== movie)))
                        ;
                      } else {
                        setfavourites(prev => [...prev, movie]);
                        setheart([...heart, movie.id]);
                        localStorage.setItem("heart", JSON.stringify([...heart, movie.id]))
                        localStorage.setItem("favourites", JSON.stringify([...favourites, movie]));
                      }
                    }}
                  className={`opacity-80 absolute bottom-4
                   right-2 text-white ${localStorage.getItem("heart") && JSON.parse(localStorage.getItem("heart")).includes(movie.id) ? "fill-red-500" : ""}`} size={20} />*/
                </div>
              </div>
              <h3 className="truncate mt-[6px] md:pb-1 font-Inter font-semibold text-slate-50">{movie.title}</h3>
              <h3 className={`truncate mt-[6px] md:pb-1 font-Inter text-[11px] md:text-[13px] text-white`}>{movie.vote_average}</h3>
            </div>
          )}
        </div>
      </div>
        </>
    )
}