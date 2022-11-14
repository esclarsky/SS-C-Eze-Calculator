import React, {useState} from 'react'
import {resolve} from 'equation-resolver'
import {parse} from 'equation-parser'
import EquationEditor from '../Components/EquationEditor';
import ButtonContainer from './ButtonContainer';
import HistoryContainer from "./HistoryContainer";


const buttonValues = ['±', 'rand', 'clr', '←',
  '^','(',')','*',
  '7', '8', '9', '/',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '.', '0', '='
]

const operators = {
  '+': true,
  '-': true,
  '*': true,
  '/': true,
  '!': true,
  '^': true,
}

// TODO: Add clear history button
// TODO: Add keyboard support for equation inputs. Ensure validation on key presses
// TODO: Allow resizing of containers and equation editor

function Calculator() {

  const [currentEquation, setCurrentEquation] = useState('0')
  // Evaluated state determines color of equation and what next input button may do 
  const [evaluated, setEvaluated] = useState(true);
  // Array to store input history. If this were a real app, this would be stored either in a database or in local storage
  const [history, setHistory] = useState([]);
  // Based on error state, calculator will display an error when an invalid equation is entered
  const [error, setError] = useState(null);


  // Click handlers for buttons that aren't directly related to building the equation

  // Handler for = button. Throws error if equation is invalid, otherwise resolves equation and updates state
  const equalsClickHandler = () => {
    let parenthesesCount = 0;
    for (let i=0; i<currentEquation.length;i++){
      if (currentEquation[i]==='('){
        parenthesesCount++
      }
      if (currentEquation[i]===')'){
        parenthesesCount--
      }
    }
    if (parenthesesCount!==0){
      return setError(`You are missing ${Math.abs(parenthesesCount)} ${parenthesesCount>0 ? 'closing' : 'opening'} parentheses, please check your equation and try again.`)
    }
    if (currentEquation.length===0){return}

    const evaluatedEquation = resolve(parse(currentEquation));

    if (evaluatedEquation.type!=='number'){
      return setError(`There was an error evaluating your equation: Error type ${evaluatedEquation.errorType}. Please check your equation and try again.`)
    }
    setHistory([currentEquation,...history]);
    setEvaluated(true);

    return setCurrentEquation(`${evaluatedEquation.value}`)
  }

  // Handler for clear button. Resets equation state to default
  const clrClickHandler = () => {return setCurrentEquation('')}

  // Handler for backsapce button. Removes last character from equation
  const backspaceClickHandler = () => {
    setEvaluated(false);
    return setCurrentEquation(currentEquation.slice(0, -1))
  }

  // Handler for random button. Generates a random number between 0 and 100 and replaces current equation with that number
  const randClickHandler = () => {
    setEvaluated(false);
    return setCurrentEquation(`${Math.round(Math.random()*100)}`)
  }

  // Click handler for all buttons
  // Switch cases address the special cases of the buttons handled above
  const onButtonClick = (value) => {

    setError(null)

    switch (value) {
      case '=':
        return equalsClickHandler();
      case 'clr':
        return clrClickHandler();
      case '←':
        return backspaceClickHandler();
      case 'rand':
        return randClickHandler();

      // Special case for plus/minus button
      case '±':
        if (currentEquation.charAt(0)==='-'){
          setEvaluated(false)
          return setCurrentEquation(currentEquation.slice(1))
        }
        setEvaluated(false)
        return setCurrentEquation(`-${currentEquation}`)

      // Special case for decimal points. Need to make sure there isn't already a decimal point in the current number and decimal placement is valid
      case '.':
        if (currentEquation.length===0){return}
        setEvaluated(false);
        if (currentEquation.slice(-1) === '.' || currentEquation.slice(-1) === ')' ) {
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
      // Also note I have chosen not to address leading 0s, since functionally they will not break the equation. This can be iterated on in the future to 
      // disallow leading 0s from each number in the equation
      default:
        if (operators[value]) {
          setEvaluated(false);
          // Don't allow operators to be the first character in the equation
          if (currentEquation.length===0){return}
          // If the last character in the equation is an operator, replace it with the new operator
          if (operators[currentEquation.slice(-1)]) {
            return setCurrentEquation(currentEquation.slice(0,-1) + value)
          }
          // If the last character in the equation is a left parenthesis or a decimal, don't allow an operator to be added
          if (currentEquation.slice(-1) === '(' || currentEquation.slice(-1) === '.') {
            return 
          }
        }
        if (value === ')'){
          setEvaluated(false);
          if (operators[currentEquation.slice(-1)] || currentEquation.slice(-1)==='.'){
            return setCurrentEquation(currentEquation.slice(0,-1) + value)
          }
        }
        if (value === '(' && currentEquation.slice(-1) === '.'){
          setEvaluated(false);
          return setCurrentEquation(currentEquation.slice(0,-1) + value)
        }

        if (evaluated && !operators[value] && value !== '(' && value !== ')') {
          setEvaluated(false);
          return setCurrentEquation(value)
        }

        return setCurrentEquation(currentEquation + value);
    }
  }

  // Handler for history buttons. Sets current equation to the equation stored in the history array
  const onHistoryClick = (value) => {
    setError(null);
    setEvaluated(false);
    return setCurrentEquation(value);
  }

  return (
    <div className="Calculator">
      <img src={require('../caticon.png')} alt='calculator cat icon' className='cat'/>
      <EquationEditor currentEquation={currentEquation} evaluated={evaluated} />
      {error? (<p style = {{color:'red'}} className="errorMsg">{error}</p>) : null}
      <ButtonContainer buttonValues={buttonValues} onButtonClick={onButtonClick}/>
      <HistoryContainer history={history} onHistoryClick={onHistoryClick}/>
    </div>
  );
}

export default Calculator;
