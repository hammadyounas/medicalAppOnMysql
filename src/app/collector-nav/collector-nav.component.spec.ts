import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorNavComponent } from './collector-nav.component';

describe('CollectorNavComponent', () => {
  let component: CollectorNavComponent;
  let fixture: ComponentFixture<CollectorNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
