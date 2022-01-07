import React from "react";

import movies from "./movieDummyData"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";

const App = () => {

  const savedMovieDataHandler = (enteredMovieData) => {

    const movieData = {
      ...enteredMovieData, 
      id: Math.random()
    }

    movies.push(movieData)
  }
  return (

    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path='/addMovie' element={<AddMovieForm onSavedMovieData={savedMovieDataHandler}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
