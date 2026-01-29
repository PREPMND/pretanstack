import { Routes , Route } from 'react-router-dom'

import Movie from '../pages/Movie.jsx'
import Favourites from '../pages/Favourites.jsx'
import About from '../pages/About.jsx'
import TrendingMovie from '../pages/trending.jsx'
import Popular from '../components/popular.jsx'
export default function NavRoutes(){
    return(
        <>
        
            <Routes>
                <Route path="/movie" element={<Movie />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/about" element={<About />} />
                <Route path="/trending/movies" element={<TrendingMovie />}></Route>
                <Route path="/" element={<>
                <Popular/></>}/>
            </Routes>
    
        </>
    )
}