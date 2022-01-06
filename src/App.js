import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path='/addMovie' element={<AddMovieForm />}/>
      </Routes>
    </Router>
  );
};

export default App;
