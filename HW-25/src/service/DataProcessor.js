
export class DataProcessor {
    #url;
    #cities;
    constructor(url, cities) {
        this.#url = url;
        this.#cities = cities;
    }
    async getData(latitude, longitude) {
        const responseFromServer = await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
        return responseFromServer.json();
    }
    async getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        // let latitude = this.#cities.city.latitude;
        //   let longitude = this.#cities.Haifa.longitude;
        let res = this.checkInputData(city, startDate, endDate, hourFrom, hourTo);
        if (res) {
            return res;
        }
        const data = await this.getData(this.#cities[city].latitude, this.#cities[city].longitude)
        const timeArray = data.hourly.time;
        const temperatureArray = data.hourly.temperature_2m;
        const startIndex = timeArray.indexOf(`${startDate}` + 'T' + `${hourFrom}` + ':00');
        const endIndex = timeArray.indexOf(`${endDate}` + 'T' + `${hourTo}` + ':00');
        const resultTimeArray = timeArray.slice(startIndex, endIndex + 1);
        const resultTemperatureArray = temperatureArray.slice(startIndex, endIndex + 1);

        let resultWeatherArray = [];
        resultWeatherArray = resultTimeArray.map((elm, i) => {
            return resultWeatherArray[i] = {
                date: elm.substring(0, 10),
                hour: +elm.substring(11, 13),
                temperature: resultTemperatureArray[i]
            }
        })
        return resultWeatherArray;
    }
    checkInputData(city, startDate, endDate, hourFrom, hourTo) {
        let res = '';
        if (!this.#cities[city]) {
            res = "Wrong city!!!"
        }
        const currentDate = new Date();
        const startingDate = new Date(startDate);
        const endingDate = new Date(endDate);
        const forecastDays = 16;
        const endingDateMax = new Date(new Date().getTime() + (forecastDays * 24 * 60 * 60 * 1000));
        if (startingDate < currentDate) {
            res = "Wrong Start Data, less than current date!!!"
        }
        if (endingDate > endingDateMax || endingDate < startingDate) {
            res += " Wrong End Date!!!"
        }
        if (hourFrom < 0 || hourFrom > 23) {
            res += " Wrong hour from!!!"
        }
        if (hourTo < 0 || hourTo > 23 || hourTo < hourFrom) {
            res += " Wrong hour to!!!"
        }
        return res;
    }
}