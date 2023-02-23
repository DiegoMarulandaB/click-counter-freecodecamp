import { useState } from "react"; //hooks
// import reactLogo from './assets/react.svg'
import "./stylesheets/Reset.css";
import "./stylesheets/Root.css";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import freeCodeCampLogo from "./assets/img/freecodecamp-logo.png";

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
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="" />
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
