import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service'

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  reports = [];
  diagnoseMode = false;
  diagnoseDesc = '';
  step = 0;
  dummyDesc = 'Lucy has become depressed and withdrawn since finding out that she has a brain tumour. In particular, she is very anxious about the possibility that the biopsy results will show that the tumour is cancerous. Although symptoms of depression and anxiety are not uncommon in patients threatened by a diagnosis of cancer, Lucy has a history of feeling melancholy and, significantly, developed postnatal depression following the birth of her son five years ago. Lucys response to her current illness needs to be understood in this context, as it will help to assess how well she will cope with the forthcoming diagnosis and future management of her illness.'
  constructor(private _EmployeeService:EmployeeService) {
    _EmployeeService.getReportsForDoctor().subscribe((res)=>{
      console.log(res.data)
      this.reports = res.data
    })
  }

  ngOnInit() {
  }

  diagnosedStart(){
    this.diagnoseMode = true;
  }

  diagnosedDone(i){
    this.reports[i].diagnosisDesc = this.diagnoseDesc;
    this.reports[i].isDiagnosed = true;
    this._EmployeeService.diagnosedReport(this.reports[i]).subscribe((res)=>{
    })
    this.diagnoseMode = false;
    this.diagnoseDesc = '';
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  writeDummyData(){
    this.diagnoseDesc = this.dummyDesc;
  }

}
