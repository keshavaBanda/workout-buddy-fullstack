import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutlistComponent } from './workoutlist/workoutlist.component';
import { WorkoutaddComponent } from './workoutadd/workoutadd.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormValidationModule } from 'src/app/shared/form-validation/form-validation.module';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutlistComponent,
    WorkoutaddComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // FormValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
