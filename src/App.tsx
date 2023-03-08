import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  console.log(window.location);

  // return <div>{window.location}</div>

  return (
    <div className="">
      <div className="flex justify-around">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
