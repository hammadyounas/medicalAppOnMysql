import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorDashboardComponent } from './collector-dashboard.component';

describe('CollectorDashboardComponent', () => {
  let component: CollectorDashboardComponent;
  let fixture: ComponentFixture<CollectorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
