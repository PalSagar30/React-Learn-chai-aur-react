import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    // console.log("value added", Math.floor(Math.random() *10));
    console.log("click", counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    // console.log("value added", Math.floor(Math.random() *10));
    // console.log("click", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Add value:- {counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value:- {counter}</button>
    </>
  );
}

export default App;
