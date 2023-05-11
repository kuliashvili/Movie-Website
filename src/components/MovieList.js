import React from 'react'

export default function MovieList(props) {
  return (
   <>
   {props.movies.map((movie, index) => <div><img src={movie.Poster} alt="movie" /></div>)}
   </>
  )
}
