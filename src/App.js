import "./App.css";
import Calc from "./components/Calc";
import { useState } from "react";
import Display from "./components/Display";

function App() {
  //The parent useState passed up and passed down in between components.
  const [display, setDisplay] = useState("0");

  //Holds the components for the calculator.
  return (
    <div className="containerApp">
      <Display display={display} setDisplay={setDisplay} />
      <Calc display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
