import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../src/api/popularapi"
export default function (){
    const { data , isLoading , error}=useQuery({
        queryKey:["IndPopular"],
        queryFn:()=>fetchPopularMovies(),
        refetchOnWindowFocus:T

    })
    return(
        <>
        <div>
            H
        </div>

        </>
    )
}