import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../api/popularapi"
import { useParams } from "react-router-dom";
export default function IndvPopular(props){
    const { id }=useParams();
    const { selected , setselected}=props;
    const { data: movie , isLoading , error}=useQuery({
        queryKey:["IndPopular" , id],
        queryFn:()=>fetchPopularMovies(id),
        enabled: !!id,
        refetchOnWindowFocus:true,
        staleTime:24*60*60*1000,

    })
    console.log(selected);
    
    return(
        <>
        <div className="text-black">
            {data?.map((movie)=>
            <div>{movie.title}</div>

            )}
        </div>
       <div >HEllo</div>

        </>
    )
}