import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="containers">
      <Weather defaultCity="Lisbon" />

      <small>
        This website was coded by{" "}
        <a
          href="https://www.linkedin.com/in/claudiasofia-lopes/"
          target="blank"
        >
          Cláudia Lopes
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/lopes-claudia/weather-app-react"
          target="blank"
        >
          GitHub
        </a>
      </small>
    </div>
  );
}
