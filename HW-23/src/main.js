import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { Table } from "./ui/table.js";
import { Tabs } from "./ui/tabs.js";

const schema = [
    {columnName: 'Employee ID', fieldName: 'id'},
    {columnName: 'Name', fieldName: 'name'},
    {columnName: "Birth Year", fieldName: 'birthYear'},
    {columnName: "Salary (NIS)", fieldName: 'salary'},
    {columnName: "Country", fieldName: 'country'},
    {columnName: "City", fieldName: 'city'}
]
const company = new Company();
const employeeForm = new EmployeeForm("form-section");
const tableEmployees = new Table("table-section", "Employees", schema);

const buttonsArr = [
    {buttonName: "Add employee", buttonId: "add-employee", sectionId: "form-section"},
    {buttonName: "Show employees", buttonId: "show-employees", sectionId: "table-section"}
]
const buttons = new Tabs("buttons", "section-class", buttonsArr)


function addEmployee(employeeData) {
   
    const employee = createEmployee(employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
        const res = company.addEmployee(employee);
        if (!res.message) {
            employeeData.id = res.id;
            tableEmployees.addRow(employeeData);
        }
        return res.message
    
}
employeeForm.addFormHandler(addEmployee)

