import React from 'react'
import Button from "../Components/FunctionButton";



function ButtonContainer(props) {

  const {buttonValues, onButtonClick} = props
  const buttons = buttonValues.map((btn, idx) => {
    return (
      <Button key={idx} value={btn} onButtonClick={onButtonClick}/>
    );
  });
  

  return (
    <div className="ButtonContainer">
      {buttons}
    </div>
  );
}

export default ButtonContainer;
