import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import { BrowserRouter } from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"    
import { useState } from "react"
import SubSearch from "./components/subsearch"
export default function App(){
    const [selectedtoprated,setselectedtoprated]=useState(null)
    const [selectedtrending, setselectedtrending] = useState(null)
    const [selected, setselected] = useState(null)
    const [selectedglobal , setselectedglobal]=useState(null);
    const [searchnav , setsearchnav ]=useState(null);
    const [page,setpage]=useState(null);
    return(
        <>
        <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
           
           
           <NavRoutes page={page} setpage={setpage} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} selected={selected } setselected={setselected}/>
           
        </BrowserRouter>
        </QueryClientProvider>
        </>
    )
}
export function ChangeTitle(moviename){
    return moviename
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g,"")
    .replace(/\s+/g,"-")
    .replace(/-+/g,"-");


}