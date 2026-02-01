import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../src/api/popularapi"
export default function IndvPopular(props){
    const { selected , setselected}=props;
    const { data: movie  , isLoading , error}=useQuery({
        queryKey:["IndPopular"],
        queryFn:()=>fetchPopularMovies(),
        refetchOnWindowFocus:true,
        staleTime:24*60*60*1000,

    })
    return(
        <>
        <div>
            ${data.title}
        </div>
       <div className="text-black">HEllo</div>

        </>
    )
}