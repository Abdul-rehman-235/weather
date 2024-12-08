// Your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const city = 'London'; // Replace with the city you want the weather for
const units = 'metric'; // For Celsius temperature, use 'imperial' for Fahrenheit

// Fetch weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
  .then(response => response.json())
  .then(data => {
    const weather = data.weather[0].description;
    const temperature = data.main.temp;
    const cityName = data.name;
    
    // Display the weather info
    document.getElementById('weather').innerHTML = `
      <h2>${cityName}</h2>
      <p>${weather}</p>
      <p>${temperature}°C</p>
    `;
  })
  .catch(error => {
    document.getElementById('weather').innerHTML = `
      <p>Sorry, we couldn't fetch the weather data.</p>
    `;
  });
