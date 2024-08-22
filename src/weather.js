// weather.js

const getWeather = async function (location, WEATHER_API_KEY) {
  //   let location = locInput.value;
  const requestString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${WEATHER_API_KEY}`;

  try {
    const response = await fetch(requestString, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Could not fetch source");
    }
    const result = await response.json();
    console.log(result);

    const currentWeatherData = {
      Conditions: result.currentConditions.conditions,
      Temp: result.currentConditions.temp,
      Feelslike: result.currentConditions.feelslike,
      Humidity: result.currentConditions.humidity,
      Icon: result.currentConditions.icon,
      Precip: result.currentConditions.precip,
      PrecipProb: result.currentConditions.precipprob,
      PrecipType: result.currentConditions.preciptype,
      High: result.days[0].tempmax,
      Low: result.days[0].tempmin,
      Location: result.resolvedAddress,
    };

    const forecastData = result.days;
    console.log(forecastData);

    return {
      currentWeather: currentWeatherData,
      forecast: forecastData,
    };
  } catch (error) {
    console.error("Error:", error);
  }
};

export { getWeather };
