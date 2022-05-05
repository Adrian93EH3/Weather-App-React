import React, {useState} from "react";
import axios from "axios";

function App() {

 const url = "https://api.openweathermap.org/data/2.5/weather?q=charlotte&appid=ff190912e73db2be11befe0e9575b205"

  return (
    <div className="App">
      <div className="container">
        <div className="placeholder">
          <div className="location">
            
          </div>
        </div>
        <div className="placeholder2"></div>
      </div>
    </div>
  );
}

export default App;
