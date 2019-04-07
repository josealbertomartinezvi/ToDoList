import { Component, OnInit, HostBinding } from '@angular/core';
import { TasksService } from '../../services/tasks.service'
import { Task } from '../../models/Tasks'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  //@HostBinding('class') classes = 'row';

  tasks: any = [];
  search;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }  

  change(){
    alert();
  }

  getTasks(){
    this.tasksService.getTasks().subscribe(
      res => {
        this.tasks = res;
      },
      err => console.log(err)
    )
  }  

  searchTask(){
    console.log(this.search);
    if(this.search){
      this.tasksService.searchTasks(this.search).subscribe(
        res => {
          this.tasks = res;
        },
        err => console.log(err)
      )
    }else{
      this.getTasks();
    }

  }



  deleteTask(id: string){
    console.log(id);
    const option = confirm("do you want to continue?");
    if (option == true) {
      this.tasksService.deleteTask(id).subscribe(
        res => {
          this.getTasks();
        },
        err => console.log(err)      
      )
    }  

  }  

}
