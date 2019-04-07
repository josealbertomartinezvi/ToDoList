import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components imported
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { AssignTaskComponent } from './components/assign-task/assign-task.component';

//routes of the client app
const routes: Routes = [
  {
    path: '', 
    redirectTo: '/tasks',
    pathMatch: 'full' 
  },  
  {
    path: 'tasks',
    component: TasksListComponent
  },  
  {
    path: 'tasks/add',
    component: TasksFormComponent
  },  
  {
    path: 'tasks/edit/:id',
    component: TasksFormComponent
  },  
  {
    path: 'people',
    component: PeopleListComponent
  },
  {
    path: 'people/add',
    component: PeopleFormComponent
  },  
  {
    path: 'people/edit/:id',
    component: PeopleFormComponent
  },
  {
    path: 'assign/task/:id',
    component: AssignTaskComponent
  }         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
