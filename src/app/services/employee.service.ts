import { Injectable } from '@angular/core';
import { HttpService } from './http'

interface Employee {
    name: String,
    email: String,
    address: String,
    salary: String,
    qualification: String,
    dob: String,
    age: String,
    contact: String,
    gender: String,
    branchName: String
    password: String,
    post: String,
    status: Number
}

interface User{
    email:String,
    password: String,
    post: String
  }

@Injectable()
export class EmployeeService {
    constructor(private _http: HttpService) { }

    addEmployee(data: Employee) {
        return this._http.post(data, 'addEmployee')
    }

    getDoctors(){
        return this._http.get('getDoctors','');
    }

    getCollectors(){
        return this._http.get('getCollectors','')
    }

    login(user: User) {
        return this._http.post(user, 'login')
    }

    getCurrentEmp(empType: String){
        if(empType == 'doctor'){
            return JSON.parse(localStorage.getItem('doctor')) || [];
        }
        else if(empType == 'collector'){
            return JSON.parse(localStorage.getItem('collector')) || [];
        }
    }

    logout(){
        localStorage.setItem('doctor',undefined);
        localStorage.setItem('collector',undefined)
        return true;
    }

    addReport(report){
        return this._http.post(report, 'addReport')
    }

    getReportsForDoctor(){
        let drEmail = JSON.parse(localStorage.getItem('doctor')).email || [];
        return this._http.get('getReportsForDoctor',drEmail)
    }

    getReports(){
        return this._http.get('getReports','')
    }

    diagnosedReport(report){
        return this._http.post(report,'diagnosedReport')
    }

    getReport(code){
        return this._http.get('getReport',code)
    }

    updateReport(report){
        return this._http.post(report,'updateReport')
    }

    updateEmp(user){
        return this._http.post(user,'updateEmp')
    }

    changeEmpStatus(user: Employee){
        return this._http.post(user,'changeEmpStatus')
    }
}