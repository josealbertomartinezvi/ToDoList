import { Component, OnInit, HostBinding } from '@angular/core';
import { People } from '../../models/People';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  person: People = {
    id: 0,
    name: '',
    last_name: '',
    created_at: new Date()

  }  

  edit: boolean = false;  

  constructor(private peopleService: PeopleService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if(params.id){
      this.peopleService.getPerson(params.id)
        .subscribe(
          res => {
            this.person = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }    
    
  }

  saveNewPerson(){
    delete this.person.id;
    delete this.person.created_at;

    this.peopleService.savePerson(this.person)
      .subscribe(
        res => {
          this.router.navigate(['/people']); 
        },
        err => console.log(err)
      );
  }  

  updatePerson(){
    delete this.person.created_at;

    this.peopleService.updatePerson(this.person.id, this.person)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/people']);
        },
        err => console.log(err)
      );       

  }

}
