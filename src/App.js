import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  // this allows react to render the new changes of current counter by using setCounter
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default App;
