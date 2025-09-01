import React,{useState} from "react";
import { useActionData } from "react-router-dom";

function WeatherForm({onSearch}) {
    const [city , setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
    };

    return (

        <form onSubmit={handleSubmit} className="p-4">
            <input 
            type="text" placeholder="Enter City name" value={city} onChange={(e) => setCity(e.target.value)}
            className="border p-2 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Search </button>
        </form>
    )
}

export default WeatherForm;