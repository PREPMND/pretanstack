import { ChangeTitle } from "../App";
import { Popcorn } from "lucide-react"
export default function IndvTrending(props){ 
    const { selectedtrending , setselectedtrending}=props;

    return(
        <>
        <div className="bg-neutral-900 h-screen md:h-full">
        <div className=" font-Inter w-full text-white flex flex-col pl-3">
            <div className="mt-2 text-2xl text-center font-light">
                <div>{selectedtrending.title}</div>
                
            </div>
            <div className=" h-fit mt-3 flex justify-center overflow-hidden relative">
                  
                <img className="aspect-[3/2] rounded-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out object-cover md:h-[50%] md:w-[50%]  w-[70%] h-[70%] "
                src={`https://image.tmdb.org/t/p/original${selectedtrending.backdrop_path}`}
                alt={selectedtrending.title}/>
              
            </div >
            <div className="flex mt-5 m-auto justify-center max-w-[70%]"
            >{selectedtrending.overview}</div>
            <div className="text-center text-3xl text-red-100 font-[700] mt-5 " >Players</div>
            <div className="flex justify-center">
            <div className="flex items-start flex-col justify-center">
            <div 
            onClick={()=>{
                window.open(`https://dorawatch.one/${ChangeTitle(selectedtrending.title)}`)
            }}
            className="mt-3 flex justify-center items-center gap-3">
                <Popcorn className="" strokeWidth={0.5} />
                <div className="text-center font-Inter elastic"
                
                > Movie Player - DoraWatch</div>
            </div>
            <div 
            onClick={()=>{
                window.open(`https://cineby.gd/movie/${selectedtrending.id}`)
            }}
            className="mt-3 flex justify-center  items-center gap-3">
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