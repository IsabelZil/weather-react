import React from "react";

export default function WeatherForecastDay(props) {
  function temperatureMax() {
    let temperature = Math.round(props.daydata.temperature.maximum);

    return `${temperature}°`;
  }
  function temperatureMin() {
    let temperature = Math.round(props.daydata.temperature.minimum);

    return `${temperature}°`;
  }
  function dayWeek() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let date = new Date(props.daydata.time * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">
        {dayWeek()}
        <div className="WeatherForecast-icon">
          <img
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.daydata.condition.icon}.png`}
            alt={props.daydata.condition.description}
            title="weather icon"
            width="50px"
          />
        </div>
        <div className="WeatherForecast-temperatures">
          {" "}
          <span className="WeatherForecast-max">{temperatureMax()}</span>
          <span className="WeatherForecast-min">{temperatureMin()}</span>{" "}
        </div>
      </div>
    </div>
  );
}
