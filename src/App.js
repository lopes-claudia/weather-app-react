import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="containers">
      <Weather defaultCity="Lisbon" />
      <Forecast />

      <small>
        This website was coded by Cláudia Lopes and is open-sourced on{" "}
        <a href="https://github.com/lopes-claudia/weather-app-react">GitHub</a>
      </small>
    </div>
  );
}
