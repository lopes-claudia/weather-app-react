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

  function temperatureCelsius() {
    let max_temperature = Math.round(props.data.main.temp_max);
    let min_temperature = Math.round(props.data.main.temp_min);

    return (
      <div>
        <strong>
          <span className="max">{max_temperature}º</span>
        </strong>
        |<span className="min">{min_temperature}º</span>{" "}
      </div>
    );
  }

  return (
    <div className="col">
      <div className="hourForecast">{hours()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="forecastTemperature">{temperatureCelsius()}</div>
    </div>
  );
}
