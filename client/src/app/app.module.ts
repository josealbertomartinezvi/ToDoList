import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AssignTaskComponent } from './components/assign-task/assign-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PeopleFormComponent,
    TasksFormComponent,
    PeopleListComponent,
    TasksListComponent,
    AssignTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
