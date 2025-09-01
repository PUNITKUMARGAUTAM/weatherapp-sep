import react from "react";

function WeatherResult({ weather }) {

    if (!weather) return null;

    return (

        <div className="p-4 border mt-4">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p>Temp: {weather.main.temp}0C</p>
            <p> Weather: {weather.weather[0].description}</p>
            <p> Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    )
}

export default WeatherResult;