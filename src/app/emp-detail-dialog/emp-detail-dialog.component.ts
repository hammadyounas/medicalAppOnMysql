import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-emp-detail-dialog',
  templateUrl: './emp-detail-dialog.component.html',
  styleUrls: ['./emp-detail-dialog.component.scss']
})
export class EmpDetailDialogComponent implements OnInit {
  updateMode = false
  constructor(public _MatDialogRef: MatDialogRef<EmpDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _EmployeeService: EmployeeService) {
    }

  updateModeOn() {
    this.updateMode = true
  }

  block(){
    this.data.status = 0;
    this._EmployeeService.changeEmpStatus(this.data).subscribe((res)=>{
      if(res.code == 200){
        this._MatDialogRef.close();
      }
    })
  }

  unblock(){
    this.data.status = 1;
    this._EmployeeService.changeEmpStatus(this.data).subscribe((res)=>{
      if(res.code == 200){
        this._MatDialogRef.close();
      }
    })
  }

  updateEmp(){
    this._EmployeeService.updateEmp(this.data).subscribe((res)=>{
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
