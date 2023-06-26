USE resource_db

INSERT INTO department(name)
VALUES ('Sales'), ('Engineering'), ('Marketing'), ('Finance');

INSERT INTO role(title, salary, department_id)
VALUES 
    ('Sales Manager', 60000, 1),
    ('Account Executive', 40000, 1),
    ('Engineering Manager', 150000, 2),
    ('Software Engineer', 80000, 2),
    ('Head of Marketing', 100000, 3),
    ('Marketing Intern', 20000, 3),
    ('Director of Finance', 250000, 4),
    ('Accountant', 12000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
       ("Mike", "Chan", 2, 1),
       ("Ashley", "Rodriguez", 3, NULL),
       ("Kevin", "Tupik", 4, 3),
       ("Kunal", "Singh", 5, NULL),
       ("Malia", "Brown", 6, 5),
       ("Sarah", "Lourd", 7, NULL),
       ("Tom", "Allen", 8, 7);
 