import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCountComponent } from './property-count.component';

describe('PropertyCountComponent', () => {
  let component: PropertyCountComponent;
  let fixture: ComponentFixture<PropertyCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
