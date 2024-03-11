import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutlistComponent } from './workoutlist.component';

describe('WorkoutlistComponent', () => {
  let component: WorkoutlistComponent;
  let fixture: ComponentFixture<WorkoutlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
