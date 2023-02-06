import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <a
          href="https://github.com/IsabelZil/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github github-color"></i>
        </a>
        by Isabel Zilhão
      </p>
    </div>
  );
}
