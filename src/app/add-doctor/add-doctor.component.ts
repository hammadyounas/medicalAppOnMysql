import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmployeeService } from './../services/employee.service';
import { Router } from '@angular/router'
import { AdminService } from './../services/admin.service'

interface Employee {
  name: String,
  email: String,
  address: String,
  salary: String,
  qualification: any,
  dob: String,
  age: String,
  contact: String,
  gender: String,
  branchName: String
  password: String,
  post: String,
  status: Number
}

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  doctor: Employee = {
    name: '', email: '', address: '', salary: '', qualification: '', dob: '', age: '', contact: '', gender: '', branchName: '', password: '', post:'doctor', status: 1
  };

  dummyData = [
    { name: 'Mohsin Ghani', email: '', address: 'PECHS', salary: '10000', qualification: ['Master of Clinical Medicine (MCM)'], dob: '1997-01-21', age: '21', contact: '03432195645', gender: 'male', branchName: 'DHA', password: '123456', post:'doctor', status: 1}
  ];

  drDegrees = [
    'Master of Clinical Medicine (MCM)',
    'Master of Medical Science (MMSc, MMedSc)',
    'Master of Medicine (MM, MMed)',
    'Master of Philosophy (MPhil)',
    'Doctor of Clinical Medicine (DCM)',
    'Doctor of Clinical Surgery (DClinSurg)',
    'Doctor of Medical Science (DMSc, DMedSc)',
    'Doctor of Surgery (DS, DSurg)'
  ];

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }
  ];

  startDate = new Date(1990, 0, 1);

  branchNames = [
    { value: 'F.B-Area', viewValue: 'Shop No. 4 BS-10, Block 18, F.B Area, Karachi.' },
    { value: 'DHA', viewValue: 'DK-1, Off 34th Commercial Street, Main Khayaban-e-Bukhari, Phase VI, DHA, Karachi.' },
    { value: 'Jamshed-Town', viewValue: '884, New Town, Jamshed Road, Jamshed Town, Karachi.' }
  ];
  hide = true;
  collectorForm: FormGroup;
  emailAlert = false;
  constructor(private _Router:Router, private fb: FormBuilder, private _EmployeeService: EmployeeService, private _AdminService: AdminService) {
    if (localStorage.getItem("admin") == "") {
      this._Router.navigate(['admin']);
    }
    this.collectorForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'salary': [null, Validators.required],
      'qualification': [null, Validators.required],
      'gender': [null, Validators.required],
      'contact': [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(30)])],
      'address': [null, Validators.required],
      'dob': [null, Validators.required],
      'age': [null, Validators.required],
      'branchName': [null, Validators.required],
      'password': [null, Validators.required],
      'post': ['doctor'],
      'status': [1]
    });
  }

  addCollector(formValue) {
    this.emailAlert = false;
    this._EmployeeService.addEmployee(formValue).subscribe((res) => {
      if(res.status){
        this.collectorForm.reset()
        this._Router.navigate(['admin-dashboard/doctor-list'])
      }else if(res.failed.code == 'ER_DUP_ENTRY'){
        this.emailAlert = true;
      }
    })
  }
  ngOnInit() {
  }

  writeDummyData() {
    this.doctor = this.dummyData[0];
  }

}
