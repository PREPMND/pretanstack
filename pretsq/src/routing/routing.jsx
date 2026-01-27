import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Movie from '../pages/Movie.jsx'
import Series from '../pages/Favourites.jsx'
import About from '../pages/About.jsx'
export default function NavRoutes(){
    return(
        <>
        
            <Routes>
                <Route path="/movie" element={<Movie />} />
                <Route path="/series" element={<Favour />} />
                <Route path="/about" element={<About />} />
            </Routes>
    
        </>
    )
}