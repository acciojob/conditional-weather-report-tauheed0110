
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 18,
    conditions: "Cold"
  });
  useEffect(()=>{
    setWeather({
      temperature: 25,
      conditions: "Sunny"
    }); 
  }, [])
  return (
    <div>
      <h1>Weather App</h1>
        <WeatherDisplay weather={weather}/>
    </div>
  )
}

export default App
