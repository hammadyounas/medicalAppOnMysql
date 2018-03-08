import { Component, OnInit } from '@angular/core';
import { AdminService } from './../services/admin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  constructor(private _route: Router, private service: AdminService) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
    this._route.navigate(['admin']);
  }

}
