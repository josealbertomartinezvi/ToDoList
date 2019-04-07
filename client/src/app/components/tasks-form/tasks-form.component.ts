import { Component, OnInit, HostBinding } from '@angular/core';
import { Task } from '../../models/Tasks';
import { Router, ActivatedRoute } from '@angular/router';
// AtivedRoute ayuda a saber lo que se esta recibiendo como parametro
//traer el servicio para guardar los datos
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  task: Task = {
    id: 0,
    description: '',
    status_id: 0,
    created_at: new Date()

  }  

  edit: boolean = false;  
  status: any = [];
  params;
  statusValue;

  constructor(private tasksService: TasksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.activatedRoute.snapshot.params;

    if(this.params.id){
      this.tasksService.getTask(this.params.id)
        .subscribe(
          res => {
            this.task = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }    

    this.getStatus();
    
  }

  getStatus(){
    this.tasksService.geStatus().subscribe(
      res => {
        this.status = res;
      },
      err => console.log(err)
    )  
  } 
  
  public onChange(event): void {  // event will give you full breif of action
    this.statusValue = event.target.value;
  }    

 

  saveNewTask(){
    delete this.task.id;
    delete this.task.created_at;

    this.task.status_id = this.statusValue;

    this.tasksService.saveTask(this.task)
      .subscribe(
        res => {
          alert("New Task Saved");
          this.router.navigate(['/tasks']);
        },
        err => console.log(err)
      );
  }  

  updateTask(){
    delete this.task.created_at;

    if(this.statusValue != ''){
      this.task.status_id = this.statusValue;
    }

    this.tasksService.updateTask(this.task.id, this.task)
      .subscribe(
        res => {
          alert("Task Updated");
          this.router.navigate(['/tasks']);
        },
        err => console.log(err)
      ); 
   

  }

}
