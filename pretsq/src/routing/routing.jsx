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
import { Context } from './context.jsx'
export default function NavRoutes(props){
    const [selected, setselected] = useState(null)
    const [selectedglobal , setselectedglobal]=useState(null);
    const { id }=useParams();
    return(
        <>
        <Context.Provider value={{selected , setselected}}>
            <Routes>
                <Route path="/movie" element={<Movie />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/about" element={<About />} />
                <Route path="/toprated" element={<TOPrated/>}/>
                <Route path="/trending" element={<TrendingMovie/>}/>
                <Route path="/popular/:id" element={<IndvPopular/>}/>
                <Route path="/" element={
                <>
                <div className='thebody'>
                    <Popular selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selected={selected } setselected={setselected} />
                    <TopRated selectedglobal={selectedglobal} setselectedglobal={setselectedglobal}/>
                    <Trending selectedglobal={selectedglobal} setselectedglobal={setselectedglobal}/>
                </div>
                
                
                </>}/>
            </Routes>
        </Context.Provider>
        </>
    )
}