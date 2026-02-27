import React from 'react'
import { GridLayout } from '../App'
import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from '../api/apiextra'
import { Heart } from 'lucide-react'
import { useState } from 'react'
const Proto = (props) => {
    const { data, isLoading, error } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchPopularMovies(),
    staleTime:0,
    refetchOnMount:true,
    refetchOnWindowFocus:true,
  });
  const { selected , setselected }=props;
  const {favourites, setfavourites} = props;
  const {heart, setheart} = props;
  const [movieHovered , setmovieHovered]=useState(null);
  return (
    <div>
      {GridLayout(props.navigate, data, setselected,  movieHovered, setmovieHovered, setselected, selected , favourites, setfavourites, heart, setheart)}
    </div>
  )
}

export default Proto
