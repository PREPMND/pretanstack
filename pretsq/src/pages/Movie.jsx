import { fetchMovies } from "../api/movies"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChangeTitle } from "../App.jsx"
export default function Movie(props) {
    const { setselectedglobal, selectedglobal } = props
    const [movies, setMovies] = useState(null);
    const navigate= useNavigate();
    const { data, isLoading, error } = useQuery({
        queryKey: ["movies"],
        queryFn: () => fetchMovies(),
    })
    console.log(movies);
    
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (

        <>
            <div className="bg-neutral-900 w-full h-full">
                <div className="bg-neutral-950 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 select-none  gap-2 md:gap-4 overflow-y-hidden scroll-smooth scrollbar-hide overflow-x-auto focus:ring-2 focus:ring-amber-400 px-3 pt-2 ">
                    {data?.slice(0, 50).map((movie) => {
                        return (
                            <div className=" aspect-[2/3] rounded overflow-hidden relative"
                                key={movie.id}>
                                <div
                                    onMouseEnter={() => 
                                    setMovies(movie.id)}
                                    onMouseLeave={() => 
                                    setMovies(null)}
                                >   <div >
                                    <img 
                                    
                                    className="rounded object-cover z-50"
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    <h2>{movie.title}</h2></div>
                                <div
                                className={`absolute inset-0 z-40 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${movies === movie.id ? "opacity-100" : "opacity-0"}`}
                            >
                                <button
                                    onClick={() => {
                                        setMovies(movie.id)
                                        setselectedglobal(movie.id)
                                    }}
                                    className={`bg-black/70 hover:bg-black/70 px-4 py-2 rounded text-white text-sm flex items-center gap-2 ${movies ? "pointer-events-none" : ""}`}
                                >
                                    <span className="text-red-500">▶</span> Play
                                </button></div>

                                </div>
                                
                            
                            </div>
                        )
                    }

                    )}
                </div>
                
            </div>
            {movies && (
            <div onClick={() => {
                setselectedglobal(null)
                setMovies(null)
                }}
                                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center ">
                                    <div onClick={(e) => e.stopPropagation()}
                                        className="relative w-[90%] ">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
                                            className="rounded-lg"
                                        />
                                        <button
                                            className="absolute inset-0 flex items-center justify-center text-white text-3xl"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/toprated/${ChangeTitle(movies.title)}`)
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
