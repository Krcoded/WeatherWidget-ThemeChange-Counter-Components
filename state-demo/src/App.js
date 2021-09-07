import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  // const changeTheme = () => {
  //   if (theme === "dark") {
  //     setTheme("light");
  //   } else {
  //     setTheme("dark");
  //   }
  // };

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={` ` + theme}>
      <div className="contatiner mt-5">
        <h2> App Theme Component </h2>
        {/* 
        <button onClick={() => changeTheme()}>
          Click to change {theme === "light" ? "dark" : "light"}
        </button> */}

        <select onChange={(e) => toggleTheme(e)}>
          <option value="light"> Light </option>
          <option value="dark"> Dark </option>
        </select>

        <Counter />
      </div>
    </div>
  );
}

export default App;
