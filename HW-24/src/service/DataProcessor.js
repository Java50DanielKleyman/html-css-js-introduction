export class DataProcessor {
    #url;
    #cities;
    constructor(url, cities) {
        this.#url = url;
        this.#cities = cities;
    }
    async getData(latitude, longitude) {
       const responseFromServer = await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
          // getting full url, fetch return promise
          return responseFromServer.json();
    }
    getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        
    }
}