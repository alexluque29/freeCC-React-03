import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import logo from "./images/freecodecamp.svg";
import Clear from "./components/Clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("No values to calculate");
    }
  };

  return (
    <div className="App">
      <div className="img-container">
        <img className="image" src={logo} alt="logo" />
      </div>
      <div className="main-container">
        <Screen input={input} />
        <div className="row">
          <Button onInput={addInput}>1</Button>
          <Button onInput={addInput}>2</Button>
          <Button onInput={addInput}>3</Button>
          <Button onInput={addInput}>+</Button>
        </div>
        <div className="row">
          <Button onInput={addInput}>4</Button>
          <Button onInput={addInput}>5</Button>
          <Button onInput={addInput}>6</Button>
          <Button onInput={addInput}>-</Button>
        </div>
        <div className="row">
          <Button onInput={addInput}>7</Button>
          <Button onInput={addInput}>8</Button>
          <Button onInput={addInput}>9</Button>
          <Button onInput={addInput}>*</Button>
        </div>
        <div className="row">
          <Button onInput={calculate}>=</Button>
          <Button onInput={addInput}>0</Button>
          <Button onInput={addInput}>.</Button>
          <Button onInput={addInput}>/</Button>
        </div>
        <div className="row">
          <Clear onClear={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
