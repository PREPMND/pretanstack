import { fetchTopRated} from "../api/topratedapi.jsx"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoaderPinwheel } from "lucide-react"
export default function Topratedpage(props) {
    const { setselectedglobal} = props
    const [movies, setMovies] = useState(null);
    const [movieHovered, setmovieHovered] = useState(null);
    const navigate= useNavigate();
   
    const { data, isLoading, error } = useQuery({
        queryKey: ["top-rated"],
        queryFn: () => fetchTopRated(),
        refetchOnMount: true,
        refetchOnWindowFocus:true,
    })
    if (isLoading) return(<div className={`w-full min-h-[calc(100vh-120px)] h-full bg-neutral-900 z-40 flex items-center justify-center whitespace-nowrap text-yellow-50 font-[Inter] font-[600] `}>
          <LoaderPinwheel className="animate-spin mr-3"/>
          <div>Loading...</div>
          <div className='absolute bottom-4 text-center font-sans text-stone-400 md:text-[14px]text-[8px]'>Results are on their way ! <span className="md:flex hidden ">Check your network connection.</span></div>
        </div>)
    if (error) return <div>Error: {error.message}</div>
    return (

        <>
            <div className="bg-neutral-900 w-full h-screen">
                
                <div className="bg-neutral-950 grid grid-cols-2 place-content-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 select-none  gap-2 md:gap-4 overflow-y-hidden scroll-smooth scrollbar-hide overflow-x-auto focus:ring-2 focus:ring-amber-400 px-3 pt-2 ">
                    {data?.slice(0, 50).map((movie) => {
                        return (
                            <div className=" aspect-[2/3] rounded overflow-hidden z-35 relative"
                                key={movie.id}>
                                <div className="flex-col mb-32 absolute"
                                    onMouseEnter={() => 
                                    setmovieHovered(movie.id)
                                     
                                }
                                    onMouseLeave={() => 
                                    setmovieHovered(null)}
                                >   <div >
                                    <img 
                                    
                                    className="rounded object-cover z-30"
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></div>
                                    
                            <div className={`absolute inset-0 z-40 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${movieHovered === movie.id ? "opacity-100" : "opacity-0"}`}
                            >
                                <button
                                    onClick={() => {
                                        setMovies(movie);
                                        setselectedglobal(movie);
                                    }}
                                    className={`bg-black/70 hover:bg-black/70 px-4 py-2 rounded text-white text-sm flex items-center gap-2 ${movies ? "pointer-events-none" : ""}`}
                                >
                                    <span className="text-red-500">▶</span>
                                <h2 className="text-white text-sm font-semibold absolute top-0 truncate m-auto mt-2 inset-0 w-full text-center" >{movie.title}</h2>
                                     Play
                                </button>
                            </div>

                            </div>
                                
                            
                            </div>
                        )
                    }

                    )}
                </div>
                
            </div>
            {movies && (
            <div onClick={() => {
                setselectedglobal(null);
                setMovies(null);
                }}
                                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center ">
                                    <div onClick={(e) => e.stopPropagation()}
                                        className="relative w-[80%] md:w-[70%] ">
                                        <h2 className="text-white text-3xl font-semibold absolute top-0 truncate m-auto mt-2 inset-0 w-full text-center" >{movies.title}</h2>
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
                                            className="rounded-lg"
                                        />
                                        <button
                                            className="absolute inset-0 flex items-center justify-center text-white text-3xl"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(`https://cineby.gd/movie/${movies.id}`)
                                            }}
                                        >
                                            ▶
                                        </button>
                                        
                                    </div>
                                </div>
                            )}
        </>
    )
}
