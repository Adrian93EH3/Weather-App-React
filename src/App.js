import React, {useState} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('');

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ff190912e73db2be11befe0e9575b205`

 const searchWeather = (event) => {

  if (event.key === 'Enter') /* Checking for user hitting the Enter button */ {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    })
  }

 }
  return (
    <div className="App">
    <div className="search">
      <input 
      type="text" 
      value={location} 
      onChange={event => setLocation(event.target.value)} 
      placeholder="Search your city's weather here..."
      onKeyPress={searchWeather}  
      />
    </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>Charlotte</h1>
          </div>
          <div className="temperature">
            <h2>82°F</h2>
          </div>
          <div className="weatherDescription">
            <h3>Sunny</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="feelsLike">
            <p className="bold">85°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">60%</p>
            <p>Humidity</p>
          </div>
          <div className="windSpeed">
            <p className="bold">8 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
