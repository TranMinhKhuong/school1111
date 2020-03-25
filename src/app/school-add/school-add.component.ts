import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.css']
})
export class SchoolAddComponent implements OnInit {

  product: School = new School();
  constructor(
    private schoolService: SchoolService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }
  addSchool(){
    this.schoolService.addSchool(this.school).subscribe(data =>{
       this.router.navigateByUrl("/school-list")
    } );
  }

}