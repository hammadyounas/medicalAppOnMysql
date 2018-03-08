import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'
import { MatDialog } from '@angular/material';
import { ReportDetailDialogComponent } from './../report-detail-dialog/report-detail-dialog.component'

@Component({
  selector: 'app-admin-report-list',
  templateUrl: './admin-report-list.component.html',
  styleUrls: ['./admin-report-list.component.scss']
})
export class AdminReportListComponent implements OnInit {

  reportList = []
  constructor(private _EmployeeService:EmployeeService,public dialog: MatDialog) {
    _EmployeeService.getReports().subscribe((reports)=>{
      console.log(reports.data[0])
      reports.data.forEach(report => {
        this.reportList.push(report)
      });
    })
  }

  ngOnInit() {
  }

  getDetail(i): void {
    let dialogRef = this.dialog.open(ReportDetailDialogComponent, {
      width: '800px',
      data: this.reportList[i]
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

}
