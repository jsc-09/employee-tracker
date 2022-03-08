const inquirer = require('inquirer');
const { addRole } = require('./db');
const db = require('./db')

//Create Main Menu Table
async function mainMenu() {
    const { selection } = await inquirer.prompt([
        {
            type: `list`,
            name: `selection`,
            message: `what would you like to do`,
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add New Department',
                'Add New Role',
                'Add New Employee',
                'Update Employee Role'
            ]
        }
    ])
    switch (selection) {
        case 'View All Departments':
            return viewAllDepartments();
        case 'View All Roles':
            return viewAllRoles();
        case 'View All Employees':
            return viewAllEmployees();
        case 'Add New Department':
            return addDepartment();
        case 'Add New Role':
            return addRoles();
        case 'Add New Employee':
            return addEmployee();
        case 'Update Employee Role':
            return updateRole();
    }

}

//Create All Departments Table
async function viewAllDepartments() {
    const [departments] = await db.viewAllDepartments();
    console.table(departments);
    mainMenu()
};

//Create All Roles Table
async function viewAllRoles() {
    const [roles] = await db.viewAllRoles();
    console.table(roles);
    mainMenu()
}

//Creat all Employees table
async function viewAllEmployees() {
    const [employees] = await db.viewAllEmployees();
    console.table(employees);
    mainMenu()
}

//Add Department to db
async function addDepartment() {
    const department = await inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: `Name of new department`
        }
    ]);

    await db.addDepartment(department);

    mainMenu()
};

//Add Roles to db
async function addRoles() {
    const deptChoices = await db.viewAllDepartments();
   // console.log(deptChoices[0])
    const dept = deptChoices[0].map(({ id, department}) => ({
        value: id,
        name: `${department}`,
    }));

    const role = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: `Name of new role`
        },
        {
            type: 'input',
            name: 'salary',
            message: `What is the salary?`
        },
        {
            type: 'list',
            name: 'department_id',
            message: `What department is this role in?`,
            choices: dept
        }
    ])
    await db.addRoles(role);
    mainMenu()
};

//Add Employee to db
async function addEmployee() {
    const roleChoices = await db.viewAllRoles();

    const roles = roleChoices[0].map(({ id, title}) => ({
            value: id, 
            name: `${title}`, 
    }));

    const managerChoices = await db.viewAllEmployees();

    const managers = managerChoices[0].map(({ id, first_name, last_name}) => ({
            value: id, 
            name: `${first_name} ${last_name}`, 
    }));


    const employee = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: `Enter First Name`
        },
        {
            type: 'input',
            name: 'last_name',
            message: `Enter Last Name`
        },
        {
            type: 'list',
            name: 'role_id',
            message: `What is this person's role?`,
            choices: roles,
        },
        {
            type: 'list',
            name: 'manager_id',
            message: `Who is the supervisor`,
            choices: managers,
        },
    ]);
    await db.addEmployee(employee);
    mainMenu()
}

//update employee role
async function updateRole() {
    const [employeeChoices] = await db.viewAllEmployees();
    const employee = employeeChoices.map(({id, first_name, last_name}) => ({
            value: id,
            name: `${first_name} ${last_name}`, 
    }));

    const [roleChoices] = await db.viewAllRoles();

    const roles = roleChoices.map(({ id, title}) => ({
            value: id, 
            name: `${title}`, 
    }));

    const {role_id, employee_id} = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Select Employee to Update',
            choices: employee,
        },
        {
            type: 'list',
            name: 'role_id',
            message: `Select New Role`,
            choices: roles
        }
    ]);
    await db.updateRole(employee_id, role_id);
    mainMenu()
}

mainMenu()