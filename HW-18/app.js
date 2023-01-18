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
function getEmployee(employees, id) {
    return employees.find(employees => employees.id === id);
}
console.log(getEmployee(employees, 128));

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    return employees.filter(employees => employees.salary >= salaryFrom 
    && employees.salary <= salaryTo)
}
console.log(getEmployeesBySalary(employees, 10000, 12000))

function getEmployeesByCity(employees, city) {
    return employees.filter(employees => employees.address.city === city)    
}
console.log(getEmployeesByCity(employees, "Rehovot"))

function getEmployeeNames(employees) {
    return employees.map(employees => employees.name)
}
console.log(getEmployeeNames(employees));

function sortEmployeesByAge(employees) {    
    return employees.sort((a, b) => b.birthYear - a.birthYear);
}
console.log(sortEmployeesByAge(employees))

function computeSalaryBudget(employees) {
    return employees.reduce((a, b) => a + b.salary, 0)
}
console.log(computeSalaryBudget(employees));