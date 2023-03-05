import React from "react";
import "../stylesheets/Button.css";
//props
function Button({ text, isButtonClick, driveClick }) {
  return (
    <button
      className={isButtonClick ? "click-button" : "reset-button"}
      onClick={driveClick}
    >
      {text}
    </button>
  );
}

export default Button;
