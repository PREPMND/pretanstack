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
        <div className="bg-neutral-900 min-h-[calc(100vh-64px)] md:h-full">
        <div className=" font-Inter w-full text-white flex flex-col pl-3">
            <div className="mt-2 text-2xl text-center font-light">
                <div>{selected.title}</div>
                
            </div>
            <div className=" h-fit mt-3 flex justify-center overflow-hidden relative">
                  
                <img className="aspect-[3/2] rounded-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out object-cover md:h-[50%] md:w-[50%]  w-[70%] h-[70%] "
                src={`https://image.tmdb.org/t/p/original${selected.backdrop_path}`}
                alt={selected.title}/>
              
            </div >
            <div className="flex mt-5 m-auto justify-center max-w-[70%]"
            >{selected.overview}</div>
            <div className="text-center text-3xl text-red-100 font-[700] mt-10 " >Players</div>
            <div className="flex justify-center">
            <div className="flex items-start flex-col justify-center">
            <div 
            onClick={()=>{
                window.open(`https://dorawatch.one/${ChangeTitle(selected.title)}`)
            }}
            className="mt-6 flex justify-center items-center gap-3">
                <Popcorn className="" strokeWidth={0.5} />
                <div className="text-center font-Inter elastic"
                
                > Movie Player - DoraWatch</div>
            </div>
            <div 
            onClick={()=>{
                window.open(`https://cineby.gd/movie/${selected.id}`)
            }}
            className="mt-4 flex justify-center  items-center gap-3">
                <Popcorn className="" strokeWidth={0.5} />
                <div className="text-center font-Inter elastic"
                
                >Movie Player - Cineby</div>
            </div>
            </div>
            </div>
        </div>
        </div>


        </>
    )
}