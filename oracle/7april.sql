-- Creating the departments table
CREATE TABLE departments (
    department_id NUMBER PRIMARY KEY, -- Primary key constraint
    department_name VARCHAR2(100) NOT NULL, -- NOT NULL constraint
    location VARCHAR2(100)
);

-- Creating the employees table
CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY, -- Primary key constraint
    first_name VARCHAR2(50) NOT NULL, -- NOT NULL constraint
    last_name VARCHAR2(50) NOT NULL, -- NOT NULL constraint
    salary NUMBER CHECK (salary > 0), -- CHECK constraint
    department_id NUMBER,
    hire_date DATE DEFAULT SYSDATE, -- Default value for hire_date
    CONSTRAINT fk_department FOREIGN KEY (department_id) -- Foreign key constraint
        REFERENCES departments(department_id) 
        ON DELETE SET NULL -- Action when a department is deleted
);

-- Adding a UNIQUE constraint after the table creation
ALTER TABLE employees 
ADD CONSTRAINT unique_email UNIQUE (email); -- Unique constraint on email column (if you had one)

-- Example of creating a CHECK constraint to ensure salary is above a threshold
ALTER TABLE employees 
ADD CONSTRAINT salary_check CHECK (salary >= 2000);

-- Inserting data
INSERT INTO departments (department_id, department_name, location) 
VALUES (1, 'HR', 'New York');

INSERT INTO employees (employee_id, first_name, last_name, salary, department_id)
VALUES (101, 'John', 'Doe', 3000, 1);

-- Trying to insert an invalid salary (less than 0), which will violate the CHECK constraint
INSERT INTO employees (employee_id, first_name, last_name, salary, department_id)
VALUES (102, 'Jane', 'Smith', -100, 1); -- This will fail due to the CHECK constraint
