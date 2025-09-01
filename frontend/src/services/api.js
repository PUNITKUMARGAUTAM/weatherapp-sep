import React from "react";

import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:9000/api",
});

export const fetchWeather = (city) => API.get(`/weather/${city}`);