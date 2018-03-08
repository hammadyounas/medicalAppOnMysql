import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailDialogComponent } from './emp-detail-dialog.component';

describe('EmpDetailDialogComponent', () => {
  let component: EmpDetailDialogComponent;
  let fixture: ComponentFixture<EmpDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
