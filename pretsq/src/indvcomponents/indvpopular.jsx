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
            <div>
                <img 
                src=${`selected.backdrop_path`}
            </div>
        </div>
       <div >HEllo</div>

        </>
    )
}