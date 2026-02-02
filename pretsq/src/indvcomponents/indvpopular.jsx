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
                <div>{</div>
            </div>
        </div>
       <div >HEllo</div>

        </>
    )
}