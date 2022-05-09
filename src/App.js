import React, {useState} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("");

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ff190912e73db2be11befe0e9575b205`

 const searchWeather = (event) => {

  if (event.key === "Enter") /* Checking for user hitting the Enter button */ {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    })
    setLocation(""); /* Sets the input field back to an empty string thus displaying the placeholder after every successful API call for the city's weather. */
  }

 }
  return (
    <div className="App">
    <div className="search">
      <input 
      type="text" 
      value={location} 
      onChange={event => setLocation(event.target.value)} 
      placeholder="Search for your city here..."
      onKeyPress={searchWeather}  
      />
    </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temperature">
            {data.main ? <h2>{data.main.temp}°F</h2> : null} {/* Check for the value of main before being able to check for the value of temp */}
          </div>
          <div className="weatherDescription">
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
