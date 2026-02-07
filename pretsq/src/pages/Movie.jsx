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
        <div>
            <div>
                {data?.slice(0,50).map((movie)=>{
                    return(
                        <div className="bg-neutral-950 grid"
                        key={movie.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />   
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
       