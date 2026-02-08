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
            <div>TOPrated</div>
        </div>
        </>
    )
}