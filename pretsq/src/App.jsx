import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import Popular from "./components/popular"
import { BrowserRouter } from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"    
export default function App(){
    return(
        <>
        <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
           <Navbar/>
           <NavRoutes/>
           <Popular/>
        </BrowserRouter>
        </QueryClientProvider>
        </>
    )
}