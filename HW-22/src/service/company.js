import { employeeConfig } from "../config/employee-config.js";

export function createEmployee(name, birthYear, salary, city, country) {
    return { name, birthYear, salary, address: { city, country } }
}
// const employees = [
//     createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
//     createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
//     createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
//     createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
//     createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
//     createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
//     createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
//     createEmployee(130, "Victor", 2003, 10000, "Rehovot", "Israel")
// ] 
export class Company {
    #employees;
    constructor() {
        this.#employees = {}
    }
    addEmployee(empl) {
        empl.id = employeeConfig.minId + Math.trunc(Math.random() * (employeeConfig.maxId - employeeConfig.minId))
        let res = 'error: there is such employee in the company';
        if (this.#employees[empl.id]) {
            return res;
        }
        else {
            this.#employees[empl.id] = empl;
            res = this.checkEmployee(empl);
        }

        return res;
    }
    checkEmployee(empl) {
        let res = '';
        if (empl.salary < employeeConfig.minSalary || empl.salary > employeeConfig.maxSalary) {
            res = 'Salary greater/less then max/min salary.'
        }
        if (empl.birthYear > employeeConfig.maxYear || empl.birthYear < employeeConfig.minYear) {
            res = res + ' Birth year above/under maximum/minimum birth year.'
        }
        return res;
    }
    removeEmployee(id) {
        let res = false;
        if (this.#employees[id]) {
            res = true;
            delete this.#employees[id]
        }
        return res;
    }
    getEmployeesCountry(country) {
        return Object.values(this.#employees).filter(empl => empl.address.country === country);
    }
    getEmployeesByAge(age) {
        let currentYear = new Date().getFullYear();
        return Object.values(this.#employees).filter(empl => currentYear - empl.birthYear === age)
    }
    getEmployeesBySalaries(SalaryFrom, SalaryTo) {
        if (SalaryTo < 0) {
            SalaryTo = Number.MAX_VALUE;
        }
        return Object.values(this.#employees)
            .filter(empl => empl.salary >= SalaryFrom && empl.salary <= SalaryTo)
    }
}
