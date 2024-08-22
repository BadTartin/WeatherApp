// `ui.js`: For DOM manipulation

export function createUI(elements) {
  return {
    displayTemperature(temp) {
      elements.tempContainer.textContent = `${temp}°F`;
    },
    displayIcon(icon) {
      console.log(icon);
      const iconPath = require(`./Icons/${icon}.svg`);
      elements.iconContainer.src = iconPath;
      this.updateBackgroundIcon(icon);
    },
    displayDescription(description) {
      elements.descriptionContainer.textContent = description;
    },
    displayHighTemperature(high) {
      elements.highContainer.textContent = `High: ${high}°F`;
    },
    displayLowTemperature(low) {
      elements.lowContainer.textContent = `Low: ${low}°F`;
    },
    displayPrecipProbability(precipProb) {
      elements.precipProbContainer.textContent = `Precip: ${precipProb}%`;
    },
    displayForecast(forecastData) {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      elements.forecastContainer.innerHTML = ""; // Clear existing forecast

      for (let i = 1; i < 8; i++) {
        const dayData = forecastData[i];
        const date = new Date(dayData.datetime);
        const dayOfWeek = daysOfWeek[date.getDay()];

        const dayElement = document.createElement("div");
        dayElement.classList.add("forecast-day"); // Consider adding some CSS for this class

        dayElement.innerHTML = `
            <h3>${dayOfWeek}</h3>
            <img src="./Icons/${dayData.icon}.svg" alt="${
          dayData.icon
        }" class="forecast-icon">
            <div class="temp">${Math.round(dayData.temp)}°F</div>
            <div class="range">↑${Math.round(
              dayData.tempmax
            )}°F | ↓${Math.round(dayData.tempmin)}°F</div>
            <div class="precip">💧${Math.round(dayData.precipprob)}%</div>
          `;

        elements.forecastContainer.appendChild(dayElement);

        // Trigger reflow to ensure animation plays for each element
        void dayElement.offsetWidth;

        // Set animation delay based on index
        dayElement.style.animationDelay = `${i * 0.1}s`;
      }
    },
    displayLoading() {
      console.log("loading");
    },
    displayError(message) {
      console.log(message);
    },
    displayLocation(location) {
      elements.locationDisplayContainer.textContent = location;
    },
    updateBackgroundIcon(icon) {
      const iconPath = require(`./Icons/${icon}.svg`);
      document.getElementById(
        "background-icon"
      ).style.backgroundImage = `url(${iconPath})`;
    },
  };
}
