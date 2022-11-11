import React from 'react'

function FunctionButton(props) {
  const {value} = props
  return (
    <button className="FunctionButton">
        {value}
    </button>
  );
}

export default FunctionButton;
