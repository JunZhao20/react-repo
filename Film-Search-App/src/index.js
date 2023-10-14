import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./App.js";

// This allows react to renders and updates the compounants and contents in the App.js file to a div with the id of root.
// ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
