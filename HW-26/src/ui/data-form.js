import { weatherConfig } from "../config/weather-config.js";

const FORM_ID = "data-form-id";
const DATE_FROM_ID = "date-from-id";
const DATE_TO_ID = "date-to-id";
const CITY_ID = "city-select";
const HOUR_FROM_ID = "hour-from-select";
const HOUR_TO_ID = "hour-to-select";
const data = {};
export class DataForm {
    #formElement;
    #dateFromElement;
    #dateToElement;
    #cities;
    #citiesElement;
    #hourFromElement;
    #hourToElement;

    constructor(parentId, maxDays) {
        const parentElement = document.getElementById(parentId);
        this.#fillForm(parentElement);
        this.#formElement = document.getElementById(FORM_ID);
        this.#dateToElement = document.getElementById(DATE_TO_ID);
        this.#dateFromElement = document.getElementById(DATE_FROM_ID);
        this.#cities = weatherConfig.cities;
        this.#citiesElement = document.getElementById(CITY_ID);
        this.#hourFromElement = document.getElementById(HOUR_FROM_ID);
        this.#hourToElement = document.getElementById(HOUR_TO_ID);
        this.#setCities();
        this.#setHours();
        this.#setMinMaxDates(maxDays);
    }
    #fillForm(parentElement) {
        parentElement.innerHTML = `<form id="${FORM_ID}">
            <input type="date" name="DateFrom" id="${DATE_FROM_ID}" required">
            <input type="date" name="DateTo" id="${DATE_TO_ID}" required>
            <div class="form-select-group">
                <label>Select city</label>
                <select name="city" id="${CITY_ID}" class="form-select">
                    <option value="uuuu"></option>                    
                </select>
                <label>Hour from</label>
                <select name="HourFrom" id="${HOUR_FROM_ID}" class="form-select">
                    <option value="uuuu"></option>                    
                </select>
                <label>Hour to</label>
                <select name="HourTo" id="${HOUR_TO_ID}" class="form-select">
                    <option value="uuuu"></option>                    
                </select>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>`
    }
    #setCities() {
        this.#citiesElement.innerHTML = Object.keys(this.#cities).map((city) =>
            `<option value ="${city}">${city}</option>`)
    }
    #setHours() {
        let res = ""
        for (let i = 0; i < 24; i++) {
            if (i < 10) {
                res += `<option value ="0${i}.00">0${i}.00</option>`
            }
            else {
                res += `<option value ="${i}.00">${i}.00</option>`
            }
        }
        this.#hourToElement.innerHTML = this.#hourFromElement.innerHTML = res;
    }
    #setMinMaxDates(maxDays) {
        const current = new Date();
        const maxDayOfMonth = current.getDate() + maxDays;
        const maxDate = new Date();
        maxDate.setDate(maxDayOfMonth);
        const minDateStr = current.toISOString().split("T")[0];
        const maxDateStr = maxDate.toISOString().split("T")[0];
        this.#dateFromElement.min = minDateStr;
        this.#dateToElement.min = minDateStr;
        this.#dateFromElement.max = maxDateStr;
        this.#dateToElement.max = maxDateStr;
    }
    addHandler(handlerFun) {
        this.#formElement.addEventListener("submit", async (event) => {
            event.preventDefault();
            data.city = this.#citiesElement.value;
            data.dateFrom = this.#dateFromElement.value;
            data.dateTo = this.#dateToElement.value;
            data.hourFrom = this.#hourFromElement.value;
            data.hourTo = this.#hourToElement.value;
            this.checkDateAndTime()
            await handlerFun(data);
        })
        this.#formElement.addEventListener("reset", (event)=> document.
        getElementById("Weather Forecast").innerHTML='')
    }
    checkDateAndTime() {
        const startingDate = new Date(data.dateFrom);
        const endingDate = new Date(data.dateTo);
        if (startingDate > endingDate) {
            alert("Date TO less then Date FROM")
            this.#formElement.reset();
        }
        if (data.hourTo < data.hourFrom) {
            alert("Hour TO less then Hour FROM")
            this.#formElement.reset();
        }
    }
}