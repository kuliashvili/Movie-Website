import React from 'react'
import AddFavourites from './AddFavourites'

export default function MovieList(props) {

  const FavouriteComponent = props.FavouriteComponent
  return (
   <>
   {props.movies.map((movie, index) => 
   <div className='item'>
    <img className='item-img' src={movie.Poster} alt="movie" />
    <div className='overlay'>
    < FavouriteComponent />
    </div>
    </div>)}
   </>
  )
}
