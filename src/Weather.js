import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    });
  }

  function search() {
    const apiKey = "ef02e86598259b60d56bcb739016dd33";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-6">
              <form id="search-form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder=" Search city"
                  id="cityInput"
                  onChange={handleChange}
                />
                <input
                  type="submit"
                  className="btn btn-outline-success btn-sm"
                  id="submitButton"
                  value="Search"
                ></input>
              </form>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                id="currentLocalButton"
              >
                Current location
              </button>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
