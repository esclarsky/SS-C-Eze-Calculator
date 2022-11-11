import React from 'react'
import {Equation} from 'react-equation'

function FormattedEquation({value, onButtonClick}) {


  return (
    <button className="FormattedEquation"onClick={()=>onButtonClick(value)}>
      <Equation value = {value} />
    </button>
  );
}

export default FormattedEquation;
