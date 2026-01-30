import { fetchTrending } from "../api/trendingapi";
import { useQuery } from "@tanstack/react-query";
export default function Trending(){
    const { data , isPending , error }=useQuery({
        queryKey:"trending",
        queryFn:()=>{fetchTrending}
    })
    return(
       <div>
        
       </div>
    )
}