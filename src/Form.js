import React, { useState } from "react";

import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
  }
  function UpdateCity(event) {
    setCity(event.target.value);
  }
  alert(`${city}`);

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city name"
          onChange={UpdateCity}
          className="input-search"
        />
        <input type="submit" className=""/>
      </form>
    </div>
  );
}
