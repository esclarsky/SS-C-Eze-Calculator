import React from 'react'
import EquationContainer from "./EquationContainer";
import HistoryContainer from "./HistoryContainer";


function Calculator() {
  return (
    <div className="Calculator">
      <EquationContainer/>
      <HistoryContainer/>
    </div>
  );
}

export default Calculator;
