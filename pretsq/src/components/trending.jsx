import { fetchTrending } from "../api/trendingapi.jsx";
import { useQuery } from "@tanstack/react-query";
export default function Trending(){
    const { data , isPending , error }=useQuery({
        queryKey:["trending"],
        queryFn:()=>fetchTrending()
    })
    console.log(data)
    if (isPending) return (
    <>
        <p className='h-screen flex justify-center items-center '>Loading...</p>
    </>)
    if (error) {
        console.log(error);
        return <p>Something went wrong</p>;
    }
    return(
       <div>
        <div>
           { data?.map(){
            <div>
           }}
        </div>
  
       </div>
    )
}