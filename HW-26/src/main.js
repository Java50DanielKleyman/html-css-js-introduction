import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
import { DataForm } from "./ui/data-form.js";
import { Table } from "./ui/table.js";
const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
const schema = [
    { columnName: 'Date', fieldName: 'date' },
    { columnName: 'Hour', fieldName: 'hour' },
    { columnName: "Temperature", fieldName: 'temperature' }
]

const dataForm = new DataForm("form-section", weatherConfig.maxDays);
const tableWeather = new Table("table-section", "Weather Forecast", schema);
async function handlerFun(data) {
    let inputData = {}
    inputData = await dataProcessor.getTemperatureData(data.city,
        data.dateFrom, data.dateTo, data.hourFrom, data.hourTo);    
     console.log(inputData)
     tableWeather.addRow(inputData);
     
}
dataForm.addHandler(handlerFun);

