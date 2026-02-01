import { useQuery } from "@tanstack/react-query"
export default function (){
    const { data , isLoading , error}=useQuery({
        queryKey:["IndPopular"]
        

    })
    return(
        <>
        <div>
            H
        </div>

        </>
    )
}