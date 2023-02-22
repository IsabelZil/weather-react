import axios from "axios";
import React, { useState } from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [icon, setIcon] = useState();
  function handleResponse(response) {
    setIcon(response.data.daily[0].condition.icon);
  }
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;

  let units = "metric";
  let apiKey = "eff86f61teof84b36bcb9a7a1708340d";
  let api = "https://api.shecodes.io/weather/v1/forecast?";
  let apiUrl = `${api}lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="row">
      <div className="WeatherForecast-day">Mon</div>
      <div className="WeatherForecast-icon">
        <img
          src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`}
          alt="weather icon for today"
          width="50px"
        />
      </div>
      <div className="WeatherForecast-temperatures">
        {" "}
        <span className="WeatherForecast-max">20°</span>
        <span className="WeatherForecast-min">10°</span>{" "}
      </div>
    </div>
  );
}
