
window.addEventListener('DOMContentLoaded', (event) => {
    // Замените 'YOUR_API_KEY' на ваш собственный API-ключ OpenWeatherMap
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';

    // Замените 'CITY_NAME' на название города, для которого вы хотите получить прогноз погоды
    const city = 'kyiv';
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');
    weatherElement.innerHTML = `${city}`;
    // // Формируем URL для запроса к API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Отправляем GET-запрос к API
    fetch(url).then((response) => response.json()).then((data) => {

        weatherElement.innerHTML = `${city}`;
        const temperature = data.main.temp;
        const ct = data; // весь объект - результат
        const description = data.weather[0].description;
        const icn = data.weather[0].icon;

        const getTimeSunset = new Date(data.sys.sunset); // закат
        const fullTimeSunset = `${getTimeSunset.getHours()}:${getTimeSunset.getMinutes()}:${getTimeSunset.getSeconds()}`;

        const tempMin = data.main.temp_min;
        const tempMax = data.main.temp_max;
        const humidity = data.main.humidity;

        cit.innerText = data.name;
        document.getElementById("sunset").innerHTML = ` Закат: ${fullTimeSunset}`;

        iconw.src = `https://openweathermap.org/img/wn/${icn}.png`
        weatherElement.innerHTML = `Текущая температура: ${temperature}°C<br>Описание: ${description}`;
        document.getElementById("temp_min").innerHTML = `Минимальная температура: ${tempMin}°C<br>`;
        document.getElementById("temp_max").innerHTML = `Максимальная температура: ${tempMax}°C<br>`;
        document.getElementById("humidity").innerHTML = `Влажность: ${humidity}%<br>`;
    })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
});