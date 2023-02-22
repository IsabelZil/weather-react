import axios from "axios";
import React, { useState } from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherDataForecast, setWeatherDataForecast] = useState(null);

  function handleResponse(response) {
    setWeatherDataForecast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="WeatherForecast-day">
          {weatherDataForecast.daily[0].date}
        </div>
        <div className="WeatherForecast-icon">
          <img
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherDataForecast.daily[0].condition.icon}.png`}
            alt={weatherDataForecast.daily[0].condition.description}
            title="weather icon"
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
  } else {
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;

    let units = "metric";
    let apiKey = "eff86f61teof84b36bcb9a7a1708340d";
    let api = "https://api.shecodes.io/weather/v1/forecast?";
    let apiUrl = `${api}lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return null;
}
