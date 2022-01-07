import React, { useState }from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./AddMovieForm.css";
const AddMovieForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredDirector, setEnteredDirector] = useState("")
  const [enteredPoster, setEnteredPoster] = useState("")
  const [enteredCast, setEnteredCast] = useState({value: ""})
  const [enteredKeywords, setEnteredKeywords] = useState({value: ""})
  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value)
  };

  const directorChangeHandler = e => {
    setEnteredDirector(e.target.value)
  };

  const posterImageChangeHandler = e => {
    setEnteredPoster(e.target.value)
  };

  const castChangeHandler = e => {
    e.stopPropagation()
    setEnteredCast({
      ...enteredCast,
      value: e.target.value
    })
    console.log(enteredCast);
  };

  const keywordsChangeHandler = e => {
    setEnteredKeywords(prevState => {
      return {...prevState, value: e.target.value}
    })
  };

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form has been submitted");

    let newMovieEntry = {
      title: enteredTitle,
      director: enteredDirector,
      cast: enteredCast,
      image: enteredPoster,
      keyWords: enteredKeywords,
    }

    setEnteredDirector("")
    setEnteredKeywords({value: ""})
    setEnteredPoster("")
    setEnteredTitle("")
    setEnteredCast({value: ""})

    console.log(newMovieEntry);
  }

  return (
    <div className="add-movie_form">
      <form onSubmit={submitHandler}>
        <div>
          <input placeholder="Title of Movie" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div>
          <input placeholder="Director" onChange={directorChangeHandler} value={enteredDirector}/>
        </div>
        <div>
          <input
            placeholder="Poster image"
            onChange={posterImageChangeHandler}
            value={enteredPoster}
          />
        </div>
        <div>
          <textarea placeholder="Cast members" onChange={castChangeHandler} value={enteredCast.value}></textarea>
          {/* <input placeholder="Cast" onChange={castChangeHandler} value={enteredCast}/> */}
        </div>
        <div>
        <textarea placeholder="Keywords" onChange={keywordsChangeHandler} value={enteredKeywords.value} />
          {/* <input placeholder="Keywords" onChange={keywordsChangeHandler} value={enteredKeywords}/> */}
        </div>
        <div>
          <button type="submit">Create new movie</button>
        </div>
      </form>
    </div>

    // <div>
    // <Form>
    //   <Form.Group className="mb-3">
    //     <Form.Control type="text" placeholder="Title of movie" />
    //     <Form.Group />
    //     <br />
    //     <Form.Group className="mb-3" />
    //     <Form.Control type="text" placeholder="Director" />
    //   </Form.Group>
    // </Form>
    // <a href="/">Main Page</a>
    // </div>
  );
};

export default AddMovieForm;
