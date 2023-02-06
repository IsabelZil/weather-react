
import './App.css';
import Weather from "./Weather";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <h1>Weather App</h1>
        <Form />
          <Weather city="Lisboa" />
          <Footer />
    </div>
  );
}

export default App;
