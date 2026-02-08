import { fetchSearch } from "../api/movies"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
export default function SubSearch(){
    
    return(

        <>
        <div className={` min-w-full`} >
        <div className='bg-neutral-900 pt-2 md:hidden flex w-full'>
            <input type="text" id="search" placeholder=' Search...' className='p-1 py-[4px] bg-neutral-700  ml-12 mx-5 rounded-md text-white
                 '/>
        </div></div>
        <div>
            {data?.slice(0,4).map((movie)=>{

            })}
        </div>

        </>
    )
}