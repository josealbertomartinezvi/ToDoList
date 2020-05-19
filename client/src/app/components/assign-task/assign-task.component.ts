import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../models/Tasks';
import { People } from '../../models/People';
import { AssignTask } from '../../models/AssignTask';

import { TasksService } from '../../services/tasks.service';
import { PeopleService } from '../../services/people.service'
import { AssignTaskService } from '../../services/assign-task.service'

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  task: any = [];
  people: any = [];
  assignments: any = [];
  params;

  assignTask: AssignTask = {
    tasks_id: 0,
    people_id: 0
  }    

  edit: boolean = false; 

  constructor(private assignTaskService: AssignTaskService, private peopleService: PeopleService, private tasksService: TasksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.activatedRoute.snapshot.params;
    this.assignTask.tasks_id = this.params.id;
    //propiedad que almacena los parametros enviados
    console.log(this.params);
    this.getTask(this.params);
    this.getAssignments(this.params);
    this.getPeople();   
  }

  public onChange(event): void {  
    const newVal = event.target.value;
    this.assignTask.people_id = newVal;
  }  

  getTask(params){
    this.tasksService.getTask(params.id)
    .subscribe(
      res => {
        this.task = res;
      },
      err => console.log(err)
    );    
  }

  getPeople(){
    this.assignTaskService.getDidntAssignPeople(this.params.id)
    .subscribe(
      res => {
        this.people = res;         
      },
      err => console.log(err)
    );                  
  }

  getAssignments(params){
    this.assignments = [];
    this.assignTaskService.getAssignments(params.id)
    .subscribe(
      res => {
        this.assignments = res;
      },
      err => console.log(err)
    );  
  }    

  saveAssignment(){
      console.log(this.assignTask);
    if(this.assignTask.people_id != 0){
      this.assignTaskService.saveAssignment(this.assignTask)
        .subscribe(
          res => {
            this.getAssignments(this.params);
            this.getPeople();
          },
          err => console.log(err)
        );
    }else{
      alert('choose person');
    }  

  }  

  deletePerson(id: string){
    this.assignTaskService.deleteAssignment(this.params.id, id).subscribe(
      res => {
        alert(res);
        this.getAssignments(this.params);
        this.getPeople();
      },
      err => console.log(err)      
    )

  }  

}
