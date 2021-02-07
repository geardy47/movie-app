import React from 'react';

const Movie = ({ Title, Poster, Year, imdbID }) => {
  return (
    <div className='movie'>
      <img src={Poster} alt={Title}></img>
      <div className='movie-name'>
        <h3>
          {Title} ({Year})
        </h3>
      </div>
    </div>
  );
};

export default Movie;
