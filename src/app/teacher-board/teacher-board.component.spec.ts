import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBoardComponent } from './teacher-board.component';

describe('TeacherBoardComponent', () => {
  let component: TeacherBoardComponent;
  let fixture: ComponentFixture<TeacherBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
