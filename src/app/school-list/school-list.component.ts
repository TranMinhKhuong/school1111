import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { School } from '../School';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  selected: School;
  schools: School[];

  constructor(
    private schoolService: SchoolService
  ) {
    console.log('constructor')
   }

  ngOnInit():void {
    this.getSchools();
  }

  getSchools(){
    this.schoolService.getSchools().subscribe(data => {
     console.log(data);
     this.schools = data;
    });
  }

  removeItem(id){
    this.schools = this.schoolService.removeSchool(id);
  }
}