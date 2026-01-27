import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"

export default function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <NavRoutes/>
        </>
    )
}