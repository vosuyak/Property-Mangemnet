import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSnippetsComponent } from './board-snippets.component';

describe('BoardSnippetsComponent', () => {
  let component: BoardSnippetsComponent;
  let fixture: ComponentFixture<BoardSnippetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardSnippetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
