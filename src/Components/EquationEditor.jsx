import React, {useState, useEffect} from 'react'

// Equation display component. It receives the current equation from the Calculator and displays it in the equation editor.
// If the equation is evaluated, it will display the result in green.

function EquationEditor({currentEquation, evaluated} ) {

  const [equation, setEquation ] = useState(currentEquation);
  const [color, setColor] = useState('black');

  useEffect(() => {
    setEquation(currentEquation);
  }, [currentEquation]);

  useEffect(() => {
    console.log(color)
    if (evaluated) {return setColor('#008a0b')}
    setColor('white')
  }, [evaluated]);

  return (
    <div className="EquationEditor">
      <header className='equationInput' evaluated = {evaluated} style={{color:color}}>
        {equation}
      </header>
    </div>
  );
}

export default EquationEditor;
