import React, {useState} from 'react'
import {resolve} from 'equation-resolver'
import {parse} from 'equation-parser'
import EquationEditor from '../Components/EquationEditor';
import ButtonContainer from './ButtonContainer';
import HistoryContainer from "./HistoryContainer";

// TODO: validate parantheses before evaluating equation

const buttonValues = ['+-', 'rand', 'clr', '←',
  '^','(',')','*',
  '7', '8', '9', '/',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '0', '.', '='
]

const operators = {
  '+': true,
  '-': true,
  '*': true,
  '/': true,
  '!': true,
  '^': true,
}
const equationHistory = [];

function Calculator() {

  const [currentEquation, setCurrentEquation] = useState('0')
  const [evaluated, setEvaluated] = useState(true);

  

  // Click handlers for buttons that aren't directly related to building the equation
  const equalsClickHandler = () => {
    if (currentEquation.length===0){return}
    equationHistory.push(currentEquation);
    setEvaluated(true);
    return setCurrentEquation(`${resolve(parse(currentEquation)).value}`)
  }
  const clrClickHandler = () => {return setCurrentEquation('')}
  const backspaceClickHandler = () => {return setCurrentEquation(currentEquation.slice(0, -1))}
  const randClickHandler = () => {return setCurrentEquation(`${Math.round(Math.random()*100)}`)}

  // Click handler for all buttons
  // Switch cases address the special cases of the buttons handled above
  const onButtonClick = (value) => {
    switch (value) {
      case '=':
        return equalsClickHandler();
      case 'clr':
        return clrClickHandler();
      case '←':
        return backspaceClickHandler();
      case 'rand':
        return randClickHandler();
      case '+-':
        return setCurrentEquation(`${currentEquation * -1}`)
      // Special case for decimal points. Need to make sure there isn't already a decimal point in the current number 
      case '.':
        if (currentEquation.slice(-1) === '.') {
          return
        }
        for (let i=currentEquation.length-1; i>=0; i--) {
          if (currentEquation[i] === '.') {
            return
          }
          if (operators[currentEquation[i]] || currentEquation[i] === '(' || currentEquation[i] === ')') {
            break
          }
        }
        return setCurrentEquation(currentEquation + `.`)

      // Default case for all other buttons to build the equation
      // Special cases for operators and parentheses to make sure the equation is valid
      // Note: this is not a full validation of the equation, notably it doesn't check for balanced parentheses. This will be handled in the equalsClickHandler 
      default:
        if (operators[value]) {
          setEvaluated(false);
          if (currentEquation.length===0){return}
          if (operators[currentEquation.slice(-1)]) {
            return setCurrentEquation(currentEquation.slice(0,-1) + value)
          }
          if (currentEquation.slice(-1) === '(' || currentEquation.slice(-1) === '.') {
            return 
          }
        }
        if (value === ')'){
          setEvaluated(false);
          if (operators[currentEquation.slice(-1)]){
            return setCurrentEquation(currentEquation.slice(0,-1) + value)
          }
        }
        if (value === '(' && currentEquation.slice(-1) === '.'){
          setEvaluated(false);
          return setCurrentEquation(currentEquation.slice(0,-1) + value)}

        if (evaluated && !operators[value] && value !== '(' && value !== ')') {
          setEvaluated(false);
          return setCurrentEquation(value)
        }

        return setCurrentEquation(currentEquation + value);
    }
  }

  const onHistoryClick = (value) => {
    return setCurrentEquation(value)
  }
  return (
    <div className="Calculator">
      <EquationEditor currentEquation={currentEquation} />
      <ButtonContainer buttonValues={buttonValues} onButtonClick={onButtonClick}/>
      <HistoryContainer equationHistory={equationHistory} onHistoryClick={onHistoryClick}/>
    </div>
  );
}

export default Calculator;
