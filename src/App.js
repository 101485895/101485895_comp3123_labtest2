import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const API_KEY = "ba5f0d1f39f5f6dfb568a685dafc8a32";

      city = city.trim();

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await response.json();
      console.log("API response:", data);

      if (data.cod === "404") {
        setError("City not found. Please try again.");
        setWeatherData(null);
        return;
      }

      setError(null);
      setWeatherData(data);

    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    fetchWeather("Toronto");
  }, []);

  return (
    <div className="app">
      <h1>Weather App</h1>

      <SearchBar onSearch={fetchWeather} />

      <p className="hint">Tip: For cities with duplicates, try with country code (e.g london,ca or london,gb)</p>

      {error && <p className="error-message">{error}</p>}

      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
