import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-report-detail-dialog',
  templateUrl: './report-detail-dialog.component.html',
  styleUrls: ['./report-detail-dialog.component.scss']
})
export class ReportDetailDialogComponent implements OnInit {
  updateMode = false
  minDate = new Date();
  constructor(public _MatDialogRef: MatDialogRef<ReportDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _EmployeeService:EmployeeService) {
      this.data.deliverDate = new Date(this.data.deliverDate)
    }


  updateModeOn() {
    this.updateMode = true
  }

  updateReport(){
    let date = this.data.deliverDate;
    let day = this.data.deliverDate.getDate();
    let month = this.data.deliverDate.getMonth() + 1;
    let year = this.data.deliverDate.getFullYear();
    let deliverDate = `${year}-${month}-${day}`
    this.data['deliverDate'] = deliverDate
    this._EmployeeService.updateReport(this.data).subscribe((res)=>{
      if(res.code == 200){
        this._MatDialogRef.close();
      }
    })
  }

  onCloseCancel() {
    this._MatDialogRef.close()
  }
  ngOnInit() {
  }

}
