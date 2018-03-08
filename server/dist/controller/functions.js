"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q_1 = require("q");
var mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'Lab',
    port: '3306'
});
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    }
    else {
        console.log("Error connecting database", err);
    }
});
class Functions {
    constructor() { }
    static login(req, res) {
        let user = req.body;
        connection.query(`SELECT * FROM Employees WHERE email = '${user.email}' AND password = '${user.password}' AND post = '${user.post}';`, function (error, results, fields) {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static getReport(req, res) {
        let code = req.params.code;
        // console.log(code)
        connection.query(`SELECT * FROM Reports where reportCode='${code}'`, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static getDoctors(req, res) {
        connection.query(`SELECT * FROM Employees WHERE post = 'doctor'`, function (error, results, fields) {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static getCollectors(req, res) {
        connection.query(`SELECT * FROM Employees WHERE post = 'collector'`, function (error, results, fields) {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static getReportsForDoctor(req, res) {
        let drEmail = req.params.drEmail;
        console.log(drEmail);
        connection.query(`SELECT * FROM Reports where assignedDoctor='${drEmail}'`, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static getReports(req, res) {
        connection.query(`SELECT * FROM Reports`, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static diagnosedReport(req, res) {
        let report = req.body;
        console.log('report', report.id);
        connection.query(`UPDATE Reports SET diagnosisDesc='${report.diagnosisDesc}', isDiagnosed=${report.isDiagnosed} WHERE id = ${report.id};`, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static updateReport(req, res) {
        let report = req.body;
        console.log('report', report.id);
        connection.query(`UPDATE Reports SET 
        pName='${report.pName}',
        pContact='${report.pContact}',
        pEmail='${report.pEmail}',
        diseaseName='${report.diseaseName}',
        deliverDate='${report.deliverDate}',
        amount='${report.amount}',
        reportCode='${report.reportCode}'
            WHERE id = ${report.id};`, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static updateEmp(req, res) {
        let emp = req.body;
        console.log('report', emp.id);
        connection.query(`UPDATE Employees SET 
        name='${emp.name}',
        contact='${emp.contact}',
        age='${emp.age}',
        salary='${emp.salary}'
            WHERE id = ${emp.id};`, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static changeEmpStatus(req, res) {
        let user = req.body;
        console.log('user id and status', user.id, user.status);
        connection.query(`UPDATE Employees SET status='${user.status}'
            WHERE id = ${user.id};`, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static addEmployee(req, res) {
        let employee = req.body;
        q_1.Promise((resolve, reject) => {
            connection.query(`INSERT INTO Employees(name,email,address,salary,dob,age,contact,gender,branchName,password,post,status)
            VALUES('${employee.name}','${employee.email}','${employee.address}',${employee.salary},'${employee.dob}','${employee.age}','${employee.contact}','${employee.gender}','${employee.branchName}','${employee.password}','${employee.post}', ${employee.status})`, (error, results, fields) => {
                if (error) {
                    res.send({ "code": 400, "failed": error });
                }
                else {
                    resolve({ status: true, data: results });
                }
            });
        }).then((success) => {
            q_1.Promise((res, rej) => {
                connection.query(`SELECT id FROM Employees WHERE email = '${employee.email}'`, (error, results, fields) => {
                    res(results[0].id);
                });
            }).then((id) => {
                employee.qualification.forEach((degree) => {
                    connection.query(`INSERT INTO Qualification(id,degree,post) VALUES(${id},'${degree}','${employee.post}')`, (error, results, fields) => {
                        if (error) {
                            res.send({ "code": 400, "failed": error });
                        }
                    });
                });
            });
            res.send(success);
        });
    }
    static addReport(req, res) {
        let report = req.body;
        connection.query(`
        INSERT INTO Reports(pName,pEmail,pAddress,pDob,pAge,pContact,pGender,diseaseName,assignedDoctor,reciptDate,deliverDate,diagnosisDesc,reportCode,amount,isDiagnosed)
        VALUES(
			'${report.name}','${report.email}','${report.address}','${report.dob}',${report.age},'${report.contact}','${report.gender}','${report.diseaseName}','${report.assignedDoctor}','${report.reciptDate}','${report.deliverDate}','${report.diagnosisDesc}','${report.code}',${report.amount},${report.isDiagnosed}
        );
        `, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                });
            }
            else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }
    static post(req, res) {
        console.log('req.body ', req.body);
        res.send({ status: true, data: 'post request' });
    }
    static put(req, res, next) {
        var id = req.params.id;
        res.send({ status: true, data: 'put request' });
    }
    static delete(req, res, next) {
        res.send({ status: true, data: 'delete request' });
    }
}
exports.Functions = Functions;
