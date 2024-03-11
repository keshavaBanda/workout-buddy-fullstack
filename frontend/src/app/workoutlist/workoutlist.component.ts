import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkoutService } from '../service/workout.service';

@Component({
  selector: 'app-workoutlist',
  templateUrl: './workoutlist.component.html',
  styleUrls: ['./workoutlist.component.scss']
})
export class WorkoutlistComponent implements OnInit, OnDestroy {

  // isValid = false;

  workoutList: any = [];
  messageReceived: any;
  private subscriptionName: Subscription; //important to create a subscription

  constructor(private service: WorkoutService) {
    this.subscriptionName = this.service.getUpdate().subscribe(res => {
      this.workoutList.unshift(res);
    });
  }

  ngOnInit(): void {
    this.getWorkouts();
  }

  getWorkouts() {
    this.service.workouts().subscribe((data: any) => {
      this.workoutList = data;
    })
  }

  deleteWorkOut(id: string) {
    this.service.deleteWorkout(id).subscribe((res: any) => {
      console.log(res);
      this.getWorkouts()
    })
  }

  ngOnDestroy() { // It's a good practice to unsubscribe to ensure no memory leaks
    this.subscriptionName.unsubscribe();
  }

}
