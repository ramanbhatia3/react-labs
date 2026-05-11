import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useLocalStorage Demo</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name || "Guest"} 👋</h2>
    </div>
  );
}

export default App;