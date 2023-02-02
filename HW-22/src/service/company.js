import { employeeConfig } from "../config/employee-config.js";

export function createEmployee(name, birthYear, salary, city, country) {
    return { name, birthYear, salary, address: { city, country } }
}
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
