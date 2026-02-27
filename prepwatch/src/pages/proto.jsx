import {GridLayout } from '../indvcomponents/functions'
import { useNavigate} from "react-router-dom"
import { fetchPopularMovies ,fetchTrending ,fetchTopRated} from '../api/apiextra'
import { useQuery } from '@tanstack/react-query'

import { useState } from 'react'
const Proto = (props) => {
    const { data } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchPopularMovies(),
    staleTime:0,
    refetchOnMount:true,
    refetchOnWindowFocus:true,
  });
  const {data:trending} = useQuery({
    queryKey: ["trending"],
    queryFn: () => fetchTrending(),
    refetchOnMount: true,
    refetchOnWindowFocus:true,
  })
  const {data:toprated} = useQuery({
    queryKey: ["top-rated"],
    queryFn: () => fetchTopRated(), 
    refetchOnMount: true,
    refetchOnWindowFocus:true,
  })
  const { selected , setselected }=props;
  const {favourites, setfavourites} = props;
  const {heart, setheart} = props;
  const {selectedglobal, setselectedglobal} = props;
  const {setselectedtoprated, selectedtoprated} = props;
  const {selectedtrending, setselectedtrending} = props;
  const {page , setpage}=props;
  const [movieHovered, setmovieHovered] = useState(null);
  const navigate =useNavigate();

  return (
    <div className=''>
    <div
    >
    <button onClick={() => navigate("/movie")}
            className="px-3 font-Inter tracking-wide text-[13px] md:text-[14px]">Popular Movies</button>
          <button
            className="ml-3 mt-2 m-auto md:text-[15px] font-[600] text-[13px] bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-2 py-1 rounded active:scale-95">More Popular Movies
    </button>
        
    {GridLayout(navigate, data, setselected,  movieHovered, setmovieHovered, setselected, selected , favourites, setfavourites, heart, setheart)}</div>
    <div>
    {GridLayout(navigate, trending, setselectedtrending,  movieHovered, setmovieHovered, favourites, setfavourites, heart, setheart)}</div>
    {GridLayout(navigate, toprated, setselectedtoprated,  movieHovered, setmovieHovered, favourites, setfavourites, heart, setheart)}
    </div>
    
    
  )
}

export default Proto
