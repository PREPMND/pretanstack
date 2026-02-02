import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../api/popularapi"
import { useParams } from "react-router-dom";
export default function IndvPopular(props){
    const { id }=useParams();
    const { selected , setselected}=props;

    return(
        <>
        
        <div className="">
            <div className="font-Inter text-2xl text-center font-light">
                <div>{selected.title}</div>
                
            </div>
            <div className="aspect-[3/2] mt-1 flex justify-center">
                  
                <img className="rounded-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out object-cover h-[50%] w-[50%] "
                src={`https://image.tmdb.org/t/p/original${selected.backdrop_path}`}
                alt={selected.title}/>
              
            </div>
            <div>
                <div onClick={()=>{
                    window.open
                }}
                ></div>
            </div>
        </div>
       <div >HEllo</div>

        </>
    )
}