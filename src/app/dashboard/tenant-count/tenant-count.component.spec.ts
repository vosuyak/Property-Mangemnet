import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantCountComponent } from './tenant-count.component';

describe('TenantCountComponent', () => {
  let component: TenantCountComponent;
  let fixture: ComponentFixture<TenantCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
