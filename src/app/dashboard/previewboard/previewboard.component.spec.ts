import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewboardComponent } from './previewboard.component';

describe('PreviewboardComponent', () => {
  let component: PreviewboardComponent;
  let fixture: ComponentFixture<PreviewboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
