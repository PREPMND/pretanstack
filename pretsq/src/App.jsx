import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import { BrowserRouter } from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"    
export default function App(){
    return(
        <>
        
        <BrowserRouter>
           <Navbar/>
           <NavRoutes/>
        </BrowserRouter>
        </>
    )
}