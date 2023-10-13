import React, { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard";

const App = () => {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8b1d8013";
  // useEffect uses a callback func (() => {API})

  const allMovies = async function () {
    let res = await fetch(`http://www.omdbapi.com/?apikey=8b1d8013&s=movie`);
    let data = await res.json();
    searchMovies(data.Search);
    // if (movies == []) {
    //   <>
    //     <div className="container">
    //       {movies.map((movie) => (
    //         <MovieCard movie={movie}></MovieCard>
    //       ))}
    //     </div>
    //   </>;
    // }
  };

  const searchMovies = async function (title) {
    let res = await fetch(`${API_URL}&s=${title}`);
    let data = await res.json();
    // sets the movies into a list of movies
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchs);
  }, []);

  let [movies, setMovies] = useState([]);

  let [searchs, setSearches] = useState("");

  return (
    <div className="app">
      <h1>Film Search</h1>
      <div className="search">
        <input
          placeholder="Search movies..."
          value={searchs}
          onChange={(e) => {
            setSearches(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchs);
          }}
        />
      </div>
      {/* makes sure the movies array is defined safetly so it can read its length */}
      {movies?.length > 0 ? (
        <div className="conatainer">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

// Allows compounets to be exported and used in other files such as index.js
export default App;
