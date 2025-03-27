 import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://portfolionewdhb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danielle
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/DJHB24/WeatherReactApp_"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://portfolionewdhb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
