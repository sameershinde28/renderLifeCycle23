import "./styles.css";
import React from "react";
import User from "./User";

export default function App() {
  const [name, setName] = React.useState("sameer");

  return (
    <div className="App">
      <h1>App.js </h1>
      <User name={name} />
      <button onClick={() => setName("sagar")}>click me</button>
    </div>
  );
}
