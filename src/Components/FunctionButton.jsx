import React from 'react'

function FunctionButton(props) {
  
  const {value, onButtonClick} = props
  

  return (
    <button className="FunctionButton" onClick={()=>onButtonClick(value)}>
        {value}
    </button>
  );
}

export default FunctionButton;
