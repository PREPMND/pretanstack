import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../api/popularapi"
import { useParams } from "react-router-dom";
import { ChangeTitle } from "../App";
export default function IndvPopular(props){
    const { id }=useParams();
    const { selected , setselected}=props;
    console.log(selected)
    return(
        <>
        
        <div className="bg-neutral-900 text-white h-full flex flex-col pl-3">
            <div className="font-Inter text-2xl text-center font-light">
                <div>{selected.title}</div>
                
            </div>
            <div className=" h-fit mt-1 flex justify-center overflow-hidden relative">
                  
                <img className="aspect-[3/2] rounded-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out object-cover h-[50%] w-[50%] "
                src={`https://image.tmdb.org/t/p/original${selected.backdrop_path}`}
                alt={selected.title}/>
              
            </div>
            <div className="width-[70%] md:width"
            >{selected.overview}</div>
            <div className="mt-3">
                <div className="text-center font-Inter elastic"
                onClick={()=>{
                    window.open(`https://dorawatch.one/${ChangeTitle(selected.title)}`)
                }}
                >Movie Player - DoraWatch</div>
            </div>
        </div>


        </>
    )
}