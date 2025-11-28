function WeatherCard({ data }) {
  if (!data) return null;

  const city = data.name;
  const temp = data.main.temp;
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
      <h3>{temp}°C</h3>
      <p>{desc}</p>
    </div>
  );
}

export default WeatherCard;
