import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-6">
              <form id="search-form">
                <input type="text" placeholder=" Search city" id="cityInput" />
                <button
                  type="submit"
                  className="btn btn-outline-success btn-sm"
                  id="submitButton"
                >
                  Search
                </button>
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
          <div className="row currentInfo" id="weather-icon">
            <div className="col-2">
              '
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
              />
            </div>

            <div className="col-4 cityInfo">
              <ul>
                <li id="city">{weatherData.city}</li>
                <li>
                  <span id="temperature"> {weatherData.temperature}</span>
                  <span id="conversion">
                    <a href="#" id="celsius" className="active">
                      ºC
                    </a>{" "}
                    |
                    <a href="#" id="fahr">
                      ºF
                    </a>
                  </span>
                </li>
                <li id="description">{weatherData.description}</li>
              </ul>
            </div>
            <div className="col-2 humWind">
              <ul>
                <li>
                  <i className="fas fa-tint"> </i>{" "}
                  <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  <i className="fas fa-wind"></i>{" "}
                  <span id="wind">{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>

            <div className="col-4 atualDate">
              <span id="dateText"></span>
              <p>
                Last updated at <FormattedDate date={weatherData.date} />
                <span className="atualHour" id="hour"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ef02e86598259b60d56bcb739016dd33";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
