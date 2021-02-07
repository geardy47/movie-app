import React, { useState, useEffect } from 'react';
import './index.css';
import Movie from './compenents/Movies';

const API_KEY = '&apikey=e1cb94d0';
const FEATURED_MOVIES = 'http://www.omdbapi.com/?s=man';
const SEARCH_MOVIES = 'http://www.omdbapi.com/?s=';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Search);
        setMovies(data.Search);
      });
  };

  useEffect(() => {
    getMovies(FEATURED_MOVIES + API_KEY);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_MOVIES + searchTerm + API_KEY);

      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='App'>
      <header>
        <h3>Movie App</h3>

        <form onSubmit={handleOnSubmit}>
          <input
            className='search'
            type='search'
            placeholder='Search'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className='movie-container'>
        {movies !== undefined ? (
          movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </div>
    </div>
  );
}

export default App;
