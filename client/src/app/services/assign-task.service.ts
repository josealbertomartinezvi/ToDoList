import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AssignTask } from '../models/AssignTask';

@Injectable({
  providedIn: 'root'
})
export class AssignTaskService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // requests to the server  

  getDidntAssignPeople(id: string){
    return this.http.get(this.API_URI + '/assignments/anyOne/' + id);
  }  

  getAssignments(id: string){
    return this.http.get(this.API_URI + '/assignments/' + id);
  }  

  saveAssignment(assignment: AssignTask){
    return this.http.post(this.API_URI + '/assignments', assignment);
  } 
  
  deleteAssignment(task_id: string, person_id: string){
    return this.http.delete(this.API_URI + '/assignments/' + task_id +'/'+person_id);
  }  

}
