function attachEvents() {
  const locationInput = document.getElementById("location");
  const getBtn = document.getElementById("submit");
  const forecastField = document.getElementById("forecast");
  const divCurrent = document.getElementById("current");
  const divUpcoming = document.getElementById("upcoming");
  const BASE_URL = "http://localhost:3030/jsonstore/forecaster/locations/";
  const TODAY_URL = "http://localhost:3030/jsonstore/forecaster/today/";
  const UPCOMING_URL = "http://localhost:3030/jsonstore/forecaster/upcoming/";

  const weatherSymbols = {
    Sunny: "☀",
    "Partly sunny": "⛅",
    Overcast: "☁",
    Rain: "☔",
    Degrees: "°",
  };

  getBtn.addEventListener("click", locationHandler);

  function locationHandler() {
    fetch(BASE_URL)
      .then((response) => response.json())

      .then((locationInfo) => getWeatherData(locationInfo))
      .catch(() => {
        forecastField.style.display = "block";
        forecastField.textContent = "Error";
      });
  }

  function getWeatherData(locationInfo) {
    forecastField.style.display = "block";
    // debugger;
    for (data in locationInfo) {
      const { name, code } = locationInfo[data];

      if (name === locationInput.value) {
        locationCode = code;
      }
    }

    fetch(`${TODAY_URL}${locationCode}`)
      .then((response) => response.json())
      .then((todayInfo) => createTodaySkeleton(todayInfo))

      .then(getFutureWeatherData(locationCode))

      .catch(() => {
        forecastField.style.display = "block";
        forecastField.textContent = "Error";
      });
  }

  function createTodaySkeleton(todayInfo) {
    divCurrent.innerHTML = `
    <div class="label">Current conditions</div>
    <div class="forecast">
        <span class="condition symbol">${
          weatherSymbols[todayInfo.forecast.condition]
        }</span>
        <span class="condition">
            <span class="forecast-data">${todayInfo.name}</span>
            <span class="forecast-data">${todayInfo.forecast.low}${
      weatherSymbols["Degrees"]
    }/${todayInfo.forecast.high}${weatherSymbols["Degrees"]}</span>
            <span class="forecast-data">${todayInfo.forecast.condition}</span>
        </span>
    </div>
    `;
  }

  function getFutureWeatherData(locationCode) {
    fetch(`${UPCOMING_URL}${locationCode}`)
      .then((response) => response.json())
      .then((data) => createFutureSkeleton(data))
      .catch((error) => {
        forecastField.style.display = "block";
        forecastField.textContent = "Error";
      });
  }

  function createFutureSkeleton(data) {
    divUpcoming.innerHTML = `<div class="label">Three-day forecast</div>`;
    info = document.createElement("div");
    info.className = "forecast-info";
    Object.values(data.forecast).forEach((day) => {
      info.innerHTML += `
            <span class="upcoming">
                <span class="symbol">${weatherSymbols[day.condition]}</span>
                <span class="forecast-data">${day.low}${
        weatherSymbols["Degrees"]
      }/${day.high}${weatherSymbols["Degrees"]}</span>
                <span class="forecast-data">${day.condition}</span>
            </span>
            `;
    });
    divUpcoming.appendChild(info);
  }
}

attachEvents();
