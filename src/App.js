import React, {useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {

  const [movies, setMovies] = useState([
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      Year: '1997',
      imdbID: 'tt0076759',
      Type: 'movie',
      Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    },
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      Year: '1997',
      imdbID: 'tt0076759',
      Type: 'movie',
      Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    },
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      Year: '1997',
      imdbID: 'tt0076759',
      Type: 'movie',
      Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    }
  ])

  const getMovieRecuest = () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=7edb1dc9"
  }
  return (
    <div className="App">
     
     <div className='row'>
    <MovieList movies = {movies} />
     </div>
    
    </div>
  );
}

export default App;
