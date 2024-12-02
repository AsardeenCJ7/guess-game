import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Result from "./Result";
const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {
  // Math.random() generates a random number between 0 and 1 Ex: 0.999, 0.254, 0.111 Like
  // Math.random() does not take any arguments. It ignores the (Math.random() * 10) part.   10 * 0.986 = floor (9.86) = 9
  const [term, setTerm] = useState(0);

  function handleInput(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">
          Guess the Number between 1 to 10 <br />{" "}
          <span>
            Answer is : <span style={{ color: "orange" }}>{secretNum} </span>
          </span>
          (Testing Purpose)
        </label>
        <input id="term" name="term" type="text" onChange={handleInput}></input>
        <Result secretNum={secretNum} term={term} />
      </div>
    </div>
  );
}

export default App;
