function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Rehovot", "Israel")
]
class Company {
    #employees;
    constructor() {
        this.#employees = {}
    }
    addEmployee(empl) {
        if (this.#employees[empl.id]) {
            return false
        }
        this.#employees[empl.id] = empl;
        return true;
    }
    removeEmployee(id) {
        if (!this.#employees[id]) {
            return false
        };
        delete this.#employees[id]
        return true;
    }
    getEmployeesCountry(country) {
        return Object.values(this.#employees).filter(empl => empl.address.country === country);
    }
    getEmployeesByAge(age) {
        let currentYear = new Date().getFullYear();
        return Object.values(this.#employees).filter(empl => currentYear - empl.birthYear === age)
    }
    getEmployeesBySalaries(SalaryFrom, SalaryTo) {
        return Object.values(this.#employees).filter(empl => {
            if (SalaryFrom < 0 && SalaryTo < 0) return empl.salary;
            else if (SalaryFrom < 0) return empl.salary <= SalaryTo;
            else if (SalaryTo <= 0) return empl.salary >= SalaryFrom;
            return empl.salary >= SalaryFrom && empl.salary <= SalaryTo
        })       
    }
}
const firm = new Company()
for (i = 0; i < 6; i++) {
    firm.addEmployee(employees[i])
}
console.log(firm.addEmployee(employees[3]));
//console.log(firm.removeEmployee(124));
console.log(firm.getEmployeesCountry("sfsfs"));
console.log(firm.getEmployeesByAge(23));
console.log(firm.getEmployeesBySalaries(0, 0))
