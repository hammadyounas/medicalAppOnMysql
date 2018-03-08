import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDrListComponent } from './admin-dr-list.component';

describe('AdminDrListComponent', () => {
  let component: AdminDrListComponent;
  let fixture: ComponentFixture<AdminDrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
