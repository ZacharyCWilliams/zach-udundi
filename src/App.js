import React from "react";
import "./App.scss";
import Background from "./Background/Background";
import Explore from "./Explore/Explore";
import Social from "./Social/Social";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Explore />
      <Social />
      <Background />
    </div>
  );
}

export default App;
