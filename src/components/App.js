import React from 'react';
import MovieCard from './MovieCard';
import movies from '../movies';

const App = () => {
  return (
    <div className="container">
      <div className="heading">🎞️ My movies</div>

      <div className="grid">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.name}
            imgURL={movie.imgURL}
            liked={movie.liked}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

