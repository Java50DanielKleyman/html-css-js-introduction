import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { getRandomNumber } from "./utils/random.js";
//const MIN_ID = 100000000;
//const MAX_ID = 999999999;
const company = new Company();
const employeeForm = new EmployeeForm("form-section")
function addEmployee(employeeData) {
  //  const id = getRandomNumber(MIN_ID, MAX_ID);
    const employee = createEmployee(employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
    company.addEmployee(employee);
    console.log(employee)
}
employeeForm.addFormHandler(addEmployee)

// import { Company, createEmployee } from "./service/company.js";
// import { EmployeeForm } from "./ui/employee-form.js";
// import { getRandomNumber } from "./utils/random.js";
// const MIN_ID = 100000000;
// const MAX_ID = 999999999;
// const company = new Company();
// // company.addEmployee(createEmployee(123, "Vasya", 2000, 10000,
// //  "Lod", "Israel"));
// //  console.log(company.getEmployeesByAge(23))
// // const formElement = document.getElementById("employee-form");
// // const inputElements = document.querySelectorAll("#employee-form [name]"); // все эл-ты 
// //у которых есть атрибут нэйм и они детские эл-ты элемента с id #employee-form.
// const employeeForm = new EmployeeForm("form-section")
// function addEmployee(employeeData) {
//     const id = getRandomNumber(MIN_ID, MAX_ID);
//     const employee = createEmployee(id, employeeData.name, +employeeData.birthYear,
//         +employeeData.salary, employeeData.city, employeeData.country) // because only strings in html input
//     company.addEmployee(employee);
// }
