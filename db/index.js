const connection = require('./connections')

class Db {
    constructor(connection) {
        this.connection = connection
    }

    viewAllDepartments() {
        return this.connection.promise().query(
            `
            SELECT 
                department.id,
                department.department
            FROM
                department            
            `
        )
    }

    viewAllRoles() {
        return this.connection.promise().query(
            `
            SELECT 
                role.id,
                role.title, 
                role.salary, 
                department.department AS department_name
            FROM 
                role
            LEFT JOIN 
                department 
            ON 
                department.id = role.department_id;
            `
        )
    }

    viewAllEmployees() {
        return this.connection.promise().query(
            `SELECT 
                employee.id, 
                employee.first_name, 
                employee.last_name, 
                role.title, 
                department.department AS department, 
                role.salary, 
                CONCAT(manager.first_name, ' ', manager.last_name) AS manager
            FROM 
                employee
            LEFT JOIN 
                role
            ON 
                employee.role_id = role.id
            LEFT JOIN 
                department
            ON 
                department.id = role.department_id
            LEFT JOIN 
                employee manager
            ON 
                manager.id = employee.manager_id
            `
        )
    }  

    addDepartment(department) {
        return this.connection.promise().query(
            `
            INSERT INTO 
                department
            SET
                ?
            `, department
        )
    }

    addRoles(role) {
        return this.connection.promise().query(
            `
            INSERT INTO
                role
            SET
                ?
            `, role
        )
    }

    addEmployee(employee) {
        return this.connection.promise().query(
            `
            INSERT INTO
                employee
            SET
                ?
            `, employee
        )

    }

    updateRole(employee_id, role_id) {
        return this.connection.promise().query(
            `
            UPDATE
                employee
            SET
                role_id = ?
            WHERE 
                id = ?  
            `, [role_id, employee_id]
        )
    }

    // updateManager(manager_id, employee_id){
        
    // }
}

module.exports = new Db(connection)