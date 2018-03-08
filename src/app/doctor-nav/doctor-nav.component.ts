import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "./../services/employee.service";
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-doctor-nav',
  templateUrl: './doctor-nav.component.html',
  styleUrls: ['./doctor-nav.component.scss']
})
export class DoctorNavComponent implements OnInit {

  constructor(private _Router: Router, private _EmployeeService:EmployeeService) { }

  ngOnInit() {
  }
  logout(){
    this._EmployeeService.logout();
    this._Router.navigate(['home']);
  }
}
