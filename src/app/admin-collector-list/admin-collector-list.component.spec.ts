import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectorListComponent } from './admin-collector-list.component';

describe('AdminCollectorListComponent', () => {
  let component: AdminCollectorListComponent;
  let fixture: ComponentFixture<AdminCollectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCollectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCollectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
