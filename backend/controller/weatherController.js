const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "City not found or API error" });
  }
};

module.exports = { getWeather };
