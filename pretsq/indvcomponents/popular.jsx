import { useQuery } from "@tanstack/react-query"
export default function (){
    const { data , isLoading , error}=useQuery({
        queryKey:["Ind"]

    })
    return(
        <>
        <div>
            H
        </div>

        </>
    )
}