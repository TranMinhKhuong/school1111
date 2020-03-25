import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { School } from '../School';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {

   school: School;
  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) { }

  ngOnInit() {
    this.getSchool();
  }

  getSchool(){
    this.route.params.subscribe(param => {
        this.schoolService.getSchool(param.schoolID).subscribe(data => this.school = data);
    })
  }
}