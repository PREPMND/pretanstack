import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import { BrowserRouter } from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"    
import { useState } from "react"
export default function App(){
    
    return(
        <>
        <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
           <Navbar/>
           <NavRoutes />
           
        </BrowserRouter>
        </QueryClientProvider>
        </>
    )
}
export function ChangeTitle(moviename){
    return moviename
    .toLowercase()
    .replace(/[^a-z0-9\s-]/g,"")
    .replace(/\s+/g,"-")
    .replace(//)


}