const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container'); // Container for the 3-day forecast
const units = 'imperial';
const apiKey = 'a9fc20b877b479b87781d3e44c1ca34e';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=34.51&lon=-109.36&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=34.51&lon=-109.36&units=${units}&appid=${apiKey}`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function display3DayForecast(data) {
    const forecastData = data.list;
    forecastContainer.innerHTML = '';

    const uniqueDays = {};

    forecastData.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });

        if (!uniqueDays[day]) {
            uniqueDays[day] = item;
        }
    });

    const next3DaysData = Object.values(uniqueDays).slice(0, 3);

    next3DaysData.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = `${item.main.temp}&deg;F`;
        const icon = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <p>${day}</p>
            <img src="${icon}" alt="${item.weather[0].description}">
            <p>${temp}</p>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}

async function apiFetchAndDisplay() {
    try {
        const currentWeatherData = await apiFetch(currentWeatherUrl);
        displayCurrentWeather(currentWeatherData);

        const forecastData = await apiFetch(forecastUrl);
        display3DayForecast(forecastData);
    } catch (error) {
        console.log(error);
    }
}

apiFetchAndDisplay();
