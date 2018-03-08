import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service';
import { Router } from '@angular/router';


interface User {
  email: String,
  password: String,
  post: String
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: User = {
    email: "",
    password: "",
    post: ""
  };
  alert = false;
  message = '';
  constructor(private _EmployeeService: EmployeeService, private _Router: Router) {
    // if (localStorage.getItem("collector") !== "") {
    //   this._Router.navigate(['collector-dashboard']);
    // }
    // else if(localStorage.getItem("doctor") !== ""){
    //   this._Router.navigate(['doctor-dashboard']);
    // }
  }

  ngOnInit() {
  }

  login() {
    this._EmployeeService.login(this.user).subscribe((res) => {
      if (res.data[0]) {
        if (res.data[0].status == 0) {
          this.message = 'user is block by Admin';
          this.alert = true
        } else {
          if (res.data[0].post == 'doctor') {
            localStorage.setItem('doctor',JSON.stringify(res.data[0]))
            this._Router.navigate(['/doctor-dashboard']);
          } else if (res.data[0].post == 'collector') {
            localStorage.setItem('collector',JSON.stringify(res.data[0]))
            this._Router.navigate(['/collector-dashboard']);
          }
        }
      } else {
        this.message = 'user email or password is incorrect';
        this.alert = true
      }
    })
  }

}
