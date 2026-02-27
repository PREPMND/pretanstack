import React from 'react'
import { GridLayout } from '../App'
const Proto = (props) => {
  return (
    <div>
      {GridLayout(props.navigate, props.data, props.setselected, props.movieHovered, props.setmovieHovered, props.setselected, props.favourites, props.setfavourites, props.heart, props.setheart)}
    </div>
  )
}

export default Proto
