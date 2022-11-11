import React from 'react'
import EquationEditor from "../Components/EquationEditor";
import ButtonContainer from './ButtonContainer';

const buttonValues = ['rand', 'mod', 'clr', '←',
  '^','(',')','*',
  '7', '8', '9', '/',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '0', '.', '='
]

function EquationContainer() {
  return (
    <div className="EquationContainer">
        <EquationEditor/>
        <ButtonContainer buttonValues={buttonValues}/>
    </div>
  );
}

export default EquationContainer;
