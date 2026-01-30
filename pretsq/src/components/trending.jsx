import { fetchTrending } from "../api/trendingapi";
import { useQuery } from "@tanstack/react-query";
export default function Trending(){
    const { data , }useQuery({
        queryKey:"trending",
        queryFn:()=>{fetchTrending}
    })
    return(

    )
}