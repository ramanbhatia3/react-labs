import React from "react";
import { useToggle } from "./hooks/useToggle";

function App() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useToggle Hook</h1>

      <button onClick={toggleVisible}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && (
        <h2 style={{ marginTop: "20px" }}>
          🎉 Hello from useToggle!
        </h2>
      )}
    </div>
  );
}

export default App;