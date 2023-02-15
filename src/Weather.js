import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const[weatherData, setWeatherData]= useState({ready:false});
  
  function displayTemperature(response) {
    console.log(response.data);
    setWeatherData({
    ready:true,
    temperature:response.data.temperature.current,
    description:response.data.condition.description,
    humidity:response.data.temperature.humidity,
    wind:response.data.wind.speed,
    iconUrl:response.data.condition.icon_url,
    country:response.data.country,
    city:response.data.city,
    date:new Date(response.data.time*1000),
  });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
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
        <div className="DateNow"> <FormattedDate date={weatherData.date}/></div>
        <div className="temperature-today-celsius">
          <div className="temperature-today">
            {" "}
            {Math.round(weatherData.temperature)}{" "}
          </div>
          <span className="temperature-unit">ºC</span>
        </div>
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
        </div>
      </div>
    );
  } else {
    let apiKey = "eff86f61teof84b36bcb9a7a1708340d";
    let units = "metric";
    let apiEndpoint = "https://api.shecodes.io/weather/v1/";
    let apiurl = `${apiEndpoint}current?query=${props.city}&key=${apiKey}&units=${units}`;

    axios.get(apiurl).then(displayTemperature);
    return <div className="Weather"> The weather server is loading... </div>;
  }
}
