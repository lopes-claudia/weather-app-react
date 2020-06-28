import React from "react";
import "./App.css";
import Loader from "react-loader-spinner";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader type="Rings" color="#008080" height={70} width={70} />
      </header>
    </div>
  );
}
