import "./App.css";
import Counter from "./components/Counter";
import WeatherWidget from "./components/WeatherWidget";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("C");

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>
      <Counter />

      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>

      {/* ADD THE WEATHER WIDGET COMPONENT */}
      <div>
        <WeatherWidget city="Miami" icon="" celsius={29} unit={unit} />
        <WeatherWidget city="Mexico City" icon="⛈️" celsius={17} unit={unit} />
        <WeatherWidget city="Berlin" icon="️" celsius={20} unit={unit} />
        <WeatherWidget city="Barcelona" icon="️" celsius={28} unit={unit} />
      </div>
    </div>
  );
}

export default App;
