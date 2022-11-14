import React from 'react'

// Stateless functional component to  handle the display and function of the calculator's buttons.

function FunctionButton({value, onButtonClick}) {
  
  return (
    <button className="FunctionButton" onClick={()=>onButtonClick(value)} value={value}>
        {value}
    </button>
  );
}

export default FunctionButton;
