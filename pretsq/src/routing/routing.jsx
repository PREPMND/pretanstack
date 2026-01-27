import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Movie from '../pages/Movie.jsx'
import Series from '../pages/Series.jsx'
import About from '../pages/About.jsx'
export default function NavRoutes(){
    return(
        <>
        
            <Routes>
                <Route path="/movie" element={<Movie />} />
                <Route path="/series" element={<Series />} />
                <Route path="/about" element={<About />} />
            </Routes>
    
        </>
    )
}