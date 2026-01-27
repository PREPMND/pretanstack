import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import { BrowserRouter } from "react-router-dom"
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