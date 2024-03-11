import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '../service/workout.service';
import { WorkoutlistComponent } from '../workoutlist/workoutlist.component';

@Component({
  selector: 'app-workoutadd',
  templateUrl: './workoutadd.component.html',
  styleUrls: ['./workoutadd.component.scss']
})
export class WorkoutaddComponent {

  workoutform: FormGroup;

  // title = new FormControl;
  constructor(public fb: FormBuilder, private service: WorkoutService) {
    // super(test);
    this.workoutform = this.fb.group({
      title: ['', [Validators.required]],
      load: ['', [Validators.required]],
      reps: ['', [Validators.required]],
    });

  }

  addWorkOut() {
    this.service.insertWorkout(this.workoutform.value).subscribe((res: any) => {
      console.log("success");
      console.log(res);
      this.service.sendUpdate(res);
      this.workoutform.reset();
    })
  }

  // sendMessage(): void {
  //   // send message to subscribers via observable subject
  //   this.service.sendUpdate('Message from Sender Component to Receiver Component!');
  // }



}
