import React from "react";
import "../stylesheets/Counter.css";

function Counter({ clickNumber }) {
  return <div className="counter">{clickNumber}</div>;
}

export default Counter;
