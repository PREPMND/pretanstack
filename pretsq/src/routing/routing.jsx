import { Routes , Route } from 'react-router-dom'

import Movie from '../pages/Movie.jsx'
import Favourites from '../pages/Favourites.jsx'
import About from '../pages/About.jsx'

import Popular from '../components/popular.jsx'
import TopRated from '../components/toprated.jsx'
import Trending from '../components/trending.jsx'
import TOPrated from '../pages/toprated.jsx'
export default function NavRoutes(props){
    const { movieHovered , setmovieHovered }=props;
    return(
        <>
        
            <Routes>
                <Route path="/movie" element={<Movie />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/about" element={<About />} />
                <Route path="/toprated" element={<TOPrated/>}/>
                <Route path="/trending" element={<Treding/>}/>
                <Route path="/" element={
                <>
                <div className='thebody'>
                    <Popular/>
                    <TopRated movieHovered={movieHovered} setmovieHovered={setmovieHovered}/>
                    <Trending movieHovered={movieHovered} setmovieHovered={setmovieHovered}/>
                </div>
                
                
                </>}/>
            </Routes>
    
        </>
    )
}