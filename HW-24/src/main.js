import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
const data = '';
const dataProcessor = new DataProcessor(weatherConfig.url);
async function displayTemperatures() {
    const data = await dataProcessor.getData(29.5577, 34.9519);
console.log(data.hourly.time[0]);
}
displayTemperatures();
//https://api.open-meteo.com/v1/gfs?hourly=temperature_2m&timezone=IST&latitude=32.7940&longitude=34.9896