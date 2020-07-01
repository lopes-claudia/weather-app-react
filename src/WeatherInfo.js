import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <div>
      <div className="row currentInfo">
        <div className="col-2" id="weather-icon">
          <ReactAnimatedWeather
            icon={codeMapping[props.data.icon]}
            color="teal"
            size={70}
            animate={true}
          />
        </div>

        <div className="col-4 cityInfo">
          <ul>
            <li id="city">{props.data.city}</li>
            <li>
              <span id="temperature"> {props.data.temperature}</span>
              <span id="conversion">
                <span href="" id="celsius" className="active">
                  ºC
                </span>{" "}
                |
                <span href="" id="fahr">
                  ºF
                </span>
              </span>
            </li>
            <li id="description">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-2 humWind">
          <ul>
            <li>
              <i className="fas fa-tint"> </i>{" "}
              <span id="humidity">Humidity: {props.data.humidity}</span>%
            </li>
            <li>
              <i className="fas fa-wind"></i>{" "}
              <span id="wind">Wind: {props.data.wind}</span>km/h
            </li>
          </ul>
        </div>

        <div className="col-4 atualDate">
          <span id="dateText"></span>
          <p>
            Last updated: <FormattedDate date={props.data.date} />
            <span className="atualHour" id="hour"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
