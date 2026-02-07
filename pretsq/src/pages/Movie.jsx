import { fetchMovies } from "../api/movies"
import { useQuery } from "@tanstack/react-query"
export default function Movie(){
    const { data , isLoading, error} = useQuery({
        queryKey: ["movies"],
        queryFn: () => fetchMovies(),
    })
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>
    return(
        
        <>
        <div className="bg-neutral-900 w-full h-full">
            <div className="bg-neutral-950 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 select-none  gap-2 md:gap-4 overflow-y-hidden scroll-smooth scrollbar-hide overflow-x-auto focus:ring-2 focus:ring-amber-400 px-3 pt-2 ">
                {data?.slice(0,50).map((movie)=>{
                    return(
                        <div className=" aspect-[2/3] rounded overflow-hidden"
                        key={movie.id}>
                            <div>
                                <img className="rounded object-cover"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />   
                                <h2>{movie.title}</h2>
                                
                            </div>
                        </div>
                    )
                }

                )}
            </div>
        </div>
        </>
    )
}
       