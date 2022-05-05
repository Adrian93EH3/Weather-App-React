import React, {useState} from "react";
import axios from "axios";

function App() {

 const url = "https://api.openweathermap.org/data/2.5/weather?q=charlotte&appid=ff190912e73db2be11befe0e9575b205"

  return (
    <div className="App">
      <div className="container">
        <div className="placeholder">
          <div className="location">
            <p></p>
          </div>
          <div className="temperature">
            <h2>82°F</h2>
          </div>
          <div className="weatherDescription">
            <h3>Sunny</h3>
          </div>
        </div>
        <div className="placeholder2">
          <div className="feelsLike">
            <p>85°F</p>
          </div>
          <div className="humidity">
            <p>60%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
