import { BrowserRouter , Routes , Route } from 'react-router-dom'
export default function NavRoutes(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}