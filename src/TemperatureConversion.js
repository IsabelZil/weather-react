import React, { useState } from "react";

import "./TemperatureConversion.css";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion mt-3">
        <div className="temperature-today"> {Math.round(props.celsius)} </div>
        <span className="temperature-unit">
          ºC|
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = props.celsius*9/5 +32;
    return (
      <div className="TemperatureConversion mt-3">
        <div className="temperature-today"> {Math.round(fahrenheit)} </div>
        <span className="temperature-unit">
          <a href="/" onClick={showCelsius}>
            ºC
          </a>
          |ºF
        </span>
      </div>
    );
  }
}
