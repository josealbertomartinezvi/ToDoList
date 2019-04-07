import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  
  // requests to the server

  getTasks(){
    return this.http.get(this.API_URI + '/tasks');
  }

  getTask(id: string){
    return this.http.get(this.API_URI + '/tasks/' + id);
  } 
  
  searchTasks(name: string){
    return this.http.get(this.API_URI + '/tasks/search/' + name);
  }

  geStatus(){
    return this.http.get(this.API_URI + '/tasks/status');
  }   

  saveTask(task: Task){
    return this.http.post(this.API_URI + '/tasks', task);
  } 

  updateTask(id: string|number, updateTask: Task){
    return this.http.put(this.API_URI + '/tasks/' + id, updateTask);
  }
  
  deleteTask(id: string){
    return this.http.delete(this.API_URI + '/tasks/' + id);
    
  }  

}
