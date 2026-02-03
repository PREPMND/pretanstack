import { Routes , Route , useParams} from 'react-router-dom'

import Movie from '../pages/Movie.jsx'
import Favourites from '../pages/Favourites.jsx'
import About from '../pages/About.jsx'

import Popular from '../components/popular.jsx'
import TopRated from '../components/toprated.jsx'
import Trending from '../components/trending.jsx'
import TOPrated from '../pages/toprated.jsx'
import TrendingMovie from '../pages/trendingmovie.jsx'
import { useState } from 'react'
import IndvPopular from '../indvcomponents/indvpopular.jsx'
import IndvToprated from '../indvcomponents/indvtoprated.jsx'
import IndvTrending from '../indvcomponents/indvtrending.jsx'
export default function NavRoutes(props){
    const [selected, setselected] = useState(null)
    const [selectedtoprated, setselectedtoprated] = useState(null)
    const [selectedtrending, setselectedtrending] = useState(null)
    const [selectedglobal , setselectedglobal]=useState(null);

    return(
        <>
        
            <Routes>
                <Route path="/movie" element={<Movie />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/about" element={<About />} />
                <Route path="/toprated" element={<TOPrated/>}/>
                <Route path="/trending" element={<TrendingMovie/>}/>
                <Route path="/popular/:id" element={<IndvPopular selected={selected } setselected={setselected}/>}/>
                <Route path="/toprated/:id" element={<IndvToprated selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated}/>}
                <Route path="/trending/:id" element={<IndvTrending selectedtrending={selectedtrending} setselectedtoprated={setselectedtoprated}/>}
                <Route path="/" element={
                <>
                <div className='thebody'>
                    <Popular selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selected={selected } setselected={setselected} />
                    <TopRated selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} />
                    <Trending selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} />
                </div>
                
                
                </>}/>
            </Routes>

        </>
    )
}