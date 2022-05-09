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
          {data.weather ? <h3>{data.weather[0].main}</h3> : null} {/* Check for the value of weather before being able to check for the value of main */}
          </div>
        </div>

      {/* Don't display any of this JSX unless the user inputted a city thus giving data.name a value */}
      {data.name != undefined && 
        <div className="bottom">
          <div className="feelsLike">
            {data.main ? <p className="bold">{data.main.feels_like}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="windSpeed">
          {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      }

      </div>
    </div>
  );
}

export default App;
