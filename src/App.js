import "./App.css";
import Calc from "./components/Calc";
import { useState } from "react";
import Display from "./components/Display";

function App() {
  const [display, setDisplay] = useState("0");

  return (
    <div className="containerApp">
      <Display display={display} setDisplay={setDisplay} />
      <Calc display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
