import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'
import { MatDialog } from '@angular/material';
import { ReportDetailDialogComponent } from './../report-detail-dialog/report-detail-dialog.component'

@Component({
  selector: 'app-cl-report-list',
  templateUrl: './cl-report-list.component.html',
  styleUrls: ['./cl-report-list.component.scss']
})
export class ClReportListComponent implements OnInit {
  reportList = []
  constructor(private _EmployeeService:EmployeeService,public dialog: MatDialog) {
    _EmployeeService.getReports().subscribe((reports)=>{
      reports.data.forEach(report => {
        this.reportList.push(report)
      });
    })
  }

  getDetail(i): void {
    let dialogRef = this.dialog.open(ReportDetailDialogComponent, {
      width: '800px',
      data: this.reportList[i]
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  ngOnInit() {
  }

}
