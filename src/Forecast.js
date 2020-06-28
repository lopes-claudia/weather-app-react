import React from "react";
import "./Forecast.css";
import Loader from "react-loader-spinner";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row forecastInfo" id="weather-forecast"></div>
      <Loader type="Rings" color="#008080" height={70} width={70} />
    </div>
  );
}
