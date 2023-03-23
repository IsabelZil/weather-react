import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [isReady, setIsReady] = useState(false);
  let [weatherDataForecast, setWeatherDataForecast] = useState(null);

  useEffect(() => {
    setIsReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setWeatherDataForecast(response.data.daily);
    setIsReady(true);
  }
  function callApi() {
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;

    let units = "metric";
    let apiKey = "eff86f61teof84b36bcb9a7a1708340d";
    let api = "https://api.shecodes.io/weather/v1/forecast?";
    let apiUrl = `${api}lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (isReady) {
    return (
      <div className="row row-cols-3 justify-content-center">
        {weatherDataForecast.map(function(dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-sm" key={index}>
                <WeatherForecastDay daydata={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    callApi();
  }

  return null;
}
