import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: any = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(
      res => {
        this.people = res;
      },
      err => console.log(err)
    )
  }  

  deletePerson(id: string){
    const option = confirm("do you want to continue?");
    if (option == true) {
      this.peopleService.deletePerson(id).subscribe(
        res => {
          this.getPeople();
        },
        err => console.log(err)      
      )    
    }
  }  

}
