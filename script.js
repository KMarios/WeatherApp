let cityInput = document.getElementById('cityInput');
let weatherTemp = document.getElementById('weatherTemp');
let weatherLocation = document.getElementById('weatherLocation');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');

const apiKey = "c448aef72ce64b434e09efebe10746f3";

async function searchWeather() {
    const city = cityInput.value.trim();
    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        weatherTemp.textContent = `${data.main.temp}°C`;
        weatherLocation.textContent = data.name;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} km/h`;
    } catch (error) {
        console.error("Fetch error: " + error.message);
    }
}
