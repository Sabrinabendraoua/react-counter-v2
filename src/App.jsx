import { useState } from "react";
import "./App.css";

function App() {
  console.log("je suis render");
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <button type="submit" onClick={() => {}}>
        Add Counter
      </button>

      <section>
        <button
          type="submit"
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>
        <p>{counter}</p>
        <button
          type="submit"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </section>

      <button
        type="submit"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </main>
  );
}

export default App;
