import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={` ` + theme}>
      <div className="contatiner mt-5">
        <h2> App component here change</h2>

        <button onClick={() => changeTheme()}>
          set them to {theme === "light" ? "dark" : "light"}
        </button>
        <Counter />
      </div>
    </div>
  );
}

export default App;
