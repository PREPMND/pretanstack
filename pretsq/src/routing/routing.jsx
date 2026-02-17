import { Routes, Route } from 'react-router-dom'

import Movie from '../pages/Movie.jsx'
import Favourites from '../pages/Favourites.jsx'
import About from '../pages/About.jsx'

import Popular from '../components/popular.jsx'
import TopRated from '../components/toprated.jsx'
import Trending from '../components/trending.jsx'
import TOPrated from '../pages/toprated.jsx'
import TrendingMovie from '../pages/trendingmovie.jsx'

import IndvPopular from '../indvcomponents/indvpopular.jsx'
import IndvToprated from '../indvcomponents/indvtoprated.jsx'
import IndvTrending from '../indvcomponents/indvtrending.jsx'
import SubSearch from '../components/subsearch.jsx'
import Error from '../indvcomponents/error.jsx'
import Layout from './layout.jsx'
export default function NavRoutes(props) {
    const { selected, setselected } = props;
    const { selectedtoprated, setselectedtoprated } = props
    const { selectedtrending, setselectedtrending } = props;
    const { selectedglobal, setselectedglobal } = props;
    const {search , setsearch}=props;
    return (
        <>

            <Routes>
                <Route element={<Layout selected={selected} setselected={setselected} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} />}>
                    <Route path="/movie" element={<>
                    <div className='h-full bg-neutral-900'>
                    <Movie setselectedglobal={setselectedglobal}/></div>

                    </>} />
                    <Route path="/favourites" element={<Favourites />} />
                    
                    <Route path="/toprated" element={<TOPrated search={search} setsearch={setsearch} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} />} />
                    <Route path="/trending" element={<TrendingMovie setselectedglobal={setselectedglobal} />} />
                    <Route path="/popular/:id" element={<IndvPopular selected={selected} setselected={setselected} />} />
                    <Route path="/toprated/:id" element={<IndvToprated selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} />} />
                    <Route path="/trending/:id" element={<IndvTrending selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} />} />
                    
                    <Route path="/" element={
                        <>
                            <div className='thebody'>
                                
                                <Popular selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selected={selected} setselected={setselected} />
                                <Trending selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} />
                                <TopRated selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} />

                            </div>


                        </>} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />

            </Routes>

        </>
    )
}