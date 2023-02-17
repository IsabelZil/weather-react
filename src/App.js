import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div classname="container">
        <Weather defaultcity="Lisboa"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
