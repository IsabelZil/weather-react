import React, { useState } from "react";

import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import "./Form.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);

  function displayTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      country: response.data.country,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function UpdateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "eff86f61teof84b36bcb9a7a1708340d";
    let units = "metric";
    let apiEndpoint = "https://api.shecodes.io/weather/v1/";
    let apiurl = `${apiEndpoint}current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiurl).then(displayTemperature);
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city name"
              onChange={UpdateCity}
              className="input-search"
            />
            <input type="submit" />
          </form>
        </div>
        <div className="row">
          <div className="Weather mt-3">
            <div className="Weather-icon">
              <img
                src={weatherData.iconUrl}
                alt="weather icon for today"
                width="150px"
              />
            </div>{" "}
            <div className="PlaceNow">
              {weatherData.city}, {weatherData.country}
            </div>
            <div className="DateNow ">
              {" "}
              <FormattedDate date={weatherData.date} />
            </div>
            <TemperatureConversion celsius={weatherData.temperature} />
            <div>
              <ul>
                <li>
                  <i className="fa-solid fa-droplet weather-properties"> </i>{" "}
                  {Math.round(weatherData.humidity)}%{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-wind weather-properties"> </i>{" "}
                  {Math.round(weatherData.wind)} km/h
                </li>
                <li>
                  <i className="fa-solid fa-panorama weather-properties"> </i>{" "}
                  {weatherData.description}{" "}
                </li>
              </ul>{" "}
            </div>{" "}
          </div>
          <div className="WeatherForecast mt-3">
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div className="Weather"> The weather server is loading... </div>;
  }
}
