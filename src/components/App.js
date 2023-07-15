import React from 'react';
import MovieCard from './MovieCard';
import movies from '../movies';

const App = () => {
  return (
    <div>
      <div className="heading">🎞️ My movies</div>

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
  );
};

export default App;

