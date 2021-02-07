import React from 'react';

const Movie = ({ Title, Poster, Year, imdbID }) => {
  return (
    <div className='movie'>
      <img
        src={
          Poster !== 'N/A'
            ? Poster
            : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        }
        alt={Title}
      ></img>
      <div className='movie-name'>
        <h3>
          {Title} ({Year})
        </h3>
      </div>
    </div>
  );
};

export default Movie;
