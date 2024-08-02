import React from "react";
import { useState } from "react";
import "./Weather.css";
import WeatherImg from "./weather.png";

const WeatherApp = () => {
  // https://api.weatherapi.com/v1/current.json?key=5818f42c68f1482599583226240501&q=pune

  const [search, setSearch] = useState(null);
  const [result, setResult] = useState("Mumbai");
  const [name, setName]     = useState('Mumbai');
 
  async function resultFunc() {
    try{
    const url = `https:api.weatherapi.com/v1/current.json?key=5818f42c68f1482599583226240501&q=${search}`;
    const respons = await fetch(url);
    const reJosn = await respons.json();
    console.log(reJosn.location.name);
    setResult(reJosn.current);
    setName(reJosn.location.name);
    setSearch("");}catch(err){
      setResult(false);
    }
  }

  return (
    <div>
      <div class="wrapper">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="container">
          <div class="search-container">
            <input
              type="text"
              placeholder="Enter a city name"
              id="city"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button id="search-btn" onClick={resultFunc}>
              Search
            </button>
          </div>
         {!result?(
          <h3>No Data Found</h3>
         ) :(<div id="result">
            <h2>{name}</h2>
            <div className="image">
              <img src={WeatherImg} alt="WheatherImage" />
            </div>
          
          <div>
              <h1>
                {result.temp_c}
                <sup>o</sup>Cel
              </h1>

              <div className="min-max">
                <span>
                  Wind Kph
                  <br />
                  {result.wind_kph}
                </span>
                <span>
                  Humidity
                  <br />
                  {result.humidity}
                </span>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
