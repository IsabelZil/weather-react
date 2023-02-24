import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <a
          href="https://github.com/IsabelZil/weather-react"
          target="_blank"
          title="github link"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github github-color"></i>
        </a>
        {""} by <strong>Isabel Zilhão</strong>
      </p>
    </div>
  );
}
