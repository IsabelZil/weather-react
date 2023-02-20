import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="row">
      <div className="WeatherForecast-day">Mon</div>
      <div className="WeatherForecast-icon">
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          alt="weather icon for today"
          width="50px"
        />
      </div>
      <div className="WeatherForecast-temperatures">
        {" "}
        <span className="WeatherForecast-max">20º</span>
        <span className="WeatherForecast-min">10º</span>{" "}
      </div>
    </div>
  );
}
