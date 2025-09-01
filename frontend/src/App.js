import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { fetchWeather } from "./services/api";
import WeatherForm from "./components/WeatherForm";
import WeatherResult from "./components/WeatherResult";

function App() {
  const [weather , setWeather] = useState(null);
  const handleSearch = async (city) => {
    try{
      const {data} = await fetchWeather(city);
      setWeather(data);
    }
    catch(error) {
      alert("City not found");
    }
  }
  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
     <h1 className="text-4xl font-bold text-white animate-bounce">
        🌍 Weather App By Punit !
      </h1>
    <WeatherForm onSearch={handleSearch} />
    <WeatherResult weather={weather} />
        

    </div>
  );
}

export default App;
