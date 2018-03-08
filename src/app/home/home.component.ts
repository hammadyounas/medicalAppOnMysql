import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'
import { ReportListComponent } from '../report-list/report-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  reportCode:Number;
  report = {};
  alert = false;
  constructor(private _EmployeeService:EmployeeService) { }

  ngOnInit() {
  }

  search(){
    this.report = {};
    this.alert = false;
    this._EmployeeService.getReport(this.reportCode).subscribe(res=>{
      if(res.data[0].isDiagnosed){ 
        this.report = res.data[0];
      }
      else{
        this.alert = true;
      }
    })
  }

}
