// // Apartador 1

// function Employee(cargo) {
//     this.cargo = cargo;
//     this.rendimiento = (Math.floor(Math.random() * 100)) / 100;
//     this.salario = Math.floor(Math.random() * (4001 - 1250) + 1250);
// };



// let employees = [];


// const newEmployees = function(employeesNumber, currentEmployees) { 

//     for (currentEmployees; currentEmployees < employeesNumber; currentEmployees++) {
//         employees.push(new Employee);
//         employees[currentEmployees].cargo = `Empleado ${employees.length}`;
//     }
// };

// newEmployees(100, 0);

// console.log(employees);

//Apartado 1 easy

let employees = [];

for (i = 1; i <= 100; i++) {
    employees.push({
        cargo: `Empleado ${i}`,
        rendimiento: (Math.floor(Math.random() * 100)) / 100,
        salario: Math.floor(Math.random() * (4001 - 1250) + 1250)
    });
}


// Apartado 2

employees.sort(function (employee1, employee2) {

    return employee1.rendimiento - employee2.rendimiento;
});

console.log(employees);

// Apartado 3

employees.sort((employee1, employee2) => employee1.salario - employee2.salario);


// Apartado 4

employees.sort((employee1, employee2) => employee2.cargo.slice(9) - employee1.cargo.slice(9));

//Apartado 5



let employeeHighSalary = [];

employeeHighSalary = employees.filter(employee => employee.salario > 2500);

employeeHighSalary.forEach(employee => console.log(` ${employee.cargo} and salary ${employee.salario} `));

//Apartado 6

let newSalary = employees.map(employee => {
    if (employee.salario < 1500) {
        employee.salario *= 1.25;
    }
    return employee;
});

console.log(employees);

console.log(newSalary);

//Apartado 7
const totalCost = employees.reduce((salarySum, employee) => {salarySum + employee.salario * 1.15}, 0);


//Apartado 8

employees = employees.filter(employees => employees.rendimiento >= 0.3);

console.log(employees);

const averageSalary = employees.reduce((salarySum, employee) => salarySum + employee.salario, 0) / employees.length;

console.log(`Calcular el sueldo medio de la empresa`, averageSalary.toFixed(2));

//Apartado 9

employees = employees.map(employee => {
    if (employee.rendimiento > 0.7) {
        employee.salario += 300;
    }
    return employee;
});

console.log(employees);