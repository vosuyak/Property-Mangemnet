import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertycountComponent } from './propertycount.component';

describe('PropertycountComponent', () => {
  let component: PropertycountComponent;
  let fixture: ComponentFixture<PropertycountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertycountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertycountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
