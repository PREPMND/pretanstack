import { BrowserRouter , Routes , Route } from 'react-router-dom'
export default function NavRoutes(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/movie" element={<Movie />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}