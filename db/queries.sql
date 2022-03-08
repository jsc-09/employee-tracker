-- COMBINE ALL THREE TABLES ?

SELECT department.department AS department_name, role.title, role.salary, role.id
FROM role
LEFT JOIN department 
ON department.id = role.department_id;



-- SELECT role.title, role.salary, employee.first_name, employee.last_name, employee.id
-- FROM role
-- INNER JOIN employee
-- ON role.id = employee.role_id