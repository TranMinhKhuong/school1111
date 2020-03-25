import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../school.service';
import { School } from '../School';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.css']
})
export class SchoolEditComponent implements OnInit {

  school: School;
  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSchool();
  }

  getSchool(){
    this.route.params.subscribe(param => {
        this.schoolService.getSchool(param.schoolID).subscribe(data => this.school = data);
    })
  }
  updateSchool(){
      this.schoolService.updateSchool(this.school).subscribe(data => {
        this.router.navigateByUrl("/school-list")
      });
  }

}