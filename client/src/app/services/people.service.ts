import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { People } from '../models/People';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // requests to the server

  getPeople(){
    return this.http.get(this.API_URI + '/people');
  }

  getPerson(id: string){
    return this.http.get(this.API_URI + '/people/' + id);
  }  

  savePerson(person: People){
    return this.http.post(this.API_URI + '/people', person);
  } 

  updatePerson(id: string|number, updatePerson: People){
    return this.http.put(this.API_URI + '/people/' + id, updatePerson);
    console.log(id);
    console.log(updatePerson);
  }
  
  deletePerson(id: string){
    return this.http.delete(this.API_URI + '/people/' + id);
    
  }  
}
