import React from "react";
import "./App.scss";
// import BackgroundImage from "../public/bg-img.png"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="red-background"></div>
          <div className="test">
            <img className="background-image" src={process.env.PUBLIC_URL + './bg-img.png'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
