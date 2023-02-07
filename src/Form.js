import React, { useState } from "react";

import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");
  alert(`${city}`);

  function handleSubmit(event) {
    event.preventDefault();
  }
  function UpdateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city name"
          onChange={UpdateCity}
          className="form-width"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
