import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (action) => {
    if (action === "increase") {
      setCount(count + 1);
    }
    if (action === "decrease") {
      setCount(count - 1);
    }
    if (action === "reset") {
      setCount(0);
    }
  };

  return (
    <>
      <Counter />
      <div>
        <label>{count}</label>
      </div>
      <div>
        <button className="btn-action" onClick={() => handleClick("increase")}>
          Increment
        </button>
        <button className="btn-action" onClick={() => handleClick("decrease")}>
          Decrement
        </button>
        <button className="btn-action" onClick={() => handleClick("reset")}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
