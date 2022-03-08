use employees_db; 

INSERT INTO department
    (department)
VALUES
    ('Marketing'),
    ('Production'),
    ('Programming'),
    ('Development');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Marketing Director', 100000, 1),
    ('Marketing Assistant', 70000, 1),
    ('PR Assistant', 75000, 1),
    ('Production Manager', 80000, 2),
    ('Production Assistant', 50000, 2),
    ('Stage Manager', 55000, 2),
    ('Artistic Director', 110000, 3),
    ('Education Manager', 80000, 3),
    ('Development Director', 100000, 4),
    ('Development Assistant', 65000, 4),
    ('Grant Writer', 70000, 4);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('Meryl', 'Streep', 1, NULL),
    ('Emma', 'Stone', 2, 1),
    ('Jennifer', 'Lawrence', 3, 1),

    ('Natalie', 'Portman', 4, NULL),
    ('Emily', 'Blunt', 5, 4),
    ('Anne', 'Hathway', 6, 4),

    ('Reese', 'Witherspoon', 7, NULL),
    ('Nicole', 'Kidman', 8, 7),

    ('Kate', 'Winslet', 9, NULL),
    ('Jennifer', 'Aniston', 10, 9),
    ('Halle', 'Berry', 11, 9);