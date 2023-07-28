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
  try {
    const [forecastData, currentData] = await Promise.all([
      getForecastData(location),
      getCurrentData(location),
    ]);
    // now construct an object with just the useful data to my app.
    console.log({ forecastData });
    const days = [];
    for (let i = 0; i < forecastData.forecast.forecastday.length; i++) {
      const obj = {};
      obj["temp_c"] = forecastData.forecast.forecastday[i].day.avgtemp_c;
      obj["temp_f"] = forecastData.forecast.forecastday[i].day.avgtemp_f;
      obj["condition"] =
        forecastData.forecast.forecastday[i].day.condition.text;
      obj["date"] = forecastData.forecast.forecastday[i].date;
      obj["is_day"] = forecastData.current.is_day;
      obj["icon"] = forecastData.forecast.forecastday[i].day.condition.icon;

      days.push(obj);
    }
    return days;
  } catch (err) {
    throw Error("Oops, failed to fetch");
  }
}
export { getLocationRelevant };
