import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCountDecrease = () => {
    setCount((c) => c - step);
  };
  const handleCountIncrease = () => {
    setCount((c) => c + step);
  };
  // const handleStepDecrease = () => {
  //   setStep((s) => s - 1);
  // };
  // const handleStepIncrease = () => {
  //   setStep((s) => s + 1);
  // };
  const handleSetStep = (e) => {
    setStep(Number(e.target.value));
  };

  const handleInput = (e) => {
    setCount(Number(e.target.value));
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <span>Step</span>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleSetStep}
        />
        <span>{step}</span>
        {/*
        step buttons [-][+] from previous version:
        <button onClick={handleStepDecrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepIncrease}>+</button> 
        */}
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        {/* <span>Count: {count}</span> */}
        <input type="number" value={count} onChange={handleInput} />
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count < 0
              ? `${Math.abs(count)} day${
                  Math.abs(count) === 1 ? "" : "s"
                } ago was `
              : `In ${count} day${Math.abs(count) === 1 ? "" : "s"}, it will be `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(step !== 1 || count !== 0) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};
