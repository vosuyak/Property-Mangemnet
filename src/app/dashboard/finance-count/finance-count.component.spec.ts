import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCountComponent } from './finance-count.component';

describe('FinanceCountComponent', () => {
  let component: FinanceCountComponent;
  let fixture: ComponentFixture<FinanceCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
