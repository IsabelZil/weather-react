import React, { useState } from "react";

import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Waiting to learn how to pass on city from the form component into axios in the Weather component");
  }
  function UpdateCity(event) {
    setCity(event.target.value);
  }
  console.log(`${city}`);

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city name"
          onChange={UpdateCity}
          className="input-search"
        />
        <input type="submit" className="" />
      </form>
    </div>
  );
}
