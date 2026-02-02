import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../api/popularapi"
import { useParams } from "react-router-dom";
export default function IndvPopular(props){
    const { id }=useParams();
    const { selected , setselected}=props;

    return(
        <>
        
        <div className="text-black">
            <div>
                <div>{selected.title}</div>
                
            </div>
            <div className="aspect-[2/3]">
                  
                <img className="rounded-lg group-hover:scale-105 transition-transform duration-200 ease-in-out object-cover h-[50%] w-[50%]"
                src={`https://image.tmdb.org/t/p/original${selected.backdrop_path}`}
                alt={selected.title}/>
              
            </div>
        </div>
       <div >HEllo</div>

        </>
    )
}