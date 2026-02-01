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
    console.log(selected);
    
    return(
        <>
        <div className="text-black">
            {}
        </div>
       <div >HEllo</div>

        </>
    )
}