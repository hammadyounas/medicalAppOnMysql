import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-collector-dashboard',
  templateUrl: './collector-dashboard.component.html',
  styleUrls: ['./collector-dashboard.component.scss']
})
export class CollectorDashboardComponent implements OnInit {

  constructor(private _Router:Router) {
    if (localStorage.getItem("collector") == 'undefined') {
      this._Router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

}
