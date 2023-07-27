// api functions

async function getForecastData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=cce29fde263d4ad6a8514613232707&q=${location}&days=3&aqi=no&alerts=no`,
    { mode: "cors" }
  );
  const jsonData = await response.json();
  return jsonData;
}

async function getCurrentData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=cce29fde263d4ad6a8514613232707&q=${location}&aqi=no`,
    { mode: "cors" }
  );
  const jsonData = await response.json();
  return jsonData;
}

async function getLocationRelevant(location) {
  const [forecastData, currentData] = await Promise.all([
    getForecastData(location),
    getCurrentData(location),
  ]);
  console.log({ forecastData, currentData });
  // now construct an object with just the useful data to my app.
}

export { getLocationRelevant };
