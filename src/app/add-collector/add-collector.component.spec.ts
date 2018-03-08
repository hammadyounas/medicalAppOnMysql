import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollectorComponent } from './add-collector.component';

describe('AddCollectorComponent', () => {
  let component: AddCollectorComponent;
  let fixture: ComponentFixture<AddCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
