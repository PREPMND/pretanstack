import { useQuery } from "@tanstack/react-query"
export default function (){
    const { data , isLoading , error}=useQuery({
        queryKey:["IndPopular"],
        queryFn:()=>

    })
    return(
        <>
        <div>
            H
        </div>

        </>
    )
}