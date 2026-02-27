import React from 'react'
import { GridLayout } from '../App'
import { useQuery } from "@tanstack/react-query"
const Proto = (props) => {
    const { data, isLoading, error } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchPopularMovies(),
    staleTime:0,
    refetchOnMount:true,
    refetchOnWindowFocus:true,
  });
  return (
    <div>
      {GridLayout(props.navigate, props.data, props.setselected, props.movieHovered, props.setmovieHovered, props.setselected, props.selected , props.favourites, props.setfavourites, props.heart, props.setheart)}
    </div>
  )
}

export default Proto
