import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";

const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
async function displayTemperatures(city) {
    const data = await dataProcessor.getTemperatureData(city, "2023-02-10", "2023-03-15", -10, 25);
    console.log(data);
}

displayTemperatures('Eilat');
