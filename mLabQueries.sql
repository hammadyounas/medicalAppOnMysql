USE Lab;

CREATE TABLE Employees(
	id INT AUTO_INCREMENT, 
    name Varchar(30),
	email Varchar(30) UNIQUE,
	address Varchar(50),
	salary INT,
	dob Varchar(30),
	age Varchar(30),
	contact Varchar(30),
	gender Varchar(10),
	branchName Varchar(30),
	password  Varchar(30),
    post  Varchar(30),
    status INT,
    PRIMARY KEY(id)
);

SELECT * FROM Employees;

DROP TABLE Employees;
INSERT INTO Employees(name,email,address,salary,dob,age,contact,gender,branchName,password,post,status)
VALUES('name','email','address',10,'dob','age','contact','gender','branchName','password','post',1);

CREATE TABLE Qualification(
	id INT, FOREIGN KEY(id) REFERENCES Employees(id),
    degree Varchar(50),
    post Varchar(30)
);

INSERT INTO Qualification(id,degree,post) VALUES(1,'degree','doctor');
SELECT * FROM Qualification;

SELECT id FROM Employees WHERE email = 'doc@gmail.com';

SELECT * FROM Employees WHERE email = 'doc@gmail.com' AND password = '123456' AND post = 'doctor';


CREATE TABLE Reports(
	id INT AUTO_INCREMENT, PRIMARY KEY(id),
	pName VARCHAR(30),
    pEmail VARCHAR(30),
    pAddress VARCHAR(30),
    pDob VARCHAR(30),
    pAge VARCHAR(30),
    pContact VARCHAR(30),
    pGender VARCHAR(30),
    diseaseName VARCHAR(30),
    assignedDoctor VARCHAR(30), FOREIGN KEY(assignedDoctor) REFERENCES Employees(email),
    reciptDate VARCHAR(30),
    deliverDate VARCHAR(30),
    diagnosisDesc VARCHAR(1000),
    reportCode VARCHAR(10),
    amount INT,
    isDiagnosed BOOLEAN
);
SELECT * FROM Reports;
INSERT INTO Reports(pName,pEmail,pAddress,pDob,pAge,pContact,pGender,diseaseName,assignedDoctor,
			reciptDate,deliverDate,diagnosisDesc,reportCode,amount,isDiagnosed
	) VALUES(
			'name','email','PECHS','1997-01-21',21,'03432195645','male','dName','doc@gmail.com','rDate',
            'dDate','','0001',1000,false
    );
    
UPDATE Reports SET pName='Ali Khan', pAge=25 WHERE id = 7;

DROP TABLE Reports;