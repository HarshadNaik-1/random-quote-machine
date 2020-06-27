import React from "react";
import "./App.css";
import QuoteMachine from "./components/QuoteMachine";

function App() {
  return (
    <div className="container">
      <div>
        <QuoteMachine />
        <p className="creator">by harshad</p>
      </div>
    </div>
  );
}

export default App;
