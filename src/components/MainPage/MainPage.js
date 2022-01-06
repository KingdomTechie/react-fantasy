import React from "react";

import MovieList from "../MovieList";
import "../../App.css";

const MainPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>My Fantasy Movie Database</p>
      </header>
      <div className="gallery">
        <MovieList />
      </div>
      <a href="/addMovie">Add Movie</a>
    </div>
  );
};

export default MainPage;
