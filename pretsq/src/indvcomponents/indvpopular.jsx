import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../api/popularapi"
import { useParams } from "react-router-dom";
export default function IndvPopular(props){
    const { id }=useParams();
    const { selected , setselected}=props;
    const { data, isLoading , error}=useQuery({
        queryKey:["IndPopular" ],
        queryFn:()=>fetchPopularMovies(),
        refetchOnWindowFocus:true,
        staleTime:24*60*60*1000,

    })
    console.log(selected);
    
    return(
        <>
        <div>{selected?.title}</div>
        <div className="text-black">
            {data?.map((movie)=>
            <div key={movie.id}>{movie.title}</div>

            )}
        </div>
       <div >HEllo</div>

        </>
    )
}