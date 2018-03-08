import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctorList = []
  constructor(private _EmployeeService:EmployeeService) {
    _EmployeeService.getDoctors().subscribe((doctors)=>{
      doctors.data.forEach(doctor => {
        this.doctorList.push(doctor)
      });
    })
  }

  ngOnInit() {
  }

}
