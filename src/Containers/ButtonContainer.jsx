import React from 'react'
import FunctionButton from "../Components/FunctionButton";

// This container holds all of the default buttons for the calculator. It receives button values and the onButtonClick function from the Calculator
// and passes them respectively to the individual FunctionButton components.
function ButtonContainer({buttonValues, onButtonClick}) {

  const buttons = buttonValues.map((btn, idx) => {
    return (
      <FunctionButton key={idx} value={btn} onButtonClick={onButtonClick}/>
    );
  });
  

  return (
    <div className="ButtonContainer">
      {buttons}
    </div>
  );
}

export default ButtonContainer;
