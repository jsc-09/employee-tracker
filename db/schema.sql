DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- CREATE DEPARTMENT TABLE
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30)
);

-- CREATE ROLE TABLE
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL (10, 2),
    department_id INT, -- same as id in dept table. department.id
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
);

-- CREATE EMPLOYEE TABLE
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, -- same as id in role table. role.id
    manager_id INT, -- set as null if id and manager is the same
   
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL,

    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);

SHOW TABLES; 




