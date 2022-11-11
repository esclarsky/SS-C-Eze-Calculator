import React from 'react'
import FormattedEquation from "../Components/FormattedEquation";

// TODO: style history container appropriately

function HistoryContainer(props) {
  const {equationHistory, onHistoryClick} = props;

  const equations = equationHistory.map((equation, idx) => {
    return (
      <FormattedEquation key={idx} value={equation} onButtonClick={onHistoryClick}/>
    );
  });



  return (
    <div className="HistoryContainer">
        {equations}
    </div>
  );
}

export default HistoryContainer;
