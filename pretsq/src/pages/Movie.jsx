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
                data?.slice(0,10).map((movie)=>{
                    return(
                        <div key={movie.id}>
                            {movie.title}
                        </div>
                    )
                })
            </div>
        </div>
        </>
    )
}