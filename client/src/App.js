import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from "./Movies/MovieList.js";
import Movie from "./Movies/Movie.js";
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);


  const addToSavedList = newMovie => {
    const exists = savedList.filter(movie => movie.id === newMovie.id)
    !exists.length && setSavedList([...savedList, newMovie])
  }


  return (
    <div>
      <SavedList savedList={savedList} clearAll={setSavedList} />
      <Route exact path='/'>
        <MovieList />
      </Route>
      <Route path='/movies/:id'>
        <Movie savedList={savedList} setSavedList={setSavedList} addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
