import React from 'react'
import FormattedEquation from "../Components/FormattedEquation";

// TODO: style history container appropriately

function HistoryContainer(props) {
  const {history, onHistoryClick} = props;

  const equations = history.map((equation, idx) => {
    return (
      <FormattedEquation key={idx} value={equation} onButtonClick={onHistoryClick}/>
    );
  });



  return (
    <div className="HistoryContainer">
      <header id='historyHeader'>History</header>
        {equations}
    </div>
  );
}

export default HistoryContainer;
