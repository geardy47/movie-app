import React, { useState, useEffect } from 'react';
import './index.css';
import Movie from './compenents/Movies';

const API_KEY = '&apikey=e1cb94d0';
const FEATURED_MOVIES = 'http://www.omdbapi.com/?s=man';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_MOVIES + API_KEY)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      });
  }, []);

  return (
    <div className='App'>
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)}
    </div>
  );
}

export default App;
