import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'
import { AdminService } from './../services/admin.service'
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material';
import { EmpDetailDialogComponent } from './../emp-detail-dialog/emp-detail-dialog.component'

@Component({
  selector: 'app-admin-dr-list',
  templateUrl: './admin-dr-list.component.html',
  styleUrls: ['./admin-dr-list.component.scss']
})
export class AdminDrListComponent implements OnInit {

  doctorList = []
  constructor(private _EmployeeService:EmployeeService, private _AdminService: AdminService, private _route:Router,public dialog: MatDialog) {
    if (localStorage.getItem("admin") == "") {
      this._route.navigate(['admin']);
    }
    _EmployeeService.getDoctors().subscribe((doctors)=>{
      doctors.data.forEach(doctor => {
        this.doctorList.push(doctor)
      });
    })
  }

  getDetail(i): void {
    let dialogRef = this.dialog.open(EmpDetailDialogComponent, {
      width: '800px',
      data: this.doctorList[i]
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  ngOnInit() {
  }

}
