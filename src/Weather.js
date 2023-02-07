import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [iconurl, setIconUrl] = useState(null);

  function displayTemperature(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIconUrl(response.data.condition.icon_url);
  }

  if (temperature !== null) {
    return (
      <div className="Weather">
        <div className="Weather-icon">
          <img src={iconurl} alt="weather icon for today" width="150px" />
        </div>{" "}
        <div className="temperature-today-celsius">
          <div className="temperature-today"> {Math.round(temperature)} </div>
          <span className="celsius">ºC</span>
        </div>
        <div>
          <ul>
            <li>
              <i class="fa-solid fa-droplet weather-properties"> </i>{" "}
              {Math.round(humidity)}%{" "}
            </li>
            <li>
              {" "}
              <i class="fa-solid fa-wind weather-properties"> </i>{" "}
              {Math.round(wind)}km/h{" "}
            </li>
            <li>
              <i class="fa-solid fa-panorama weather-properties"> </i>{" "}
              {description}{" "}
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
