import React from "react";
import "./App.css";
import Weather from "./Weather";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div classname="container">
        <Form />
        <Weather city="Lisboa" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
