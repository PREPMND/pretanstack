import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "../api/movies";
export default function TOPrated(props){
    const { search , setsearch}=props;
        const{ data , isLoading , error}=useQuery({
            queryKey:["search",search],
            queryFn:()=>fetchSearch(search),
            enabled:search.length>0,
        })
        const sortedData = data ? [...data].sort((a, b) => b.popularity - a.popularity) : [];
    return(
        
        <>
        <div>
            {data && (<div className={` w-[400px] z-999 flex justify-center absolute top-full text-blue-500 font-bold text-lg `}>
            {sortedData?.slice(0,4).map((movie)=>{
                <div key={movie.id}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <h2>{movie.title}</h2>
                </div>

            })}
            <div>TOPrated</div>
        </div>
        </>
    )
}