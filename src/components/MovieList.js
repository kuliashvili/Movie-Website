import React from 'react'

export default function MovieList(props) {
  return (
   <>
   {props.movies.map((movie, index) => <div className='item'><img className='item-img' src={movie.Poster} alt="movie" /></div>)}
   </>
  )
}
