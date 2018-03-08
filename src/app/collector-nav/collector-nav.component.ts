import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from "./../services/employee.service";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-collector-nav',
  templateUrl: './collector-nav.component.html',
  styleUrls: ['./collector-nav.component.scss']
})
export class CollectorNavComponent implements OnInit {
  constructor(private _Router: Router, private _EmployeeService:EmployeeService) { }

  ngOnInit() {
  }

  logout(){
    this._EmployeeService.logout();
    this._Router.navigate(['home']);
  }

}
