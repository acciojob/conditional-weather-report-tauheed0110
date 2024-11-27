import React from 'react';

const WeatherDisplay = ({weather}) => {
    const {temperature, conditions} = weather;
    console.log(weather);
  return (
    <div>
        <p><span style={{color: temperature > 20 ? "red": "blue"}}>Temperature: {temperature}</span></p>
        <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
