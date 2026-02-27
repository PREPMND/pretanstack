import {GridLayout } from '../indvcomponents/functions'
import { useNavigate} from "react-router-dom"
import { fetchPopularMovies } from '../api/apiextra'
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
  const { selected , setselected }=props;
  const {favourites, setfavourites} = props;
  const {heart, setheart} = props;
  const {selectedglobal, setselectedglobal} = props;
  const {setselectedtoprated, selectedtoprated} = props;
  const {selectedtrending, setselectedtrending} = props;
  const {page , setpage}=props;
  const [movieHovered , setmovieHovered]=useState(null);
  const navigate =useNavigate();

  return (
    <div>
      
      {GridLayout(navigate, data, setselected,  movieHovered, setmovieHovered, setselected, selected , favourites, setfavourites, heart, setheart)}
      <div>
        {GridLayout(navigate, data, setselectedtoprated,  movieHovered, setmovieHovered, favourites, setfavourites, heart, setheart)}
      </div>
    </div>
    
    
  )
}

export default Proto
