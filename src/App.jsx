import "./App.css";
import freeCodeCampLogo from "./assets/img/freecodecamp-logo.png";
import "./stylesheets/Reset.css";
import Button from "./components/ButtonComponents/Button";
import Counter from "./components/CounterComponents/Counter";
import { useState } from "react"; //hooks

function App() {
  const [clickNumber, setClickNumber] = useState(0); // 0 numero inicial de click
  //interactivity
  const driveClick = () => {
    setClickNumber(clickNumber + 1); //actualiza el estado
    console.log(clickNumber);
  };

  const resetCounter = () => {
    setClickNumber(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo-freeCodeCamp"
        />
      </div>
      <div className="main-container">
        <Counter clickNumber={clickNumber} />
        <Button text="Click" isButtonClick={true} driveClick={driveClick} />
        <Button text="Reset" isButtonClick={false} driveClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
