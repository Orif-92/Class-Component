import React from 'react';

const MovieCard = ({ name, imgURL, liked, year }) => {
  return (
    <div className="card">
      <div className="top">
        <h2>{name}</h2>
        <img src={imgURL} alt={name} />
      </div>
      <div className="bottom">
        <p>{liked}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
