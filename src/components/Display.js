import React, { useEffect, useState } from "react";

//Obtains the props set from Calc.js to display.
function Display(props) {
  console.log("Props obtained: " + props.display);
  return (
    <input
      type="text"
      className="calculator-screen"
      value={props.display}
      disabled
    />
  );
}

export default Display;
