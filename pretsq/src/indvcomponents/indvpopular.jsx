import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../api/popularapi"
import { useParams } from "react-router-dom";
import { ChangeTitle } from "../App";
import { Popcorn } from "lucide-react"
export default function IndvPopular(props){
    const { id }=useParams();
    const { selected , setselected}=props;
    console.log(selected)
    return(
        <>
        
        <div className="bg-neutral-900 font-Inter w-full text-white h-full flex flex-col pl-3">
            <div className="mt-2 text-2xl text-center font-light">
                <div>{selected.title}</div>
                
            </div>
            <div className=" h-fit mt-3 flex justify-center overflow-hidden relative">
                  
                <img className="aspect-[3/2] rounded-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out object-cover h-[50%] w-[50%] "
                src={`https://image.tmdb.org/t/p/original${selected.backdrop_path}`}
                alt={selected.title}/>
              
            </div>
            <div className="flex mt-5 m-auto justify-center max-w-[70%]"
            >{selected.overview}</div>
            <div className="text-center text-3xl text-red-100 font-[700] mt-5 " >Players</div>
            <div className="block">
            <div 
            onClick={()=>{
                window.open(`https://dorawatch.one/${ChangeTitle(selected.title)}`)
            }}
            className="mt-3 flex justify-center items-center gap-3">
                <Popcorn className="" strokeWidth={0.5} />
                <div className="text-center font-Inter elastic"
                
                > Movie Player - DoraWatch</div>
            </div>
            <div 
            onClick={()=>{
                window.open(`https://cineby.gd/movie/${selected.id}`)
            }}
            className="mt-3 flex justify-center  items-center gap-3">
                <Popcorn className="" strokeWidth={0.5} />
                <div className="text-center font-Inter elastic"
                
                >Movie Player - Cineby</div>
            </div>
            </div>
        </div>


        </>
    )
}