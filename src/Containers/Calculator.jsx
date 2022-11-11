import ButtonContainer from "./ButtonContainer";
import EquationContainer from "./EquationContainer";
import EquationHistory from "./EquationHistory";


function Calculator() {
  return (
    <div className="Calculator">
      <EquationContainer/>
      <ButtonContainer/>
      <EquationHistory/>
    </div>
  );
}

export default Calculator;
