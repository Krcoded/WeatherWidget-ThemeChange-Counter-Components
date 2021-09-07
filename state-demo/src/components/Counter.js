import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Kevin");

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="Counter">
      <h2> Counter Component </h2>

      <p> You clicked {count} times</p>
      <p>
        {" "}
        Hello, {name} {setName}
      </p>

      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => subtract()}> - </button>
    </div>
  );
};

export default Counter;
