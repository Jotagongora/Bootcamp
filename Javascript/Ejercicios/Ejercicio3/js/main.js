// Apartador 1

function Employee(cargo) {
    this.cargo = cargo;
    this.rendimiento = (Math.floor(Math.random() * 100)) / 100;
    this.salario = Math.floor(Math.random() * (4001 - 1250) + 1250);
};



const employees = [];


for (i = 0; i < 100; i++) {
     employees.push(new Employee);
     employees[i].cargo = `Empleado ${employees.length}`;
};

// Apartado 2

employees.sort(function (employee1, employee2) {

    return employee1.rendimiento - employee2.rendimiento;
});

console.log(employees);

// Apartado 3

employees.sort((employee1, employee2) => employee1.salario - employee2.salario);


// Apartado 4




