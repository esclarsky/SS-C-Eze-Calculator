import React from 'react'
import {Equation} from 'react-equation'

// Stateless functional component to handle the display and function of previously entered equations in history.

function FormattedEquation({value, onButtonClick}) {

  return (
    <button className="FormattedEquation"onClick={()=>onButtonClick(value)}>
      <Equation value = {value} />
    </button>
  );
}

export default FormattedEquation;
