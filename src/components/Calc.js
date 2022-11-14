import React, { useState } from "react";

function Calc() {
  let holdFirst = "";
  let holdSecond = "";

  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [operator, setOperator] = useState("");

  function setValue(value) {
    if (operator == "") {
      holdFirst += value;
      console.log("firstValue: " + holdFirst);
    } else if (operator) {
      holdSecond += value;
      console.log("secondValue: " + holdSecond);
    }
  }

  function calculation() {
    setFirstValue(parseFloat(holdFirst));
    setSecondValue(parseFloat(holdSecond));
    if (operator === "+") {
      return Number(firstValue) + Number(secondValue);
    } else if (operator === "-") {
      return firstValue - secondValue;
    } else if (operator === "*") {
      return firstValue * secondValue;
    } else if (operator === "/") {
      return firstValue / secondValue;
    }
  }

  function reset() {
    setFirstValue(null);
    setSecondValue(null);
    setOperator("");
  }

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value="" disabled />

      <div className="calculator-keys">
        <button
          type="button"
          className="operator"
          value="+"
          onClick={(e) => setOperator(e.target.value)}
        >
          +
        </button>
        <button
          type="button"
          className="operator"
          value="-"
          onClick={(e) => setOperator(e.target.value)}
        >
          -
        </button>
        <button
          type="button"
          className="operator"
          value="*"
          onClick={(e) => setOperator(e.target.value)}
        >
          &times;
        </button>
        <button
          type="button"
          className="operator"
          value="/"
          onClick={(e) => setOperator(e.target.value)}
        >
          &divide;
        </button>

        <button
          type="button"
          value="7"
          onClick={(e) => setValue(e.target.value)}
        >
          7
        </button>
        <button
          type="button"
          value="8"
          onClick={(e) => setValue(e.target.value)}
        >
          8
        </button>
        <button
          type="button"
          value="9"
          onClick={(e) => setValue(e.target.value)}
        >
          9
        </button>

        <button
          type="button"
          value="4"
          onClick={(e) => setValue(e.target.value)}
        >
          4
        </button>
        <button
          type="button"
          value="5"
          onClick={(e) => setValue(e.target.value)}
        >
          5
        </button>
        <button
          type="button"
          value="6"
          onClick={(e) => setValue(e.target.value)}
        >
          6
        </button>

        <button
          type="button"
          value="1"
          onClick={(e) => setValue(e.target.value)}
        >
          1
        </button>
        <button
          type="button"
          value="2"
          onClick={(e) => setValue(e.target.value)}
        >
          2
        </button>
        <button
          type="button"
          value="3"
          onClick={(e) => setValue(e.target.value)}
        >
          3
        </button>

        <button
          type="button"
          value="0"
          onClick={(e) => setValue(e.target.value)}
        >
          0
        </button>
        <button type="button" className="decimal" value=".">
          .
        </button>
        <button type="button" className="all-clear" value="all-clear">
          AC
        </button>
        <button
          type="button"
          className="operator"
          id="equal-sign"
          value="="
          onClick={() => {
            console.log("Your calculation is: " + calculation());
            reset();
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calc;
