import React from "react"

import movies from "../movieDummyData"
import MoviePoster from "./MoviePoster"
import "./MovieList.css"

const MovieList = (props) => {

    console.log(movies);
    return (
        <div className="gallery">
           <MoviePoster />
        </div>
    )
}

export default MovieList;