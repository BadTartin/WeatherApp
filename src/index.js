// index.js

import "./style.css";
import { WEATHER_API_KEY, GIPHY_API_KEY } from "./config.js";
import { getWeather } from "./weather.js";

import { createUI } from "./ui.js"; // Change this to a function that creates UI

document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    locationInput: document.querySelector("#location"),
    gifContainer: document.querySelector("#gif"),
    tempContainer: document.querySelector("#temp"),
    iconContainer: document.querySelector("#icon img"),
    highContainer: document.querySelector("#high"),
    lowContainer: document.querySelector("#low"),
    precipProbContainer: document.querySelector("#precip"),
    descriptionContainer: document.querySelector("#description"),
    forecastContainer: document.querySelector("#forecast"),
    locationDisplayContainer: document.querySelector("#location-display"),
  };

  const ui = createUI(elements); // Create UI with elements

  async function handleWeatherSearch(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const location = elements.locationInput.value;

      ui.displayLoading();
      try {
        const weatherData = await getWeather(location, WEATHER_API_KEY);
        ui.displayTemperature(weatherData.currentWeather.Temp);
        ui.displayIcon(weatherData.currentWeather.Icon);
        ui.displayLocation(weatherData.currentWeather.Location);
        ui.displayDescription(weatherData.currentWeather.Conditions);
        ui.displayHighTemperature(weatherData.currentWeather.High);
        ui.displayLowTemperature(weatherData.currentWeather.Low);
        ui.displayPrecipProbability(weatherData.currentWeather.PrecipProb);
        ui.displayForecast(weatherData.forecast);
      } catch (error) {
        ui.displayError("Unable to fetch weather data" + error);
      }
    }
  }

  // Initialize app
  elements.locationInput.addEventListener("keydown", handleWeatherSearch);

  async function weatherOnLoad() {
    ui.displayLoading();
    try {
      const weatherData = await getWeather("New York", WEATHER_API_KEY);
      ui.displayTemperature(weatherData.currentWeather.Temp);
      ui.displayIcon(weatherData.currentWeather.Icon);
      ui.displayLocation(weatherData.currentWeather.Location);
      ui.displayDescription(weatherData.currentWeather.Conditions);
      ui.displayHighTemperature(weatherData.currentWeather.High);
      ui.displayLowTemperature(weatherData.currentWeather.Low);
      ui.displayPrecipProbability(weatherData.currentWeather.PrecipProb);
      ui.displayForecast(weatherData.forecast);
    } catch (error) {
      ui.displayError("Unable to fetch weather data" + error);
    }
  }

  weatherOnLoad();
});
