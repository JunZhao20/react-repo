import React, { useEffect, useState } from "react";

const App = () => {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8b1d8013";
  // useEffect uses a callback func (() => {API})

  const searchMovies = async function (title) {
    let res = await fetch(`${API_URL}&s=${title}`);
    let data = await res.json();
    console.log(data.Search);
  };
  let apiKey = useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return <h1>App</h1>;
};

// Allows compounets to be exported and used in other files such as index.js
export default App;
