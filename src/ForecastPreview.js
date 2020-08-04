import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°`;
  }

  return (
    <div className="col">
      <div className="hourForecast">{hours()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="forecastTemperature">
        <strong>
          <span className="max">{Math.round(props.data.main.temp)}º</span>
        </strong>
        |<span className="min">{Math.round(props.data.main.temp)}º</span>{" "}
      </div>
    </div>
  );
}
