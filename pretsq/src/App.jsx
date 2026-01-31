import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import { BrowserRouter } from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"    
import { useState } from "react"
export default function App(){
    const [movieHovered , setmovieHovered]=useState(false);
    return(
        <>
        <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
           <Navbar/>
           <NavRoutes movieHovered={movieHovered} setmovieHovered={setmovieHovered}/>
           
        </BrowserRouter>
        </QueryClientProvider>
        </>
    )
}