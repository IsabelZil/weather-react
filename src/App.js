
import './App.css';
import Weather from "./Weather";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form />
      <Weather city="Lisboa" />
    </div>
  );
}

export default App;
