import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import { BrowserRouter } from "react-router-dom"
import {}
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