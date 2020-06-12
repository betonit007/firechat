import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Flames from "./pages/Flames";
import Input from "./components/input/Input";
import "./App.css";

const App = () => {
  const [authState, setAuthState] = useState();

  return (
    <div className="main-container">
      <Navbar authState={authState} setAuthState={setAuthState} />
      <div className="main-body">
        <Flames />
      </div>
    </div>
  );
};

export default App;
