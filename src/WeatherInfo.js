import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row currentInfo" id="weather-icon">
        <div className="col-2">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="icon"
          />
        </div>

        <div className="col-4 cityInfo">
          <ul>
            <li id="city">{props.data.city}</li>
            <li>
              <span id="temperature"> {props.data.temperature}</span>
              <span id="conversion">
                <a href="" id="celsius" className="active">
                  ºC
                </a>{" "}
                |
                <a href="" id="fahr">
                  ºF
                </a>
              </span>
            </li>
            <li id="description">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-2 humWind">
          <ul>
            <li>
              <i className="fas fa-tint"> </i>{" "}
              <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              <i className="fas fa-wind"></i>{" "}
              <span id="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>

        <div className="col-4 atualDate">
          <span id="dateText"></span>
          <p>
            Last updated at <FormattedDate date={props.data.date} />
            <span className="atualHour" id="hour"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
