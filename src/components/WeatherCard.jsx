function WeatherCard({ data }) {
  if (!data?.main || !data?.weather) return null;

  const city = data.name;
  const country = data.sys.country;
  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;
  const humidity = data.main.humidity;
  const tempMin = data.main.temp_min;
  const tempMax = data.main.temp_max;
  const desc = data.weather[0].description;
  const formattedDesc = desc
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const icon = data.weather[0].icon;

  return (
    <div className="weather-card">
      <h2>{city}, {country}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />

      <h3>{temp}°C</h3>
      <p>{formattedDesc}</p>

      <div className="details">
        <p><strong>Feels Like:</strong> {feelsLike}°C</p>
        <p><strong>Humidity:</strong> {humidity}%</p>
        <p><strong>Min Temp:</strong> {tempMin}°C</p>
        <p><strong>Max Temp:</strong> {tempMax}°C</p>
      </div>
    </div>
  );
}

export default WeatherCard;
