-- Create departments table
CREATE TABLE departments (
    department_id NUMBER PRIMARY KEY,
    department_name VARCHAR2(50)
);

-- Create employees table
CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY,
    first_name VARCHAR2(50),
    department_id NUMBER,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
-- Insert into departments
INSERT INTO departments VALUES (10, 'HR');
INSERT INTO departments VALUES (20, 'IT');
INSERT INTO departments VALUES (30, 'Finance');

-- Insert into employees
INSERT INTO employees VALUES (101, 'Dhoni', 10);
INSERT INTO employees VALUES (102, 'Dube', 20);
INSERT INTO employees VALUES (103, 'jaddu', NULL);
COMMIT;
-- Join employees with departments
SELECT 
    e.employee_id, 
    e.first_name, 
    d.department_name
FROM 
    employees e
JOIN 
    departments d ON e.department_id = d.department_id;



