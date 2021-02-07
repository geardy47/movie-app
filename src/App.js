import React, { useState, useEffect } from 'react';
import './index.css';
import Movie from './compenents/Movies';
import Header from './compenents/Header';
import Footer from './compenents/Footer';

const API_KEY = '&apikey=e1cb94d0';
const FEATURED_MOVIES = 'http://www.omdbapi.com/?s=man';
const SEARCH_MOVIES = 'http://www.omdbapi.com/?s=';

function App() {
  const [movies, setMovies] = useState([]);

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

  const [searchTerm, setSearchTerm] = useState('');

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
      <Header
        name='Movie App'
        value={searchTerm}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      ></Header>
      <div className='movie-container'>
        {movies !== undefined ? (
          movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </div>
      <Footer name='© Copyright Movie App by Genta Shandi 2021'></Footer>
    </div>
  );
}

export default App;
