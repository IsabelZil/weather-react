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
        <ul>
          <li>
            <img src={iconurl} alt="weather icon" />{" "}
          </li>{" "}
          <li>
            {description} in {props.city}{" "}
          </li>{" "}
          <li> Temperature: {Math.round(temperature)}ºC</li>{" "}
          <li> Humidity: {Math.round(humidity)}% </li>
          <li> Wind speed: {Math.round(wind)}km/h </li>
        </ul>{" "}
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
