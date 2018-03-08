import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  adminAuth;
  constructor() { }
  adminAuthentication() {
    let x = document.cookie.split(';');
    let i = 0;
    let cookeiValue;
    for ( ; x.length ; i++) {
      if (x[i].split('=')[0].trim() === 'adminSession'){
        cookeiValue = x[i].split('=')[1];
        break;
      }
    }
    if (cookeiValue === undefined) {
      return this.adminAuth = false;
    }else {
      let adminAuthentication = atob(cookeiValue).split('??');
      if (atob(adminAuthentication[0]) === 'admin@gmail.com' && atob(adminAuthentication[1]) === 'admin'){
        return this.adminAuth = true;
      }else {
        return this.adminAuth = false;
      }
    }
  }

  logout() {
    localStorage.setItem("admin", "");
    document.cookie = 'adminSession=' + '' + ';';
  }

}