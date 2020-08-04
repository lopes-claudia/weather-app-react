import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahr(event) {
    event.preventDefault();
    setUnit("farh");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahr() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <span>
        <span id="temperature">{props.celsius}</span>
        <span id="conversion">
          <span id="celsius">ºC</span> |
          <a href="/" id="fahr" onClick={convertToFahr}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span id="temperature">{showFahr()}</span>
        <span id="conversion">
          <a href="/" id="celsius" onClick={convertToCelsius}>
            ºC
          </a>{" "}
          |<span id="fahr">ºF</span>
        </span>
      </span>
    );
  }
}
