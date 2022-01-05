// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Average from "./Average";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  const [view, setView] = useState(true);
  return (
    <div className="App">
      <h1 className="react">React Chap. 8</h1>
      <Counter />
      <hr />
      <button
        onClick={() => {
          setView(!view);
        }}
      >
        View Button
      </button>
      {view && <Info />}
      <hr />
      <Average />
    </div>
  );
}

export default App;
