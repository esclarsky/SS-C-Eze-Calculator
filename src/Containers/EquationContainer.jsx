import EquationEditor from "../Components/EquationEditor";
import EquationResult from "../Components/EquationResult";

function EquationContainer() {
  return (
    <div className="EquationContainer">
        <EquationEditor/>
        <EquationResult/>
    </div>
  );
}

export default EquationContainer;
