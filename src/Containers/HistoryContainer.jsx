import React from 'react'
import FormattedEquation from "../Components/FormattedEquation";

// Container for the history of equations. It receives the history array from the Calculator and passes each previously
// evaluated equation to the FormattedEquation component along with a click handler. 

function HistoryContainer({history, onHistoryClick}) {

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
