import React, { useState } from "react";
import "./Forecast.css";
import Loader from "react-loader-spinner";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleForecastResponse(response) {
    setForecastData(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecastData.city.name) {
    return (
      <div className="forecast row">
        <ForecastPreview data={forecastData.list[0]} />
        <ForecastPreview data={forecastData.list[1]} />
        <ForecastPreview data={forecastData.list[2]} />
        <ForecastPreview data={forecastData.list[3]} />
        <ForecastPreview data={forecastData.list[4]} />
        <ForecastPreview data={forecastData.list[5]} />
      </div>
    );
  } else {
    const apiKey = "ef02e86598259b60d56bcb739016dd33";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return (
      <div className="forecast">
        <div className="row forecastInfo" id="weather-forecast"></div>
        <Loader type="Rings" color="#008080" height={70} width={70} />
      </div>
    );
  }
}
