import React, { useEffect, useState } from "react";

function Calc(props) {
  //useStates.
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState("");
  const [decimalOne, setDecimalOne] = useState(0);
  const [decimalTwo, setDecimalTwo] = useState(0);

  //Debugging for firstValue change.
  useEffect(() => {
    console.log(firstValue);
    props.setDisplay(firstValue);
  }, [firstValue]);

  //Debugging for secondValue change.
  useEffect(() => {
    console.log(secondValue);
    props.setDisplay(secondValue);
  }, [secondValue]);

  //Anything before the operator is the "first value." This will continue to be set in the
  //firstValue setter of the useState. After the operator, it will add onto the secondValue's setter.
  function setValue(value) {
    if (operator === "") {
      if (value === "." && decimalOne > 0) {
        console.log("Ignore decimal in first. Do nothing.");
      } else if (value === "." && decimalOne === 0) {
        console.log("Decimal in first seen.");
        setFirstValue(firstValue + value);
        setDecimalOne(1);
      } else {
        console.log("Non decimal value.");
        setFirstValue(firstValue + value);
      }
    }

    if (operator) {
      if (value === "." && decimalTwo > 0) {
        console.log("Ignore decimal in second. Do nothing.");
      } else if (value === "." && decimalTwo === 0) {
        console.log("Decimal in second seen.");
        setSecondValue(secondValue + value);
        setDecimalTwo(1);
      } else {
        console.log("Non decimal value.");
        setSecondValue(secondValue + value);
      }
    }
  }

  //Called when Equal is pressed.
  function calculation() {
    console.log("first value: " + firstValue);
    console.log("second value: " + secondValue);
    console.log("operator: " + operator);
    if (operator === "+") {
      return Number(firstValue) + Number(secondValue);
    } else if (operator === "-") {
      return Number(firstValue) - Number(secondValue);
    } else if (operator === "*") {
      return Number(firstValue) * Number(secondValue);
    } else if (operator === "/") {
      return Number(firstValue) / Number(secondValue);
    } else {
      return Number(firstValue);
    }
  }

  //Used for the all clear button.
  function reset() {
    setFirstValue("");
    setSecondValue("");
    setOperator("");
    console.log("Values reset!");
  }

  //On click functions need arrow functions, otherwise they will infinitely rerender,
  //making the application unusable.
  return (
    <div className="calculator">
      {/* <input
        type="text"
        className="calculator-screen"
        value={calculation()}
        disabled
      /> */}
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
        <button
          type="button"
          className="decimal"
          value="."
          onClick={(e) => setValue(e.target.value)}
        >
          .
        </button>
        <button type="button" className="all-clear" onClick={() => reset()}>
          AC
        </button>
        <button
          type="button"
          className="operator"
          id="equal-sign"
          value="="
          onClick={() => {
            console.log("Your calculation is: " + calculation());
            setSecondValue("");
            setFirstValue(calculation());
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calc;
