import React from "react";

import movies from "../movieDummyData";
import "./MoviePoster.css";

const MoviePoster = (props) => {
  console.log(movies);

  let moviePosters = movies.map((movie) => {
    return (
      <a key={movie.id} href="">
        <div className="card-image">
          <figure className="image">
            <img src={movie.image} alt={movie.title} />
          </figure>
        </div>
        <div className="card-header">
          <p className="card-header-title">{movie.title}</p>
        </div>
      </a>
    );
  });

  return moviePosters;
};

export default MoviePoster;
