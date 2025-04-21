CREATE TABLE Students 
(
    Student_ID      NUMBER PRIMARY KEY,
    First_Name      VARCHAR2(30) NOT NULL,
    Last_Name       VARCHAR2(30),
    Email           VARCHAR2(50) UNIQUE,
    DOB             DATE,
    Phone_Number    VARCHAR2(10),
    Department_ID   NUMBER,
    CONSTRAINT chk_phone_number CHECK (REGEXP_LIKE(Phone_Number, '^\d{10}$')),
    CONSTRAINT fk_department FOREIGN KEY (Department_ID) REFERENCES Departments(Department_ID)
);

CREATE TABLE Departments 
(
    Department_ID        NUMBER PRIMARY KEY,
    Department_Name      VARCHAR2(50) NOT NULL,
    Head_Of_Department   VARCHAR2(50)
);
INSERT INTO Departments (Department_ID, Department_Name, Head_Of_Department) VALUES (1, 'Computer Science', 'Dr.vijay sethupathi');
INSERT INTO Departments (Department_ID, Department_Name, Head_Of_Department) VALUES (2, 'Mechanical Engineering', 'Dr. Ramesh Goud');
INSERT INTO Departments (Department_ID, Department_Name, Head_Of_Department) VALUES (3, 'Electrical Engineering', 'Dr. Shreyes iyar');
INSERT INTO Departments (Department_ID, Department_Name, Head_Of_Department) VALUES (4, 'Civil Engineering', 'Dr. Uma Lakshmi');
INSERT INTO Departments (Department_ID, Department_Name, Head_Of_Department) VALUES (5, 'Electronics and Communication', 'Dr. Deepika');
