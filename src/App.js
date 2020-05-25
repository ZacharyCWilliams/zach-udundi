import React, { useState, useEffect } from "react";
import "./App.scss";
import Background from "./Background/Background";
import Explore from "./Explore/Explore";
import Social from "./Social/Social";
import InfoBox from "./InfoBox/InfoBox";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [showInfo, setShowInfo] = useState(false) 
  const handleShowBox = () => setShowInfo({ showInfo: true });

  return (
    <div className="App">
      <InfoBox showInfo={showInfo} setShowInfo={setShowInfo} />
      <Explore showInfo={showInfo} setShowInfo={setShowInfo} handleShowBox={handleShowBox} />
      <Social />
      <Background />
    </div>
  );
}

export default App;
