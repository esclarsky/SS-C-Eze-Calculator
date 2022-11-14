import React, {useState, useEffect} from 'react'

function EquationEditor(props) {

  const {currentEquation, evaluated} = props;
  const [equation, setEquation ] = useState(currentEquation);
  const [color, setColor] = useState('black');

  // TODO: allow valid inputs from keyboard

  useEffect(() => {
    setEquation(currentEquation);
  }, [currentEquation]);

  useEffect(() => {
    console.log(color)
    if (evaluated) {return setColor('green')}
    setColor('black')
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
