import React, {useState, useEffect} from 'react'

function EquationEditor(props) {

  const {currentEquation} = props;
  const [equation, setEquation ] = useState(currentEquation);

  // TODO: allow valid inputs from keyboard

  useEffect(() => {
    setEquation(currentEquation);
  }, [currentEquation]);


  return (
    <div className="EquationEditor">
      <header className='equationInput' evaluated = {true}/>
        {equation}
      <header/>
    </div>
  );
}

export default EquationEditor;
