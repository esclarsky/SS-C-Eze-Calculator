import React from 'react'
import Button from "../Components/FunctionButton";



function ButtonContainer(props) {

  const {buttonValues} = props
  const buttons = buttonValues.map((btn, idx) => {
    return (
      <Button key={idx} value={btn}/>
    );
  });
  

  return (
    <div className="ButtonContainer">
      {buttons}
    </div>
  );
}

export default ButtonContainer;
