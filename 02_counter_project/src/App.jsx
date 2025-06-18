import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);

  let removeValue = (value) => {
    setCounter(counter - value);
  };

  let addValue = () => {
    setCounter(counter + 5);
  };

  return (
    <div className="body">
      <h1>Counter</h1>
      <div className="inside-body">
        <button className="btn1" onClick={() => setCounter(counter - 100)}>
          -100
        </button>
        <button className="btn1" onClick={() => setCounter(counter - 50)}>
          -50
        </button>
        <button className="btn1" onClick={() => setCounter(counter - 10)}>
          -10
        </button>
        <button className="btn1" onClick={() => setCounter(counter - 5)}>
          -5
        </button>
        <div>{counter}</div>
        <button className="btn2" onClick={() => setCounter(counter + 5)}>
          +5
        </button>
        <button className="btn2" onClick={() => setCounter(counter + 10)}>
          +10
        </button>
        <button className="btn2" onClick={() => setCounter(counter + 50)}>
          +50
        </button>
        <button className="btn2" onClick={() => setCounter(counter + 100)}>
          +100
        </button>
      </div>
    </div>
  );
};

export default App;
