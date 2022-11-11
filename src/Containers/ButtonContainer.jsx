import EqualsButton from "../Components/EqualsButton";
import FunctionButton from "../Components/FunctionButton";
import ValueButton from "../Components/ValueButton";

function ButtonContainer() {
  return (
    <div className="ButtonContainer">
        <ValueButton/>
        <FunctionButton/>
        <EqualsButton/>
    </div>
  );
}

export default ButtonContainer;
