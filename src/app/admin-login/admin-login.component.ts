import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http'
import { Router } from '@angular/router';
import { AdminService } from './../services/admin.service';

interface Admin {
  email: String,
  password: String
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  user: Admin = {
    email: "",
    password: ""
  };
  hide = true;
  constructor(public http: HttpService, private _route: Router, private service: AdminService) {
    if(localStorage.getItem("admin") == "authenticated"){
      this._route.navigate(['/admin-dashboard']);
    }
  }

  ngOnInit() {
  }

  login() {
    let adminId: any = this.user.email;
    let adminPass: any = this.user.password;
    let key = btoa(btoa(adminId) + '??' + btoa(adminPass));
    console.log(key);
    document.cookie = "adminSession=" + key + ';';
    if (adminId == "admin@gmail.com" && adminPass == "admin") {
      localStorage.setItem("admin", "authenticated");
      this._route.navigate(['/admin-dashboard']);
    }
  }

}
