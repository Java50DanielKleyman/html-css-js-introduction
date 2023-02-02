import { employeeConfig } from "../config/employee-config.js";

export class EmployeeForm {
    #formElement;
    #citiesElement;
    #countriesElement;
    #inputElements;    
    constructor(idParentForm) {
        const parentFormElement = document.getElementById(idParentForm);
        if (!parentFormElement) {
            throw `wrong parent id ${idParentForm}`;
        }
        parentFormElement.innerHTML = `
        <form id="employee-form">
            <input required name="name" id="employeeName" placeholder="enter employee name" class="form-input">
            <input required name="birthYear" id="birthYear" type="number" placeholder="enter birthYear" class="form-input">
            <input required name="salary" id="salary" type="number" placeholder="enter salary" class="form-input">
            <div class="form-select-group">
                <label>Select Country</label>
                <select name="country" id="countries" class="form-select">
                    <option value="uuuu"></option>
                    
                </select>
            </div>
            <div class="form-select-group">
                <label>Select City</label>
                <select name="city" id="cities" class="form-select">
                    <option value="uuuu"></option>
                    
                </select>
            </div>
            <div class="form-buttons">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
        `
        this.#formElement = document.getElementById("employee-form");
        this.#countriesElement = document.getElementById("countries");
        this.#citiesElement = document.getElementById("cities");
        this.#inputElements = document.querySelectorAll("#employee-form [name]");
        //this.#employeeName = 
        this.setCountries();
        this.setCities();
        this.#countriesElement.addEventListener("change", () => this.setCities())

    }
    checkInput() {
        const letters = /^[A-Za-z]+$/;
        let EmplName = document.getElementById("employeeName");
        let birthYear = document.getElementById("birthYear");
        let salary = document.getElementById("salary");
        if(!EmplName.value.match(letters)){
            alert("WRONG NAME!!! USE ONLY LETTERS!")
            EmplName.value = ''
        }
        if (birthYear.value > employeeConfig.maxYear ||
            birthYear.value < employeeConfig.minYear) {
            alert(`BIRTHYEAR must be greater then ${employeeConfig.minYear} nis 
            and less then ${employeeConfig.maxYear} nis`)
            birthYear.value = '';
        }
        if (salary.value > employeeConfig.maxSalary ||
            salary.value < employeeConfig.minSalary) {
            alert(`Salary must be greater then ${employeeConfig.minSalary} 
            and less then ${employeeConfig.maxSalary}`)
            salary.value = '';
        }
    }
    setCountries() {
        this.#countriesElement.innerHTML = Object.keys(employeeConfig.countries)
            .map(country => `<option value="${country}">${country}</option>`)
    }
    setCities() {
        this.#citiesElement.innerHTML = employeeConfig.countries[this.#countriesElement.value]
            .map(city => `<option value="${city}">${city}</option>`)
    }
    addFormHandler(handlerFun) {
        this.#formElement.addEventListener('submit', (event) => {
            event.preventDefault(); //canceling default handler of "submit"
            this.checkInput();
            const employeeData = Array.from(this.#inputElements)
                .reduce((res, inputElement) => {
                    res[inputElement.name] = inputElement.value;
                    return res;
                }, {});
            handlerFun(employeeData);            
        })
    }
}