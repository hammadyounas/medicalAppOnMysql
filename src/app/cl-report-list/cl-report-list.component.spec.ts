import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClReportListComponent } from './cl-report-list.component';

describe('ClReportListComponent', () => {
  let component: ClReportListComponent;
  let fixture: ComponentFixture<ClReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
