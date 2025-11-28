import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const API_KEY = "ba5f0d1f39f5f6dfb568a685dafc8a32";

      city = city.trim();

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await response.json();
      console.log("API response:", data);

      if (data.cod === 404) {
        alert("City not found!");
        return;
      }

      setWeatherData(data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      <SearchBar onSearch={fetchWeather} />

      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
