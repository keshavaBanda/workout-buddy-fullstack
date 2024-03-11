import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private subjectName = new Subject<any>(); //need to create a subject

  sendUpdate(data:any) { //the component that wants to update something, calls this fn
    this.subjectName.next(data); //next() will feed the value in Subject
  }

  getUpdate(): Observable<any> { //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }

  constructor(private http: HttpClient) { }

  workouts() {
    return this.http.get(environment.APIEndpoint + 'workouts/');
  }

  insertWorkout(datatosend: any) {
    // this.subjectName.next({ text: message });
    return this.http.post(environment.APIEndpoint + 'workouts', datatosend)
  }

  deleteWorkout(id: string) {
    return this.http.delete(environment.APIEndpoint + 'workouts/' + id)
  }

}
