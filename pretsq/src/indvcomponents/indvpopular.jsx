import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../api/popularapi"
export default function IndvPopular(props){
    const { selected , setselected}=props;
    const { data , isLoading , error}=useQuery({
        queryKey:["IndPopular"],
        queryFn:()=>fetchPopularMovies(),
        refetchOnWindowFocus:true,
        staleTime:24*60*60*1000,

    })
    return(
        <>
        <div className="text-black">
            {selected.title}
        </div>
       <div >HEllo</div>

        </>
    )
}