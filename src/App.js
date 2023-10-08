import React, { useEffect, useState } from "react";

const App = () => {
  // useEffect uses a callback func (() => {API})
  let apiKey = useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=783da78e&")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <h1>App</h1>;
};

// Allows compounets to be exported and used in other files such as index.js
export default App;
