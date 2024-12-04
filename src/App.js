// import React, { useState } from "react";

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
//   const date = new Date("june 21 2027");

//   date.setDate(date.getDate() + count);
//   return (
//     <div>
//       <div>
//         <input type="range" min="0" max="10" />
//         <button
//           onClick={() => (step > 1 ? setStep((c) => c - 1) : setStep((c) => c))}
//         >
//           -
//         </button>
//         <span>Step : {step}</span>
//         <button onClick={() => setStep((c) => c + 1)}>+</button>
//       </div>
//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <span>Count : {count}</span>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>
//       <p>
//         <span>
//           {count === 0
//             ? "Today is"
//             : count > 0
//             ? `${count} days from today is  `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");

  date.setDate(date.getDate() + count);

  function handleClick() {
    setStep(1);
    setCount(0);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is  `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={() => handleClick()}>reset</button>
        </div>
      ) : null}
    </div>
  );
}
